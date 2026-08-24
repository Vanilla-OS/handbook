---
Title: Import an OpenVPN Profile
Description: Add an OpenVPN profile through GNOME Settings.
PublicationDate: 2026-08-24
Listed: true
Authors:
    - gonzoknows
---

## Open the VPN settings

Open Settings and select **Network**. Under **VPN**, click the plus button.

![Plus button beside VPN](https://raw.githubusercontent.com/Vanilla-OS/handbook/main/assets/uploads/OpenVPN/install-openvpn-from-file-vpn-add.webp)

## Import the profile

1. Select **Import from file...**.
2. Choose the `.ovpn` file supplied by your VPN provider.
3. Review the imported server and authentication settings.
4. Enter credentials when requested, then save the profile.

The new connection appears under **VPN**. Use its switch to connect or
disconnect. Contact the VPN provider if the profile requires a certificate,
key, or authentication method that was not included in the file.
