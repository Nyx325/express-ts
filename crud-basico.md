# CRUD Básico

Ahora vamos a definir nuestros endpoints de modo
que mandemos una solicitud HTTP con la información
necesaria en un JSON y el servidor nos devuelva una
respuesta. Estaré usando CURL para las pruebas pero
hay una herramienta llamada [Postman](https://www.postman.com/)
que permimte hacer solicitudes HTTP pero incluso
solicitudes POST sin que realmente incerten datos,
permite probar cosas de autenticación y esas cosas,
pero no la he usado mucho, y como ahorita mi API
maneja mi propia BD, pues ya eliminaré registros xd.

## Arquitectura

Técnicamente esto sigue siendo MVC pero más bien
diría que es arquitectura en capas, les toca
preguntar a su profesor de confianza si considera
o no que cumple la arquitectura

Crearemos los siguientes archivos y carpetas, por
ahora sólo crea las carpetas.

```
src
├── app.ts
├── controllers
│   └── clientController.ts
├── models
│   └── clientModel.ts
├── repository
│   ├── clientRepository.ts
│   └── dbPool.ts
├── routes
│   └── clientRoutes.ts
└── server.ts
```

- **Models:** Colocaremos nuestras clases
  que representan nuestras entidades.
- **Repository:** Nuestras funciones que manejan
  las operaciones a la base de datos pero
  considerando que las entidades ya fueron
  validadas. También colocaremos el conector
  a la base de datos, ese archivo `dbPool.ts`.
- **Controller:** En esta parte crearemos una
  clase que reciba la solicitud HTTP, la convierta
  la solicitud HTTP a un objeto y debería validarlo
  también, aunque yo personalmente lo haré en models.
  Lo pondremos en funciones pero no haremos que sean
  rutas.
- **Routes:** Aquí directamente asosiaremos las
  funciones con rutas.
- **App.ts:** Pondremos todas las rutas de distintas
  entidades asociadas a una ruta general y alguna
  configuración de específica del server.
- **Server.ts:** Será el punto de inicio de nuestro
  programa.

## El archivo main

Ahora definiremos el archivo que iniciará nuestro
sistema, en este caso nuestro archivo `server.ts`

```typescript
import app from "./app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

Simplemente haremos que el servidor se inicie
cuando se ejecute el script transpilado de JS

No importa que `app` anteriormente era importada
de `express` hace referencia a que importaremos
algo que definiremos en `app.ts` más adelante

## Configurar servidor

Ahora vamos a crear nuestro archivo `app.ts`

```typescript
import express from "express";

const app = express();

/**
 * Middleware para poder procesar el cuerpo de
 * nuestra solicitud como un JSON y no tener que
 * pasar los argumentos como "/ruta?arg1=1&arg2=hola"
 */
app.use(express.json());

/*
 * En esta sección también
 */

export default app;
```

`export default app` hace que nuestra instancia de `app`
pueda ser importado como lo hicimos en `server.ts` con
la diferencia que este objeto se inicializa antes. Como
el include en PHP, que el script de `app.ts` se ejecuta
antes de que se use en `server.ts`

## Configurar scripts para iniciar el proyecto

Y de una vez podemos ir definiendo los scripts
del proyecto para ejecutarlo

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node build/server.js",
    "dev": "ts-node-dev src/server.ts",
    "tsc": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

Definimos `npm run build` para sólo transpilado el programa
`npm run start` para inicializar el servidor una vez
transpilado. Estos serán aquellos comandos que deberíamos
ejecutar una vez despleguemos el sistema en un servidor.

Instalaremos `ts-node-dev` para que el sistema se transpile
automaticamente cuando modificamos algo (recomiendo usar
vscode para que funcione correctamente).

```bash
npm install ts-node-dev -D
```

Definimos `npm run dev` para que ejecutando ese comando
si realizamos un cambio en el código, automáticamente se
transpile y ejecute nuevamente el servidor

## Variables de entorno

Hay ciertas variables relacionadas a nuestra configuracion
del sistema que son fijas pero se deben definir previo al
uso del sistema, por ejemplo la URL, el nombre, usuario y
contraseña de la BD, o incluso cosas más importantes como
una contraseña que te sirve para loguearte en algun sistema.

Estas cosas pueden definirse en un archivo de "enviroment" o
archivo `.env` en este archivo se define a manera de texto
las variables y los valores, de forma que en lugar de ir a
modificar el código donde usas esos datos, y lo centralizas
en un archivo, si cambias el usuario o contraseña de la
base de datos cuando lo coloques en un servidor, puedes
modificar facilmente esto sin modificar el codigo o sea el
caso, recompilar el programa.

Además este sistema de variables de entorno es un estandard
y usaremos una dependencia llamada `dotenv`

```bash
npm install dotenv
```

Ahora crearemos un llamado `.env` en la raiz del proyecto

```
.
├── .env
├── build
│   └── index.js
├── eslint.config.mjs
├── package-lock.json
├── package.json
├── src
│   ├── app.ts
│   ├── controllers
│   │   └── clientController.ts
│   ├── models
│   │   └── clientModel.ts
│   ├── repository
│   │   ├── clientRepository.ts
│   │   └── dbPool.ts
│   ├── routes
│   │   └── clientRoutes.ts
│   └── server.ts
└── tsconfig.json
```

Y dentro del archivo escribiremos lo siguiente

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=barberia
DB_CONN_LIMIT=5

PAGE_SIZE=25
```

- **DB_HOST:** La IP del servidor que tiene la
  base de datos
- **DB_USER:** Nuestro usuario para la base de
  datos, en este caso nuestra base de datos en
  mariadb
- **DB_PASSWORD:** La contraseña para el usuario
  de la BD
- **DB_NAME:** Nombre de la base de datos
- **DB_CONN_LIMIT:** Esto lo explicaré más adelante
- **PAGE_SIZE:** Cuando hagamos una sentencia select
  lo haremos por "Páginas" ya que no es buena práctica
  traer todos los registros a memoria RAM, lo haremos
  mediante páginas, `PAGE_SIZE` define cuantos registros
  vienen por página, por ejemplo definimos que cada
  página venga de 25 en 25 registros

## Definir nuestra conexión a base de datos

Primero hay que descargar la dependencia para mariadb

```bash
npm install mariadb
```

Ahora crearemos nuestro archivo `dbPool.ts` en la
carpeta de `Repository`

```typescript
// Importamos los módulos para mariadb y dotenv
import mariadb from "mariadb";
import dotenv from "dotenv";

// Hacemos que dotenv lea y configure las variables
dotenv.config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST, // De esta forma buscamos la variable DB_HOST
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: Number(process.env.DB_CONN_LIMIT),
});

// En caso de DB_CONN_LIMIT lo debemos castear a un número

// Exportamos el objeto pool
export default pool;
```

### ¿Qué es POOL?

Cuando trabajas con un hilo único o una conexión a base
de datos única, cada vez que necesitas realizar una tarea,
creas un nuevo hilo o abres una nueva conexión. Esto puede
ser costoso en términos de tiempo y memoria, especialmente
si las tareas son cortas y necesitas crear muchos hilos o
conexiones.

Un pool es un conjunto predefinido de hilos o conexiones que
están listos para ser reutilizados. En lugar de crear un
nuevo hilo o conexión cada vez que lo necesitas, puedes tomar
uno del pool, usarlo y luego devolverlo al pool para que otro
proceso lo utilice (Una pila de conexiones o hilos). Esto
mejora la eficiencia, ya que reduce el tiempo y los recursos
necesarios para crear y destruir hilos o conexiones
constantemente.

Esto sería algo interesante de programar desde 0, pero por
suerte alguien ya lo hizo por nosotros, nuestra variable
de entorno `DB_CONN_LIMIT` es el número de conexiones
que abrimos, sinceramente no sé cuál es el número apropiado
pero pondré 5 xd.

### Ventajas

- **Eficiencia:** Reducen el costo de crear y destruir hilos
  o conexiones repetidamente.
- **Control:** Permiten controlar el número máximo de hilos
  o conexiones que se pueden utilizar al mismo tiempo, evitando
  que se sobrecargue el sistema.
- **Reutilización:** Los recursos pueden ser reutilizados, lo
  que optimiza el rendimiento general de la aplicación.
