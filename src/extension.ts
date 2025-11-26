import * as vscode from 'vscode';

let timer: NodeJS.Timeout | null = null;
let workTimeDuration: number = 25 * 60;
let timeLeft: number = workTimeDuration;
let isRunning: boolean = false;
let onBreak: boolean = false;
let statusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext): void {

    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
    statusBarItem.text = `Pom Timer ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`;
    statusBarItem.command = 'pomodoro.toggle';
    statusBarItem.show();

    const disposable = vscode.commands.registerCommand('pomodoro.toggle', () => {
        if (!isRunning) {
            startTimer();
        } else {
            stopTimer();
        }
    });

    const setTimeDisposable = vscode.commands.registerCommand('pomodoro.setTime', async () => {
        const input = await vscode.window.showInputBox({
            prompt: 'Enter work time in minutes',
            placeHolder: '25',
            value: '25',
            validateInput: (value: string) => {
                const num = Number(value);
                if (isNaN(num) || num <= 0) {
                    return 'Please enter a valid positive number';
                }
                return null;
            }
        });

        if (!input) return;

        const mins = Number(input);
        if (!isNaN(mins) && mins > 0) {
            stopTimer();
            workTimeDuration = mins * 60;
            timeLeft = workTimeDuration;
            statusBarItem.text = `🍅 ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2,'0')}`;
            vscode.window.showInformationMessage(`Pomodoro timer set to ${mins} minutes`);
        }

    });

    context.subscriptions.push(disposable, setTimeDisposable);
}

function startTimer(): void {
    vscode.window.showInformationMessage(`Pomodoro timer set to ${Math.floor(timeLeft / 60)} minutes started!`);
    isRunning = true;
    timeLeft = workTimeDuration;
    
    timer = setInterval(() => {
        if (!onBreak)
            timeLeft--;
        
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;

        if (!onBreak)
            statusBarItem.text = `🍅 ${mins}:${secs.toString().padStart(2, '0')}`;
        
        if (!onBreak && timeLeft <= 0) {
            vscode.window.showInformationMessage(
                'Pomodoro timer finished! Take a 5 minute break.', 
                { modal: true }, 
                'OK'
            );
            statusBarItem.text = "Time for a break!";
            onBreak = true;
        }

        if (onBreak){
            timeLeft++;
            if (timeLeft > 10)
                statusBarItem.text = `On break for ${mins}:${secs.toString().padStart(2,'0')}`;

            if (timeLeft >= 20 * 60){
                stopTimer();
                vscode.window.showInformationMessage(`Reset timer due to 20 minute inactivity`);
            }
        }
    }, 1000);
}

function stopTimer(): void {
    vscode.window.showInformationMessage(`Pomodoro timer reset`);
    isRunning = false;
    onBreak = false;
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    statusBarItem.text = `🍅 ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2,'0')}`;
}

export function deactivate(): void {
    if (timer) {
        clearInterval(timer);
    }
}