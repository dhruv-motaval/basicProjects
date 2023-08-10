@title KeepDisplayAwake
@echo off
setlocal enableextensions

POWERCFG /CHANGE /MONITOR-TIMEOUT-AC 10
"C:\Windows\System32\notepad.exe"
POWERCFG /CHANGE /MONITOR-TIMEOUT-AC 3

exit /b
