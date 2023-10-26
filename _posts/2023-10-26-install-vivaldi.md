---
title: Installing Vivaldi
description: Learn how to Install and set up Vivaldi in Vanilla OS. 
date: 2023-10-26
layout: article
authors: 
    - Phosphorus-M
    - amsyarzero
published: true
---

## Introduction

[Vivaldi](https://vivaldi.com/) is a freeware, cross-platform web browser developed by Vivaldi Technologies, a company founded by Opera Software co-founder and former CEO Jon Stephenson von Tetzchner and Tatsuki Tomita. Vivaldi is based on Chromium, the open-source project behind Google Chrome. Vivaldi is intended to be a customizable, functional, and practical browser for the web.

## Installing Vivaldi

You can install Vivaldi using the following steps:

First, download the latest version of Vivaldi from [here](https://vivaldi.com/download/).

Use `cd` to navigate to the directory where the downloaded package is located.

Then, install the downloaded package into your subsystem (In this case apt) using the following command:

```bash
apx install --sideload ./vivaldi-stable_*_amd64.deb
```

After the installation is complete but you must install the proprietary codecs needed for video and audio to play:

```bash
apx enter
sudo apt-get update && sudo apt-get install chromium-codecs-ffmpeg-extra
```

## Installing Pipewire for Vivaldi (and basically any other subsystem program)

This step is also important so your desktop knows how to route the audio properly to your audio devices.

```bash
sudo apt install pipewire-audio-client-libraries pipewire-pulse wireplumber
exit
```

Don't forget export Vivaldi:

```bash
apx export vivaldi-stable
```

Now Vivaldi should be functioning perfectly!

## Setup Vivaldi as your default browser

To set Vivaldi as your default browser, open the terminal and run the following command:

```bash
cd ~/.local/share/applications
xdg-settings set default-web-browser apx_managed-vivaldi-stable.desktop
```

This allows you to open links from other applications outside of the subsystem in Vivaldi.

Inside of a subsystem, you can also use the following command:

```bash
xdg-settings set default-web-browser vivaldi-stable
```

This allows you to open links from other applications inside of the subsystem in Vivaldi.

## Credits

This guide was recompilation of messages in discord and [the installation guide into the Arch subsystem](https://gist.github.com/amsyarzero/4b52f44d7b74d3e61b42028e6c8aeaa7) of [amsyarzero](https://github.com/amsyarzero).

Vanilla OS community (hyperlink leads to their Discord) for patiently answering my noob questions, especially:

- Feng Lengshun
- Dharun Krishna
- Monster
- xrandr

## Limitations

- A new Vivaldi icon will open for each window, regardless of whether the icon in the Application Menu is pinned to the dock or not.

![Vivaldi in the dock](/assets/uploads/Miscellaneous/vivaldi-dock.webp)
