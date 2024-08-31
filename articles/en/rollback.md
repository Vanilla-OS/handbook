---
Title: Rollback to the Previous Version
Description: Learn how to rollback to the previous version of Vanilla OS.
PublicationDate: 2024-09-31
Listed: true
Authors:
    - mirkobrombin
---

Vanilla OS is designed to be reliable and stable, each upgrade is performed atomically to ensure the whole process is successful. However, if you encounter any issues after an upgrade, you can easily rollback to the previous version.

## Understanding the ABRoot System

ABRoot is the core of Vanilla OS, it provides immutability and atomic upgrades. The system is divided into two partitions: the active partition and the inactive partition. The active partition is the one currently in use, while the inactive partition is the one that will be used rebooting after an upgrade. This means we have two versions of the system installed at the same time and we can switch between them in case of issues.

## Rollback to the Previous Version

To rollback to the previous version of Vanilla OS, you need to reboot the system and select the previous version from the boot menu (GRUB). The boot menu will show you the two root partitions:

- Current State (A)
- Previous State (B)

Select the "Previous State (B)" and press Enter to boot the system with the previous version. After the system is booted, Vanilla OS will propose you to rollback to the previous version permanently. Confirm the rollback and the system will be downgraded to the previous version, which means the next upgrade will be performed on the previous version.
