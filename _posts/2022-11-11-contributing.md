---
title: Contribute to Handbook
description: Learn how to contribute to Vanilla OS Handbook.
date: 2022-11-11
layout: article
authors: 
    - kbdharun
    - kra-mo
    - MonsterObserver
published: true
---

- Thank you for your interest in our project. This guide will help you with writing articles.
- The [**Handbook**](https://github.com/Vanilla-OS/handbook) uses Jekyll and GitHub pages for generating the website.
- Handbook progress with a to-do list is present at our [**GitHub project**](https://github.com/orgs/Vanilla-OS/projects/2).

## Prerequisites for Writing a guide

- A basic knowledge of [**Markdown**](https://www.markdownguide.org/basic-syntax/) is required for writing posts.

## Writing a guide

If you want to write a guide for the handbook, follow these instructions:-
- Add the new article to the [**`_posts` directory**](https://github.com/Vanilla-OS/handbook/tree/main/_posts).
- The filename must be in the format `YYYY-MM-DD-title.md`.
- See [**markdownlint**](https://github.com/DavidAnson/markdownlint) for best markdown practices.
- The guide must use the following structure at the beginning:

```md
---
title:
description:
date: YYYY-MM-DD
layout: article
authors: 
    - 1st author GitHub username
    - 2nd author GitHub username
    - ...
published: true
---
```
- You must fill in your article's metadata here.

For example:-

```md
---
title: Installing a package
description: Learn how to install a package in Vanilla OS
date: 2023-01-13
layout: article
authors: 
    - MonsterObserver
published: true
---
```

- Add your GitHub username with the co-author's username(s) in the author's field to have working links when the post is published.
- Ensure images are in **WebP format** and placed in a dedicated directory under the `assets/uploads` directory with a descriptive name for future reference.

**_Tip_**: We suggest using [**cwebp**](https://developers.google.com/speed/webp/docs/cwebp) for converting the images to WebP.

## Style Guide

- Headings should follow a proper hierarchy.
- Links must be in bold, commands in bold and backticks. 

For example:-

```md
[**example**](https://example.com/)
[**`apx`**](https://github.com/Vanilla-OS/apx)
```

Which will have the following outputs:- [**example**](https://example.com/), [**`apx`**](https://github.com/Vanilla-OS/apx)

- Buttons in applications can be highlighted using double quotes (""). For example, the Install button gets highlighted as the "Install" button.

- Menus, command names and directories must be enclosed with backticks (`).

- For displaying commands, we suggest code blocks with the correct shell or programming language.

For example:-

```md
- To update your Vanilla OS system now, run the following command:-

"```bash
sudo vso trigger-update --now
```" 
(Note: " isn't required, and is used for quoting the syntax here)
```

- The code block will have the following output:-

```bash
sudo vso trigger-update --now
```

- Some terms like "Note:" and "Tip:" should be highlighted with bold and italics. For example:- `**_Note_**:-`.

## Testing the guide locally using Jekyll, Bundler

- You can install **Jekyll** from [**this page**](https://jekyllrb.com/docs/installation/) and **Bundler** can be installed from [**this page**](https://bundler.io). Or you can follow these steps in [**Vanilla OS**](/2023/01/23/install-jekyll-and-bundler.html).
- Clone your forked repository using `git` or `gh`.
- Add the guide to the correct destination in the cloned directory.
- Run `bundler install` to install necessary packages (This step is required only once and doesn't require re-running it in future. You must have a Gemfile in the repository for this to work).
- Run `bundler exec jekyll build` to build the page to `./_site` once. Then you can either test the pages manually or use the `jekyll serve` command.
- Run `bundler exec jekyll serve` to build your site any time a source file changes and serve it locally.
  - Navigate to `http://127.0.0.1:4000/` or `http://localhost:4000/` in your browser to preview and test the page.
- Now, commit the changes using `git` and create a PR in GitHub.

**_Tip_**:-
- You can test your pages on your phone using `bundler exec jekyll serve --host=<ip>`. 
- Using `0.0.0.0` instead of a specific IP binds port 4000 to any interface, which is prone to be blocked by your routers firewalls. That's why we recommended using a particular IP address with the `--host` flag. After executing the command in any browser on your phone, go to this address `<ip>:4000`.
- For example, if the IP you used is `192.168.0.123`, you will need to visit `192.168.0.123:4000` on your mobile.

## Embedding GitHub Gists

- GitHub gists are allowed for referencing custom mods and scripts in posts.
- For example, embedding this `<script src="https://gist.github.com/kbdharun/feca3da0c8213ae2b5cd02f3ea8e380c.js"></script>` will have the following output:-

<script src="https://gist.github.com/kbdharun/feca3da0c8213ae2b5cd02f3ea8e380c.js"></script>

## Archiving guides

- Removing guides and images from the repository isn't advised.
- For outdated articles and posts, we suggest changing the publishing status to `false` in the header, which removes it from the Glossary's listing and RSS feed.
- For outdated images, it is recommended to move them to the [**handbook-archive**](https://github.com/Vanilla-OS/handbook-archive) repository to prevent space. 

## Discussions

For discussions regarding the handbook, go to the [**`#docs-writing`**](https://discord.com/channels/1023243680829681704/1035287786330263703) channel in the [**official Discord server**](https://discord.gg/3cD2Q7Ht3S). For Discussions regarding translations go to the [**`#translations`**](https://discord.com/channels/1023243680829681704/1037028192583692358) channel. Alternatively, you can collaborate with the docs team on our [**Matrix room**](https://matrix.to/#/#vanillaos-docs:matrix.org).
