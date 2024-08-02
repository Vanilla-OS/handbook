---
Title: Common NVIDIA issues in Vanilla OS
Description: Learn how to troubleshoot common NVIDIA issues in Vanilla OS.
PublicationDate: 2024-08-02
Listed: true
Authors:
  - mirkobrombin
---

First of all, we have to say that, even if Vanilla OS is designed to work out of the box with most NVIDIA GPUs, there are some common issues that can arise with some specific setups. Please keep in mind that NVIDIA has still poor support for Linux, every Linux distributions does its best to provide a good experience with NVIDIA GPUs, but sometimes issues can arise and this, for now, it's the normality, but things are getting better every day.

## Knowing your GPU

Before starting to troubleshoot your NVIDIA GPU, you should know which GPU you have.

If your GPU is working fine, you can check it by running the following command in the terminal:

```bash
host-shell nvidia-smi
```

If you have an NVIDIA GPU, you should see an output similar to this:

```bash
+-----------------------------------------------------------------------------------------+
| NVIDIA-SMI 555.42.06              Driver Version: 555.42.06      CUDA Version: N/A      |
|-----------------------------------------+------------------------+----------------------+
| GPU  Name                 Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
|                                         |                        |               MIG M. |
|=========================================+========================+======================|
|   0  NVIDIA GeForce RTX 4050 ...    Off |   00000000:01:00.0 Off |                  N/A |
| N/A   44C    P3              9W /   35W |      15MiB /   6141MiB |      0%      Default |
|                                         |                        |                  N/A |
+-----------------------------------------+------------------------+----------------------+

+-----------------------------------------------------------------------------------------+
| Processes:                                                                              |
|  GPU   GI   CI        PID   Type   Process name                              GPU Memory |
|        ID   ID                                                               Usage      |
|=========================================================================================|
|    0   N/A  N/A      3263      G   /usr/bin/gnome-shell                            1MiB |
|    0   N/A  N/A     94369      G   python3                                         1MiB |
+-----------------------------------------------------------------------------------------+
```

in this case, the GPU is an NVIDIA GeForce RTX 4050 and it's working fine using the `555.42.06` driver.

If you don't have a working NVIDIA GPU, you can still check the model by running the following command:

```bash
host-shell lspci | grep -i nvidia
```

This command will output the model of your NVIDIA GPU like the following:

```bash
01:00.0 VGA compatible controller: NVIDIA Corporation AD107M [GeForce RTX 4050 Max-Q / Mobile] (rev a1)
01:00.1 Audio device: NVIDIA Corporation Device 22be (rev a1)
```

if you don't see any output, it means that you don't have an NVIDIA GPU.

## Common issues

### Applications are using the wrong GPU

Vanilla OS tries to use the integrated GPU by default, leaving the NVIDIA GPU for more demanding tasks. However, if you want to force an application to use the NVIDIA GPU, you can do so by right-clicking on the application icon and selecting "Launch using Discrete Graphics Card". From the terminal, you can use the following command:

```bash
nrun application-name
```

you can ensure `nrun` is working by running the following commands:

```bash
cur-gpu # should display the integrated GPU
nrun cur-gpu # should display the NVIDIA GPU
```

### I want to force my NVIDIA for the whole system

If you want to force the NVIDIA GPU for the whole system, you can do so by opening the Settings app in Vanilla OS, go to the **Display** section, click on **GPU Profile Management (PRIME)**, and select **Discrete GPU**.

### Install NVIDIA drivers Vanilla OS post-installation

If you installed Vanilla OS without opting for the NVIDIA drivers, you can install them later by following [this](https://docs.vanillaos.org/handbook/en/install-additional-drivers#nvidia%C2%AE-drivers) guide.

### Second monitor not working

If you have a second monitor connected to your NVIDIA GPU and it's not working, you are probably using the wrong system image. To check the system image you are using, run the following command:

```
abroot status
```

and check the parameter `Image` under the **ABImage** section, it should be `ghcr.io/vanilla-os/nvidia` for recent NVIDIA GPUs (e.g. GTX 600 series/RTX and newer) or `ghcr.io/vanilla-os/nvidia-propietary` for older NVIDIA GPUs (e.g. GTX 400 and 500 series).

If you are not using the correct system image, you can change it by issuing the following command:

```
abroot config-editor
```

then change the `tag` parameter to `main` and the `name` parameter to `ghcr.io/vanilla-os/nvidia` or `ghcr.io/vanilla-os/nvidia-propietary` depending on your GPU as mentioned above. Then save the changes and run a system update by issuing the following command:

```
abroot upgrade -f
```

restart your system once the upgrade is complete.

If the issue persists, might be a very specific issue with your GPU, please open a new issue [here](https://github.com/Vanilla-OS/nvidia-image/issues), we will do our best to help you.

### Freezing at boot logo

If your system is freezing at the boot logo, you might be using the wrong system image, look at the previous section to check if you are using the correct system image and change it if needed.

If the issue persists, double check your kernel flags, by issuing the following command:

```
abroot kargs show
```

they should be similar to the following:

```
quiet splash bgrt_disable $vt_handoff
```

or

```
quiet splash bgrt_disable $vt_handoff lsm=integrity nvidia.NVreg_DynamicPowerManagement=0x02 nvidia.NVreg_PreserveVideoMemoryAllocations=1 nvidia.NVreg_TemporaryFilePath=/var/tmp nvidia-drm.fbdev=1
```

remove any additional flags that you might have added by using the command:

```
abroot kargs edit
```

then save, wait for the changes to be applied and restart your system.

If the issue persists, might be a very specific issue with your GPU, please open a new issue [here](https://github.com/Vanilla-OS/nvidia-image/issues).

### Any other issue

If you are experiencing any other issue with your NVIDIA GPU, please open a new issue [here](https://github.com/Vanilla-OS/nvidia-image/issues), or ask our [https://vanillaos.org/community].
