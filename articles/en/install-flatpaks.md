---
Title: Install Flatpak(s) and configure Flathub in Vanilla OS
Description: Learn how to install Flatpak packages in Vanilla OS.
PublicationDate: 2022-12-09
Listed: true
Authors:
    - mirkobrombin
---

Flatpak is a universal package format for Linux desktop applications. It works on most Linux distributions, Vanilla OS included. Flatpak applications get distributed as bundles, similar to native packages, but they are sandboxed and can be updated independently from the host system.

> Note: flatpaks in Vanilla OS are installed in the user space, so everytime you'll have to install a Flatpak or a new Repository like Flathub, you'll have to use the `--user` flag to point to the user space.

## Install Flatpak and configure Flathub

You don't have to install Flatpak or configure Flathub manually since they are already installed by default in Vanilla OS. Anyway if for some reasons Flathub is not there, you can configure it manually using the following command:

```bash
host-shell flatpak remote-add --user --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

## Configure Flathub

Flathub is the largest and most popular catalog of Flatpak applications. It is enabled by default in Vanilla OS.

## Install an application

There are two ways to install a Flatpak applications: using GNOME Software or through the command line.

### GNOME Software

Open GNOME Software, search for the application you want to install and click on the "Install" button.

![GNOME Software](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Miscellaneous/flatpak-gnome-software.webp)

### Command line

You can also install Flatpak applications using the command line. For example, to install Steam, run the following command:

```bash
flatpak install --user com.valvesoftware.Steam
```

## Run an application

Installed applications are available in the "Applications" menu, or you can
run them from the command line:

```bash
flatpak run com.valvesoftware.Steam
```
