---
Title: Install OpenRGB
Description: Learn how to install OpenRGB on Vanilla OS.
PublicationDate: 2023-01-20
Authors:
    - MonsterObserver
---

> This guide is for Kinetic (22.10), not Orchid. The documentation for Orchid is still being written.

## Introduction

[**OpenRGB**](https://openrgb.org/) is an essential application for managing your RGB appliances. This guide will help you install the Flatpak and AppImage of OpenRGB correctly.

## Flatpak

### Prerequisites

- Flatpak: You can find out how to install it [**here**](/2022/12/09/install-flatpaks.html).

### Installing OpenRGB

You can install OpenRGB from the "Gnome Software" application. Alternatively, you can install it from the command line with the following command:-

```bash
flatpak install flathub org.openrgb.OpenRGB
```

## AppImage

### Prerequisites

AppImage Support: If you have enabled AppImage in the "First Setup" when installing Vanilla OS, this step isn't necessary.

If you haven't enabled AppImages, run the following command:-

```bash
sudo abroot exec apt install libfuse2
```

After the successful installation, reboot your system. You can do this by typing `reboot`.

### Installing OpenRGB

Install "Linux 64-bit" from the "Linux Binaries (AppImage)" section [**here**](https://gitlab.com/CalcProgrammer1/OpenRGB/-/releases/permalink/latest#Linux-64-bit).

Go to the directory where the AppImage is installed and make it an executable with the following commands:-

```bash
cd ~/Downloads/
chmod +x <appimage-filename>
```

## Setting Up UDEV Rules

For the application to function, add UDEV rules to your system.

First, install the UDEV rules by clicking [**here**](https://gitlab.com/CalcProgrammer1/OpenRGB/-/jobs/artifacts/master/raw/60-openrgb.rules?job=Linux+64+AppImage&inline=false).

After downloading the UDEV rules, you need to move them to the correct directory with the following command:-

```bash
sudo mv ~/Downloads/60-openrgb.rules /etc/udev/rules.d/
```

After moving the UDEV rules, you need to reload the rules by running the following command:-

```bash
sudo udevadm control --reload-rules && sudo udevadm trigger
```

After reloading the rules, OpenRGB works correctly.
