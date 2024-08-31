---
Title: Build Flatpak(s) in Vanilla OS
Description: Learn how to build Flatpak(s) in Vanilla OS.
PublicationDate: 2024-09-31
Listed: true
Authors:
    - mirkobrombin
---

Flatpak is a universal package format for Linux desktop applications. You can install them from the GNOME Software or using the command line. Optionally, you can also build them from source.

## Requirements

To build a Flatpak, you need to have the Flatpak Builder installed. You can install it with the following command:

```bash
flatpak install --user org.flatpak.Builder
```

This way the Flatpak Builder will be installed in the user space as a Flatpak itself.

## Build a Flatpak

First you need to clone the repository of the application you want to build or create your own [Flatpak manifest](https://docs.flatpak.org/en/latest/manifests.html). Then enter the root directory of the application and find the `org.example.Application.json` or `org.example.Application.yaml` file, also known as the manifest file. Inside the manifest file, you can find multiple fields that you can customize, such as the application ID, the runtime, the SDK, the sources, and the build options. Let's focus on the SDKs, extensions and base/runtime used to build the application, for example the following is the header of the Bottles manifest file:

```yaml
id: com.usebottles.bottles
sdk: org.gnome.Sdk
runtime: org.gnome.Platform
base: org.winehq.Wine
base-version: stable-23.08
runtime-version: '46'
command: bottles
sdk-extensions:
  - org.gnome.Sdk.Compat.i386
  - org.freedesktop.Sdk.Extension.toolchain-i386
```

We need to install the runtime, the SDK, and the extensions used to build the application. For example, to install the runtime:

```bash
flatpak install --user org.gnome.Platform
```

this will show you the available versions of the runtime, choose the one you need according to the manifest file:

```
Looking for matches…
Similar refs found for ‘org.gnome.Platform’ in remote ‘flathub’ (user):

   1) runtime/org.gnome.Platform/x86_64/3.24
   2) runtime/org.gnome.Platform/x86_64/3.26
   3) runtime/org.gnome.Platform/x86_64/3.28
   4) runtime/org.gnome.Platform/x86_64/3.30
   5) runtime/org.gnome.Platform/x86_64/3.32
   6) runtime/org.gnome.Platform/x86_64/3.34
   7) runtime/org.gnome.Platform/x86_64/3.36
   8) runtime/org.gnome.Platform/x86_64/3.38
   9) runtime/org.gnome.Platform/x86_64/40
  10) runtime/org.gnome.Platform/x86_64/41
  11) runtime/org.gnome.Platform/x86_64/42
  12) runtime/org.gnome.Platform/x86_64/43
  13) runtime/org.gnome.Platform/x86_64/45
  14) runtime/org.gnome.Platform/x86_64/44
  15) runtime/org.gnome.Platform/x86_64/46

Which do you want to use (0 to abort)? [0-15]:
```

which is the number `15` (GNOME 46). Then do the same for the SDK and the extensions.

Finally, you can build the application with the following command:

```bash
flatpak run org.flatpak.Builder build com.usebottles.bottles.yml --user --install --force-clean
```

where `com.usebottles.bottles.yml` is the manifest file of the application. This command will build the application, install it in the user space, and clean the build directory.

## Run the application

Once the application is built, you can run it with the following command:

```bash
flatpak run com.usebottles.bottles
```

or you can find it in the "Applications" menu.
