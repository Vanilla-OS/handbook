---
title: Install Flatpak(s) in Vanilla OS
description: Learn how to install Flatpak packages in Vanilla OS.
date: 2022-12-09
layout: article
authors: 
    - mirkobrombin
published: true
---

Flatpak is a universal package format for Linux desktop applications. It works on most Linux distributions, Vanilla OS included. Flatpak applications get distributed as bundles, similar to native packages, but they are sandboxed and can be updated independently from the host system.

## Install Flatpak

- The preferred way to install Flatpak is to choose it in the **First Setup**
wizard. If you didn't do it, then you can install it manually using the transactional shell:

```bash
sudo abroot exec apt install flatpak gnome-software-plugin-flatpak
```

- Reboot once the installation is complete.

- Alternatively, you can install Flatpak inside the Managed Container using `apx`:

```bash
apx install flatpak
```

In this case, you will always need to run Flatpak commands inside the Apx container:

```bash
apx run flatpak install flathub org.gnome.gedit
```

## Configure Flathub

Flatpak needs to know where to look for applications. The default and most popular repository for installing Flatpaks are Flathub, which can get added using the following command:

```bash
flatpak remote-add --if-not-exists --user flathub https://flathub.org/repo/flathub.flatpakrepo
```

**_NOTE_**: The `--user` flag, which tells Flatpak to install applications only for the current user, is needed because the root partitions in Vanilla OS are small-sized and must get updated in a transactional way only.

## Install an application

There are two ways to install a Flatpak application: using _GNOME Software or through the command line_.

### GNOME Software

Open GNOME Software, search for the application you want to install and click on the "*Install**" button.

![GNOME Software](/assets/uploads/flatpak-gnome-software.webp)

### Command line

You can also install Flatpak applications using the command line. For example, to install Steam, run the following command:

```bash
flatpak install flathub com.valvesoftware.Steam
```

## Run an application

Installed applications are available in the "Applications" menu, or you can
run them from the command line:

```bash
flatpak run com.valvesoftware.Steam
```
