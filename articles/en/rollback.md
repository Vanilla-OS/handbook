---
Title: Roll Back to the Previous System State
Description: Return Vanilla OS to the previous ABRoot state.
PublicationDate: 2026-08-24
Listed: true
Authors:
    - mirkobrombin
---

ABRoot keeps the previous system state after an upgrade so you can return to it
if the new image causes a problem.

## Roll back from the running system

Check whether a previous state is available:

```bash
sudo abroot rollback --check-only
```

Select it for the next boot:

```bash
sudo abroot rollback
```

Reboot to enter the selected state.

## Roll back when the current state does not boot

Restart the computer and open the boot menu. Select the previous Vanilla OS
state. After it starts, confirm the rollback when prompted or run
`sudo abroot rollback` to make the selection persistent.

Do not delete the old system during upgrades until the new state has been
tested. Options such as `abroot upgrade --delete-old-system` remove the state
needed by this procedure.
