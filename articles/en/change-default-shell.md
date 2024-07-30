---
Title: Change your Default Shell
Description: Learn how to change your Default Shell in Vanilla OS.
PublicationDate: 2023-01-19
Listed: true
Authors:
    - MonsterObserver
    - mirkobrombin
---

## Introduction

Vanilla OS allows you to change your Default Shell to optimize your workflow. This guide will show you how to change your Default Shell to [**Zsh**](https://zsh.sourceforge.io/) or [**Fish**](https://fishshell.com/).

**_Note_**:- Changing the Default Shell isn't recommended, and this guide is for advanced users only.

## Change your Default Shell to Zsh

First, we need to install Zsh on the VSO Shell with the following command:

```bash
sudo apt install zsh
```

now we need to change the Default Shell to Zsh with the following command:-

```bash
chsh -s /usr/bin/zsh
```

The next time you open your VSO Shell, you will be in a Zsh shell.

## Change your Default Shell to Fish

First, we need to install Fish on the VSO Shell with the following command:

```bash
sudo apt install fish
```

Now we need to change the Default Shell to Fish with the following command:

```bash
chsh -s /usr/bin/fish
```

The next time you open your VSO Shell, you will be in a Fish shell.

## Revert your Default Shell to Bash

If you wish to revert your Default Shell to Bash, you can do so by running the following command:

```bash
chsh -s /usr/bin/bash
```

The next time you open your VSO Shell, you will be in a Bash shell.

## Changing Container's Default Shell

`apx` containers initialized after changing your Default Shell will use your current Shell. You can check what Shell you are using by running the following command:-

```bash
echo $SHELL
```

If you already initialized your containers before changing your Default Shell, you can follow the specific distribution guide to change the Shell inside the container, for Debian and Ubuntu based containers, you can follow the same steps as above. For Arch-based containers, you can use the following command:-

```bash
sudo pacman -S zsh
chsh -s /usr/bin/zsh
```

For Alpine-based containers, you can use the following command:-

```bash
sudo apk add zsh
chsh -s /usr/bin/zsh
```
