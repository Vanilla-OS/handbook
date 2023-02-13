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

Vanilla OS allows installing packages and software from multiple sources. This guide will discuss them in detail.

Vanilla OS comes with the option to enable Flatpak, AppImage and Snap in the initial setup. It allows the installation of native packages using the `apx` package manager. (**_Note_**: At the time of writing this guide, Snap is not yet supported in Vanilla OS)

## Terminologies

- **Flatpak**:- Flatpak is a popular packaging format allowing the installation of Desktop applications in a sandboxed environment isolated from the system with shared libraries between them. Flatpak provides developers with a unified way to distribute apps for most GNU/Linux distributions. Flatpak supports adding various remote repositories, the most popular repository being Flathub.
- **Flathub**:- Flathub is the largest repository of Flatpak applications spanning various categories.
- **Snap**:- Snap is an alternative packaging format by Canonical (the creators of Ubuntu) for installing thousands of applications from the Snapcraft repository. They facilitate installing applications in Servers and various GNU/Linux distributions. Snapcraft contains hundreds of verified packages and software from publishers. (**_Note_**: At the time of writing this guide, Snap is not yet supported in Vanilla OS)
- **AppImage**:- AppImage is a format for distributing portable software or executables on Linux without needing superuser permissions to install the application.
- **GNOME Software**:- GNOME Software allows you to find, install and remove new applications and system extensions. It showcases screenshots, metadata and user reviews of various applications. In Vanilla OS, It supports installing Flatpaks and Snaps. GNOME Software is the Linux equivalent of the Microsoft Store, Play Store and App Store.
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
- **RPM**:- `rpm` (Red Hat package manager) is a file format for installing and managing applications on Red Hat-based systems. It's an equivalent file extension to `.exe` in Windows and `.deb` in GNU/Linux.

## Installing Applications through GNOME Software

- Flatpaks and Snaps can be installed with ease using the GNOME Software graphically. It is the recommended method to install packages.

