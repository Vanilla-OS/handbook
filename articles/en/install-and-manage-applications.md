---
Title: Install and Manage Applications
Description: Choose and manage application sources in Vanilla OS.
PublicationDate: 2026-08-24
Listed: true
Authors:
    - kbdharun
    - MonsterObserver
    - mirkobrombin
---

Vanilla OS supports several application formats. Use Flatpak for most desktop
applications, the VSO native subsystem for Debian packages, and Apx for custom
development or distribution environments.

## Flatpak applications

Flathub is enabled by default. Open the Software application to search,
install, update, and remove Flatpak applications.

The same operations are available in the terminal:

```bash
flatpak search APPLICATION
flatpak install flathub APPLICATION_ID
flatpak update
flatpak uninstall APPLICATION_ID
```

See [Install Flatpaks](install-flatpaks) for more detail.

## Debian packages in the native subsystem

The terminal opens in the VSO native subsystem. Initialize it if needed:

```bash
vso native init
```

Manage packages without entering a separate shell:

```bash
vso native install PACKAGE
vso native remove PACKAGE
vso native update
vso native upgrade
```

Enter the environment for direct access to its Debian tools:

```bash
vso native shell
```

### Local DEB files

Sideload a downloaded Debian package with:

```bash
vso native sideload PACKAGE.deb
```

Only install files obtained from a source you trust.

### Export applications and commands

Make an installed graphical application visible in the desktop application
menu:

```bash
vso native export --app APP_NAME
```

Export a command to the user environment:

```bash
vso native export --bin COMMAND
```

Use the matching `unexport` command to remove an export.

## Apx subsystems

Apx creates isolated subsystems from predefined stacks. Vanilla OS 3 includes
Debian and openSUSE Leap options, and supports custom stacks.

List the installed resources and create a subsystem:

```bash
apx stacks list
apx subsystems list
apx subsystems new --name my-dev --stack vanilla-dev
```

Manage packages by placing the subsystem name after `apx`:

```bash
apx my-dev update
apx my-dev install git
apx my-dev upgrade
apx my-dev remove git
```

Enter the subsystem with `apx my-dev enter`. Export applications and commands
with `apx my-dev export --app APP_NAME` or
`apx my-dev export --bin COMMAND`.

See the [Apx documentation](https://docs.vanillaos.org/docs/en/apx) for stack
creation and the complete command reference.

## Host packages

Do not add ordinary applications to the immutable host. `abroot pkg` is for
drivers, kernel modules, and other components that cannot run in a subsystem.
Host package changes build a future system state and require a reboot.

