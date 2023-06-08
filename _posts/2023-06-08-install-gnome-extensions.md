---
title: Install Gnome Extensions
description: Learn how to install extensions on VanillaOS/Gnome.
date: 2023-06-08
layout: article
authors: 
    - AWildJumpyGame
published: true
---

## What are extensions

Extensions allow you to visually change or add functionalities to Gnome (VanillaOS desktop environment).

## ExtensionManager installation

Extension manager should already be installed, if it's not, search Extension Manager in gnome-software and install the one by Matthew Jakeman. With this program, you will be able to quickly and easily install extension.


### Enabeling a pre-installed extensions

At the bottom of the page, you should see "System Extensions". These are popular extensions that the VanillaOS team as pre-installed for you. You can try them by click on the button and learn more about it by pressing the chevron.
For exemple, try enabeling "Places Status Indicator" it will give you fast acces to your file in the top bar.

### Searching and adding extension

By clicking on the second tab ("Browse" with the globe icon), you will be seeing a list of available extensions compatible with your system. Click the blue "Install" to add the extension to your system. You can also use the search bar to quickly find extensions you like.
For exemple, search "Blur my Shell" and click "Install". You will notice the black overview and top bar being replaced by a nice and cute blur.

### Removing extension

You can only remove extension in the "Installed" tab. Click the chevron, and then the red remove button.


## Some cool extensions

Blur My Shell -> Make some UI element blurry
Spacer -> Add i3 like workspace switcher
JustPerfection -> Allow you to change the order of UI element
DashToDock -> Add a Mac-like dock, you can configure it to look like Ubuntu's one.
Forge -> Add tilling to gnome (can be pretty buggy).


### Poor performance and issues

Extensions can reduce performance, make sure not to add too many. You can always disable all extensions with the "Use Extensions" button at the top of the "Installed" tab

### Installing out-of-date extensions (NOT RECOMMENDED)

A lot of gnome extension will work even if outdated! To add one click on the 3 little bar at the top right and click "Show Unsupported".Now, unsupported extensions will show in the "Browse" tab. You will not be able to enable it (red clock icon). To potensially fix that, go in ~/.local/share/gnome-shell/extensions/{name@dev}.
Use your text editor to edit "metadata.json" and change or add to the "shell-version" field "43" (or your current gnome version). Then log out. It's not guaranteed to work, but it might.
