---
Title: Install Heroic Games Launcher
Description: Learn how to install Heroic games Launcher on Vanilla OS.
PublicationDate: 2023-01-28
Authors:
    - mirkobrombin
---

## What is Heroic Games Launcher?

[**Heroic Games Launcher**](https://heroicgameslauncher.com/) is an open source game launcher for Linux. It allows you to download and play games from the Epic Games Store and the GOG Galaxy client through a user-friendly interface.

## Installation

The recommended way to install Heroic Games Launcher is through [**Flatpak**](https://flatpak.org/), but it is also available as an AppImage.

### Flatpak

If you chose to install Flatpak during [**First Setup**](https://handbook.vanillaos.org/2022/11/18/first-setup.html), you could install applications directly from GNOME Software, as explained [**here**](https://handbook.vanillaos.org/2022/12/09/install-flatpaks.html#title3).

You can also install the Heroic Games Launcher Flatpak from the terminal using the following command:

```bash
flatpak install flathub com.heroicgameslauncher.hgl
```

### AppImage

You can download the latest AppImage from the [**official website**](https://heroicgameslauncher.com/downloads).

If you chose to install AppImage during [**First Setup**](https://handbook.vanillaos.org/2022/11/18/first-setup.html), you will be able to run the AppImage just by double-clicking on it. If you didn't, you could install the required dependencies using an ABRoot transaction using the following command:

```bash
sudo abroot exec apt install -y fuse3 libfuse2 appimagelauncher
```

Then reboot your system. You can now run the AppImage by setting it as executable from Properties and double-clicking on it. Alternatively, you can make it executable using the following command:

```bash
chmod +x Heroic-*.AppImage
```

## Troubleshooting

In this section, we will show you how to fix some common issues you may encounter when using Heroic Games Launcher.

### Poor performance

If you are experiencing poor performance, ensure that you have the latest graphics drivers installed. To do so, refer to the [**Install additional drivers in Vanilla OS**](https://handbook.vanillaos.org/2022/12/10/install-additional-drivers.html) page.

Also, check the game's system requirements and ensure that your system meets them.

### Epic Games Store Login doesn't work

If you are unable to login to the Epic Games Store, you can try to log in using the [**alternative login method**](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki/How-To:-Epic-Alternative-Login).

### Other issues

If you are experiencing other issues, you can refer to the [**official troubleshooting page**](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki/Troubleshooting) or open an [**issue**](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/issues) on GitHub.
