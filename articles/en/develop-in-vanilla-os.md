---
Title: Developing in Vanilla OS
Description: Create a development environment with Apx 3.
PublicationDate: 2026-08-24
Listed: true
Authors:
    - mirkobrombin
---

Apx provides isolated development environments without adding tools to the
Vanilla OS host image. Your project files remain available through the home
directory shared with the subsystem.

## Create a development subsystem

List the stacks included with your Apx configuration:

```bash
apx stacks list
```

The `vanilla-dev` stack uses the Vanilla OS Pico image and includes common
development tools. Create and enter a subsystem based on it:

```bash
apx subsystems new --name my-dev --stack vanilla-dev
apx my-dev enter
```

Use a private home directory when the tools should not read your normal user
configuration:

```bash
apx subsystems new --name isolated-dev --stack vanilla-dev --home ~/apx-homes/isolated-dev
```

## Install tools

Use Apx commands from the normal terminal:

```bash
apx my-dev update
apx my-dev install git gcc python3
apx my-dev upgrade
```

You can also enter the subsystem and use its package manager directly. The
commands depend on the selected stack.

Run a single tool without entering the subsystem:

```bash
apx my-dev run python3 --version
```

## Export a tool

Expose a command or desktop application to your normal user environment:

```bash
apx my-dev export --bin python3
apx my-dev export --app APP_NAME
```

Use `unexport` with the same option to remove it.

## Define a custom stack

Create a stack interactively with:

```bash
apx stacks new
```

A stack selects an OCI base image, package manager, and initial packages. Use a
custom stack when several development subsystems need the same tools. For a
fully reproducible custom OCI image, see the [Vib documentation](https://vib.vanillaos.org/).
