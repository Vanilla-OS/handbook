---
title: Installing Docker Engine and Docker Desktop
description: Learn how to Install and setup Docker Engine and Docker Desktop in Vanilla OS.
date: 2022-02-05
layout: article
authors: 
    - kbdharun
published: true
---

## Introduction

[**Docker**](https://www.docker.com/) is an open platform for developing, shipping, and running applications in containerized environments. This guide provides the steps to install the Docker engine and Docker desktop in Vanilla OS.

This guide is for advanced users. If your workflow doesn't require Docker, you can use [**Podman**](https://podman.io/) instead.

## Installing Docker Engine

You can install the Docker engine using the following steps:-

- First, enter the transactional shell using the following command:-

```bash
sudo abroot shell
```

- Then execute the following commands to install the required packages:-

```bash
sudo apt update
sudo apt install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

- Add Docker's GPG key using the following command:-

```bash
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

- Setup the repository using the following commands:-

```bash
echo \ "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \ $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

- Then run `sudo apt update` after its completion. After the update is complete, execute the following command:-

```bash
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

- Now, `exit` the transactional shell and `reboot` your system.
- After the reboot, type `sudo docker run hello-world` in your terminal window. It will pull the image locally and display a message meaning the installation is successful.

**_Note_**:- Set the location for saved Images and Containers to `/home` to avoid filling up the root partition.

## Installing Docker Desktop

You can install the Docker Desktop application using the following steps:-

- First, download the DEB file from [**here**](https://docs.docker.com/desktop/install/ubuntu/).
- Then copy the file to `/tmp` (Temporary files in `/tmp` get removed after a reboot) using the command `cp -r docker-desktop-<version>-<arch>.deb /tmp` (Note:- `<>` is a placeholder, replace it with the correct details) in an unprivileged terminal session.
- Then, enter the transactional shell using the `sudo abroot shell` command.
- Install the application using the following command:-

```bash
sudo apt install ./docker-desktop-<version>-<arch>.deb
```

**_Note_**:- `<>` is a placeholder. Replace it with the details of the package.

- `exit` the transactional shell and `reboot` your system to see Docker Desktop.

![Docker Desktop](/assets/uploads/Miscellaneous/Docker-Desktop.webp)

- Now, sign up and proceed with the setup.
