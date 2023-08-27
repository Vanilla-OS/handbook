---
Title: Install Flatpak(s) in Vanilla OS
Description: Learn how to install Flatpak packages in Vanilla OS.
PublicationDate: 2022-12-09
Authors:
    - mirkobrombin
---

Flatpak is a universal package format for Linux desktop applications. It works on most Linux distributions, Vanilla OS included. Flatpak applications get distributed as bundles, similar to native packages, but they are sandboxed and can be updated independently from the host system.

## Install Flatpak

The preferred way to install Flatpak is to toggle it in the **First Setup**
wizard. If you didn't toggle it, you can install it manually using the transactional shell:

```bash
sudo abroot exec apt install flatpak gnome-software-plugin-flatpak
```

Reboot once the installation is complete.

Alternatively, you can install Flatpak inside a managed container using `apx`:

```bash
apx install flatpak
```

In this case, you will always need to run Flatpak commands inside the `apx` container:

```bash
apx run flatpak install flathub org.gnome.gedit
```

## Configure Flathub

Flatpak needs to know where to look for applications. The default and most popular repository for installing Flatpaks is Flathub, which you can add using the following command:

```bash
flatpak remote-add --if-not-exists --user flathub https://flathub.org/repo/flathub.flatpakrepo
```

**_NOTE_**: The `--user` flag, which tells Flatpak to install applications only for the current user, is needed because the root partitions in Vanilla OS are small-sized and must get updated in a transactional way only.

## Install an application

There are two ways to install a Flatpak applications: using GNOME Software or through the command line.

### GNOME Software

Open GNOME Software, search for the application you want to install and click on the "Install" button.

![GNOME Software](/assets/uploads/Miscellaneous/flatpak-gnome-software.webp)

### Command line

You can also install Flatpak applications using the command line. For example, to install Steam, run the following command:

```bash
flatpak install flathub com.valvesoftware.Steam
```

## Run an application

Installed applications are available in the "Applications" menu, or you can
run them from the command line:

```bash
flatpak run com.valvesoftware.Steam
```
