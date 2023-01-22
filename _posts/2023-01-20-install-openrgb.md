---
title: Install OpenRGB
description: Learn how to install OpenRGB on Vanilla OS.
date: 2023-01-20
layout: article
authors: 
    - MonsterObserver
published: true
---

## Introduction

[**OpenRGB**](https://openrgb.org/) is an essential application for managing your RGB appliances. This guide will help you install the Flatpak version of OpenRGB correctly.

## Prerequisites

- Flatpak: You can find out how to install it [**here**](/2022/12/09/install-flatpaks.html).

## Installing OpenRGB

- You can install OpenRGB from the "Gnome Software" application. Alternatively, you can install it from the command line with the following command:-

```bash
flatpak install flathub org.openrgb.OpenRGB
```

## Setting Up UDEV Rules

For the application to function correctly, we need to manually add UDEV rules to our system.

- First, install the UDEV rules by clicking [**here**](https://gitlab.com/CalcProgrammer1/OpenRGB/-/jobs/artifacts/master/raw/60-openrgb.rules?job=Linux+64+AppImage&inline=false).

- After downloading the UDEV rules, we need to move them to the correct directory with the following command:-

```bash
sudo mv ~/Downloads/60-openrgb.rules /etc/udev/rules.d/
```

- After moving the UDEV rules, we need to reload the rules by running the following command:-

```bash
sudo udevadm control --reload-rules && sudo udevadm trigger
```

- After reloading the rules, OpenRGB works correctly.
