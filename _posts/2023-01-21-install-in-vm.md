---
title: Install Vanilla OS in a VM
description: Learn how to install Vanilla OS in a VM.
date: 2023-01-21
layout: article
authors: 
    - MonsterObserver
    - kbdharun
    - johnaaron-git
published: true
---

## Introduction

If you are interested in Vanilla OS, it's a good idea to try it out in a VM before using it on your hardware to get used to the Vanilla OS components. This guide will guide you through installing Vanilla OS with various VM software.

## Install Vanilla OS in Gnome Boxes

### Prerequisites

- Check whether Flatpak is installed. If it isn't present, you can check out how to install it [**here**](https://handbook.vanillaos.org/2022/12/09/install-flatpaks.html).

- Install "Gnome Boxes" from the "Gnome Software" application. Alternatively, you can install it with the following command:-

```bash
flatpak install flathub org.gnome.Boxes
```

- Install the Vanilla OS ISO from [**here**](https://github.com/Vanilla-OS/os/releases/latest).

### Installation

Launch Gnome Boxes from the App Grid. Alternatively, you can run it with the following command:-

```bash
flatpak run org.gnome.Boxes
```

Click on the "+" icon.

![Gnome Boxes 1](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Boxes/vm-boxes1.webp)

Click on "Create virtual machine from file".

![Gnome Boxes 2](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Boxes/vm-boxes2.webp)

Choose the Vanilla OS ISO from the file picker and click on "Open".

![Gnome Boxes 3](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Boxes/vm-boxes3.webp)

Leave the Template on "Unknown OS" and click on "Next".

![Gnome Boxes 4](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Boxes/vm-boxes4.webp)

We recommend you use a minimum of 4GB Memory to ensure good performance. You're also required to use a minimum of 50GB Storage for ABRoot. Now click on "Create".

![Gnome Boxes 5](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Boxes/vm-boxes5.webp)

Vanilla OS will now boot.

![Gnome Boxes 6](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Boxes/vm-boxes6.webp)

For the installation steps, refer to [**this guide**](https://handbook.vanillaos.org/2022/11/05/installation.html#title7).

## Install Vanilla OS in VMWare Workstation Player

- A VMWare Workstation Player Installation from [**here**](https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html).

- Install the Vanilla OS ISO [**here**](https://github.com/Vanilla-OS/os/releases/latest).

### Installation

Open VMWare Workstation Player.

Click on "Create a New Virtual Machine".

![VMWare Workstation Player 1](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/VMWare/VMWare_1.webp)

Select the ISO and click "Next".

![VMWare Workstation Player 2](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/VMWare/VMWare_2.webp)

Select the Guest operating system as "Linux" with Version "Ubuntu 64-bit" and click on "Next".

![VMWare Workstation Player 3](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/VMWare/VMWare_3.webp)

Specify the name of your virtual machine and the location to store its files. Then click on "Next".

![VMWare Workstation Player 4](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/VMWare/VMWare_4.webp)

Select a minimum of 50GB for Vanilla OS, this is required for ABRoot.

![VMWare Workstation Player 5](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/VMWare/VMWare_5.webp)

Confirm your configuration, then click on "Finish". If required, select "Customize Hardware..." then go to "Display" and disable/untick "Accelerate 3D graphics".

![VMWare Workstation Player 6](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/VMWare/VMWare_6.webp)

![VMWare Workstation Player 7](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/VMWare/VMWare_7.webp)

Now, click on the "Start" (Play) button.

![VMWare Workstation Player 8](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/VMWare/VMWare_8.webp)

Inside the live session, click on the top right corner and click on the "Settings" icon. Alternatively, you can press on the windows/super key to open the "Activities overview" and then type "Settings" to access it. Now, Navigate to "Displays", under "Resolution" select a different resolution to adjust the window size initially.

![VMWare Workstation Player 9](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/VMWare/VMWare_9.webp)

Now, proceed with the Vanilla OS Installation.

For additional installation steps, refer to [**this guide**](https://handbook.vanillaos.org/2022/11/05/installation.html#title7).

In the first setup, click "Install" on the Open VM Tools page to install the necessary packages for clipboard sharing, custom resolution, etc.

![VMWare Workstation Player 10](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/VMWare/VMWare_10.webp)

## Install Vanilla OS in Virtual Machine Manager

### Prerequisites

- A Virtual Machine Manager Installation from [**here**](https://virt-manager.org/).

- The necessary QEMU dependencies installed.

- Install the Vanilla OS ISO from [**here**](https://github.com/Vanilla-OS/os/releases/latest).

### Installation

Launch Virtual Machine Manager from the App Grid. Alternatively, you can run it with the following command from the terminal:-

```bash
virt-manager
```

Click on the "Create a new virtual machine" button in the left corner below the top bar.

![Virt manager 1](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virt-Manager/virt_manager_1.webp)

Click "Local install media" and confirm the architecture as x86_64. Then, click on "Forward".

![Virt manager 2](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virt-Manager/virt_manager_2.webp)

Select the ISO location of Vanilla OS and choose "Generic Linux <year>" as the operating system. Now click on "Forward".

**_Note_**:- `<year>` is a placeholder meaning select the most recent year.

![Virt manager 3](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virt-Manager/virt_manager_3.webp)

Allocate the required Memory and CPUs and click on "Forward".

![Virt manager 4](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virt-Manager/virt_manager_4.webp)

Create a disk image for a minimum of 50 GB and then click "Forward".

![Virt manager 5](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virt-Manager/virt_manager_5.webp)

Specify the name of your virtual machine and confirm other options and click on "Finish".

![Virt manager 6](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virt-Manager/virt_manager_6.webp)

Now, wait for the virtual machine to get created.

![Virt manager 7](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virt-Manager/virt_manager_7.webp)

![Virt manager 8](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virt-Manager/virt_manager_8.webp)

Now, "Open" the virtual machine in the Graphical console.

When the VM is opened, proceed with the Vanilla OS Installation.

For additional installation steps, refer to [**this guide**](https://handbook.vanillaos.org/2022/11/05/installation.html#title7).

**_Optionally_**:- You can enable "Auto resize VM with window" under the "Scale Display" menu in the "View" tab.

![Virt manager 9](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virt-Manager/virt_manager_9.webp)

## Install Vanilla OS in Parallels Desktop

### Prerequisites

- A licensed copy of [Parallels Desktop](https://www.parallels.com/products/desktop/).

- Install the Vanilla OS ISO from [**here**](https://github.com/Vanilla-OS/os/releases/latest).

### Installation

Open Parallels Desktop and follow the on-screen prompts. Skip installing Windows 11 (for now) if this is your first time using Parallels software.

![Parallels 0](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-0.webp)

Navigate to the Parallels Desktop Control Center, and select the "+" button to add a new virtual machine.

![Parallels 1](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-1.webp)

From the Installation Assistant, select "Install Windows or another OS from a DVD or image file".

![Parallels 2](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-2.webp)

Select "Choose Manually".

![Parallels 3](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-3.webp)

Click the "select a file..." hyperlink, or drag the `VanillaOS-<release>.iso` file to the Installation Assistant window.

![Parallels 4](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-4.webp)

Select the `VanillaOS-<release>.iso` file.

**_Note_**:- The content inside `<>` is a placeholder.

![Parallels 5](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-5.webp)

Parallels is unable to automatically detect the operating system inside of our `VanillaOS-<release>.iso`. This is normal, click "Continue".

![Parallels 6](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-6.webp)

Change "Windows" to "Ubuntu Linux" from the drop-down menu that appears (Vanilla OS benefits from Ubuntu-centric Parallels features).

![Parallels 7](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-7.webp)

Rename your virtual machine to Vanilla OS (or whatever you like!).

![Parallels 8](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-8.webp)

Select the "Customize settings before installation" checkbox. This is important because we need to change one important system setting.

![Parallels 9](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-9.webp)

Selecting "Create" will open the "Vanilla OS" Configuration window. Select the "Hardware" tab.

![Parallels 10](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-10.webp)

Scroll the left-side menu until you see "Boot Order".

![Parallels 11](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-11.webp)

From the "Boot Order" tab, click the "Advanced..." button

![Parallels 12](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-12.webp)

Change "BIOS: Legacy BIOS" to "EFI 64-bit".

![Parallels 13](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-13.webp)

Confirm the changes and close the configuration window.

![Parallels 14](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-14.webp)

Finish virtual machine creation by selecting "Continue".

![Parallels 15](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-15.webp)

Vanilla OS virtual machine will now boot successfully.

![Parallels 16](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-16.webp)

Follow the Vanilla OS on-screen prompts. (For additional details, refer to [**this guide**](https://handbook.vanillaos.org/2022/11/05/installation.html#title7).

![Parallels 17](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-17.webp)

From the Vanilla OS GNOME desktop, select "Activities"

![Parallels 18](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-18.webp)

Search for "Console". Open the Console application.

![Parallels 19](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-19.webp)

Type `sudo abroot shell` into the Console, and press enter to open up the transactional shell. The transactional shell allows you to install drivers and essential packages onto the immutable filesystem. Type `y` and press enter to proceed.

![Parallels 20](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-20.webp)

Type `sudo apt-get install dkms libelf-dev linux-headers-$(uname -r) build-essential`, press enter to install Parallels Tools system dependencies. Type `Y` and press enter to confirm the installation.

![Parallels 21](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-21.webp)

Once the system dependencies has been installed, type `exit` and press enter to leave the elevated transactional shell.

![Parallels 22](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-22.webp)

Type `reboot` and press enter to reboot your Vanilla OS virtual machine.

![Parallels 23](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-23.webp)

In the top-right corner of the Vanilla OS virtual machine window, there should be a triangle warning icon. Click it.

![Parallels 24](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-24.webp)

If you can't see the warning icon, or you have installed Parallels Tools previously, navigate to the MacOS menu bar and select "Actions -> Install Parallels Tools...".

![Parallels 25](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-25.webp)

Read the Parallels Tools installation pop up window and click "Continue".

![Parallels 26](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-26.webp)

Inside Vanilla OS, open the Files app and navigate to the Parallels Tools disc image folder in the left-side menu. Right-click inside the Parallels Tools folder and select "Open in Console".

![Parallels 27](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-27.webp)

Type `cd ../` and press enter to move up one directory in the Linux filesystem. Type `cp -r 'Parallels Tools' /tmp/copy` and press enter to copy the Parallels Tools disc image folder to a temporary directory (Temporary files in `/tmp` get removed after a reboot). Vanilla OS will not execute this mounted virtual image by default, so we must copy the folder and its contents to a safe temporary directory.

![Parallels 28](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-28.webp)

Type `sudo abroot shell` and press enter to open up the transactional shell again.

Type `cd /tmp/copy` and press enter to instruct the Console to navigate to the new temporary directory. Type `sudo ./install` and press enter to begin installing Parallels Tools.

![Parallels 30](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-29-30.webp)

The Console app background should turn blue with a grey Parallels Tools Installer text window. Press the spacebar to select the "Next >" option.

![Parallels 31](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-31.webp)

Confirm installation by pressing the spacebar to select "Next >" again.

![Parallels 32](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-32.webp)

Wait for the installation to finish. Press the tab, and then press the spacebar to exit. We will reboot later once we have exited the transactional shell.

![Parallels 33](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-33.webp)

Type `exit` and press enter.

![Parallels 34](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-34.webp)

Type `reboot` and press enter. You have successfully configured your VM!

You can change more virtual machine performance/sharing/integration options using the Parallels settings menu in the Control Center. Please refer to the [Parallels Knowledge Base](https://kb.parallels.com) for details.

![Parallels 35](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Parallels/vanilla-parallels-install-35.webp)

## Install Vanilla OS in VirtualBox

### Prerequisites

- A Virtualbox Installation from [**here**](https://www.virtualbox.org/).

- Install the Vanilla OS ISO from [**here**](https://github.com/Vanilla-OS/os/releases/latest).

### Installation

Launch VirtualBox from the App Grid. Alternatively, you can run it with the following command from the terminal:-

```bash
virtualbox
```

Click on "New". (This will open the "Create Virtual Machine" Popup)

![VirtualBox 5](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virtualbox/VirtualBox_5.webp)

Specify the name of your Virtual Machine and Installation folder, then select the Vanilla OS ISO image you downloaded earlier. Click on "Next".

![VirtualBox 1](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virtualbox/VirtualBox_1.webp)

Allocate the base memory and the number of processors shared with your VM. Click the checkbox for "Enable EFI (special OSes only)", now click on "Next".

![VirtualBox 2](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virtualbox/VirtualBox_2.webp)

Allocate at least 50 GB of space for your VM, this is required for ABRoot. Now click on "Next".

![VirtualBox 3](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virtualbox/VirtualBox_3.webp)

Confirm the options you selected in the "Summary" and click on the "Finish" button.

![VirtualBox 4](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virtualbox/VirtualBox_4.webp)

Click on "Settings", navigate to "System", and change the boot order to **Harddisk -> Optical -> Floppy**. Go to "Display" and increase the Video memory fully (128 MB here).

![VirtualBox 5](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virtualbox/VirtualBox_5.webp)

| ![VirtualBox 6](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virtualbox/VirtualBox_6.webp) 	| ![VirtualBox 7](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virtualbox/VirtualBox_7.webp) 	|
|:---------------------------------------------------------------------:	|:---------------------------------------------------------------------:	|
| **Default order**                                                     	| **Recommended order**                                                 	|

![VirtualBox 8](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virtualbox/VirtualBox_8.webp)

If you intend on using a Microphone with your VM, go to "Audio" and click on "Enable Audio Input". With all the changes done, click on "Ok".

![VirtualBox 9](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virtualbox/VirtualBox_9.webp)

Now, click the "Start" button to start your VM.

![VirtualBox 10](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virtualbox/VirtualBox_10.webp)

Inside the live session, Click on the top right corner and click on the "Settings" icon. Alternatively, you can press on Windows or the Super key to open the "Activities overview" and then type "Settings" to access it. Now, Navigate to "Displays", and under "Resolution", select a different resolution.

![VirtualBox 11](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virtualbox/VirtualBox_11.webp)

![VirtualBox 12](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virtualbox/VirtualBox_12.webp)

Now, proceed with the Vanilla OS Installation.

For additional installation steps, refer to [**this guide**](https://handbook.vanillaos.org/2022/11/05/installation.html#title7).

### Installing VirtualBox Guest Additions

[Virtualbox Guest Additions](https://www.virtualbox.org/manual/ch04.html) offers enhanced features, between the virtual machine and host, like Clipboard sharing, Seamless Windows, etc.

Due to the nature of ABRoot, the process of its installation is different. Follow this guide to install it in Vanilla OS.

First, enter the transactional shell using the `sudo abroot shell` command, then execute the `sudo apt update` command.

Now, install the required packages and dependencies using the following command:-

```bash
sudo apt install -y build-essential linux-headers-$(uname -r)
```

`exit` the transaction shell and `reboot` your system.

In VirtualBox, select "Insert Guest Additions CD image..." from the "Devices" menu at the top bar.

After mounting the CD image, type `cp -r /media/<username>/Vbox_GAs_<version> /tmp/vbox` in your terminal.
(Temporary files in `/tmp` gets removed after a reboot)

**_Note_**:- The content inside `<>` is a placeholder and must be replaced with the required details.

Now, enter the transactional shell using `sudo abroot shell`, then run `cd /tmp/vbox` to change the current working directory.

Now, execute `./VBoxLinuxAdditions.run`. After the successful execution, build the Kernel modules by typing `/sbin/rcvboxadd quicksetup all` in the terminal.

`exit` the transaction shell and `reboot` your system.

![VirtualBox 13](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/VM_Post/Virtualbox/VirtualBox_13.webp)

Now, you have successfully installed VirtualBox Guest Additions.
