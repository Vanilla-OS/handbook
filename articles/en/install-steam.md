---
Title: Install Steam
Description: Learn how to install Steam on Vanilla OS.
PublicationDate: 2023-01-07
Listed: true
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
the default package manager of Vanilla OS to get the best flexibility.

### Flatpak

You can proceed using the GNOME Software application as documented [here](https://docs.vanillaos.org/handbook/en/install-and-manage-applications#managing-applications-through-gnome-software) or use the command line as shown below:

```bash
flatpak install flathub com.valvesoftware.Steam
```

### Apx

We'll use apx to install Steam on a Ubuntu-based subsystem, assuming you have already configured an Ubuntu subsystem using apx. we'll refer to it as `my-ubuntu`, so change this to your container name if it's different.

Enter the container using the following command:-

```bash
apx my-ubuntu enter
```

then install Steam using the following command:-

```bash
sudo apt install software-properties-common
sudo add-apt-repository multiverse
sudo apt update
sudo apt install steam-launcher
exit
apx my-ubuntu export -a steam
```

#### Run Steam

To run Steam, you can use the icon from the applications menu or issue the
command `apx my-ubuntu run steam`.

## Run Windows games (Steam Play - Proton)

Steam comes with Proton preconfigured to run all the supported Windows games.

You may want to enable the Steam Play feature to also run games that are not officially supported.

![Steam Play](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Gaming/steam-play.webp)

To do so, open Steam and go to `Steam` > `Settings` > `Steam Play`. Then enable the `Enable Steam Play for all other titles` option.
