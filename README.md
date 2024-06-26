This repository contains up-to-date files downloaded by [bauh](https://github.com/vinifmor/bauh) during runtime.

### Folder and files

#### appimage (folder)
- It contains the AppImage database files **apps.db** and **releases.db**. These files are updated hourly and are currently
based on the database file provided by https://appimage.github.io.
- These database files are automatically generated by a script.
- The file **apps.txt"** contains the names of all applications available in **apps.db**

#### arch (folder)
- [categories.txt](https://github.com/vinifmor/bauh-files/blob/master/arch/categories.txt): category mapping for Arch packages.
- [gpgservers.txt](https://github.com/vinifmor/bauh-files/blob/master/arch/gpgservers.txt): known GPG servers (for installing some AUR packages)
- [suggestions.txt](https://github.com/vinifmor/bauh-files/blob/master/arch/suggestions.txt): Arch package suggestions.

#### debian (folder)
- [suggestions_v1.txt](https://github.com/vinifmor/bauh-files/blob/master/debian/suggestions_v1.txt): Debian apps suggestions.

#### flatpak (folder)
- [suggestions.txt](https://github.com/vinifmor/bauh-files/blob/master/flatpak/suggestions.txt): Flatpak apps suggestions.

#### snap (folder)
- It contains a file ( **categories.txt** ) mapping some Snap application names to some categories. This file is automatically updated hourly.

#### web (folder)
- [environment.yml](https://github.com/vinifmor/bauh-files/blob/master/web/env/v2/environment.yml): Web apps installation environment settings
- [suggestions.yml](https://github.com/vinifmor/bauh-files/blob/master/web/env/v2/suggestions.yml): Web apps suggestions
- **fix** folder: javascript fixes for some Web applications
