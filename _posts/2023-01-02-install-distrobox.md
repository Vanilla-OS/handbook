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

[**Distrobox**](https://github.com/89luca89/distrobox) is a utility that allows you to run multiple Linux distributions in your system without the need to dual boot or install them in a virtual machine. It enables backward and forward compatibility with software and provides freedom to use whatever distribution you need.

It uses Podman or Docker to create containers using the Linux distribution of your choice. The container created will be tightly integrated with the host, which allows sharing the `/home` directory of the user, hardware (like external storage, pen drives, speakers) and graphical apps (X11/Wayland).

## Install Distrobox

The recommended way to install Distrobox is via the official script. To do so, open a terminal and run the following command:

```bash
curl -s https://raw.githubusercontent.com/89luca89/distrobox/main/install | sh -s -- --next --prefix ~/.local
```

In this way, Distrobox will be installed in the `~/.local` directory, which is already in the PATH variable for Vanilla OS.

**_Note_**:  We are going to install Distrobox in your `home` directory to avoid altering the root file system.

## Uninstall Distrobox

To uninstall Distrobox, run the following command:

```bash
curl -s https://raw.githubusercontent.com/89luca89/distrobox/main/uninstall | sudo sh -s -- --prefix ~/.local
```
