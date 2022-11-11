# Vanilla OS Handbook

- This is the official handbook for Vanilla OS. It contains tutorials, guides and
other information to help you get the most out of your Vanilla OS installation.
- Vanilla OS Handbook utilises Jekyll for generating pages.
- Thanks for your interest in our project. This guide is for writing and translating articles.

## Writing a guide

- If you want to write a guide for the handbook, add the
new article to the `_posts` directory.
- The filename must be in the format
`YYYY-MM-DD-title.md`. 
- Add your GitHub username with the co-author's username in the
author field to have a working link when the post is published. 
- Set the layout as an
`article`.
- Headings must follow a proper hierarchy.
- Refer [markdownlint](https://github.com/DavidAnson/markdownlint) to know the best practices for using markdown.
- The guide must be structured in the following way at the beginning:-

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
---

Contents
```

- Once you have ensured everything, open a new pull
request for the guide.

## Translating a guide

- If you want to translate an existing guide to your native language, you can add the translated
article to the `_posts.ab` directory, where `ab` is your language code. Refer to 
this [page](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for language codes.
- The filename must be in the format `YYYY-MM-DD-title.md`. Don't translate the layout
and author names to your native language.
- Add your GitHub username in the translated
article along with the original author names. 
- Once you have ensured everything, open a new pull
request for the translated guide.

## Discussions 

Discussions regarding the handbook are done in the [official Discord server](https://discord.com/invite/34J8PFsk) in [#docs-writing](https://discord.com/channels/1023243680829681704/1035287786330263703) channel.

