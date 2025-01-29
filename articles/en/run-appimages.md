---
Title: Manage AppImages with Gear Lever
Description: Learn how to run and manage AppImages with Gear Lever
PublicationDate: 2025-01-28
Listed: true
Authors:
    - trwy7
---

## Warning

Before we start, check if the app you are attempting to install does not have another way, like [flatpak](https://docs.vanillaos.org/handbook/en/install-and-manage-applications#managing-applications-through-gnome-software) or [apx](https://docs.vanillaos.org/handbook/en/install-and-manage-applications#installing-applications-from-other-linux-distributions). AppImages may have compatibility or dependency issues that are not covered here. AppImages will have complete access to your data. Be careful and make sure you trust the developer of your AppImage.

## Installation

### Dependencies

AppImages require fuse, which you can install using abroot. Open a terminal and run:
```bash
abroot pkg add libfuse2t64
abroot pkg apply
```
Restart your computer to apply the changes.

### Installing Gear Lever

You may install Gear Lever using GNOME Software, or the command line as shown:

```bash
flatpak install flathub it.mijorus.gearlever
```

## Adding your first AppImage

Find the AppImage you want to run, and double click it. You should see something similar to the image below.

![Gear Lever UI](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/GearLeverAppimage/first-launch.png)

Click unlock to confirm you trust the developer. You may now click launch to run the AppImage, or for convenience, click "Move to the app menu" to add the AppImage to your applications menu.

## Configuring updates

AppImages do not natively support updates, but you can update your AppImage using Gear Lever. First, open Gear Lever, and make sure that your AppImage is added to the applications menu. Then, scroll down to update management. The currently supported update sources are static link and GitHub.

### Static link

Set the source to Static URL and paste the link in the Update URL box.

### GitHub

Set the source to GitHub and paste the link in the Update URL box, then modify the URL to replace the version number with an asterisk (*). (e.g. v1.2.3/name-1.2.3-amd64.AppImage > v\*/name-\*-amd64.AppImage)