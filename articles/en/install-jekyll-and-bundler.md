---
Title: Installing Jekyll & Bundler
Description: Learn how to install Jekyll & Bundler on Vanilla OS.
PublicationDate: 2023-01-23
Listed: true
Authors:
    - gonzoknows
    - kbdharun
    - mirkobrombin
---

## Introduction

Jekyll is a popular static site generator for creating blogs, documentation, and personal websites.

Bundler is a package manager for Ruby, which helps manage dependencies in Jekyll projects.

This guide goes through the process of installing Jekyll and Bundler in Vanilla OS using apx.

## Installing Jekyll and Bundler

We'll use apx to install Jekyll and Bundler on a Ubuntu-based subsystem, assuming you have already configured an Ubuntu subsystem using apx. we'll refer to it as `my-ubuntu`, so change this to your container name if it's different.

Enter the container using the following command:-

```bash
apx my-ubuntu enter
```

Install the required prerequisite packages using the following command:-

```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
```

After installation, execute the following commands:-

```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

Now, install Jekyll and Bundler using the following command:-

```bash
gem install jekyll bundler
```

You have now successfully installed the packages. You can execute them using `apx my-ubuntu run <command>`, or directly by entering the container using `apx my-ubuntu enter`.

Optionally, you can export the binary to use it from the host directly without requiring the `apx my-ubuntu run` command. You can do this by using the following commands on a new terminal window:-

```bash
apx my-ubuntu export -b jekyll
apx my-ubuntu export -b bundler
```

You can now use Jekyll and Bundler directly from the host terminal by executing `jekyll` or `bundler`.
