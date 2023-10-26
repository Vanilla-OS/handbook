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

[**Vivaldi**](https://vivaldi.com) is a freeware, cross-platform web browser based on Chromium, the open-source project behind Google Chrome. Vivaldi is intended to be a customizable, functional, and practical browser for the web.

## Installing Vivaldi

You can install Vivaldi using the following steps:

First, download the latest version of Vivaldi from [**here**](https://vivaldi.com/download/).

Execute the following command to access to the directory where the downloaded package is located:

```bash
cd ~/Downloads
```

Then, install the downloaded package into your subsystem using the following command:

```bash
apx install --sideload ./vivaldi-stable_*_amd64.deb
```

After the installation is complete, you must install the proprietary codecs needed for video and audio to play:

```bash
apx enter
sudo apt update && sudo apt install chromium-codecs-ffmpeg-extra
```

## Installing Pipewire for Vivaldi

This step is necessary to get functioning audio.

```bash
sudo apt install pipewire-audio-client-libraries pipewire-pulse wireplumber
exit
```

You can now create a desktop entry for Vivaldi with:

```bash
apx export vivaldi-stable
```

Now Vivaldi should be functioning perfectly!

## Setup Vivaldi as your default browser

To set Vivaldi as your default browser, open the terminal and run the following commands:

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

## Limitations

- A new Vivaldi icon will open for each window, regardless of whether the icon in the Application Menu is pinned to the dock or not.

![Vivaldi in the dock](/assets/uploads/Miscellaneous/vivaldi-dock.webp)
