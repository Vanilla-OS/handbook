---
Title: Vanilla OS Installation
Description: Learn how to install Vanilla OS to your device.
PublicationDate: 2024-08-06
Listed: true
Authors:
    - GabsEdits
    - kra-mo
    - kbdharun
    - NN708
---

## Preparation

### Requirements

- A flash drive with at least **4GB** of capacity.
- A 64-bit Intel, AMD (x86_64), or ARM (AArch64) processor.
- A disk with at least **50GB** of storage space (required for ABRoot A/B partitions).
- At least **4GB** of **RAM** (**8GB recommended**).
- 30 minutes to an hour of your time.

> **Note**: If you don't need NVIDIA drivers or other custom kernel modules, it's fine to leave Secure Boot enabled. Otherwise, you should disable it (see [here](https://docs.vanillaos.org/handbook/en/nvidia-issues#drivers-installed-but-nvidia-gpu-is-not-working)).

### Creating a bootable USB stick

This section will guide you through creating a bootable USB stick with Vanilla OS on it.

#### Downloading Vanilla OS

First, download the Vanilla OS disk image that will be written to your USB flash drive from [**here**](https://vanillaos.org/download/orchid/stable).

#### Installing Etcher

To flash the disk image to your USB stick, download and install [**balenaEtcher**](https://etcher.balena.io/).

Alternatively, you can use other tools you're familiar with, such as [**Ventoy**](https://www.ventoy.net/), [**Rufus**](https://rufus.ie/) (on Windows) or [**Impression**](https://apps.gnome.org/Impression/) (on Linux).

#### Flashing the image

**Warning**: This will erase **all data** on your USB flash drive. Make sure to back up all your important data before proceeding!

Open Etcher, select the downloaded disk image and your USB flash drive, then click "Flash!".

![Flashing](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Installation/installation-flashing.webp)

When the process is done, you will have a bootable USB stick with Vanilla OS on it.

### Booting from the USB flash drive

Insert the USB flash drive into the computer to which you want to install Vanilla OS and power up or restart the device.

If your device does not automatically boot into the Vanilla OS installation media, reboot, and while it is starting up, hold down the key to `select boot device` or for `boot menu` indicated by a prompt on the boot screen. The most common keys are F2, F10, F11, F12, Delete and Escape. If the prompt isn't present, try searching online for your specific model of device. Select Vanilla OS or the name of your USB flash drive from the boot menu.

When your device has successfully booted from the USB stick, you should see a welcome screen inviting you to install Vanilla OS.

![Welcome](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Installation/installation-welcome.webp)

## Installing Vanilla OS

### First steps

Click "Install" and set your preferred language, keyboard layout, internet connection, and timezone.

![Language](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Installation/installation-language.webp)

### NVIDIA drivers and VM tools

The installer will detect if you have an NVIDIA GPU or if you are installing Vanilla OS in a virtual machine and prompt you to install the necessary drivers and tools to improve the performance of Vanilla OS. Just click "Install (Recommended)" to install the required drivers and tools. If you don't want to install them, click "Skip".

![VM Tools](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Installation/installation-vmtools.webp)

### Installing Vanilla OS to a disk

**Warning**: Installing Vanilla OS will **erase all data** on the selected disk. Make sure to back up all your important data before proceeding!

Select the disk you want to install Vanilla OS to, click "Use Entire Disk", then click "Confirm Changes".

![Use Entire Disk](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Installation/installation-partitioning.webp)

#### Dual- or multibooting

Vanilla OS does not automatically support dual- or multibooting with other operating systems on the same disk. However, you can install Vanilla OS on a separate disk. If you still want to dual- or multiboot on the same disk, use manual partitioning (see below).

#### Manual partitioning

If you know what you are doing, you can also partition your disk manually by selecting "Manual" and creating your own partitions. For more details on partitioning, refer to [this blog post](https://vanillaos.org/blog/article/2023-11-22/vanilla-os-orchid---devlog-22-nov).

![Manual Partitioning](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Installation/installation-manual-partitioning.webp)

### Device encryption

You can choose to encrypt your disk by clicking the "Encrypt Device". Make sure to add a strong password that you will remember, as you will need it to unlock your device every time you boot it up.

![Encrypt Device](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Installation/installation-encryption.webp)

Once you have set up your partitions and encryption, you will be prompted to confirm your changes. Click "Install Vanila OS" to start the installation process.

![Confirm Installation](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Installation/installation-confirm.webp)

The installation process will take a few minutes to complete. Once it is done, you will be prompted to restart your device.

## Booting into Vanilla OS

After the installer finishes, all you need to do is reboot and remove the USB stick. Vanilla OS will be waiting for you.

If you have multiple disks and the system doesn't boot Vanilla OS, adjust the boot settings in a way similar to [Booting from the USB flash drive](https://docs.vanillaos.org/handbook/en/installation#booting-from-the-usb-flash-drive) above.

## First Setup

After installing Vanilla OS, you can follow the [**First Setup guide**](https://docs.vanillaos.org/handbook/en/first-setup) to set up your system.
