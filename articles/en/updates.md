---
Title: Update and Upgrade Vanilla OS
Description: Learn how to update the operating system.
PublicationDate: 2022-12-10
Authors:
    - mirkobrombin
    - kbdharun
---

> This guide is for Kinetic (22.10), not Orchid. The documentation for Orchid is still being written.

Vanilla OS is a point release distribution that receives two new releases annually with security updates and bug fixes for system components distributed between releases, usually without any new features introduced.

## Difference between Update and Upgrade

"Updates" refers to newer versions of packages that bring minor improvements, bug fixes, and security updates. They get installed in the background and do not make any noticeable changes to the system.

With "Upgrade" instead, we refer to the transition from one release of
Vanilla OS to another, for example, from 22.10 to 23.04. In addition to the usual bug fixes and security updates, there are new features and potential changes to the system.

## Update Vanilla OS

Updates in Vanilla OS are handled by VSO (Vanilla System Operator), which manages the operating system. VSO performs weekly or monthly updates in the background without any user intervention. Since Vanilla OS is a transactional system, the updates are applied only after a reboot.

### Configure VSO

VSO is flexible and allows configurations to suit your needs. The following are the available options:

- **Smart UpPublicationDate:** If enabled, VSO will check whether the system is in an ideal state to perform an update without hindering the user experience. It is done by performing multiple checks, such as the connection, memory, CPU and battery status. When the system is not ideal for performing an update, VSO will skip it and try again later. If disabled, VSO will perform the update without any further checks.
- **Schedule:** VSO allows configurations for performing automatic updates at fixed intervals, such as weekly or monthly. The default setting performs automatic updates at weekly intervals.

#### Configure via Control Center

VSO allows managing updates and configurations via the **Vanilla Control Center**. To do so, open the **Vanilla Control Center**
from the Applications menu, click on the "Updates" tab and configure the options as you wish or check for an update.

![Control Center - Updates](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Updates_and_Upgrade//vanilla-control-center-vso.webp)

#### Configure via Console

To configure VSO via the console, use the following commands:

```bash
# check the current configuration
sudo vso config show

# check a specific option
sudo vso config get update.smart

# update a specific option
sudo vso config set update.smart true
```

## Update

### Check for an update

If you want to check for an update without installing it, you can do so using the following command:

```bash
sudo vso update-check
```

### Force an update

If you want to force an update, you can do so by acting as the system operator,
using the following command:

```bash
sudo vso trigger-update --now
```

## Upgrade to a new release

Vanilla OS checks for a new release in the background and then displays a
dialogue to the user when a new one is available.

![Upgrade dialog](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Updates_and_Upgrade//vanilla-upgrade.webp)

The user can then select to upgrade or postpone it to the next boot.
