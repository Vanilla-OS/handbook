# Vanilla OS Handbook

- This is the official handbook for Vanilla OS. It contains tutorials, guides and
other information to help you get the most out of your Vanilla OS installation.
- Thank you for your interest in our project. This guide will help you with writing and translating articles.
- The handbook uses Jekyll for generating pages.

## Writing a guide

- If you want to write a guide for the handbook, add the
new article to the [`_posts` directory](https://github.com/Vanilla-OS/handbook/tree/main/_posts).
- The filename must be in the format
`YYYY-MM-DD-title.md`. 
- Add your GitHub username along with the co-authors' in the
author field to have working links when the post is published. 
- Set the layout as
`article`.
- Headings must follow a proper hierarchy.
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
---
```

- Add the link to your article in all `index` files with English titles and descriptions.
- The `index` file will be replaced by the translated version of the page later.
- Once you have ensured everything looks correct, open a new pull
request for the guide.

## Adding a language to Handbook

-  Refer to 
[**this page**](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for language codes.
- Create a directory named `_posts.ab`, where `ab` is your language code.
- Create an index file named `index.ab.md` where `ab` is your language code.
- Initially link the articles in the `index` to English pages in the `_posts` directory. When a translated page gets added, replace the current link with the translated page link in the respective `_posts.ab` directory, where `ab` is your language code.

## Translating a guide

- If you want to translate an existing guide to your native language, you can add the translated
article to the `_posts.ab` directory, where `ab` is your language code.
- The filename must be in the format `YYYY-MM-DD-title.md`. Don't translate the layout
and author names to your native language.
- Add your GitHub username in the translated
article along with the original author names.
- Replace the link in `index.ab` with your translated page, where `ab` is your language code.
- Once you have ensured everything looks correct, open a new pull
request for the translated guide.

## Testing the guide locally using jekyll

- You can install **jekyll** from this [page](https://jekyllrb.com/docs/installation/).
- Clone your forked repository using `git` or `gh`. 
- Add the guide to the correct destination in the cloned directory.
- Run `jekyll build` to build the page to `./_site` once. Then you can either test the pages manually or use the `jekyll serve` command.
- Run `jekyll serve` to build your site any time a source file changes and serve it locally.
	- Navigate to `http://127.0.0.1:4000/` or `https://localhost:4000/` in your browser to preview and test the page.
- Now, commit the changes using `git` and create a PR in GitHub.

## Discussions 

Discussions regarding the handbook are done in the [official Discord server](https://discord.com/invite/34J8PFsk) in [#docs-writing](https://discord.com/channels/1023243680829681704/1035287786330263703), and for Discussions regarding translations go to the [#translations](https://discord.com/channels/1023243680829681704/1037028192583692358) channel.
