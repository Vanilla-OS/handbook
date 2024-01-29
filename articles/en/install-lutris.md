---
Title: Install Lutris
Description: Learn how to install Lutris on Vanilla OS.
PublicationDate: 2023-01-28
Authors:
    - mirkobrombin
---

> This guide is for Kinetic (22.10), not Orchid. The documentation for Orchid is still being written.

## What is Lutris?

[**Lutris**](https://lutris.net/) is an open-source game launcher for Linux that allows you to download and play games from various platforms such as the Epic Games Store, GOG Galaxy client, Origin, Humble Bundle and many others through a simple interface.

## Installation

The recommended way to install Lutris is through the official Debian package. But it is also available in many other formats.

In Vanilla OS, you can install packages from other distributions using [**Apx**](https://vanillaos.org/2023/01/28/apx-the-unconventional-pkg-manager.html), the default package manager for Vanilla OS. In the following sections, we will show you how to install the Debian and Fedora packages of Lutris using Apx.

### Debian package

First, you need to download the latest version of the package from the [**official website**](https://lutris.net/downloads/) under the "Debian/Ubuntu" section.

Once you have downloaded the package, you can install it using the command line. Open a console and navigate to the directory where you have downloaded the package. Then, use the following command to install the package:

```bash
apx install --sideload lutris_<version>_all.deb
```

Make sure to replace `<version>` with the version number of the package you have downloaded.

### Fedora package

The `lutris` package is also available in the Fedora repositories, so you can install it in Apx using the following command:

```bash
apx install --dnf lutris
```

## Troubleshooting

In this section, we will show you how to fix some common issues you may encounter when using Lutris.

### Poor performance

If you are experiencing poor performance, ensure that you have the latest graphics drivers installed. To do so, refer to the [**Install additional drivers in Vanilla OS**](https://handbook.vanillaos.org/2022/12/10/install-additional-drivers.html) page.

Also, check the game's system requirements and ensure that your system meets them.

### Game crashes

Lutris suggests [**some steps**](https://lutris.net/faq#game-crash) to investigate the cause of a game crash in the FAQ.

### NVIDIA GPU not being used

On Optimus laptops, there are 2 GPUs: the integrated (Intel or AMD) and the dedicated (NVIDIA). By default, Lutris uses the integrated GPU, which can cause performance issues.

You can fix this in Lutris by opening the game's configuration and toggling the "Enable NVIDIA Prime Render Offload" option. You can find it under the "System Options" tab.

![Lutris Prime Render Offload](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Gaming/lutris-prime-gpu.webp)

### Other issues

If you are experiencing other issues, you can refer to the [**official FAQ**](https://lutris.net/faq) or open an [**issue**](https://github.com/lutris/lutris/issues) on GitHub.
