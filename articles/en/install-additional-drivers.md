---
Title: Install additional drivers and libraries in Vanilla OS
Description: Learn how to install Additional drivers and libraries in Vanilla OS.
PublicationDate: 2022-12-10
Listed: true
Authors:
    - mirkobrombin
    - kbdharun
    - mrunix00
---

Drivers are software components that allow the operating system to communicate with hardware devices. Libraries are collections of precompiled functions that can be used by applications to perform specific tasks, for example `libfuse` is a library that allows applications to interact with the FUSE filesystem.

Vanilla OS comes with a large number of drivers pre-installed, but sometimes you may need to install additional drivers to get the best performance from your hardware.

## NVIDIA® Drivers

Nvidia drivers are detected and installed automatically in Vanilla OS during the installation process. However, if you have recently switched to a new Nvidia graphics card, you may need to install the drivers manually. We have plans to provide a simple way to install Nvidia drivers in the future, but for now, you can install them using the following command in your VSO Shell:

```bash
abroot config-editor
```

here change the `name` parameter to `vanilla-os/nvidia` and save the file. 

Then run:

```bash
abroot upgrade -f
```

once done, reboot your system to start using the new drivers.

## VM Tools

Open VM Tools are a set of tools that enhance the performance of a virtual machine running on a hypervisor. They provide features such as file sharing, clipboard sharing, and better graphics performance.

Virtual machines running Vanilla OS will be prompted to install Open VM Tools during the installation process. If you skipped this step or need to install them later, you can do so by running the following command in your VSO Shell:

```bash
abroot config-editor
```

here change the `name` parameter to `vanilla-os/open-vm` and save the file. Then run:

```bash
abroot upgrade -f
```

once done, reboot your system to start using the new drivers.

## Specific Drivers (e.g., Printer, Scanner) and Libraries

If for some reason, your device is not covered by our default drivers, you can install specific drivers for your hardware. You can find drivers for most devices on our [packages repository](https://packages.vanillaos.org/). If you can't find the driver you need, you can [report to us](https://github.com/Vanilla-OS/desktop-image/issues/new/choose) and we will try to figure out a solution for you.

Once you have identified the package you need, you can install it using the following command in your VSO Shell:

```bash
abroot pkg add PACKAGE_NAME
```

/*
vos% abroot pkg list
 INFO  To utilize ABRoot's abroot pkg command, explicit user agreement is required. This command facilitates package installations but introduces non-deterministic elements, impacting system trustworthiness. By consenting, you acknowledge and accept these implications, confirming your awareness of the command's potential impact on system behavior. [y/N]: 
*/

You will promped to accept the User Agreement:

```bash
INFO  To utilize ABRoot's abroot pkg command, explicit user agreement is required. This command facilitates package installations but introduces non-deterministic elements, impacting system trustworthiness. By consenting, you acknowledge and accept these implications, confirming your awareness of the command's potential impact on system behavior. [y/N]: 
```

After reading and accepting the User Agreement, the package will be queued for installation. You can then proceed with the installation by running the following command:

```bash
abroot pkg apply
```

Once the installation is complete, reboot your system to start using the new drivers.