---
title: Install additional drivers in Vanilla OS
description: Learn how to install additional drivers in Vanilla OS.
date: 2022-12-10
layout: article
authors: 
    - mirkobrombin
published: true
---

Drivers are software components that allow the operating system to communicate with
hardware devices.

In Vanilla OS, primary drivers are installed automatically during the first setup,
but some devices may still need additional drivers to work properly. You can install them using two methods: Vanilla Control Center or a manual installation
in a transactional shell.

## Vanilla Control Center

Vanilla Control Center is a graphical tool that allows you to configure the
operating system and install additional drivers. Launch it from the Applications
menu, then click on the "Drivers" tab.

![Vanilla Control Center](/assets/uploads/vanilla-control-center.png)

Here you can see a list of all the drivers available, organized by category. To
install a driver, simply click on it, then press the "Apply Changes" button in
the top-right corner.

![Vanilla Control Center - Drivers](/assets/uploads/vanilla-control-center-install-driver.png)

Once the installation is complete, you will be asked to reboot the system.

## Manual installation

If you prefer to install drivers manually, you can do so using a transactional
shell. Open a terminal and run the following command:

```bash
sudo abroot exec apt install <driver>
```

where `<driver>` is the package name that offers the driver you want to
install. For example, to install the NVIDIA driver at version 525, you can run:

```bash
sudo abroot exec apt install nvidia-driver-525
```

then reboot once the installation is complete.
