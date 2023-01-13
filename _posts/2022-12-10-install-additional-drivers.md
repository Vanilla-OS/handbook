---
title: Install additional drivers in Vanilla OS
description: Learn how to install Additional drivers in Vanilla OS.
date: 2022-12-10
layout: article
authors: 
    - mirkobrombin
    - kbdharun
published: true
---

Drivers are software components that allow the operating system to communicate with hardware devices.

In Vanilla OS, primary drivers are installed automatically during the first setup, but some devices may need additional drivers to work ideally. You can install them using two methods: 
- **Vanilla Control Center** 
- **Manual installation in the transactional shell.**

## Vanilla Control Center

**Vanilla Control Center** is a graphical tool that allows you to configure the
operating system and install additional drivers. Launch it from the Applications menu, then click on the "**Drivers**" tab.

![Vanilla Control Center](/assets/uploads/vanilla-control-center.webp)

Here you can see a list of all the drivers available, organized by category. To install a driver, click on it, then press the "Apply Changes" button in
the top-right corner.

![Vanilla Control Center - Drivers](/assets/uploads/vanilla-control-center-install-driver.webp)

Once the installation is complete, you will be requested to reboot the system.

## Manual installation

### APT Package

- If you prefer to install drivers manually, you can do so using the transactional shell. Open the terminal and run the following command:

```bash
sudo abroot exec apt install <driver>
```

Where `<driver>` is the package name that offers the driver you want to
install. For example, installing the NVIDIA driver at version 525 can be done by executing the following command:

```bash
sudo abroot exec apt install nvidia-driver-525
```

- After installation, exit the shell using the `exit` command and wait for the changes to be applied, then reboot once the installation is complete.

### DEBs

- You can install drivers present as DEB files through ABRoot using the following steps:-
	- In a non-privileged terminal, you can copy the DEB file to `/tmp` using the following command:-

```bash
cp <path/to/driver.deb> /tmp
```
	- Now, Enter ABRoot Shell using the following command, `cd` to the required directory:-

```bash
sudo abroot shell
cd /tmp
```
Now, you can install DEBs using `apt`:-

```bash
sudo apt install ./<driver>.deb
```

(This will automatically install the required dependencies,)

- Alternatively, you can install DEBs using `dpkg`:-

```bash
 sudo dpkg -i <driver>.deb
sudo apt-get install -f
```

**_Note_**:- `sudo apt-get install -f` is required to fix broken or missing dependencies.

- After installing the drivers, exit the shell using the `exit` command and wait for the changes to apply. Reboot your system for the transaction to take place.

Congratulations, You have successfully installed the necessary drivers.
