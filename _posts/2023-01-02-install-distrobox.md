---
title: Install Distrobox
description: Learn how to install Distrobox on Vanilla OS.
date: 2023-01-02
layout: article
authors: 
    - mirkobrombin
published: true
---

## What is Distrobox?

[Distrobox](https://github.com/89luca89/distrobox) is an utility that allows you 
run multiple Linux distributions in your system, without the need to dual boot
or install them in a virtual machine. Enable both backward and forward 
compatibility with software and freedom to use whatever distribution you’re more 
comfortable with.

It uses podman or docker to create containers using the Linux 
distribution of your choice. The created container will be tightly integrated 
with the host, allowing sharing of the HOME directory of the user, external 
storage, external USB devices and graphical apps (X11/Wayland), and audio.

## Install Distrobox

The recommended way to install Distrobox is via the official script. To do so,
open a terminal and run the following command:

```bash
curl -s https://raw.githubusercontent.com/89luca89/distrobox/main/install | sh -s -- --next --prefix ~/.local
```

in this way, Distrobox will be installed in the `~/.local` directory, which is
already in the PATH variable for Vanilla OS. Note that we are going to install it
in your home directory, to avoid altering the root filesystem.

## Uninstall Distrobox

To uninstall Distrobox, run the following command:

```bash
curl -s https://raw.githubusercontent.com/89luca89/distrobox/main/uninstall | sudo sh -s -- --prefix ~/.local
```
