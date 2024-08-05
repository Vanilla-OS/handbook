---
title: Install Discord in Vanilla OS
description: Learn how to install Discord in Vanilla OS.
date: 2023-08-14
layout: article
authors: 
    - sandmuel
published: true
---

## What is Discord?

[**Discord**](https://discord.com/) is a popular social platform for socialising with both friends and communities
allowing people to interact online through messaging, voice calls, video call, and games.

## Install the Flatpak using the Command line

Discord can be installed through both the command line and GNOME Software.
To install Discord as a flatpak you must have flatpak installed and the [**Flathub**](https://flathub.org/) repo added,
you may see how to do so [**here**](https://handbook.vanillaos.org/2022/12/09/install-flatpaks.html).
Once you have installed Flatpak you may proceed with the installation by executing the following command:

```bash
flatpak install --user flathub com.discordapp.Discord
```

**_NOTE_**: On Vanilla OS GNOME Software has been preconfigured to install flatpaks for the current user.
As mentioned [**here**](https://handbook.vanillaos.org/2022/12/09/install-flatpaks.html/),
if you plan to install a flatpak using the command line you must include the **`--user`** flag,
this is because the root partitions in Vanilla OS are small in size and must only get updated in a transactional way.

## Install the Flatpak through GNOME Software

If you do not have flatpak installed yet, you may see how to do so [**here**](https://handbook.vanillaos.org/2022/12/09/install-flatpaks.html).
GNOME Software on Vanilla OS has already been configured to install flatpaks for the current user.
As mentioned [**here**](https://handbook.vanillaos.org/2022/12/09/install-flatpaks.html/) and in the section above,
this is done because the root partitions in Vanilla OS are small in size and must only get updated in a transactional way.
To install lauch GNOME Software and use the search utility and search for "Discord" to locate the Discord flatpak.
At the time of writing it is the first result.

## Installing Discord as a native package

To install Discord as a native package you may use the apx package manager
to install discord using **`apt`**:
```bash
apx --apt install discord
```
to install using the **`dnf`** package manager:
```bash
apx --dnf install discord
```
and so on...

**_NOTE_**: you may make use of the **`--help`** flag to see the list of available package managers
if this is your first time using apx to install with a certain package manager,
a container corresponding to that package manager will be created first.
Discord will then begin to install after the container is ready.
