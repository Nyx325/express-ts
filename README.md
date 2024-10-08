# Proyecto

Este repositorio va a contener tanto un proyecto
de pruebas de una API en Express con JavaScript y
TypeScript, además de mis notas sobre BackEnd junto
a mis notas sobre hacer una API en Express con JS y TS

## Indice

1. [Cómo ejecutar el proyecto](./notas/#cómo-ejecutar-el-proyecto)
2. [Notas](#notas)

## Cómo ejecutar el proyecto

### Prerequisitos

- [Node.js] Debes descargar el runtime de JS en tu
  equipo, ya sea mediante el instalador de Windows o
  si estás en Linux, te toca leer la Doc de tu distro
  o mirar cómo se hace jajaja

### Poner en marcha

Definir el archivo `.env` ejemplo

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=barberia
DB_CONN_LIMIT=5

PAGE_SIZE=25
```

Si vas a desplegar este sistema en algún servidor y
ya cuentas con `Node.js`.

```bash
npm install --omit=dev
npm run build
npm run start
```

Si vas a desarrollar en él entonces ejecuta

```bash
npm install
npm run dev
```

## Notas

Sí sólo vienes por las notas de Backend, recomiendo mirar las
extenciones que recomiendo en [Creando un proyecto](./crear-proyecto.md#prerequisitos-para-el-proyecto) para VSCode.

1. [Conceptos básicos para backend](./notas/conceptos-basicos.md)
2. [Creando un proyecto de Express con JS y TS](./notas/crear-proyecto.md)
3. [Tipos, clases e interfaces](./notas/tipos-clases-interfaces.md)
4. [CRUD básico](./notas/crud-basico.md)
