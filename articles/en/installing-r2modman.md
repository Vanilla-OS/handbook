---
Title: Installing and running modded games with R2ModMan(.appimage) via Steam(Flatpak)
Description: Learn how to install R2ModMan(.appimage), with games in Steam(Flatpak)
PublicationDate: 2025-10-04
Listed: true
Authors:
    - mrmk0r
---

## Install Dependencies
    ```SH
    abroot pkg add fuse libfuse2t64
    abroot pkg apply
    ```
    Reboot your computer (If you cannot launch R2ModMan in the next step, fully shut your computer off and back on.)

## Install R2ModMan
    <ol>
        <li>Download +[GearLever](https://flathub.org/en/apps/it.mijorus.gearlever)</li>
        <li>Download the latest R2modman(.appimage), from +[ebkr/r2modmanPlus](https://github.com/ebkr/r2modmanPlus/releases)</li>
        <li>Double click `r2modman-x.x.x.appimage` to launch into GearLever</li>
        <li>Launch R2ModMan and select your game of choice, select your profile, and install some mods.</li>
        <li>Ensure the settings are correct in the settings tab
            <ul>
                <li>Change [GAME] folder
                    <ul>
                        <li>Should be where your game is installed `../Steam/SteamLibrary/steamapps/common/[GAME]`</li>
                    </ul>
                </li>
                <li>Change Steam folder
                    <ul>
                        <li>`/home/$USER/.var/app/com.valvesoftware.Steam/.local/share/Steam/`<li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Once mods have installed, click on the help button, scroll down, and click copy launch arugments</li>
        <li>Open Steam (Flatpak), right click the game you are modding, and click properties.</li>
        <li>Paste the launch arugments into the "Launch Options" text input.</li>
        <li>Install +[Flatseal](https://flathub.org/en/apps/com.github.tchx84.Flatseal)</li>
        <li>Open Flatseal, click on Steam</li>
        <li>Scroll down to file system, add a new line (folder + icon)</li>
        <li>Add the following `/var/home/$USER/.config/r2modmanPlus-local/`</li>
        <li>Launch your game!</li>
    </ol>

## I've added a new profile, but the games still launch with the old mods.
Make sure your launch aurgment in the steam game properties has the correct profile. Change default to the newly named profile.
`--r2profile "Default"`