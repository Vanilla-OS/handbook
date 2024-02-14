---
title: Install VSCode
description: Learn how to install VSCode on Vanilla OS.
date: 2023-06-08
layout: article
authors: 
    - aWildJumpyGame
published: true
---

## What is VSCode
[**VSCode**](https://code.visualstudio.com/) is a powerful and customizable electron-built IDE for Windows/Mac/Linux and web mainly used for web development.

## Which VSCode should I get?
You can use either VSCode (proprietary by Microsoft) or Code-OSS (Open-Source version). This handbook should work for both. Still don't which one to get? Follow this [**link**](https://github.com/microsoft/vscode/wiki/Differences-between-the-repository-and-Visual-Studio-Code) to learn more!

## Installing with a native package with apx
Installing VSCode with [**apx**](https://documentation.vanillaos.org/docs/apx/) in a container is really easy and will work well, but the recommanded option is with [**Flatpak**](#installing-via-flatpak).
If you wish to install it in the AUR container:
```bash
 apx install --aur visual-studio-code-bin
 ```
All command ran in the VSCode terminal will obviously run in the AUR container and not on the system.
## Installing via Flatpak
You can search for "vscode" in gnome-software or install it from the command line: 
```bash
flatpak install com.visualstudio.code
```

## Runing commands outside of flatpak
By default, you will not be able to run installed CLI utlilities in the VSCode terminal. To make VSCode use the vanillaOS terminal make these changes to settings.json (CTRL+SHIFT+P -> Open User Settings (JSON)).
Launch user shell instead of flatpak sh:
```config
"terminal.integrated.defaultProfile.linux": "Vanilla",
        "terminal.integrated.profiles.linux": {
          "vanilla": {
            "path": "/usr/bin/flatpak-spawn",
            "args": ["--host", "--env=TERM=xterm-256color", "bash"],
          },
```
This will launch bash and allow using app install directly installed on vanillaOS and from container with "apx run" or if they are exported.

## Developement container profiles in VSCode
You might want to do all your development in one specific container so you don't have to export all you utilities and for them to be all in the same place (in this exemple the aur container):
```config
"terminal.integrated.defaultProfile.linux": "Dev",
        "terminal.integrated.profiles.linux": {
          "Dev": {
            "path": "/usr/bin/flatpak-spawn",
            "args": ["--host", "--env=TERM=xterm-256color", "bash", "-c", "/usr/bin/apx enter --aur"],
            "overrideName": true,
            "icon": "code",
            "color": "terminal.ansiBlue"
          },
          "Vanilla": {
            "path": "/usr/bin/flatpak-spawn",
            "args": ["--host", "--env=TERM=xterm-256color", "bash"],
            "overrideName": true,
            "icon": "star",
            "color": "terminal.ansiYellow"
          }
```
  With this you will directly be in your development container and you will be able to switch between Vanilla and Dev(Arch) easily.