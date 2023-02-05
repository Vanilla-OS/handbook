---
title: Install Vanilla OS in a VM
description: Learn how to install Vanilla OS in a VM
date: 2023-01-21
layout: article
authors: 
    - MonsterObserver
    - kbdharun
    - johnaaron-git
published: true
---

## Introduction

If you are interested in Vanilla OS, it's a good idea to try it out in a VM first before using it on your hardware. This guide will show you how to install Vanilla OS with various VM software.

## Install Vanilla OS in Gnome Boxes

### Prerequisites

- Make sure Flatpak is installed. You can check out how to install it [**here**](https://handbook.vanillaos.org/2022/12/09/install-flatpaks.html).

- Install "Gnome Boxes" from the "Gnome Software" application. Alternatively you can install it with the following command:-

```bash
flatpak install flathub org.gnome.Boxes
```

- Install the Vanilla OS ISO [**here**](https://github.com/Vanilla-OS/os/releases/latest).

### Installation

- Launch Gnome Boxes from the App Grid. Alternatively you can run it with the following command:-

```bash
flatpak run org.gnome.Boxes
```

- Click on the "+" icon:-

![Gnome Boxes 1](/assets/uploads/VM_Post/Boxes/vm-boxes1.webp)

- Click on "Create virtual machine from file":-

![Gnome Boxes 2](/assets/uploads/VM_Post/Boxes/vm-boxes2.webp)

- Choose the Vanilla OS ISO from the file picker and click on "Open":-

![Gnome Boxes 3](/assets/uploads/VM_Post/Boxes/vm-boxes3.webp)

- Leave the Template on "Unknown OS" and click on "Next":-

![Gnome Boxes 4](/assets/uploads/VM_Post/Boxes/vm-boxes4.webp)

- We recommend you use a minimum of 4GB Memory to ensure good performance. You also need to use a minimum of 50GB Storage for ABRoot. Now click on "Create":-

![Gnome Boxes 5](/assets/uploads/VM_Post/Boxes/vm-boxes5.webp)

- Vanilla OS will now boot:-

![Gnome Boxes 6](/assets/uploads/VM_Post/Boxes/vm-boxes6.webp)

- For the installation steps, refer to [**this guide**](https://handbook.vanillaos.org/2022/11/05/installation.html#title7).
