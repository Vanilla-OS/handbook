---
Title: Setting up online accounts with GNOME
Description: Learn how to setup online accounts for users using GNOME Settings in Vanilla OS
PublicationDate: 2025-16-01
Listed: true
Authors:
    - drybones263/Blumoop
---

## Online Accounts

GNOME allows you the option to setup one or more online accounts with several online services, (e.g. Microsoft, Google). Setting up an online account with an online service allows several apps to easily 
integrate your online accounts for services such as emails, calendars, cloud storage, messaging, etc. This allows users to easily use their online services with the GNOME desktop by only needing to provide their
login information once, and have their online service apps ready to use no matter how many different online accounts they have set up.

## Setting Up an Online Account

In the Settings app, go to Online Accounts. Alternatively, you open the Overview and Search for "Online Accounts" to get straight to the Online Accounts settings page.

![GNOME Settings Online Accounts 1](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Miscellaneous/gnome-settings-online-accounts.webp)

Select an account from the available list for the online service you want to use. Note that depending on which account you pick, you will either have to input login credentials directly in Settings or through your default internet browser. Once you have logged in with an account, that account will show up in the Online Accounts page. 

## Checking Available Online Account Services

To check what available services you can use with an online account, you may head into the Online Accounts settings page again and select a logged in account. 
For example, this Microsoft account below currently has a Mail service toggle, which can allow third-party apps such as Geary or Thunderbird to integrate the Mail service more easily. 

![GNOME Settings Online Accounts 2](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Miscellaneous/gnome-settings-online-accounts-microsoft.webp)

You may enable or disable online services depending on what you use with an app using that account(e.g. Using a primary Google account for it's email service, and using a secondary Google account for it's cloud storage service,
seperated by apps).

## Removing an Online Account

If you want to remove an online account you have set up, you can do so by selecting the logged in account and selecting "Remove" at the bottom. You will be given a final warning before removing the online account from GNOME Settings.

![GNOME Settings Online Accounts 3](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/Miscellaneous/gnome-settings-online-accounts-microsoft-delete.webp)

If you already were using apps that uses the online account's services, it's best to log out of those apps before removing the online account(s), otherwise the integration may mess up without the online account available.

Congratulations, you have now know how to setup up online accounts in GNOME Settings for easy integration with apps, check their available online services, and remove them if not needed anymore. 
