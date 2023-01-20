---
title: Change your Default Shell
description: Learn how to change your Default Shell in Vanilla OS.
date: 2023-01-19
layout: article
authors: 
    - MonsterObserver
published: true
---

## Introduction

Vanilla OS allows you to change your Default Shell to optimize your workflow. This guide will show you how to change your Default Shell to [**Zsh**](https://zsh.sourceforge.io/) or [**Fish**](https://fishshell.com/).

**_Note_**:- Changing the Default Shell isn't recommended, and this guide is for advanced users only.

## Change your Default Shell to Zsh

- First, we need to install Zsh on the Host System with the following command:-

```bash
sudo abroot exec apt install zsh
```

- After installing Zsh, we need to reboot the system to apply the changes. You can do this by simply running `reboot`.

- After rebooting the system, we need to change the Default Shell to Zsh with the following command:-

```bash
chsh -s /usr/bin/zsh
```

- After changing the Default Shell to Zsh, we need to reboot the system to apply the changes.

- The next time you open your Terminal Emulator, you will be prompted to set up Zsh.

## Change your Default Shell to Fish

- First, we need to install Fish on the Host System with the following command:-

```bash
sudo abroot exec apt install fish
```

- After installing Fish, we need to reboot the system to apply the changes. You can do this by simply running `reboot`.

- After rebooting the system, we need to change the Default Shell to Fish with the following command:-

```bash
chsh -s /usr/bin/fish
```

- After changing the Default Shell to Fish, we need to reboot the system to apply the changes.

- The next time you open your Terminal Emulator, you will be in Fish Shell.

## Revert your Default Shell to Bash

- You can run the following command to revert your Default Shell to Bash:-

```bash
chsh -s /usr/bin/bash
```

- You will now have to reboot the system to apply the changes. You can do this by simply running `reboot`.

- The next time you open your Terminal Emulator, you will be in Bash Shell.

## Changing Container's Default Shell

- `apx` containers initialized after changing your Default Shell will use your current Shell. You can check what Shell you are using by running the following command:-

```bash
echo $SHELL
```

- If you already initialized your containers before changing your Default Shell, you will have to reinitialize them with the following commands:-

```bash
apx init
apx init --aur
apx init --dnf
apx init --apk
```
**_Warning_**: This will remove all applications installed inside the container!

- If you wish to use a specific Shell for your container, you can manually set the SHELL variable before creating the container with the following commands:-

```bash
env SHELL=/usr/bin/zsh apx init
env SHELL=/usr/bin/zsh apx init --aur
env SHELL=/usr/bin/zsh apx init --dnf
env SHELL=/usr/bin/zsh apx init --apk
```
