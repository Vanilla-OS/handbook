---
title: Contribuir al Handbook
description: Aprenda como contribuir al Vanilla OS Handbook.
date: 2022-11-12
layout: article
authors:
    - kbdharun
    - kra-mo
    - mastergeekmx
---


- El manual usa Jekyll para generar las páginas.
- Gracias por su interés en nuestro proyecto. Esta guía le ayudará a escribir y traducir artículos.

## Escribiendo una guía

- Si quieres escribir una guía para el manual, agrega el
nuevo artículo al [directorio `_posts`](https://github.com/Vanilla-OS/handbook/tree/main/_posts)
- El nombre de archivo debe ser en el formato
`AAAA-MM-DD-titulo.md`.
- Agrega tu nombre de usuario de GitHub al lado de los co-autores en el
campo de autores (authors) para tener enlaces funcionales cuando el post sea publicado.
- Pon la disposición (layout) como
`article`.
- Los encabezados deben seguir una jerarquía adecuada.
- Consulta [markdownlint](https://github.com/DavidAnson/markdownlint) para buenas prácticas de markdown.
- La guía debe usar la siguiente estructura al inicio:

```md
---
title:
description:
date: AAAA-MM-DD
layout: article
authors:
    - nombre de usuario de GitHub del 1er autor
    - nombre de usuario de GitHub del 2do autor
    - ...
---
```

- Una vez que tengas la certeza de que todo está correcto, abre un nuevo
_pull request_ para la guía.

## Traduciendo una guía

- Si quieres traducir una guía existente a tu idioma nativo, puedes agregar el artículo
traducido al directorio `_posts.ab`, donde `ab` es el código de tu idioma. Puede referir a
[esta](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) página para los códigos de idiomas.
- El nombre de archivo debe estar en el formato `AAAA-MM-DD-titulo.md`. No traduzcas la disposición
ni los nombres de los autores a tu idioma.
- Agrega tu nombre de usuario de GitHub en el artículo
traducido junto con los nombres de los autores originales.
- Una vez que tengas la certeza de que todo está correcto, abre un nuevo
_pull request_ para la guía.

## Discusiones

Discusiones acerca del manual se hacen en el [servidor de Discord oficial (en inglés)](https://discord.com/invite/34J8PFsk) in [#docs-writing](https://discord.com/channels/1023243680829681704/1035287786330263703).

