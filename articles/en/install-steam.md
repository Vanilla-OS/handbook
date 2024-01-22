---
Title: Install Steam
Description: Learn how to install Steam on Vanilla OS.
PublicationDate: 2023-01-07
Authors:
    - mirkobrombin
---

## What is Steam?

[**Steam**](https://steampowered.com) is the most popular gaming platform. It allows you to download and play a vast library of games. It's client is available natively on Linux.

On 21 August 2018, Steam introduced the [**Proton**](https://github.com/ValveSoftware/Proton) project, which allows you to run Windows games on Linux. It is an essential tool for Linux gamers as it extends the number of games available on the platform. Check out [**ProtonDB**](https://www.protondb.com) to see how well your favourite games work with Proton.

## Install Steam

In Vanilla OS there are many ways to install Steam. The easiest way is to use
[**Flatpak**](https://flatpak.org), which is a universal package manager for Linux.
But it is also possible to install Steam using [**apx**](https://documentation.vanillaos.org/docs/apx/)
the default package manager of Vanilla OS.

### Flatpak

If you chose to install Flatpak during [**First Setup**](/2022/11/18/first-setup.html),
you will be able to install applications directly from GNOME Software, as
explained [**here**](/2022/12/09/install-flatpaks.html#title3).

You can also install the Steam Flatpak from the terminal using the following command:

```bash
flatpak install flathub com.valvesoftware.Steam
```

### Apx

**apx** is a package manager which installs software in containers thanks to
[**Distrobox**](https://github.com/89luca89/distrobox). In our tests, Fedora is the best distro to run Steam in a container. We highly recommend using it to install Steam.

#### Fedora container

First, we need to install the RPM Fusion repository, which contains the rpm packages we need to install Steam using the following commands:

```bash
apx --dnf enter
sudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
exit
```

We also need to install the drivers for our graphics card:

**NVIDIA**

```bash
apx --dnf install xorg-x11-drv-nvidia-libs.i686 akmod-nvidia
```

**AMD**

```bash
apx --dnf install xorg-x11-drv-amdgpu mesa-libGL.i686 mesa-dri-drivers.i686
```

**Intel**

```bash
apx --dnf xorg-x11-drv-intel mesa-libGL.i686 mesa-dri-drivers.i686
```

We can now install Steam using the following command:

```bash
apx --dnf install steam
```

##### Run Steam

To run Steam, you can use the icon from the applications menu or issue the command `apx --dnf run steam`.

If the icon doesn't appear in the applications menu, you can add it manually using the following command:

```bash
apx --dnf export steam
```

#### Ubuntu container

On Ubuntu, we need to add the `multiverse` repository to our sources list using the following command:

```bash
apx --apt enter
sudo apt install software-properties-common
sudo add-apt-repository multiverse
exit
```

We also need to install the drivers for our graphics card.

**NVIDIA**:-

First, we need to check the version for the host drivers:

```bash
nvidia-smi --query-gpu=driver_version --format=csv | tail -n +2
```

which is `525.60.11` in my case. Then we need to install the drivers for the container:

```bash
apx install nvidia-driver-525
```

**AMD/Intel**:-

```bash
apx --apt install mesa-utils mesa-utils-extra
```

We can now install Steam using the following command:

```bash
apx --apt install steam-launcher
```

##### Run Steam

To run Steam, you can use the icon from the applications menu or issue the
command `apx run steam`.

If the icon doesn't appear in the applications menu, you can add it manually using the following command:

```bash
apx export steam
```

## Run Windows games (Steam Play - Proton)

Steam comes with Proton preconfigured to run all the supported Windows games.

You may want to enable the Steam Play feature to also run games that are not officially supported.

![Steam Play](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Gaming/steam-play.webp)

To do so, open Steam and go to `Steam` > `Settings` > `Steam Play`. Then enable the `Enable Steam Play for all other titles` option.
