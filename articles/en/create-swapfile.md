# Create a swapfile (increase swap space)

When creating a swapfile on vanilla, you have to keep in mind:
- to put the file in /var, not the root (/) (Otherwise, you might run into space issues when doing an upgrade in the future)
- to chattr +C if you are using btrfs for /var, which is the default

Example:
```bash
host-shell pkexec
truncate -s 0 /var/swapfile
chattr +C /var/swapfile
```
Here, change the 3G to the size that you want: 
```bash
fallocate -l 3G /var/swapfile
```
```bash
chmod 0600 /var/swapfile
mkswap /var/swapfile
nano /etc/fstab
```
add this line to the end of the file:
`/var/swapfile none swap defaults 0 0`
then save the file with Ctrl+X then Y then Enter
```bash
swapon -a
exit
```

You can test if it worked by running:
`host-shell pkexec swapon --show`
