---
Title: Install Additional Drivers and Libraries in Vanilla OS
Description: Add supported driver images and required host packages.
PublicationDate: 2026-08-24
Listed: true
Authors:
    - mirkobrombin
    - kbdharun
    - mrunix00
    - NN708
---

Vanilla OS includes drivers for common hardware. Use a supported system image
for NVIDIA hardware or virtual machines. Add individual host packages only when
the required driver or library cannot run in a container.

## NVIDIA drivers

The installer detects NVIDIA hardware and offers the appropriate image. If you
add a supported NVIDIA GPU later, rebase to the standard NVIDIA image:

```bash
abroot rebase ghcr.io/vanilla-os/gnome-nvidia:latest
```

Recent GPUs that need the latest available driver can use:

```bash
abroot rebase ghcr.io/vanilla-os/gnome-nvidia-modern:latest
```

Reboot after the rebase finishes. See [Common NVIDIA issues](nvidia-issues)
before changing images.

## Virtual machine tools

The VM image includes guest tools for supported hypervisors. If this option was
skipped during installation, rebase manually:

```bash
abroot rebase ghcr.io/vanilla-os/gnome-vm:latest
```

Reboot after the rebase finishes.

## Specific host drivers and libraries

Search the [Vanilla OS package repository](https://packages.vanillaos.org/) for
the required host component. Report missing hardware support in the
[desktop image issue tracker](https://github.com/Vanilla-OS/desktop-image/issues/new/choose).

Add a package to the host package list:

```bash
abroot pkg add PACKAGE_NAME
```

Read and accept the host package agreement when prompted. Review the pending
list, then apply it:

```bash
abroot pkg list
abroot pkg apply
```

Reboot after the future system state is ready. Use Flatpak, Apx, or the VSO
native subsystem instead for software that does not require host access.
