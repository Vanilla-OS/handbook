---
Title: Create a swapfile (increase swap space)
Description: Creating a swapfile to increase swap space without creating a new partition
PublicationDate: 2026-08-24
Listed: true
Authors:
    - taukakao
    - acerspyro
---

## Create the file

Store the swap file under `/var`, which persists across ABRoot system states.
Disable copy-on-write before allocating the file when `/var` uses Btrfs, as it
does by default.

```bash
host-shell pkexec
truncate -s 0 /var/swapfile
chattr +C /var/swapfile
fallocate -l 3G /var/swapfile
chmod 0600 /var/swapfile
mkswap /var/swapfile
nano /etc/fstab
```

Change `3G` to the required size. Add this line to `/etc/fstab`:

```text
/var/swapfile none swap defaults 0 0
```

Save the file, enable the entry, and leave the host shell:

```bash
swapon -a
exit
```

Verify the active swap file:

```bash
host-shell pkexec swapon --show
```
