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

- Gracias por su interés en nuestro proyecto. Esta guía le ayudará a escribir y traducir artículos.
- El manual usa Jekyll para generar las páginas.


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
- Agrega el enlace a tu artículo en todos los archivos `index` con títulos en inglés y sus descripciones.
- El archivo `index` será reemplazado por la versión traducida de tu página después.
- Una vez que tengas la certeza de que todo está correcto, abre un nuevo
_pull request_ para la guía.

## Añadiendo un idioma al Manual

- Consulta
[**esta página**](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) para los códigos de los idiomas.
- Crea un directorio llamado `_posts.ab`, donde `ab` es el código de tu idioma.
- Crea un archivo de índice llamado `index.ab.md`, donde `ab` es el código de tu idioma.
- En principio enlaza los artículos en `index` a las páginas en inglés en el directorio `_posts`. Cuando una página traducida sea añadida, reemplaza el enlace con el enlace a la página traducida en el directorio `_posts.ab` correspondiente, donde `ab` es el código de tu idioma.

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

## Probando la guía localmente usando jekyll

- Puedes instalar **jekyll** desde esta [página](https://jekyllrb.com/docs/installation/).
- Clona tu repositorio _forkeado_ usando `git` o `gh`.
- Agrega la guía al destino correcto en el directorio clonado.
- Corre `jekyll build` para construir una vez la página en `./_site`. Entonces puedes probar las páginas manualmente o usar el comando `jekyll serve`.
- Corre `jekull serve`  para construir tu propio sitio cada vez un archivo fuente cambia y servirlo localmente.
	- Navega a `http://127.0.0.1:4000/` o `https://localhost:4000/` en tu navegador para previsualizar y probar la página.
- Ahora, haz un _commit_ con los cambios usando `git` y crea un _pull request_ en GitHub.

## Discusiones

Discusiones acerca del manual se hacen en el [**servidor de Discord oficial** (en inglés)](https://discord.com/invite/34J8PFsk) en [#docs-writing](https://discord.com/channels/1023243680829681704/1035287786330263703), y para discusiónes acerca de las traducciones ve al canal [#translations](https://discord.com/channels/1023243680829681704/1037028192583692358).