---
Title: Install Virtual Manchine Manager and QEMU
Description: Learn how to install Virtual Manchine Manager and QEMU on Vanilla OS.
PublicationDate: 2026-04-05
Listed: true
Authors:
    - NN708
---

## Introduction

[**Virtual Machine Manager (virt-manager)**](https://www.virt-manager.org/) is a powerful graphical tool for managing virtual machines through [**libvirt**](https://libvirt.org/). It allows you to create new virtual machines, manage virtual devices, and access the graphical or serial console of a virtual machine.

[**QEMU**](https://www.qemu.org/) is an open-source machine emulator and virtualizer, that allows you to run KVM virtual machines with near-native performance. It is available as a Flatpak extension for virt-manager.

## Installation

The recommended way to install Virtual Machine Manager and the QEMU add-on is through [**Flatpak**](https://flatpak.org/).

You can proceed using the GNOME Software application as documented [here](https://docs.vanillaos.org/handbook/en/install-and-manage-applications#managing-applications-through-gnome-software) or use the command line as shown below:

```bash
flatpak install flathub org.virt_manager.virt-manager
flatpak install flathub org.virt_manager.virt_manager.Extension.Qemu
```

## Troubleshooting

In this section, we will show you how to fix some common issues you may encounter when using Virtual Machine Manager.

### Could not detect a default hypervisor

When opening virt-manager for the first time, you may see the following message:

```
Could not detect a default hypervisor. Make sure the appropriate QEMU/KVM virtualization and libvirt packages are installed to manage virtualization on this host.
```

You may also encounter this when creating a new virtual machine:

```
Error: No active connection to install on.
```

To resolve this, manually add a connection. Go to "File" -> "Add Connection...", then set the "Hypervisor" to "QEMU/KVM user session". This will allow you to connect to the libvirt user instance.

### No hypervisor options were found

If you see the following error when creating a new virtual machine on your host:

```
Error: No hypervisor options were found for this connection.
```

This likely means the QEMU add-on is not installed correctly. Install it and try again.

### Other issues

If you are experiencing other issues, you can refer to the README of the [**Flathub application repository**](https://github.com/flathub/org.virt_manager.virt-manager) or open an [**issue**](https://github.com/virt-manager/virt-manager/issues) on GitHub.
