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

Vanilla OS allows you to change your Default Shell to better fit your workflow. This guide will show you how to change your Default Shell to [**`Zsh`**](https://zsh.sourceforge.io/) or [**`Fish`**](https://fishshell.com/).

**_Note_**:- Changing the Default Shell is only recommended for advanced users.

## Change your Default Shell to Zsh

- Firstly, we need to install Zsh on the Host System with the following command:-

```bash
sudo abroot exec apt install zsh
```

- After installing Zsh, we need to reboot the system to apply the changes. You can do this by simply running `reboot`.

- After rebooting the system, we need to change the Default Shell to Zsh with the following command:-

```bash
chsh -s /usr/bin/zsh
```

- After changing the Default Shell to Zsh, we need to reboot the system one last time to apply the changes. Simply run `reboot` again.

- The next time you open your Terminal Emulator you will be prompted to setup Zsh.

## Change your Default Shell to Fish

- Firstly, we need to install Fish on the Host System with the following command:-

```bash
sudo abroot exec apt install fish
```

- After installing Fish, we need to reboot the system to apply the changes. You can do this by simply running `reboot`.

- After rebooting the system, we need to change the Default Shell to Fish with the following command:-

```bash
chsh -s /usr/bin/fish
```

- After changing the Default Shell to Fish, we need to reboot the system one last time to apply the changes. Simply run `reboot` again.

- The next time you open your Terminal Emulator you will be using Fish.

## Revert your Default Shell to Bash

- You can run the following command to revert your Default Shell back to Bash:

```bash
chsh -s /usr/bin/bash
```

- You will now have to reboot the system to apply the changes. Simply run `reboot`.

- The next time you open your Terminal Emulator you will be using Bash.
