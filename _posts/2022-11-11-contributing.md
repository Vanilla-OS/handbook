---
title: Contribute to Handbook
description: Learn how to contribute to Vanilla OS Handbook.
date: 2022-11-11
layout: article
authors: 
    - kbdharun
    - kra-mo
published: true
---

- Thank you for your interest in our project. This guide will help you with writing articles.
- The [**Handbook**](https://github.com/Vanilla-OS/handbook) uses Jekyll, GitHub pages for generating the website.
- Handbook progress with a to-do list is present at our [GitHub Project](https://github.com/orgs/Vanilla-OS/projects/2).

## Writing a guide

- If you want to write a guide for the handbook, add the
new article to the [`_posts` directory](https://github.com/Vanilla-OS/handbook/tree/main/_posts).
- The filename must be in the format
`YYYY-MM-DD-title.md`.
- Add your GitHub username along with the co-authors in the
author field to have working links when the post is published.
- Set the layout as
`article`.
- Headings must follow a proper hierarchy.
- Images must be in **WebP format** and be placed in `uploads` under `assets` directory with a descriptive name for future references.
- See [**markdownlint**](https://github.com/DavidAnson/markdownlint) for markdown best practices.
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
- Once you have ensured everything looks correct, open a new pull
request for the guide.

## Testing the guide locally using Jekyll, Bundler

- You can install **Jekyll** from [**this page**](https://jekyllrb.com/docs/installation/) and **Bundler** can be installed from [**this page**](https://bundler.io).
- Clone your forked repository using `git` or `gh`.
- Add the guide to the correct destination in the cloned directory.
- Run `bundler install` to install necessary packages (this step must be done only once).
- Run `bundler exec jekyll build` to build the page to `./_site` once. Then you can either test the pages manually or use the `jekyll serve` command.
- Run `bundler exec jekyll serve` to build your site any time a source file changes and serve it locally.
  - Navigate to `http://127.0.0.1:4000/` or `http://localhost:4000/` in your browser to preview and test the page.
- Now, commit the changes using `git` and create a PR in GitHub.

## Discussions

Discussions regarding the handbook are done in the [**official Discord server**](https://discord.gg/3cD2Q7Ht3S) in [`#docs-writing`](https://discord.com/channels/1023243680829681704/1035287786330263703), and for Discussions regarding translations go to the [`#translations`](https://discord.com/channels/1023243680829681704/1037028192583692358) channel.
