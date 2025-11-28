__**Table of contents:**__
1. [Description](#description)
2. [Architecture](#architecture)
    * [Commands](#commands)
        * [Toggle Pomodoro Timer](#toggle-pomodoro-timer)
        * [Set Pomodoro Timer](#set-pomodoro-timer)
    * [Status Bar](#status-bar)
4. [Commits Logs](#commits-logs)\
<br>
# Description
This extension implements a Pomodoro timer directly into Visual Studio Code. Works via ``Command Bar`` and ``Status Bar`` item. For more detailed description of each command bar, check the [**Commands**](#commands) section, for status bar, check [**Status Bar**](#status-bar).

# Architecture #
## Commands
- ### Toggle Pomodoro Timer
    Upon activation via either ``Command Bar`` or ``Status Bar button``.

- ### Set Pomodoro Timer
    Upon activation ``via Command Bar``, opens up an input bar and expects an ``integer``.

## Status Bar
When timer is working, status bar will show ``🍅 XX:YY``, where ``XX`` is minutes and ``YY`` is seconds left. When timer ends, it displays ``Time for a break!`` for first 10 seconds, afterwards starts counting the break time. Once break time reaches 20 minutes, it resets the timer.

# Commits Logs

### commit 53ad2d03b71d79cf069af264fad53069dc2fcfdc (HEAD -> master, origin/master, origin/HEAD)
Merge: f5dfb04 af4efcd <br>
Author: LamaDevGuy <86229883+LamaDevGuy@users.noreply.github.com> <br>
Date:   Fri Nov 28 13:59:32 2025 +0300 <br>
```
    Merge branch 'master' of github.com:notpoweringfiction/PomoTimer-Extension
```
### commit f5dfb04fc952c19cddeda70073023c8d18230680
Author: LamaDevGuy <86229883+LamaDevGuy@users.noreply.github.com> <br>
Date:   Fri Nov 28 13:58:30 2025 +0300 <br>
```
    Added documentation to docs/README.md
```
### commit af4efcdcd8feee59591212c2ddace6f78f92e8d4
Author: NotOptimisedFiction <86229883+notpoweringfiction@users.noreply.github.co
m> <br>
Date:   Wed Nov 26 20:57:40 2025 +0300 <br>
```
    Updated README.md, added credentials
```
### commit 451f83502c4b1349798dc5a1b332154243ac0cf1
Author: LamaDevGuy <86229883+LamaDevGuy@users.noreply.github.com> <br>
Date:   Wed Nov 26 20:52:19 2025 +0300 <br>
```
    Initial commit
```