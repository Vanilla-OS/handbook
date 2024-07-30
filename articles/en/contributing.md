---
Title: Contribute to Handbook
Description: Learn how to contribute to Vanilla OS Handbook.
PublicationDate: 2022-11-11
Listed: true
Authors:
    - kbdharun
    - kra-mo
    - MonsterObserver
---

Thank you for your interest in our project. This guide will help you with writing articles.

The [**Handbook**](https://github.com/Vanilla-OS/handbook) is served by the [Chronos](https://github.com/Vanilla-OS/Chronos) documentation server. The articles are written in Markdown format and stored in the `articles/LANGUAGE` directory, where `LANGUAGE` is the language code of the article. For example, the English articles are stored in the `articles/en` directory.

## Writing an Article

To write an article, follow these steps:

1. Fork the Handbook repository
2. Create a new Markdown file in the proper language directory (titles must be in `kebab-case`, must end with `.md`, and should be named using the article's title in English)
3. Add the following minimal metadata to the top of the file:

```markdown
---
Title: Article Title
Description: Article Description
PublicationDate: YYYY-MM-DD
Listed: true
Authors:
    - Author1
    - Author2
---
```

4. Write the article content in Markdown format
5. Submit a pull request to the main repository

## Article Metadata

The metadata at the top of the article is used to index the article in the Chronos server. Here is a description of each field:

| Field           | Description                                                                                   |
|-----------------|-----------------------------------------------------------------------------------------------|
| `Title`         | The title of the article.                                                                     |
| `Description`   | A brief description of the article.                                                           |
| `PublicationDate`| The publication date of the article in `YYYY-MM-DD` format.                                    |
| `Listed` (optional) | A boolean value that determines if the article is listed in the Chronos server. Default is `false`. |
| `Authors`       | A list of authors who contributed to the article.                                            |
| `Tags` (optional) | A list of tags that describe the article.                                                     |
| `StoryId` (optional) | The unique identifier of the story holding the article.                                       |
| `Previous` (optional) | The unique identifier of the previous article in the story.                                   |
| `Next` (optional) | The unique identifier of the next article in the story.                                       |

## Article Content

The article content should be written in Markdown format. You can use the [Markdown Guide](https://www.markdownguide.org/) to learn more about Markdown syntax.

The content should be clear, concise, and easy to understand. You can include images, code snippets, and links to external resources to enhance the article.

### Hosting Images

Images should be hosted in the `assets/uploads` directory. We use sub-folders to organize images by category, pick the most appropriate one or create a new one if needed.

For example, if you are writing an article about the First Setup, you can store the images in `assets/uploads/First_Setup` directory.

### Storytelling

Articles can be part of a story. A story is a collection of articles that are related to each other. You can create a new story by adding it to the `stories.yml` file in the `articles` directory (e.g., `articles/stories.yml`), following the format:

```yaml
- id: my-first-story
  name: My First Story
  description: See how cool is my first story
  startSlug: test
```

here all the fields are mandatory, `id` is the unique identifier of the story, `name` is the name of the story, `description` is a brief description of the story, and `startSlug` is the slug of the first article in the story.

Remember to add the `StoryId`, `Previous`, and `Next` fields to the article metadata to link the articles in the story.
