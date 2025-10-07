---
Title: Install R2ModMan (.appimage), to work with Steam (flatpak)
Description: Learn how to install Steam on Vanilla OS.
PublicationDate: 2023-01-07
Listed: true
Authors:
    - MrMK0R
---
## Requirements
- libfuse2t64 via ABRoot
- GearLever
- Flatseal
- Steam (Flatpak)
- R2ModManager


## Commands
Add the libfuse2t64 via ABroot with the following command (*libfuse2t64 is required for R2ModMan.appimage and GearLever.*):

`abroot pkg add libfuse2t64`

`abroot pkg apply`
*Reboot your computer after this command*

Install Gearlever via Software app, or with the following command:

`flatpak install flathub it.mijorus.gearlever`

Install Flatseal via Software app, or with the following command:

`flatpak install flathub com.github.tchx84.Flatseal`

Install Steam via Software app, or with the following command:

`flatpak install flathub com.valvesoftware.Steam`

Download R2ModMan.appimage from (choose latest version):

[ebkr/r2modmanPlus](https://github.com/ebkr/r2modmanPlus/releases)


## Process
### R2ModMan
1. Open the r2modman-x.x.x.AppImage with Gearlever
2. Click `move to app menu`
3. Click `launch`
4. Select the game you wish to mod, that is supported in R2ModManager *(In this case we will use R.E.P.O.)*.
5. Select the `Default` profile (you can change your profile after this tutorial)
6. Add a few mods. This will force `BepInEx` to download.
7. Verify the settings
    - Change [GAME] folder
        - Ensure this is where your game is downloaded. Right click game, properties, installed files, and browse files.
    - Change Steam Folder
        - Ensure this is where steam was installed. Should be something like `/home/$USER/.var/app/com.valvesoftware.Steam/.local/share/Steam`
8. Click on help and scroll down.
9. Click `Copy launch arugements`

### Steam
1. Right click your game in Steam, properties, and paste the launch arugements you have just copied. The command will be similar to the one below, however will have your username in place of $USER.
    - `%command% --doorstop-enable true --doorstop-target "Z:/home/$USER/.config/r2modmanPlus-local/REPO/profiles/Default/BepInEx/core/BepInEx.Preloader.dll" --r2profile "Default"`

### Flatseal
1. Open Flatseal and navigate to Steam.
2. Scroll down to `Filesystem`
3. add `/home/$USER/.config/r2modmanPlus-local`

### Back to Steam
1. Launch your game. It should now be modded. Ensure you only launch the game from steam.

## Changing profiles
If creating a new profile in R2ModMan, or importing a friends profile, you will need to change the launch arugments of the Steam command. There are two ways of doing this.

1. Recopy the launch arguments in the help section.
2. Changing `--r2profile "Default"` to the new profile such as `--r2profile "New Profile"`