- If you have disabled Snap, you can still install Flatpaks using GNOME Software and install applications from the evergrowing [Flathub](https://flathub.org/home) repository.

- If you have disabled Flatpak, you can still install Snaps through GNOME Software.

![GNOME Software](/assets/uploads/Applications_Post/gnome-software-43.webp)

### Searching Applications

- You can search for applications in GNOME Software by clicking on the Search icon in the top left corner.
- If the application you searched for exists, it will be displayed, and you can proceed with the installation.
- If the application you searched for doesn't exist, you can use an alternative method suggested below in this guide to install it.

### Updating Applications

- Updates are visible in the `Updates` panel in GNOME Software. In Vanilla OS, Updates are available for Snaps and Flatpaks through it. 
- Automatic Updates are configured by clicking on `Update Preferences` in the Sidebar and enabling Automatic Updates. Optionally, you can switch on `Automatic Update Notifications` to be informed about updated applications.

![GNOME Software Update Proferences](/assets/uploads/Applications_Post/gnome-software-update-preferences.webp)

### Removing Applications

- You can remove the installed Flatpaks and Snaps from the Installed Panel in GNOME Software. 
(**_Note_**: Some native applications installed in the host will not support removing using this method in Vanilla OS)

## Installing AppImages

- AppImage is one of the recommended formats for installing your applications. If you have enabled AppImage in the first setup, You can run it graphically using the following steps:-
    - Right-click on the file, then click on **Properties**.
    
   ![AppImages Properties](/assets/uploads/Applications_Post/appimages-nautilus-properties.webp)
    
    - Enable the **Executable as Program** option.
    - Now, you can run the AppImage by right-clicking it and pressing run or by pressing enter/return key on the keyboard.

Alternatively, you can open AppImages from the command line using the following commands:-

```bash
cd <directory>
chmod +x <file>.appimage
./<file>.appimage
```

**_Note_**:- `chmod +x <file>.AppImage` makes the file executable.

 ![Running Krita using AppImage](/assets/uploads/Applications_Post/appimage-krita.webp)

## Installing Flatpaks from the Command line

- Flatpaks if enabled in the First Setup, can be installed from the command line using the command:-

```bash
flatpak install <remote> <application-id>
```
- You can run the applications using the desktop entry (icon) from the Application menu, or you can run it manually through:-

```bash
flatpak run <application-id>
```
- You can remove installed applications using the following command:-

```bash
flatpak uninstall <application-id>
```

- You can remove the unused dependencies along with the Flatpak by using the following command:-

```bash
flatpak uninstall --unused
```

- You can remove all the leftover data of the application using the following command (Disclaimer: Proceed with caution as this might lead to data loss):-

```bash
flatpak uninstall <application-id> --delete-data
```

- If you want to install Flatpaks but have disabled it in the first setup, follow the guide [**here.**](/2022/12/09/install-flatpaks.html)

## Installing Snaps from the Command line

- If you have selected Snap in the first setup, you can run the following command to install Snaps:-

```bash
snap install <packages>
```

- If you need to remove an installed Snap, then you can run the following command:-

```bash
snap remove <packages>
```

## Installing Native Applications through apx

- apx allows installing native applications from Ubuntu, Fedora, Arch Linux and Alpine Linux. These applications are tightly integrated with the host and can access the host's hardware.

### Creating a Container 

- apx allows initializing/creating containers manually through the command line or graphically through Vanilla Control Center. 
  - `apx init` creates/reinitializes an Ubuntu container. 
  - `apx init --dnf` creates/reinitializes a Fedora container.
  - `apx init --aur` creates/reinitializes an Arch container.
  - `apx init --apk` creates/reinitializes an Alpine container.
  - `apx init --zypper` creates/reinitializes an openSUSE Tumbleweed container.
  - `apx init --xbps` creates/reinitializes a Void Linux container.

- You can initialize the container graphically by clicking on the `+` icon in the Vanilla Control Center. (Vanilla Control Center also allows you to enter the apx container graphically.)

![Vanilla Control Center - Sub System](/assets/uploads/Applications_Post/vanilla-control-center-subsystem.webp)

- After initialization, you can enter the container graphically by clicking on the `terminal` icon.

![Vanilla Control Center - Sub System post initialization](/assets/uploads/Applications_Post/vanilla-control-center-subsystem-example.webp)

- apx works by creating minimal containers from the distribution's docker image. And it tightly integrates with the host using a distrobox backend.

### Setting up Nix

- apx allows setting up nix on your system through the command line with the following command:-

```bash
apx init --nix` 
```

### Installing Applications in Ubuntu Container

- You can install applications in the Ubuntu container using the following command:-

```bash
apx install <packages>
```

- This command will automatically detect the desktop file entry in the package and add it to the Application menu and Vanilla Control Center.

- Alternatively, you can install the applications by entering the Ubuntu container using the following commands:-

```bash
apx enter
sudo apt install <packages>
exit
apx export <packages>
```

- You can export the installed binary to use it with the host directly using the following command:-

```bash
apx export --bin <package>
```

### Uninstalling Applications from the Ubuntu Container

- You can uninstall applications from the Ubuntu container using the following command:-

```bash
apx remove <packages>
```

- This command will automatically detect and remove the desktop file entry.

- Alternatively, you can uninstall the applications by entering the Ubuntu container using the following commands:-

```bash
apx enter
sudo apt remove <packages>
exit
apx unexport <packages>
```

- You can unexport the exported binary from the host using the following command:-

```bash
apx unexport --bin <package>
```

### Installing Applications in the Fedora Container

- You can install applications in the Fedora container using the following command:-

```bash
apx install --dnf <packages>
```

- This command will automatically detect the desktop file entry in the package and add it to the Application menu and Vanilla Control Center.

- Alternatively, you can install the applications by entering the Fedora container using the following commands:-

```bash
apx enter --dnf
sudo dnf install <packages>
exit
apx export --dnf <packages>
```

- You can export the installed binary to use it with the host directly using the following command:-

```bash
apx export --dnf --bin <package>
```

### Uninstalling Applications from the Fedora Container

- You can uninstall applications from the Fedora container using the following command:-

```bash
apx remove --dnf <package>
```

- This command will automatically detect and remove the desktop file entry.

- Alternatively, you can uninstall the applications by entering the Fedora container using the following commands:-

```bash
apx enter --dnf
sudo dnf remove <packages>
exit
apx unexport --dnf <packages>
```

- You can unexport the exported binary from the host using the following command:-

```bash
apx unexport --dnf --bin <package>
```

### Installing Applications in the Arch Linux Container

- You can install applications in the Arch Linux container using the following command:-

```bash
apx install --aur <packages>
```

- This command will automatically detect the desktop file entry in the package and add it to the Application menu and Vanilla Control Center.

- Alternatively, you can install the applications by entering the Arch Linux container using the following commands:-

```bash
apx enter --aur
sudo pacman -Syu <packages>
exit
apx export --aur <packages>
```

**_Tip_**: Inside a container to install AUR packages, first run `sudo pacman -S --needed git base-devel`, then run `yay -S <packages>` to install the packages using `yay`.

- You can export the installed binary to use it with the host directly using the following command:-

```bash
apx export --aur --bin <package>
```

### Uninstalling Applications from the Arch Linux Container

- You can uninstall applications from the Arch Linux container using the following command:-

```bash
apx remove --aur <package>
```

- This command will automatically detect and remove the desktop file entry.

- Alternatively, you can uninstall the applications by entering the Arch container using the following commands:-

```bash
apx enter --aur
sudo pacman -Rs <packages>
exit
apx unexport --aur <packages>
```

- You can unexport the exported binary from the host using the following command:-

```bash
apx unexport --aur --bin <package>
```

### Installing Applications in the Alpine Linux Container

- You can install applications in the Alpine Linux container using the following command:-

```bash
apx install --apk <packages>
```

- This command will automatically detect the desktop file entry in the package and add it to the Application menu and Vanilla Control Center.

- Alternatively, you can install the applications by entering the Alpine Linux container using the following commands:-

```bash
apx enter --apk
sudo apk add <packages>
exit
apx export --apk <packages>
```

- You can export the installed binary to use it with the host directly using the following command:-

```bash
apx export --apk --bin <package>
```

### Uninstalling Applications from the Alpine Linux Container

- You can uninstall applications from the Alpine Linux container using the following command:-

```bash
apx remove --apk <package>
```

- This command will automatically detect and remove the desktop file entry.

- Alternatively, you can uninstall the applications by entering the Alpine Linux container using the following commands:-

```bash
apx enter --apk
sudo apk del <packages>
exit
apx unexport --apk <packages>
```

- You can unexport the exported binary from the host using the following command:-

```bash
apx unexport --aur --bin <package>
```

### Installing Applications in the openSUSE Container

- You can install applications in the openSUSE container using the following command:-

```bash
apx install --zypper <packages>
```

- This command will automatically detect the desktop file entry in the package and add it to the Application menu and Vanilla Control Center.

- Alternatively, you can install the applications by entering the openSUSE container using the following commands:-

```bash
apx enter --zypper
sudo zypper install <packages>
exit
apx export --zypper <packages>
```

- You can export the installed binary to use it with the host directly using the following command:-

```bash
apx export --zypper --bin <package>
```

### Uninstalling Applications from the openSUSE Container

- You can uninstall applications from the openSUSE container using the following command:-

```bash
apx remove --zypper <package>
```

- This command will automatically detect and remove the desktop file entry.

- Alternatively, you can uninstall the applications by entering the openSUSE container using the following commands:-

```bash
apx enter --zypper
sudo zypper remove <packages>
exit
apx unexport --zypper <packages>
```

- You can unexport the exported binary from the host using the following command:-

```bash
apx unexport --zypper --bin <package>
```

### Installing Applications in the Void Linux Container

- You can install applications in the Void Linux container using the following command:-

```bash
apx install --xbps <packages>
```

- This command will automatically detect the desktop file entry in the package and add it to the Application menu and Vanilla Control Center.

- Alternatively, you can install the applications by entering the Void Linux container using the following commands:-

```bash
apx enter --xbps
sudo xbps-install <packages>
exit
apx export --xbps <packages>
```

- You can export the installed binary to use it with the host directly using the following command:-

```bash
apx export --xbps --bin <package>
```

### Uninstalling Applications from the Void Linux Container

- You can uninstall applications from the Void Linux container using the following command:-

```bash
apx remove --xbps <package>
```

- This command will automatically detect and remove the desktop file entry.

- Alternatively, you can uninstall the applications by entering the Void Linux container using the following commands:-

```bash
apx enter --xbps
sudo xbps-remove <packages>
exit
apx unexport --xbps <packages>
```

- You can unexport the exported binary from the host using the following command:-

```bash
apx unexport --xbps --bin <package>
```

### Installing Applications with Nix

- You can install applications with nix using the following command:-

```bash
apx install --nix <packages>
```

- This command will automatically detect the desktop file entry in the package and add it to the Application menu, but you might have to relogin for it to appear.

- It will also automatically create a binary which you can use with the host directly.

### Uninstalling Applications with Nix

- You can uninstall applications with nix using the following command:-

```bash
apx remove --nix <package>
```

- This command will automatically detect and remove the desktop file entry, but you might have to relogin for it to disappear.

- It will also automatically remove the binary from the host.

## Installing DEBs and RPMs in apx

### Sideloading DEBs

- You can install DEB packages in the Ubuntu container using the following commands:-

```bash
apx install --sideload <path/to/package.deb>
apx export <package>
```

- **_Note_**:- Using `apx export` is optional. It creates a desktop file entry (icon) in the Application menu for the installed DEB package.

- You can export the installed binary to use it with the host directly using the following command:-

```bash
apx export --bin <package>
```

### Uninstalling DEBs

- You can uninstall DEBs from the Ubuntu container using the following command:-

```bash
apx remove <package>
```

- You can unexport the exported binary from the host using the following command:-

```bash
apx unexport --bin <package>
```

- **_Note_**:- If the desktop entry is still present, execute this command `apx unexport <package>`.

### Sideloading RPMs

- You can install RPM packages in the Fedora container using the following commands:-

```bash
apx install --dnf --sideload <path/to/package.rpm>
apx export --dnf <package>
```

- **_Note_**:- Using `apx export --dnf` is optional. It creates a desktop file entry (icon) in the Application menu for the installed RPM package. If a desktop entry is available, skip this command.

- You can export the installed binary to use it with the host directly using the following command:-

```bash
apx export --dnf --bin <package>
```

### Uninstalling RPMs

- You can uninstall RPM packages from the Fedora container using the following command:-

```bash
apx remove --dnf <package>
```

- **_Note_**:- If the desktop entry is still present, execute this command `apx unexport --dnf <package>`.
- You can unexport the exported binary from the host using the following command:-

```bash
apx unexport --dnf --bin <package>
```

## Conclusion

These are some ways to install and manage applications in Vanilla OS.
