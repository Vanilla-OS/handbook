---
title: Install and manage Applications
description: Learn how to install and manage applications on Vanilla OS
date: 2023-01-11
layout: article
authors: 
    - kbdharun
    - MonsterObserver
published: true
---

## Introduction

Vanilla OS allows installing packages and software from various sources. This guide will discuss them in detail.

Vanilla OS comes with the option to enable Flatpak and AppImage ain the initial setup. It also allows the installation of native packages using the `apx` package manager.

## Terminologies

- **Flatpak**:- Flatpak is a popular packaging format allowing the installation of Desktop applications in a sandboxed environment isolated from the system with shared libraries between them. Flatpak provides developers with a unified way to distribute apps for most GNU/Linux distributions. Flatpak supports adding various remote repositories, the most popular repository being Flathub.

- **Flathub**:- Flathub is the largest repository of Flatpak applications spanning various categories.

- **AppImage**:- AppImage is a format for distributing portable software or executables on Linux without needing superuser permissions to install the application.

- **GNOME Software**:- GNOME Software allows you to find, install and remove new applications and system extensions. It showcases screenshots, metadata and user reviews of various applications. In Vanilla OS, It supports installing Flatpaks and Vanilla OS (Apx) meta packages. GNOME Software is the Linux equivalent of the Microsoft Store, Play Store and App Store.

- **Package Manager**:- A package manager or package-management system is a utility with a collection of software tools that automates installing, upgrading, configuring, and removing applications or packages.
`apx` is the package manager which comes with Vanilla OS. It is the equivalent command for Winget on Windows.

- **APX**:- `apx` is the default package manager in Vanilla OS. It allows installing applications from multiple sources in managed containers.

- **APT**:- `apt` is an Advanced Package Tool which allows installing and managing software on Debian and Debian-based systems like Ubuntu.

- **DNF**:- `dnf` (Dandified YUM) is the successor to YUM. It is a powerful package manager for installing and managing applications on rpm-based distributions.

- **AUR**:- `aur` (Arch User Repository) is the largest community-maintained repository with thousands of native packages for Arch Linux and its derivatives.

- **APK**:- `apk` (Alpine Linux package keeper) is a package manager which allows installing and managing applications on Alpine Linux.

- **ZYPPER**:- `zypper` is a package manager on openSUSE for installing, updating and removing packages, and also for managing repositories.

- **XBPS**:- `xbps` (X Binary Package System) is a fast package manager on Void Linux that has been designed and implemented from scratch for efficiently managing your packages.

- **NIX**:- `nix` is a powerful package manager for Linux and other Unix systems that makes package management reliable and reproducible.

- **DEB**:- `deb` (Debian Packages) is a file format for installing and managing applications on Debian-based systems. It's an equivalent file extension to `.exe` in Windows and `.rpm` in GNU/Linux.

- **RPM**:- `rpm` (Red Hat package manager) is a file format for installing and managing applications on RHEL-based systems. It's an equivalent file extension to `.exe` in Windows and `.deb` in GNU/Linux.

## Managing Applications through GNOME Software

### Installing Applications

Flatpaks can be installed with ease using GNOME Software. It is the recommended method for installing packages.

![GNOME Software](/assets/uploads/Applications_Post/gnome-software-43.webp)

### Searching Applications

You can search for applications in GNOME Software by clicking on the Search icon in the top left corner.

If the application you searched for exists, it will be displayed, and you can proceed with the installation.

If the application you searched for does not exist, you can use an alternative method suggested below in this guide to install it.

### Updating Applications

Updates are visible in the `Updates` panel in GNOME Software. In Vanilla OS, Updates are available for Flatpaks and System Packages in GNOME Software.

Automatic Updates are configured in the `Update Preferences` tab located in the burger menu in the top right corner.

![GNOME Software Update Proferences](/assets/uploads/Applications_Post/gnome-software-update-preferences.webp)

### Removing Applications

You can remove installed Flatpaks from the `Installed` panel.

