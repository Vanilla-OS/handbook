---
title: Instalación de Vanilla OS
description: Aprende a instalar Vanilla OS en tu dispositivo.
date: 2022-11-12
layout: article
authors:
    - kra-mo
    - kbdharun
    - mastergeekmx
---

## Preparativos

### Lo que necesitaras

- Una memoria USB de por lo menos 8GB de capacidad.
- Un disco duro/solido con al menos 25GB de espacio.
- de 30 minutos a una hora de tu tiempo.

### Creando una memoria USB arrancable

Esta sección te guiará para crear una memoria USB arrancable con Vanilla OS en ella.

#### Descargando Vanilla OS

Primero, descarga la imagen de disco de Vanilla OS que será escrita en tu memoria USB desde [aquí](https://vanillaos.org/).

#### Instalando Etcher

Para grabar la imagen del disco a tu memoria USB, descarga e instala [balenaEtcher](https://www.balena.io/etcher/).

Si lo deseas, puedes también utilizar un programa diferente con el que seas familiar, como [Ventoy](https://www.ventoy.net/) o [Rufus](https://rufus.ie/).

#### Grabando la imagen

**Advertencia**: esto borrará **todos los datos** en tu memoria USB. ¡Asegurate respaldar toda la información importante antes de continuar!.

Abre Etcher, selecciona la imagen de disco descargada y tu memoria USB, luego haz clic en "Flash!".

![Flashing](/assets/uploads/installation-flashing.webp)

Cuando el proceso haya acabado, tendrás una memoria USB arrancable con Vanilla OS en esta.

### Arrancando de la memoria USB

Inserta la memoria USB en la computadora/ordenador a la cual vas a instalar Vanilla OS y enciende o reinicia el dispositivo.

Si tu dispositivo no arranca automáticamente en el medio de instalación de Vanilla OS, reinicia, y mientras arranca, mantén apretada la tecla indicada en la pantalla de arranque que diga `select boot device` (seleccionar dispositivo de arranque) o para `boot menu` (menú de arranque). Las teclas más comunes son F2, F10, F11, F12, Delete (Suprimir) y Escape. Si el indicio de tecla no aparece, intenta buscar en línea para el modelo específico de tu equipo. Selecciona Vanilla OS o el nombre de tu memoria USB del menú de arranque.

Cuando tu dispositivo haya arrancado exitosamente desde la memoria USB, deberías ver una pantalla de bienvenida invitándote a probar o instalar Vanilla OS.

![Welcome](/assets/uploads/installer-welcome.webp)

Puedes probar Vanilla OS sin hacer ningún cambio a tu dispositivo. Si estás satisfecho, puedes reabrir el instalador (el primer ícono en el _dash_) y proceder con la instalación.

## Instalando Vanilla OS

### Primeros pasos

Haz clic en "Instalar Vanilla OS" y selecciona tu idioma preferido, distribución del teclado y zona horaria.

### Tipos de instalación

Dependiendo de que quieras hacer arranque dual o multi-arranque de Vanilla OS junto con otros sistemas operativos, necesitarás seguir diferentes pasos cuando selecciones los discos.

Esta guía de ayudará con los siguientes tipos de instalación:
- [Instalando solamente Vanilla OS](/2022/11/12/instalacion.html#title10)
- [Instalación avanzada](/2022/11/12/instalacion.html#title11)

### Instalando solamente Vanilla OS

Esta sección te guiará para instalar Vanilla OS a un disco entero **borrando todos los datos en este**. ¡Asegurate de respaldar toda la información importante antes de proceder!

Selecciona el disco en el que quieras instalar Vanilla OS. Haz clic en "Configurar", selecciona "Usar disco entero", haz clic en "Aplicar" y revisa tus cambios.

![Use Entire Disk](/assets/uploads/installer-use-entire-disk.webp)

Crea tu cuenta de usuario y revisa los cambios que se harán en tu sistema. Haz clic en "Instalar Vanilla OS" y la instalación comenzará.

![Confirming the installation](/assets/uploads/installer-confirm-installation.webp)

### Instalación avanzada

Esta sección te ayudará con el particionado manual en caso de que esta guía no cubra tus necesidades particulares para la instalación.

Selecciona el disco en el cual quieres instalar Vanilla OS y haz clic en en "Configurar". Selecciona "Particionado manual" y haz clic en la flecha de junto. Haz clic en "abrir GParted" para particionar manualmente tu disco.

![Manual Partitioning](/assets/uploads/installer-manual-partitioning.webp)

Después de que acabes, selecciona los puntos de montaje y sistemas de archivos para cada una de tus particiones. Tal vez quieras cerrar y reabrir el instalador para que las nuevas particiones aparezcan.

Haz clic en "Aplicar" y revisa tus cambios.

Crea tu cuenta de usuario y revisa los cambios que se harán en tu sistema. Haz clic en "Instalar Vanilla OS" y la instalación comenzará.

![Confirming the installation](/assets/uploads/installer-confirm-installation.webp)

## Arrancando Vanilla OS

### Si solamente tienes Vanilla OS instalado

Después de que el instalador finalice, todo lo que necesitas es reiniciar y remover la memoria USB. Vanilla OS te estará esperando.

### Si haces arranque dual o multi-arranque

#### En el mismo disco

Después de que el instalador finalice, todo lo que necesitas hacer es reiniciar y verás un menú de arranque con tus sistemas operativos instalados. Selecciona Vanilla OS, espera para que arranque y remueve la memoria USB.

#### En discos diferentes

Después de que el instalador finalice, necesitarás reiniciar y seleccionar Vanilla OS del menú de arranque de tu dispositivo, el cual puedes acceder manteniendo una tecla específica señalada en pantalla mientras el dispositivo arranca. Si esta no está presente, intenta buscar en línea tu modelo específico de dispositivo. Una vez que estés en Vanilla OS, remueve la memoria USB.

Puedes configurar el orden de arranque en las configuraciones de firmware de tu dispositivo.
