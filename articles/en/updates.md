---
Title: Update and Upgrade Vanilla OS
Description: Check for and apply Vanilla OS system updates.
PublicationDate: 2026-08-24
Listed: true
Authors:
    - mirkobrombin
    - kbdharun
---

Vanilla OS ships system updates as complete OCI images. ABRoot prepares the new
image in a future system state while the current state remains available. The
new state is selected after a reboot.

Flatpak applications and packages inside Apx or VSO subsystems use their own
update mechanisms.

## Check for a system update

Open the terminal and run:

```bash
vso upgrade check
```

For machine-readable output, use:

```bash
vso upgrade check --json
```

## Apply a system update

Prepare the available image:

```bash
vso upgrade
```

You can continue using the system while the future state is prepared. Reboot
when the command finishes to enter the updated state.

To reboot as soon as the upgrade is ready, run:

```bash
vso upgrade --now
```

The equivalent lower-level ABRoot commands are:

```bash
sudo abroot upgrade --check-only
sudo abroot upgrade
```

## Update configuration

Show the current VSO configuration or inspect one setting:

```bash
vso config show
vso config get updates.smart
```

Change a setting with positional arguments:

```bash
sudo vso config set updates.smart true
sudo vso config set updates.schedule weekly
```

`updates.smart` accepts `true` or `false`. `updates.schedule` accepts `never`,
`daily`, `weekly`, or `monthly`.

## Roll back an update

If the new state causes a problem, check and activate the previous state:

```bash
sudo abroot rollback --check-only
sudo abroot rollback
```

Reboot to complete the rollback. See [Roll back an update](rollback) for the
full procedure.
