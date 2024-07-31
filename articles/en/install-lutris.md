---
Title: Install Lutris
Description: Learn how to install Lutris on Vanilla OS.
PublicationDate: 2023-01-28
Listed: true
Authors:
    - mirkobrombin
---

## What is Lutris?

[**Lutris**](https://lutris.net/) is an open-source game launcher for Linux that allows you to download and play games from various platforms such as the Epic Games Store, GOG Galaxy client, Origin, Humble Bundle and many others through a simple interface.

## Installation

The recommended way to install Lutris is through [**Flatpak**](https://flatpak.org/).

You can proceed using the GNOME Software application as documented [here](https://docs.vanillaos.org/handbook/en/install-and-manage-applications#managing-applications-through-gnome-software) or use the command line as shown below:

```bash
flatpak install flathub net.lutris.Lutris
```

## Troubleshooting

In this section, we will show you how to fix some common issues you may encounter when using Lutris.

### Game crashes

Lutris suggests [**some steps**](https://lutris.net/faq#game-crash) to investigate the cause of a game crash in the FAQ.

### NVIDIA GPU not being used

On Optimus laptops, there are 2 GPUs: the integrated (Intel or AMD) and the dedicated (NVIDIA). By default, Lutris uses the integrated GPU, which can cause performance issues.

You can fix this in Lutris by opening the game's configuration and toggling the "Enable NVIDIA Prime Render Offload" option. You can find it under the "System Options" tab.

![Lutris Prime Render Offload](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Gaming/lutris-prime-gpu.webp)

### Other issues

If you are experiencing other issues, you can refer to the [**official FAQ**](https://lutris.net/faq) or open an [**issue**](https://github.com/lutris/lutris/issues) on GitHub.
