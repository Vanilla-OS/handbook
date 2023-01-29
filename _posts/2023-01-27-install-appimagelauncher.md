---
title: Install AppImageLauncher
description: Learn how to install AppImageLauncher on Vanilla OS.
date: 2023-01-27
layout: article
authors: 
    - gonzoknows
published: true
---

## Introduction

[**AppImageLauncher**](https://github.com/TheAssassin/AppImageLauncher) Integrate AppImages to your application launcher with one click, and manage, update and remove them from there. Double-click AppImages to open them, without having to make them executable first.

### Installing AppImageLauncher

- Install AppImageLauncher through Terminal

- Open `Terminal` and run, the following commands:-

1. Entering abroot shell
```bash
sudo abroot shell
```
2. Installing Software Properties 
```bash
apt install -y software-properties-common
```
3. Adding Apt Repository 
```bash
add-apt-repository --yes ppa:appimagelauncher-team/stable
```
4. Installing AppImageLauncher
```bash
apt install -y fuse3 libfuse2 appimagelauncher
```
5. Exiting Shell
```bash
exit
```
6. Reboot 

## Utilizing AppImageLauncher

For the application to function, double left click any .AppImage to run AppImageLauncher

  - AppImageLauncher will display two options 
  
    - `Run once` - This option will temporarily run the application
    - `Integrate and run` - This option will not only run the application, but will also integrate the .AppImage into your file system. 
