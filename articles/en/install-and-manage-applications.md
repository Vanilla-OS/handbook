---
Title: Install and manage Applications
Description: Learn how to install and manage applications on Vanilla OS
PublicationDate: 2023-01-11
Listed: true
Authors:
    - kbdharun
    - MonsterObserver
---

## Introduction

Vanilla OS allows installing packages and software from various sources. This guide will discuss them in detail.

Vanilla OS comes with Flatpak support enabled by default along with the Flathub catalog.

## Terminologies

- **Flatpak**:- Flatpak is a popular packaging format allowing the installation of Desktop applications in a sandboxed environment isolated from the system with shared libraries between them. Flatpak provides developers with a unified way to distribute apps for most GNU/Linux distributions. Flatpak supports adding various remote repositories, the most popular repository being Flathub.

- **Flathub**:- Flathub is the largest repository of Flatpak applications spanning various categories.

- **APX**:- APX is a unique tool created by the Team of Vanilla OS to configure Linux environments based on any Linux distribution, allowing users to install packages from various sources. The main goal of APX is to allow developers and creators to create their own environments for specific tasks. Please [read our article](https://vanillaos.org/blog/article/2024-07-11/discover-apx-v2-the-new-essential-tool-for-developers-and-creators-on-vanilla-os-orchid) to learn more about APX.

- **VSO Shell**:- VSO Shell is what you see when you open the terminal in Vanilla OS, it is a separate environment from the host system, and it is where you can run commands to install packages and software compatible with Debian-based systems.

- **DEB**:- DEB is the package format used by Debian-based systems like Vanilla OS.

- **APK**:- APK is the package format used by Android applications.

## Managing Applications through GNOME Software

### Installing Applications

Flatpaks can be installed with ease using GNOME Software. It is the recommended method for installing packages.

![GNOME Software](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Applications_Post/gnome-software-43.webp)

### Searching Applications

You can search for applications in GNOME Software by clicking on the Search icon in the top left corner.

If the application you searched for exists, it will be displayed, and you can proceed with the installation.

If the application you searched for does not exist, you can use an alternative method suggested below in this guide to install it.

### Updating Applications

Updates are visible in the `Updates` panel in GNOME Software. In Vanilla OS, Updates are available for Flatpaks and System Packages in GNOME Software.

Automatic Updates are configured in the `Update Preferences` tab located in the burger menu in the top right corner.

![GNOME Software Update Proferences](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Applications_Post/gnome-software-update-preferences.webp)

### Removing Applications

You can remove installed Flatpaks from the `Installed` panel.

## Installing Applications through VSO Shell

The VSO Shell is a Vanilla OS installation based on Debian, and it is where you can run commands to install packages and software compatible with Debian-based systems using the `apt` package manager like in any other Debian-based system.

### Installing Applications

Search for the package in our [packages repository](https://packages.vanillaos.org/) and install it using the following command:

```bash
sudo apt install PACKAGE_NAME
```

Graphical applications will be available in the application menu after installation.

### Removing Applications

To remove an installed package, use the following command:

```bash
sudo apt remove PACKAGE_NAME
```

### Updating Applications

To update all installed packages, use the following command:

```bash
sudo apt update && sudo apt upgrade
```

## Installing Applications from Other Linux Distributions

APX in Vanilla OS comes with different environments pre-configured, the following list shows the available environments but you can create your own environment at any time:

- Alpine Linux
- Arch Linux (currently experimental, might not work as expected)
- Fedora
- Ubuntu
- OpenSUSE
- Vanilla Dev (a Vanilla OS environment pre-configured with tools for developers like golang, python, the GTK library, and more)
- Vanilla (a clean Vanilla OS environment)

First let's introduce some concepts:

- **Package Manager**: A package manager is a tool that automates the process of installing, upgrading, configuring, and removing software packages.

- **Stack**: A stack is what defines the environment you are working in, it includes the package manager and packages that will be installed in the subsystem.

- **Subsystem**: A subsystem is a container (or environment) created using a stack. You can have multiple subsystems with different stacks or the same stack.

### Creating a Subsystem

#### Using APX GUI

To create a subsystem, open the APX GUI application from your application menu and click on the plus button on the top left corner. A new windows like the one below will appear:

![Showcasing the APX's subsystem creation dialog](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/ApxGUI/create-subsystem.png)

Here you can choose the name for your subsystem and the stack you want to use. Once done, click on the `Create` button on the top right corner.

When the subsystem is created, you will see it in the left sidebar of the APX GUI:

![Showcasing the APX's main screen](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/ApxGUI/main-screen.png)

click on the subsystem to see the details, you can start the subsystem by clicking on the terminal icon on the bottom right corner of the window.

#### Using the APX CLI

To create a subsystem using the APX CLI, open the VSO Shell and run the following command:

```bash
apx subsystems create
```

and follow the instructions.

### Installing Applications

You can install applications directly using the subsystem's package manager from inside its terminal, for example, to install `neofetch` in an Ubuntu subsystem, you can run the following command inside your Ubuntu based subsystem:

```bash
sudo apt install neofetch
```

Another way to install applications is by using the APX CLI, you can run the following command to install `neofetch` in an Ubuntu subsystem (let's say the subsystem is named `my-ubuntu`):

```bash
apx my-ubuntu install neofetch
```

this way you do not have to remember the package manager for each subsystem.

### Make Applications and Commands Available in the Host System

To make applications and commands available in the host system, you can use the `apx export` command, for example, to make the `neofetch` command available in the host system, you can run the following command (assuming the subsystem is named `my-ubuntu`):

```bash
apx my-ubuntu export -b neofetch
```

to export a graphical application, you can use the `-a` flag:

```bash
apx my-ubuntu export -a htop
```

### Removing Applications

To remove an installed package, for example in your Ubuntu subsystem, you can run the following command:

```bash
sudo apt remove PACKAGE_NAME
```

in the subsystem's terminal, or using the APX CLI:

```bash
apx my-ubuntu remove PACKAGE_NAME
```

### Updating Applications

To update all installed packages in the subsystem, you can run the following command:

```bash
sudo apt update && sudo apt upgrade
```

in the subsystem's terminal, or using the APX CLI:

```bash
apx my-ubuntu upgrade
```

## Installing DEB and APK Packages

> Note: Android support in Vanilla OS is currently experimental and might not work as expected. Please report any issues you encounter.

To install a DEB and APK package, you can simply double-click on the package file and follow the instructions on the screen.

### Manually Installing DEB Packages

To manually install a DEB package, you can use the following command in the VSO Shell:

```bash
sudo dpkg -i PACKAGE_NAME.deb
```

### Manually Installing APK Packages

To manually install an APK package, you can use the following command in the VSO Shell:

```bash
vso android install -l PACKAGE_NAME.apk
```

