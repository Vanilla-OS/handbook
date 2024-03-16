---
Title: Setting up VSO as the default shell in VSCode (Flatpak)
Description: Learn how to set up VSO as the default shell in Visual Studio Code
PublicationDate: 2024-03-16
Authors:
    - GabsEdits
---

> This guide is for Orchid, not Kinetic.

## Use host shell in the integrated terminal

- Open VSCode and go to **File > Preferences > Settings** (or **Code > Preferences > Settings** on macOS).
- Search for "**Integrated Terminal**" or "**Terminal**" in the settings search bar.
- Click on "**Open settings.json**" to directly edit the settings file.

In the `settings.json` file, ensure you have the following configuration:

```json
{
  "terminal.integrated.defaultProfile.linux": "bash",
  "terminal.integrated.profiles.linux": {
    "bash": {
      "path": "/app/bin/host-spawn",
      "args": ["bash"],
      "icon": "terminal-bash",
      "overrideName": true
    }
  }
}
```

## Create a Task Definition

The next set is to create a Task that opens VSO Shell on the startup of Visual Studio Code.

- Open the Command Palette (`Ctrl`+`Shift`+`P`).
- Search for "Tasks: Open User Tasks" and select it.

This opens the tasks.json file. Clear up the file, and paste the following content:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Run vso shell on startup",
      "type": "shell",
      "command": "vso shell",
      "windows": {
        "command": "vso shell"
      },
      "presentation": {
        "reveal": "always",
        "panel": "new"
      },
      "runOptions": { "runOn": "folderOpen" }
    }
  ]
}
```
