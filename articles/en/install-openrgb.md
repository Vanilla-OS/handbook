---
Title: Install OpenRGB
Description: Learn how to install OpenRGB on Vanilla OS.
PublicationDate: 2023-01-20
Listed: true
Authors:
    - MonsterObserver
    - mirkobrombin
---

## Introduction

[**OpenRGB**](https://openrgb.org/) is an essential application for managing your RGB appliances. This guide will help you install the Flatpak and AppImage of OpenRGB correctly.


### Installing OpenRGB

You can install OpenRGB from the GNOME Software as documented [here](https://docs.vanillaos.org/handbook/en/install-and-manage-applications#managing-applications-through-gnome-software). Alternatively, you can install it from the command line with the following command:-

```bash
flatpak install flathub org.openrgb.OpenRGB
```

## Setting Up UDEV Rules

For the application to function, add UDEV rules to your system.

First, install the UDEV rules by clicking [**here**](https://gitlab.com/CalcProgrammer1/OpenRGB/-/jobs/artifacts/master/raw/60-openrgb.rules?job=Linux+64+AppImage&inline=false).

After downloading the UDEV rules, you need to move them to the correct directory with the following command:-

```bash
host-shell pkexec mv ~/Downloads/60-openrgb.rules /etc/udev/rules.d/
```

After moving the UDEV rules, you need to reload the rules by running the following command:-

```bash
pkexec udevadm control --reload-rules && pkexec udevadm trigger
```

After reloading the rules, OpenRGB works correctly.
