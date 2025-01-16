---
Title: Installing input method editors in Vanilla OS
Description: Learn how to install and use a input method editor in Vanilla OS using ibus.
PublicationDate: 2025-15-01
Listed: true
Authors:
    - drybones263/Blumoop
---

## ibus

ibus is an input method framework that allows the user to switch between different input methods seamlessy. GNOME uses Ibus by default, but for typing non-Latin characters using a keyboard that doesn't have native support for them, a input method editor must be installed and configured.

## ibus Input Method Editors

| ibus Engine             | Supported Locale                                     |
| ------------------------| -----------------------------------------------------|              
| ibus-mozc               | Japanese                                             |
| ibus-anthy              | Japanese                                             |
| ibus-skk                | Japanese                                             |
| ibus-kkc                | Japanese                                             |
| ibus-libpinyin          | Chinese (zh_CN)                                      |
| ibus-chewing            | Chinese (zh_TW)                                      |
| ibus-libzhuyin          | Chinese (zh_CN/zh_TW)                                |
| ibus-hangul             | Korean                                               |
| ibus-libthai            | Thai                                                 |
| ibus-table-thai         | Thai                                                 |
| ibus-unikey             | Vietnamese                                           |
| ibus-keyman             | Multilingual: Keyman engine for over 2000 languages  |
| ibus-table              | table engine for Ibus                                |
| ibus-m17n               | Multilingual: Indic, Arabic and others               |

## Installing the Input Method Editor

Below, ibus-hangul is shown as an example, replace "ibus-hangul" with the Ibus Engine of your choice from the table above. You may also install multiple ibus Engines if needed.

```bash
abroot pkg add ibus-hangul
abroot pkg apply
```

After the Ibus Engine is installed, reboot Vanilla OS. You will automatically be booting in the next ABroot partition with the changes.

## Configuring the Input Method Editor

Once you get back into GNOME after logging in, head into the Settings app, and find Keyboard > Input Sources. 
Select "+ Add Input Source", and find the language you want to use. 

![Ibus Method Example](https://raw.githubusercontent.com/VanillaOS/handbook/main/assets/uploads/Miscellaneous/gnome-settings-input-method.webp)

It is possible you need to search for the language you want to use and select to find the ibus Engine to configure. In this case, after searching for "Korean", selecting it will bring up options,
"Hangul" is selected and then added into the Input Sources.

Once your selected ibus Engine is added into the Input Source list, you may configure it with the kebab menu(3 vertical dots) icon on the right of it. Once finished, you can switch to the input method
by the default keybinds "Super + Space" for forward, and "Shift + Super + Space" for backward. 

Congratulations, you have now installed and configured a input method with an ibus Engine.

