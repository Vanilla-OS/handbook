---
Title: Vanilla OS Installation
Description: Learn how to install Vanilla OS to your device.
PublicationDate: 2024-08-06
Listed: true
Authors:
    - GabsEdits
    - kra-mo
    - kbdharun
---

## Preparation

### Requirements

- A flash drive with at least **4GB** of capacity.
- A 64 bit (amd64)/[x64] processor.
- A drive with at least **50GB** of storage space (required for [ABRoot](https://documentation.vanillaos.org/docs/ABRoot/) A/B partitions).
- At least **4GB** of **RAM** (**8GB recommended**).
- 30 minutes to an hour of your time.
- Good to have **Secure Boot enabled** (if your device isn't with Nvidia graphics).

### Creating a bootable USB stick

This section will guide you through creating a bootable USB stick with Vanilla OS on it.

#### Downloading Vanilla OS

First, download the Vanilla OS disk image that will be written to your USB flash drive from [**here**](https://vanillaos.org/download/orchid/stable).

#### Installing Etcher

To flash the disk image to your USB stick, download and install [**balenaEtcher**](https://www.balena.io/etcher/).

If you wish, you can also use different software that you are familiar with, such as [**Ventoy**](https://www.ventoy.net/) or [**Rufus**](https://rufus.ie/).

#### Flashing the image

**Warning**: this will erase **all data** on your USB flash drive. Make sure to back up all your important data before proceeding!

Open Etcher, select the downloaded disk image and your USB flash drive, then click "Flash!".

![Flashing](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Installation/installation-flashing.webp)

When the process is done, you will have a bootable USB stick with Vanilla OS on it.

### Booting from the USB flash drive

Insert the USB flash drive into the computer to which you want to install Vanilla OS and power up or restart the device.

If your device does not automatically boot into the Vanilla OS installation media, reboot, and while it is starting up, hold down the key to `select boot device` or for `boot menu` indicated by a prompt on the boot screen. The most common keys are F2, F10, F11, F12, Delete and Escape. If the prompt isn't present, try searching online for your specific model of device. Select Vanilla OS or the name of your USB flash drive from the boot menu.

When your device has successfully booted from the USB stick, you should see a welcome screen inviting you to try or install Vanilla OS.

![Welcome](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Installation/installer-welcome.webp)

## Installing Vanilla OS

### First steps

Click "Install" and set your preferred language, keyboard layout, internet connection, and timezone.

![Language](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Installation/installation-language.webp)

### NVIDIA drivers

The installer will detect if you have an NVIDIA GPU and ask if you zwant to install the NVIDIA drivers. If you have an NVIDIA GPU, click "Install (Recommended)" to install the drivers. If you don't have an NVIDIA GPU, click "Skip".

/* This is needed to be updated with more context, I'll leave it for Mirko */

![NVIDIA Drivers](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Installation/installation-nvidia.webp)

### VM Tools

If you are installing Vanilla OS in a virtual machine, you can install the VM tools by clicking "Install (Recommended)". This will install the necessary drivers and tools to improve the performance of Vanilla OS in a virtual machine. If you don't want to install the VM tools, click "Skip".

![VM Tools](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Installation/installation-vmtools.webp)

### Dual- or multibooting

Currently, Vanilla OS does not support dual- or multibooting with other operating systems on the same drive. If you want to dual- or multiboot, you can install Vanilla OS on a separate drive.

### Installing only Vanilla OS

Installing Vanilla OS will **erase all data** on the selected disk. Make sure to back up all your important data before proceeding!

Select the disk you want to install Vanilla OS to, click "Use Entire Disk", then click "Confirm".

![Use Entire Disk](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Installation/installation-partitioning.webp)

You can also manually partition your disk by selecting "Manual Partitioning" and creating your own partitions.

#### Manual partitioning

/* I'll leave this for anyone else to fill in */

### Device encryption

You can choose to encrypt your device by clicking the "Encrypt Device". Make sure to add a strong password that you will remember, as you will need it to unlock your device every time you boot it up.

![Encrypt Device](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Installation/installation-encryption.webp)

Once you have set up your partitions and encryption, you will be prompted to confirm your changes. Click "Install Vanila OS" to start the installation process.

![Confirm Installation](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Installation/installation-confirm.webp)

The installation process will take a few minutes to complete. Once it is done, you will be prompted to restart your device.

## Booting into Vanilla OS

After the installer finishes, all you need to do is reboot and remove the USB stick. Vanilla OS will be waiting for you.

## First Setup

After installing Vanilla OS, you can follow the [**First Setup guide**](https://docs.vanillaos.org/handbook/en/first-setup) to set up your system.
