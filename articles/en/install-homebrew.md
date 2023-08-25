---
Title: Installing Homebrew in Vanilla OS
Description: Learn how to Install and setup Homebrew in Vanilla OS.
PublicationDate: 2022-01-26
Authors:
    - kbdharun
---

## Terminologies

- **Package Manager**:- A package manager or package-management system is a utility with a collection of software tools that automates installing, upgrading, configuring, and removing applications or packages.

`apx` is the package manager which comes with Vanilla OS.

- **Homebrew**:- Homebrew is a popular package manager for installing and managing packages in Mac and Linux. It contains thousands of packages and comes built-in with powerful tools and functionality. It supports installing packages in the `home` directory and is fully compatible with Vanilla OS.

## Installing Git

`git` is an essential dependency for installing Homebrew.
Run the `git` command in your terminal to check if it exists already. If `git` doesn't exist in your system, you can install it using the following command:-

```bash
sudo abroot exec apt install git
```

After executing the above command, reboot your system to proceed with the guide below.

## Installing Homebrew

Once `git` is present in your system, you can install Homebrew in the terminal without any superuser privileges using the following command:-

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Once installation is complete, you will see this message:-

![Homebrew Post Installation message](/assets/uploads/Miscellaneous/homebrew-post-installation-message.webp)

Now, execute the commands the message gives you to add Homebrew to your `$PATH`. To see if everything worked correctly, install a test package (`brew install hello`), then check the installation by typing `hello` in your terminal.
