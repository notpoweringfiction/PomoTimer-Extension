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
When timer is working, status bar will show ``🍅 XX:YY``, where ``XX`` is minutes and ``YY`` is seconds left. When timer ends, it displays ``Time for a break!` for first 10 seconds, afterwards starts counting the break time. Once break time reaches 20 minutes, it resets the timer.

# Commits Logs

### Commit 9fab72e2a38a531483476b4131c8db47c2132a93 
(HEAD -> new_features_356089) <br>
Author: LamaDevGuy <86229883+LamaDevGuy@users.noreply.github.com> <br>
Date:   Fri Sep 19 14:10:39 2025 +0300
```
    Fixed perimeter calculation in 'rectangle.py' file.
```
    
### Commit 859fa1b88fc4afa29c0f9b884fbfd95f4f64cf3e
Author: LamaDevGuy <86229883+LamaDevGuy@users.noreply.github.com> <br>
Date:   Fri Sep 19 14:07:43 2025 +0300
```
    Added new 'rectangle.py' file.
```