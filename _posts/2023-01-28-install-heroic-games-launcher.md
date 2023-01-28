---
title: Install Heroic Games Launcher
description: Learn how to install Heroic games Launcher on Vanilla OS.
date: 2023-01-28
layout: article
authors: 
    - mirkobrombin
published: true
---

## What is Heroic Games Launcher?

[**Heroic Games Launcher**](https://heroicgameslauncher.com/) is an open source game launcher for Linux. It allows you to download and play games from the Epic Games Store and the GOG Galaxy client through a very user-friendly interface.

## Installation

The recommended way to install Heroic Games Launcher is through [Flatpak](https://flatpak.org/) but it is also available as an AppImage.

### Flatpak

If you chose to install Flatpak during [First Setup](https://handbook.vanillaos.org/2022/11/18/first-setup.html), you will be able to install applications directly from GNOME Software, as explained [here](https://handbook.vanillaos.org/2022/12/09/install-flatpaks.html#title3).

You can also install the Heroic Games Launcher Flatpak from the terminal using the following command:

```bash
flatpak install flathub com.heroicgameslauncher.hgl
```

### AppImage

You can download the latest AppImage from the [official website](https://heroicgameslauncher.com/downloads).

If you chose to install AppImage during [First Setup](https://handbook.vanillaos.org/2022/11/18/first-setup.html), you will be able to run the AppImage just by double-clicking on it. If you didn't, you can install the required dependencies using an ABRoot transaction:

```bash
sudo abroot exec apt install -y fuse3 libfuse2 appimagelauncher
```

then reboot your system. You can now run the AppImage by setting the executable flag and double-clicking on it:

```bash
chmod +x Heroic-*.AppImage
```

## Troubleshooting

### Poor performance

If you are experiencing poor performance, ensure that you have the latest graphics drivers installed. To do so, refer to the [Install additional drivers in Vanilla OS](https://handbook.vanillaos.org/2022/12/10/install-additional-drivers.html) page.

### Epic Games Store Login doesn't work

If you are unable to login to the Epic Games Store, you can try to login using the [alternative login method](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki/How-To:-Epic-Alternative-Login).

### Other issues

If you are experiencing other issues, you can refer to the [official troubleshooting page](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki/Troubleshooting) or open an [issue](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/issues) on GitHub.
