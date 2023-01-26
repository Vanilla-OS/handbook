---
title: Installing Jekyll & Bundler
description: Learn how to install Jekyll & Bundler on Vanilla OS
date: 2023-01-23
layout: article
authors: 
    - gonzoknows
    - kbdharun
published: true
---

## Introduction

- Jekyll is a popular static site generator for creating blogs, documentation, and personal websites. 
- Bundler is a package manager for Ruby, which helps manage dependencies in Jekyll projects.
- This guide goes through the process of installing Jekyll and Bundler in Vanilla OS using apx. 

## Installing Jekyll and Bundler

- Open your preferred Terminal emulator/application, and follow the steps to install it in a specific container.

### Ubuntu container

- Enter the container using the following command:-

```bash
apx enter
```
- Install the required prerequisite packages using the following command:-

```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
```

- After installation, execute the following commands:-

```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

- Now, install Jekyll and Bundler using the following command:-

```bash
gem install jekyll bundler
```

- You have now successfully installed the packages. You can execute them using `apx run <command>`, or directly by entering the container using `apx enter`.

- Optionally, you can export the binary to use it from the host directly without requiring the `apx run` command. You can do this by using the following commands:-

```bash
apx export --bin jekyll
apx export --bin bundler
```

### Fedora container

- Enter the container using the following command:-

```bash
apx enter --dnf
```
- Install the required prerequisite packages using the following command:-

```bash
sudo dnf install ruby ruby-devel make gcc g++
```

- Now, install Jekyll using the following command:-

```bash
gem install jekyll
```

- You have now successfully installed the packages. You can execute them using `apx run --dnf <command>`, or directly by entering the container using `apx enter --dnf`.

- Optionally, you can export the binary to use it from the host directly without requiring the `apx run --dnf` command. You can do this by using the following commands:-

```bash
apx export --dnf --bin jekyll
apx export --dnf --bin bundler
```

### Arch Linux container

- Enter the container using the following command:-

```bash
apx enter --aur
```
- Install the required prerequisite packages using the following command:-

```bash
sudo pacman -S ruby base-devel
```

- Now, install Jekyll using the following command:-

```bash
gem install jekyll
```

- You have now successfully installed the packages. You can execute them using `apx run --aur <command>`, or directly by entering the container using `apx enter --aur`.

- Optionally, you can export the binary to use it with the host directly without requiring the `apx run --aur` command. You can do this by using the following commands:-

```bash
apx export --aur --bin jekyll
apx export --aur --bin bundler
```

## Testing sites from a repository locally

- Clone a repository using `git` or `gh`.
- Move to the destination of the cloned directory using `cd <path/to/directory>`.
- Run `bundler install` to install necessary packages (This step is required only once and doesn't require re-running it in future. You must have a Gemfile in the repository for this to work).
- Run `bundler exec jekyll build` to build the page to `./_site` once. Then you can either test the pages manually or use the `bundler exec jekyll serve` command.
- Run `bundler exec jekyll serve` to build your site any time a source file changes and serve it locally.
  - Navigate to `http://127.0.0.1:4000/` or `http://localhost:4000/` in your browser to preview and test the page.
- Now, commit the changes using `git` and create a PR in GitHub.

**_Tip_**:-

- You can test your pages on your phone using `bundler exec jekyll serve --host=<ip>`. 
- Using `0.0.0.0` instead of a specific IP binds port 4000 to any interface, which is prone to be blocked by your routers firewalls. That's why we recommended using a particular IP address with the `--host` flag. After executing the command in any browser on your phone, go to this address `<ip>:4000`.
- For example, if the IP you used is `192.168.0.123`, you will need to visit `192.168.0.123:4000` on your mobile.

## Conclusion

- You have now successfully installed Jekyll & Bundler via the command line and successfully served and tested your site locally.
