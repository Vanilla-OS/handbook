---
Title: Developing in Vanilla OS
Description: Learn how to develop in Vanilla OS.
PublicationDate: 2024-09-12
Listed: true
Authors:
    - mirkobrombin
---

Developing in Vanilla OS is a great experience, thanks to Apx, the built-in package manager that allows you to create custom Linux subsystems. In this guide, we will show you how to set up your development environment in Vanilla OS via Apx.

## Knowing your Apx

Before starting to develop in Vanilla OS, you should know what Apx is and how it works. We have a dedicated article in our blog that explains what Apx is and how to use it. You can read it [here](https://vanillaos.org/blog/article/2024-07-11/discover-apx-v2-the-new-essential-tool-for-developers-and-creators-on-vanilla-os-orchid).

## Setting up your development environment

Let's start with a practical example. We will create a new Apx subsystem for developing in Python and Go. The easiest way to do this is to create a new subsystem based on the `vanilla-dev` stack, which contains a large number of development libraries and both the Python and Go languages.

### Via the Apx GUI

In the Apx GUI you can create a new subsystem by clicking on the `+` button on the top left corner of the window. Then, select the `vanilla-dev` stack and give your subsystem a name. After that, click on the `Create` button to create your new subsystem.

Once the subsystem is created, you will see it in the list of available subsystems, in the sidebar on the left. You can start using it by clicking on the subsystem name and then clicking on the terminal icon on the bottom right corner of the window.

This will open a new terminal window inside your new subsystem where you can install extra packages using the package manager of the distribution, for example, `apt` for the `vanilla-dev` stack. For example, to install the Rust language, you can run the following command:

```bash
sudo apt-get install rustc
```

This will install the Rust language in your new subsystem.

### Via the Apx CLI

You can also create a new subsystem via the Apx CLI. Open the terminal and run the following command:

```bash
apx subsystems new --name my-dev --stack vanilla-dev
```

This command will create a new subsystem named `my-dev` based on the `vanilla-dev` stack. You can start using it by running the following command:

```bash
apx my-dev enter
```

This will open a new terminal window inside your new subsystem.

## Developing in your new subsystem

> The following commands assume you are using the `vanilla-dev` stack or any other debian-based stack, like `ubuntu`. For other stacks, the commands may be different according to the package manager used by it, for example, `pacman` for Arch-based stacks.

Now that you have your new subsystem set up, you may want to use an IDE to develop your projects. You can install your favorite IDE directly in your subsystem using Apx. For example, to install Visual Studio Code, you can run the following command:

```bash
apx my-dev enter
sudo apt-get install wget gpg
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" |sudo tee /etc/apt/sources.list.d/vscode.list > /dev/null
rm -f packages.microsoft.gpg
sudo apt install apt-transport-https
sudo apt update
sudo apt install code
exit
```

This will install Visual Studio Code in your new subsystem. You can then start it by running `code` in the terminal, or you can export it to your host system by running `apx my-dev export -a code`, this will create a desktop shortcut for Visual Studio Code in your applications menu.

## Automating your development environment

Once you found the perfect setup for your development environment, you can automate the creation of your subsystem using a custom Apx stack. This way, you can create a new subsystem with all the tools you need in a single command.

### Via the Apx GUI

In the Apx GUI, you can create a new stack by clicking on the arrow next to the `+` button on the top left corner of the window. Then, select **New Stack**, then fill in the required fields:

- **Name**: The name of your new stack.
- **Base**: The base image of your new stack (any OCI image, for example `ghcr.io/vanilla-os/dev:main` to use the same base as the `vanilla-dev` stack).
- **Package Manager**: The package manager used by the base image (for example, `apt` for the `vanilla-dev` stack and other debian-based stacks).
- **Packages**: The packages you want to install in your new stack (for example, `rustc` to install the Rust language).

After filling in the required fields, click on the **Create** button to create your new stack. You can then create a new subsystem based on this stack by clicking on the `+` button on the top left corner of the window and selecting your new stack.

### Via the Apx CLI

You can also create a new stack via the Apx CLI. Open the terminal and run the following command:

```bash
apx stacks new
```

then follow the instructions to create your new stack.

Once you have your new stack, you can create use it to create one or more subsystems.

### Advanced usage

For more advanced automation, you can build your own OCI image with all the tools you need and use it as the base for your new stack. This way, you can create a new subsystem with all the tools you need in a single command.

This requires some knowledge of OCI images and how to build them. We suggest you take a look at [Vib](https://vib.vanillaos.org/) which is a tool that simplifies the creation of OCI images.
