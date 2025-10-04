---
Title: Virtual Machines
Description: A simplified way to creating virtual machines in Vanilla OS
PublicationDate: 2025-10-04
Listed: true
Authors:
    - mrmk0r
---


## Introduction

There are two ways to install a virtual machine on Vanilla OS. These include:
[Host Shell](#host-shell)
[Vanilla Image Builder (VIB)](#vanilla-image-builder)


### Host Shell {#host-shell}
Using the host shell to setup virtual machines is the easiest way to create a virtual machine on Vanilla OS. To setup a virtual machine via host shell, use the following commands:


`host-shell`
```SH
pkexec podman run -it --rm --name windows -p 8006:8006 -p 3389:3389/tcp -p 3389:3389/udp --device=/dev/kvm --device=/dev/net/tun --cap-add NET_ADMIN -v "/var/windows:/storage" --stop-timeout 120 dockurr/windows

```

Once ran, use your web browser and visit ![http://localhost:8006](http://localhost:8006) to finish the installation process. Once completd, use your favorite RDP client, and connect via the following:

Username: `docker`
Password: `admin`
RPD IP: `127.0.0.1:3389`

### Vanilla Image Builder (VIB) {#vanilla-image-builder}
Setting up virtual machines in Vanilla OS can be a bit complicated. Support for "VMware, Virtmanager, etc" must be done via [VIB](https://docs.vanillaos.org/collections/vib), using the following in your recipie modules.

```YAML
 - name: vm-tools
    type: apt
    source:
      packages:
      - open-vm-tools 
      - open-vm-tools-desktop

  - name: virtualbox-guest-additions
    type: apt
    source:
      packages:
      - virtualbox-guest-utils
      - virtualbox-guest-x11

  - name: qemu
    type: apt
    source:
      packages:
      - qemu-guest-agent

  - name: spice
    type: apt
    source:
      packages:
      - spice-vdagent
      - spice-webdavd
```