(**_Note_**: Some native applications installed on the host cannot be removed using this method, but applications installed through the meta plugin can be removed through the panel.)

## Manage AppImages

### Installing AppImages

You can download AppImages from project pages on GitHub. Another source for AppImages is [**AppImageHub**](https://www.appimagehub.com/).

Once downloaded, they won't have to be installed since they are executable binaries.

### Running AppImages

If you have enabled AppImage in the first setup, you can run AppImages graphically by following these steps:-

- Right-click on the file, then click on **Properties**.

![AppImages Properties](/assets/uploads/Applications_Post/appimages-nautilus-properties.webp)

- Enable the **Executable as Program** option.

You can now run the AppImage by right-clicking it and pressing run or by pressing enter/return key on your keyboard.

Alternatively, you can open AppImages from the terminal with the following commands:-

```bash
cd <directory>
chmod +x <file>.appimage
./<file>.appimage
```

**_Note_**:- `chmod +x <file>.AppImage` makes the file executable.

## Managing Flatpaks through CLI

If you enabled Flatpak in the First Setup, you won't have to do anything. If you have disabled Flatpak in the First Setup, follow the guide [**here**](/2022/12/09/install-flatpaks.html).

### Installing Flatpaks

You can install Flatpaks with the following command:-

```bash
flatpak install <application-id>
```

### Running Flatpaks

You can run the Flatpaks using the desktop entry (icon) from the Application menu.

You can alternatively run Flatpaks in the terminal with the following command:-

```bash
flatpak run <application-id>
```

### Removing Flatpaks

You can remove installed Flatpaks with the following command:-

```bash
flatpak uninstall <application-id>
```

You can remove unused Flatpak dependencies with the following command:-

```bash
flatpak uninstall --unused
```

You can remove leftover data of Flatpaks with the following command (**_Disclaimer_**: Proceed with caution, since this removes all application data):-

```bash
flatpak uninstall --delete-data <application-id>
```

## Managing Applications through Apx

`Apx` allows installing applications from various Linux distributions. These applications are tightly integrated with the host and can access the host's hardware.

In the commands below, `<package_manager>` will be a placeholder. It can be replaced by the following options:-

- `apt`
- `dnf`
- `aur`
- `apk`
- `zypper`
- `xbps`
- `nix`

### Creating a Container

You can create a container with the following command:-

```bash
apx init --<package_manager>
```

You can also initialize the containers graphically by clicking on the `+` icon in the Vanilla Control Center. (Vanilla Control Center allows you to enter the apx container graphically.)

![Vanilla Control Center - Sub System](/assets/uploads/Applications_Post/vanilla-control-center-subsystem.webp)

After initialization, you can enter the container graphically by clicking on the `terminal` icon.

![Vanilla Control Center - Sub System post initialization](/assets/uploads/Applications_Post/vanilla-control-center-subsystem-example.webp)

### Installing Applications with Apx

You can install applications with the following command:-

```bash
apx install --<package_manager> <package>
```

This command will automatically detect the desktop file entry in the package and add it to the Application menu and Vanilla Control Center.

You can install DEB packages with the following command:-

```bash
apx install --sideload <path/to/package.deb>
```

You can install RPM packages with the following command:-

```bash
apx install --dnf --sideload <path/to/package.rpm>
```

If your application's desktop entry isn't detected automatically, you can export it manually with the following command:-

```bash
apx export --<package_manager> <package>
```

You can export binaries to run them without the `apx run` prefix with the following command:-

```bash
apx export --<package_manager> --bin <package>
```

### Uninstalling Applications with Apx

You can uninstall applications with the following command:-

```bash
apx remove <packages>
```

This command will automatically detect and remove the desktop file entry.

If your application's desktop entry is not automatically removed, you can unexport it manually with the following command:-

```bash
apx unexport --<package_manager> <package>
```

You can unexport binaries with the following command:-

```bash
apx unexport --<package_manager> --bin <package>
```
