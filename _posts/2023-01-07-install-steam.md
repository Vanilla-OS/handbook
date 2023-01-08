---
title: Install Steam
description: Learn how to install Steam on Vanilla OS.
date: 2023-01-07
layout: article
authors: 
    - mirkobrombin
published: true
---

## What is Steam?

[Steam](https://steampowered.com) is the most popular gaming platform. It allows
you to download and play a large number of games, and it's available for Linux.

In 21 August 2018, Steam has introduced the [Proton](https://github.com/ValveSoftware/Proton)
project, which allows you to run Windows games on Linux. This is a great feature
for Linux users, because it extends the number of games available on the platform
by a lot. Take a look at [ProtonDB](https://www.protondb.com) to see how well
your favorite games work with Proton.

## Install Steam

In Vanilla OS there are many ways to install software. The easiest way is to use
[Flatpak](https://flatpak.org), which is a universal package manager for Linux.
But it is also possible to install Steam using [Apx](https://documentation.vanillaos.org/docs/apx/)
the default package manager of Vanilla OS.

### Flatpak

If you chose to install Flatpak during [First Setup](https://handbook.vanillaos.org/2022/11/18/first-setup.html), 
you will be able to install applications directly from GNOME Software, as 
explained [here](https://handbook.vanillaos.org/2022/12/09/install-flatpaks.html#title3).

You can also install Flatpak from the terminal:

```bash
flatpak install --user flathub com.valvesoftware.Steam
```

### Apx

Apx is a package manager which installs software in containers thanks to
[Distrobox](https://github.com/89luca89/distrobox). In our tests, Fedora is the
best distro to run Steam in a container and it is highly recommended to use it.

#### Fedora container

First we need to install the RPM Fusion repository, which contains the rpm
packages we need to install Steam:

```bash
apx --dnf enter
su -c 'dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm'
exit
```

We also need to install the drivers for our graphics card:

- **NVIDIA**

```bash
apx --dnf install xorg-x11-drv-nvidia-libs.i686 akmod-nvidia
```

- **AMD**

```bash
apx --dnf install xorg-x11-drv-amdgpu mesa-libGL.i686 mesa-dri-drivers.i686
```

- **Intel**

```bash
apx --dnf xorg-x11-drv-intel mesa-libGL.i686 mesa-dri-drivers.i686
```

Now we can install Steam:

```bash
apx --dnf install steam
```

##### Run Steam

To run Steam, you can use the icon from the applications menu or issuing the 
command `apx --dnf run steam`.

If the icon doesn't appear in the applications menu, you can add it manually:

```bash
apx --dnf export steam
```

#### Ubuntu container

On Ubuntu, we need to add the `multiverse` repository to our sources list:

```bash
apx --apt enter
su -c 'echo "deb http://archive.ubuntu.com/ubuntu/ $(lsb_release -sc) multiverse" >> /etc/apt/sources.list'
exit
```

We also need to install the drivers for our graphics card.

- **NVIDIA**
First we need to check the version for the host drivers:

```bash
nvidia-smi --query-gpu=driver_version --format=csv | tail -n +2
```

which is `525.60.11` in my case. Then we need to install the drivers for the container:

```bash
apx install nvidia-driver-525
```

- **AMD/Intel**

```bash
apx --apt install mesa-utils mesa-utils-extra
```

Now we can install Steam:

```bash
apx --apt install steam-launcher
```

##### Run Steam

To run Steam, you can use the icon from the applications menu or issuing the 
command `apx run steam`.

If the icon doesn't appear in the applications menu, you can add it manually:

```bash
apx export steam
```

## Run Windows games (Steam Play - Proton)

Steam comes with Proton preconfigured to run all the supported Windows games. 
You may want to enable the Steam Play feature to also run games that are not
officially supported. 

![Steam Play](/assets/uploads/steam-play.webp)

To do so, open Steam and go to `Steam` > `Settings` > `Steam Play`. Then enable 
the `Enable Steam Play for all other titles` option.
