# PomoTimer README

A Pomodoro timer extension for Visual Studio Code that helps you maintain productivity using the proven Pomodoro Technique.

## Features

- **Pomodoro Timer**: Built-in timer with visual countdown in the status bar
- **Configurable Work Sessions**: Set custom work session durations
- **Automatic Break Tracking**: Timer automatically transitions to break mode and tracks its length
- **Status Bar Integration**: Always visible timer status and quick controls
- **Notifications**: Get notified when work sessions and breaks begin

### Commands

- **`Pomodoro: Toggle Timer`** (`pomodoro.toggle`) - Starts or stops the timer. Also accessible by clicking the status bar item.
- **`Pomodoro: Set Timer`** (`pomodoro.setTime`) - Set a custom work session duration in minutes (expects a **integer number value** once input box opens).

### Status Bar Features

- Click the status bar item to start/stop the timer
- Visual indicators: 
  - 🍅 - Work session in progress
  - "Time for a break!" - Break period

## How to Use

1. **Start Timer**: Click the timer in the status bar or run `Pomodoro: Toggle Timer` from the Command Palette
 > If you want to set a cutstom time, run `Pomodoro: Set Timer` and enter your desired work session length in minutes
2. **Work Session**: Focus on your work
3. **Break Time**: When the work session ends, you will be notified to take a break via visual notification in the right bottom corner
4. **Stop/Reset**: Click the status bar item again to stop and reset the timer

## Requirements

No additional dependencies or requirements.

## Extension Settings

All configuration is done through commands

## Known Issues

- Timer state is not persisted between VS Code sessions
- No sound notifications (visual notifications only)

## Release Notes

### 1.0.0 (Initial release)

- Basic Pomodoro timer functionality
- Configurable work session durations
- Status bar item
- Work-to-break automatic transitions
