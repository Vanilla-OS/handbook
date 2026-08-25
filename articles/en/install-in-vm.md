---
Title: Install Vanilla OS in a Virtual Machine
Description: Create a virtual machine for Vanilla OS 3 Reunion.
PublicationDate: 2026-08-24
Listed: true
Authors:
    - MonsterObserver
    - kbdharun
    - johnaaron-git
---

Vanilla OS can run in GNOME Boxes, virt-manager, VMware, Parallels Desktop, and
VirtualBox. The same guest requirements apply to each hypervisor.

## Requirements

- A 64-bit x86_64 or AArch64 virtual machine matching the downloaded image.
- UEFI firmware.
- At least 4 GB of RAM; 8 GB is recommended.
- At least 50 GB of virtual disk space for the ABRoot system states.
- Two virtual CPU cores or more.
- Hardware virtualization enabled on the host.

Download Vanilla OS 3 Reunion from the
[official download page](https://vanillaos.org/download/reunion/stable).

## Create the virtual machine

1. Create a new VM from the downloaded ISO.
2. Select a recent generic Linux or Debian 64-bit guest when the exact Vanilla
   OS entry is unavailable.
3. Enable UEFI firmware and attach the virtual disk to a standard SATA, SCSI,
   or VirtIO controller.
4. Allocate the resources listed above.
5. Boot the ISO and follow the [installation guide](installation).

The installer detects common virtual machines and offers the matching guest
tools. Choose the recommended option unless you intend to manage the image
yourself.

## Hypervisor notes

### GNOME Boxes and virt-manager

Use the default QEMU/KVM settings with UEFI. VirtIO storage, networking, and
graphics provide the best integration on a Linux host.

GNOME Boxes is available from Flathub:

```bash
flatpak install flathub org.gnome.Boxes
```

### VMware

If the live session displays a black screen or graphical corruption, disable
3D acceleration in the VM display settings and boot the ISO again. Install the
VM tools offered during Vanilla OS setup.

### Parallels Desktop

Use the ISO that matches the Mac architecture: AArch64 on Apple silicon and
x86_64 on Intel. Select a generic Linux guest and enable UEFI.

### VirtualBox

Enable EFI in the VM system settings. If the graphical session fails, change
the graphics controller or disable 3D acceleration. Use the VM tools offered by
the installer instead of installing Guest Additions with host package commands.

## Change to the VM image later

If VM tools were skipped during installation, rebase to the supported VM image:

```bash
abroot rebase ghcr.io/vanilla-os/gnome-vm:latest
```

Reboot after the rebase finishes.
