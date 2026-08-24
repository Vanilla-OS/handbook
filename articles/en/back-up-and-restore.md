---
Title: Back Up and Restore with Continuity
Description: Create, inspect, and restore Continuity snapshots in Vanilla OS 3.
PublicationDate: 2026-08-24
Listed: true
Authors:
    - Vanilla-OS
---

Continuity backs up user home directories, installed Flatpak application IDs,
and ABRoot metadata. Vanilla OS 3 Reunion includes Continuity 1.0.

## Create a snapshot

Open the terminal and run:

```bash
host-shell pkexec continuity backup
```

Add a label when the snapshot has a specific purpose:

```bash
host-shell pkexec continuity backup before-hardware-change
```

Preview the operation without writing a snapshot:

```bash
host-shell pkexec continuity backup --dry-run
```

## Review snapshots

List saved snapshots and copy the ID you want to inspect:

```bash
host-shell pkexec continuity list --details
host-shell pkexec continuity inspect SNAPSHOT_ID
```

## Restore a snapshot

Run a dry run first:

```bash
host-shell pkexec continuity restore SNAPSHOT_ID --dry-run
```

Review the output, close applications that use the affected files, then apply
the restore:

```bash
host-shell pkexec continuity restore SNAPSHOT_ID
```

Continuity restores the data supplied by each provider in the snapshot. This
can include home directory data, Flatpak applications, and ABRoot metadata.

## Remove old snapshots

Continuity keeps the seven newest snapshots by default. Preview and apply a
different retention count with:

```bash
host-shell pkexec continuity prune --keep-last 5 --dry-run
host-shell pkexec continuity prune --keep-last 5
```

## Use an external drive

List candidate devices:

```bash
host-shell pkexec continuity device list
```

The `continuity device init` command formats its target and destroys existing
data. Confirm the device path and review `continuity device init --help` before
using it. LUKS2 encryption is enabled by default.

Unlock an initialized device before a backup, then lock it when finished:

```bash
host-shell pkexec continuity device unlock /dev/DEVICE
host-shell pkexec continuity backup external-drive
host-shell pkexec continuity device lock /dev/DEVICE
```

See the [Continuity documentation](https://docs.vanillaos.org/docs/en/continuity)
for configuration, remote repositories, and the complete command reference.
