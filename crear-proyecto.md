## JavaScript

JavaScript es un lenguaje de programación que
se utiliza principalmente para agregar interactividad
a las páginas web. Es un lenguaje del lado del cliente,
lo que significa que se ejecuta en el navegador web,
permitiendo crear sitios web dinámicos.

- **Características:**
  - Dinámico y basado en eventos.
  - Soporte para el paradigma de programación orientada
    a objetos y funcional.
  - Utilizado para manipular el DOM (Document Object
    Model), lo que permite cambiar el contenido de una
    página sin recargarla.

## DOM

El DOM (Document Object Model) es una representación
estructurada de una página web en forma de árbol, donde
cada parte del contenido (como elementos HTML, atributos,
y texto) se convierte en un nodo dentro de este árbol.

### ¿Para qué sirve?

El DOM permite que los lenguajes de programación, como
JavaScript, interactúen con la estructura de una página
web. Gracias al DOM, puedes acceder y modificar el
contenido, el diseño y la estructura de una página HTML
de manera dinámica

## TypeScript

TypeScript es un superset de JavaScript, lo que significa
que amplía las funcionalidades de JavaScript agregando
tipado estático. Esto permite definir los tipos de datos
de las variables y las funciones, además agrega tipos como
clases abstractas o interfaces lo que facilita el desarrollo
de aplicaciones grandes y reduce errores.

- **Características:**
  - El código TypeScript se "transpila" a JavaScript.
  - Añade tipos estáticos (como string, number, etc.),
    interfaces y clases.
  - Facilita el mantenimiento de grandes proyectos.

### Traspilador

Un transpilador es un software que traduce
un código fuente a otro código fuente haciendo validaciones
en el proceso.

Podría decirse erroneamente que TypeScript se "compila" a
JavaScript, pero recordemos que en si compilar es pasarlo
a lenguaje máquina, aquí sólo se queda en código de JS.

## NodeJS

Node.js es un entorno de ejecución de JavaScript del lado
del servidor. Permite ejecutar código JavaScript fuera del
navegador, lo que lo hace ideal para crear aplicaciones del
lado del servidor, como APIs, servidores web, o herramientas
de línea de comandos.

- Características:
  - Basado en el motor V8 de Google Chrome.
  - Asíncrono y basado en eventos, lo que lo hace altamente
    eficiente para manejar múltiples solicitudes simultáneamente.
  - Tiene acceso a archivos del sistema, bases de datos y
    redes, algo que JavaScript en el navegador no tiene.

## NPM

npm (Node Package Manager) es el gestor de paquetes para
Node.js. Permite instalar, actualizar y gestionar
dependencias (bibliotecas, frameworks, etc.) que tu proyecto
necesita para funcionar.

Existen más gestores de paquetes para Node.js

- **Características:**
  - Acceso a un repositorio enorme de módulos y paquetes.
  - Facilita la instalación de librerías y su integración
    en proyectos Node.js.
  - Incluye scripts para automatizar tareas de desarrollo
    (compilación, pruebas, etc.).

## Express

Express es un framework minimalista para Node.js, utilizado
para crear aplicaciones web y APIs de manera rápida y eficiente.
Se encarga de gestionar rutas, solicitudes y respuestas HTTP,
y de servir archivos estáticos o dinámicos.

- Características:
  - Simplifica la creación de aplicaciones web y APIs RESTful.
  - Soporta middleware, que permite interceptar y procesar las
    solicitudes HTTP antes de enviarlas a los controladores.
  - Extensible con múltiples plugins y bibliotecas.

## Prerequisitos para el proyecto

1. Editor de código, recomendación, VSCode, extenciones
   recomendadas con cosas para web y cosas de JS

   - **Auto Rename Tag:** Si tienes una etiqueta de un elemento
     y renombras la etiqueta de apertura, automaticamente renombra
     la de cierre.

   - **Auto Close Tag:** Si escribes una etiqueta como `<body>`
     automaticamente te pondrá la etiqueta de cierre siempre que
     la etiqueta la necesite

   - **Live preview:** Te deja previsualizar un html y ver sus
     cambios en tiempo real, creo que con archivos que usen php
     suele tener problemas, creo, pero para javascript en el front
     no tiene tanto problema

   - **Error lens:** Errores y advertencias más visibles y con
     mensaje en pantalla

   - **ESLint:** Integra un linter, que es una herramienta que
     revisa tu código en tu proyecto para proyectos de javascript
     y typescript (más adelante menciono como se configura el
     proyecto para que tengas correcciones de código)

   - **PHP Intelephense:** Extención ofrece autocompletado
     básico de PHP, pero además te admite correciones de código
     si configuras un Linter

   - **Prettier:** Te da formato a tu codigo con identaciones,
     espacios, etc. Preisonen `Ctrl+Shift+P` para abrir la consola
     de comandos de VSCode, y escriban `Format document` para la
     mayoria de lenguajes ya les formateará el código

   - Extras de extenciones para VSCode no relacionados a web

     1. **Live share:** Extensión para que un invitado pueda
        modificar tu codigo almacenado en tu computadora

     2. **JSON Crack:** Te deja mirar los JSON en formato
        de una grafica interactiva

     3. **Better comments:** Ofrece resaltado de colores para
        algunos comentarios incluso para comentarios que se
        colocan a manera de documentación incluso en nuestros
        propios comentarios, como `javadoc` (comentarios de
        documentacion de java), `JSDoc` (formato de comentarios
        para JavaScript y TypeScript).

     4. **Java extension pack:** Permite editar cosas de java y
        con compatibilidad con maven para crear y abrir proyectos

     5. **Fluent Icons:** Otro tema de íconos para archivos
        y el editor en general

     6. **Symbols:** Íconos de archivos y carpetas más bonitos

2. **Node.js:** Instalar el runtime de JS, `npm` viene por
   defecto con node. Mirar página de [Node.js](https://nodejs.org/en)

## Linter

Un linter es una herramienta de software que analiza el
código fuente de un programa para detectar errores, inconsistencias
y violaciones de las normas de estilo de codificación. Su principal
objetivo es mejorar la calidad del código y ayudar a los
desarrolladores a mantener un código más limpio y legible.

## Crear el proyecto

Primero hay que iniciar un proyecto como se haría con
caulquier proyecto de Node.js

```bash
mkdir proyecto
cd proyecto
npm init -y
```

Instalar typescript en el proyecto

```bash
npm install typescript -D
```

El argumento `-D` en el comando `npm install` es
una abreviatura de `--save-dev`, y se utiliza para
instalar dependencias de desarrollo en un proyecto
Node.js. Estas dependencias se almacenan en la
sección `devDependencies` del archivo
`package.json`. Las dependencias de desarrollo son
aquellas que solo son necesarias durante el proceso
de desarrollo del proyecto, pero no cuando la
aplicación está en producción.

El comando `npm run` se utiliza para ejecutar
scripts definidos en el archivo `package.json` de tu
proyecto Node.js. Dentro de este archivo, puedes
definir una sección llamada `scripts`, donde puedes
crear y nombrar comandos personalizados para
automatizar tareas. Directamente podemos ejecutar
comandos de consola y asociarlos a una palabra para
que se ejecute con `npm run [palabra]` en la sección de
`scripts`.

Por ejemplo, si tu `package.json` tiene algo como:

```json
{
  "scripts": {
    "start": "node app.js",
    "build": "webpack --config webpack.config.js",
    "test": "jest"
  }
}
```

Puedes ejecutar scripts usando `npm run [script]`:

- `npm run start`: Ejecuta el comando `node app.js`.
- `npm run build`: Ejecuta el comando `webpack --config webpack.config.js`.
- `npm run test`: Ejecuta el comando `jest`.

1. La notación `npm run [script] -- --flags` es una forma de
   pasar argumentos o flags adicionales al comando que se
   está ejecutando a través de npm run.

2. `--` (doble guion): El `--` es una convención utilizada
   en muchos entornos (incluyendo npm) para separar los
   argumentos que son para npm de los argumentos que deseas
   pasar al comando o script que estás ejecutando.

3. `--flags`: Esto representa las opciones o banderas (flags)
   que se van a pasar al comando o script que estás ejecutando.
   Estas son específicas del comando en cuestión. Por ejemplo,
   si estás ejecutando TypeScript (`tsc`), las flags pueden ser
   cosas como `--init`, `--watch`, etc.

Al usar `tsc --init` nos crea un archivo `tsconfig.json` donde
están definidas las reglas de checado que hará el traspilador
de TypeScript cuando convierta nuestro código a JavaScript.

ahora agregaremos el script de `tsc` a nuestro `package.json`
`tsc` traspila los archivos de TypeScript.

```json
{
  "name": "proyecto",
  "version": "1.0.0",
  "description": "## Crear el proyecto",
  "main": "index.js",
  "scripts": {
    "tsc": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^5.6.2"
  }
}
```

Ahora inicializamos el proyecto

```bash
npm run tsc -- --init
```

## Configurar TypeScript

No siempre es obligatorio modificar la configuración
manual pero para que se sepa qué se está haciendo. En
nuestro archivo `tsconfig.json` configuraremos

- `"target": "es2016"`: Define a qué versión de
  JavaScript (ECMAScript) el código TypeScript se
  va a traspilar. Como TypeScript es un superset
  de JavaScript, necesita convertir (o "transpilar")
  el código TypeScript a JavaScript para que pueda
  ejecutarse en los entornos de destino (como
  navegadores o servidores con Node.js)

- `"module": "commonjs"`: en el archivo
  `tsconfig.json` define el sistema de módulos
  que el compilador de TypeScript utilizará
  al generar el código JavaScript. En este caso,
  el valor `"commonjs"` indica que TypeScript debe
  generar módulos compatibles con CommonJS, que es
  el sistema de módulos utilizado por Node.js.

  1. **CommonJS: ** los módulos se exportan y se
     importan usando las funciones module.exports
     y require(). Este sistema es sincrónico y fue
     diseñado para ser utilizado en entornos de
     servidor, como Node.js.

Exportar en CommonJS

```javascript
// archivo1.js
module.exports = {
  saludar: function () {
    console.log("Hola");
  },
};
```

Importar en CommonJS

```javascript
// archivo2.js
const modulo = require("./archivo1");
modulo.saludar(); // "Hola"
```

- `"outDir": "./build"`: Indica en qué carpeta
  se almacenan los archivos traspilados de javascript

- `"strict": "true"`: Activa todos los chequeos de
  tipado estricto que tiene TypeScript, latoso para
  escribir pero útil para evitar errores por tipos

- `"noUnusedLocals": true`: Marcar un error si existen
  variables sin utilizar

- `"noUnusedParameters": true`: Marcar error si existen
  parámetros sin utilizar

- `"noImplicitReturns": true`: Obligar a que todas las
  funciones tengan un retorno tipado

- `"noFallthroughCasesInSwitch": true`: Los `switch` deben
  tener un `break` o `return` siempre

## Linter para JS y TS

```bash
npm init @eslint/config@latest

> express-ts@1.0.0 npx
> create-config

@eslint/create-config: v1.3.1

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · commonjs
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · typescript
✔ Where does your code run? · browser
The config that you've selected requires the following dependencies:

eslint, globals, @eslint/js, typescript-eslint
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
☕️Installing...

added 118 packages, and audited 120 packages in 14s

34 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Successfully created /home/rubenor/workspace/express-ts/eslint.config.mjs file.
```

## Dependencias para crear la API

Descargar `Express`

```bash
npm install express -E
```

El argumento `-E` en npm se utiliza para instalar paquetes de
Node.js con la versión exacta que se especifica. Al usar `-E`,
npm instala el paquete sin permitir que se resuelvan las
versiones de forma flexible.

- Si no especificas `-E`, npm podría instalar la última versión
  disponible, lo que y si existen librerias o dependencias que no
  son compatibles con esa versión o cambiaron en algo, tendríamos
  un problema, por ahora deberíamos estar usando la última versión
  pero usar `-E` es buena práctica.

- Sin embargo, en las versiones más recientes de npm, el uso de
  `-E` se vuelve menos común, ya que se ha mejorado la gestión de
  versiones en package.json. Si realmente necesitas un control
  estricto sobre las versiones, puedes simplemente definir la
  versión exacta en el archivo package.json sin necesidad de usar
  `-E`.

## Pasar funciones como argumentos, funciones anónimas

Toda función tiene memoria asignada desde que se define,
por eso en C debiamos poner los prototipos de funciones
al inicio del archivo, para que el compilador asigne esa
memoria desde el inicio

Existe algo llamado **apuntadores a funciones** estas
son variables que referencían a la memoria de esa funcion

```c
#include <stdio.h>
void funcion1() { printf("Hacer algo\n"); }

// Decir que el argumento es func(void) es lo
// mismo que decir func()
void funcion2(void) { printf("Hacer algo diferente\n"); }

int main() {
  /* Definir un apuntador a funcion, donde
   * el argumento es void, (no recibe argumentos)
   * y su retorno es void
   */
  void (*funcion)(void);

  // Puedo asignar a qué funcion se refiere
  // de esta forma
  funcion = funcion1;
  // Y la llamo de esta forma
  funcion();

  funcion = funcion2;
  funcion();
}
```

La salida de este código es:

```
Hacer algo
Hacer algo diferente
```

En C al menos, puedes incluso almacenar
varias referencias de una función siempre
que tengan el mismo retorno y argumentos, o
eso hasta donde yo sé jajajaja

Otro ejemplo más raro

```c
#include <stdio.h>
void funcion1(int num, float otro_num) {
  num *= 5;
  otro_num = 2;

  printf("Num: %d otro_num %.2f\n", num, otro_num);
}

void funcion2(int a, float b) { printf("Hola mundo\n"); }

int main() {
  // Definir un array que guarde 2 apuntadores a funciones
  // que reciban (int, float) y retorne void
  void (*array_funciones[2])(int, float) = {funcion1, funcion2};

  // Incluso podemos iterar el array y llamar a la funcion
  // aunque nos de resultados diferentes
  for (int i = 1; i <= 2; i++) {
    array_funciones[i - 1](i, 1.5);
  }
}
```

La salida es

```
Num: 5 otro_num 2.00
Hola mundo
```

Bueno, se ve muy raro de escribir, y lo es, pero con Javascript
es más sencillo, pero ahora entienden que si tienen `funcion1()`
y ustedes solo escriben `funcion1` están haciendo una referencia
a la funcion, y que esta referencia se puede guardar en una
variable

Ahora en javascript

```javascript
function funcion1() {
  console.log("Hola mundo");
}

function funcion2(variable1, variable2) {
  console.log(`Var1 ${variable1}, Var2 ${variable2}`);
}

const referencia = funcion1;

referencia();

const arrayFunciones = [funcion1, funcion2];

console.log("\nRecorrer array\n");
for (let i = 0; i < arrayFunciones.length; i++) {
  arrayFunciones[i]();
}
```

### Funciones anónimas

Ahora imaginen que definimos una función sin nombre,
podemos hacerlo, pero no tendremos como referrirnos
a ella, a no ser, que usemos una referencia

```javascript
let referencia = function (var1, var2) {
  console.log(`${var1} ${var2}`);
};

referencia("Hola mundo", 1.5);

// Usamos una flecha para indicar una función
// anónima
referencia = (var1, var2) => {
  console.log(`${var1} ${var2}`);
};

referencia(1, true);
```

La salida es

```
Hola mundo 1.5
1 true
```

Entonces podemos definir un método que reciba
como argumento un apuntador a funcion

```javascript
class App {
  constructor() {}

  /**
   * @param ruta {string} Representa la ruta de
   * nuestro endpoint o algo así
   * @param funcionSolicitud {function} una funcion que recibe dos parámetros,
   * y no hace realmente nada con ellos xd
   */
  get(ruta, funcionSolicitud) {
    funcionSolicitud(`GET ${ruta}`, "Hello world");
  }
}

const app = new App();

console.log("-------- Forma 1 -------");

app.get("/client", function (req, res) {
  console.log(`Solicitud ${req}, Respuesta ${res}`);
});

console.log("-------- Forma 2 -------");
app.get("/client", (req, res) => {
  console.log(`Solicitud ${req}, Respuesta ${res}`);
});
```

Salida

```
-------- Forma 1 -------
Solicitud GET /client, Respuesta Hello world
-------- Forma 2 -------
Hola mundo
Solicitud GET /client, Respuesta Hello world
```

## El hola mundo de la API: PING PONG

Ahora haremos el hola mundo de nuestra api, crearemos
una carpeta `src` en la raiz de nuestro proyecto y
crearemos un archivo `index.ts` y pondremos algo de código

```
.
├── node_modules
├── package-lock.json
├── package.json
├── src
│   └── index.ts
└── tsconfig.json
```

**Nota:** Si tu editor de código te marca errores no
te asustes, en principio diremos cómo se solucionan.

```typescript
// Importamos express. Debería dar error
// Cannot find module 'express' or its corresponding type declarations. [2307]
import express from "express";

const app = express(); //Crear aplicación con express

/* Indicar que la app use el middleware de
 * express.json que transforma el cuerpo de
 * la solicitud http a un JSON, de forma que
 * podemos manipular más facil la solicitud
 * sin tener que convertir manualmente los
 * datos de la misma
 */
app.use(express.json());

// Definir una constante que corresponda al puerto a usar
const PORT = 3000;

/**
 * Definimos nuestro endpoint, definimos con
 * .get() que es de tipo get, duh, pero recibe
 * como argumentos la ruta que va a tener, y una
 * función anónima que determina qué se hará
 * cuando se consulte esa ruta, esta función
 * recibe la solicitud (request), supongo que
 * tendrá info de la misma, y un objeto de
 * respuesta (response) y de la cual podemos
 * enviar algo al cliente nuevamente
 *
 * Deberíamos recibir un error en los argumentos
 * de req y res
 *
 * Parameter 'req' implicitly has an 'any' type. [7006]
 * Parameter 'res' implicitly has an 'any' type. [7006]
 */
app.get("/ping", (req, res) => {
  // Imprimimos en la consola del servidor
  console.log("Some one pinged here");

  console.log(req);

  // Enviamos el texto pong
  res.send("pong");
});

/**
 * ponemos al servidor en "Escucha" (esperando
 * a que un paquete por red llegue a ese puerto
 * para procesar la solicitud)
 */
app.listen(PORT, () => {
  console.log(`Servidor en escucha en puerto ${PORT}`);
});
```

El error de implicity has an 'any' type significa que
se indica que el dato no tiene tipo y que podría ser
cualquier tipo de dato, objeto o estructura de datos,
esto es como si por defecto en Javascript definimos
el argumento de una función, y debido a una regla que
colocamos en TypeScript siempre se debe definir tipos.

En el primer error, indica que no tiene los "tipos" de
express. Cuando usamos typescript e importamos un paquete
puede ocurrir que ya hay tipos definidos en el módulo,
recordando que por defecto en javascript no los hay y
en su mayoria los modulos están escritos en JS, o que
no estén y debamos importarlos de forma externa.

A veces hay personas que crean tipos para nosotros y que
no tengamos problemas.

habrá que buscar si existen para lo que necesitamos, como
es el caso de express, pero en caso de que no haya, supongo
que la solución es quitar la regla de "strict = true" y colocar
todas las normas individuales de strict omitiendo el implicit
any

Para expres haremos

```bash
npm install @types/express -D
```

Con esto los 3 errores se eliminarían pero ahora obtenemos otro
en `req` 'req' is declared but its value is never read. [6133]
este error indica que estamos definiendo una variable que no
se usa, para cuando son variables nuestras es util, pero cuando
son de algo más como es en este caso, podemos omitir el warning
colocando un guión bajo `_` antes del nombre de la variable
o directamente sustituir el nombre de la variable por un `_`

```typescript
app.get("/ping", (_req, res) => {
  // Imprimimos como
  console.log("Some one pinged here");

  // Enviamos el texto pong
  res.send("pong");
});
```

Ahora hay que transpilar el programa

```bash
npm run  tsc
```

Las carpetas del proyecto deberían ser

```
.
├── build
│   └── index.js
├── eslint.config.mjs
├── package-lock.json
├── package.json
├── src
│   └── index.ts
└── tsconfig.json
```

Ahora deberíamos poder ver la carpeta de `build` dentro de la
cual tendríamos que ver nuestra misma distribucion de carpetas
y archivos de `src` pero colocando nuestros archivos `.ts` a
`.js` otros archivos como `.html` o cualquier otro no se
colocarán en build, cualquier cosa que hayamos hecho y queramos
usar como importar el codigo escrito de TS en un html, tendremos
que referenciar el archivo JS transpilado en la carpeta build

Ahora vamos a poner en marcha el servidor

```bash
npm install # Instalar todas las dependencias en caso de no tenerlas
node build/index.js # Ejecutar nuestro script de JS
```

el último comando podría colocarse como un `script` para ejecutarse
con `npm run` pero por ahora así que se quede jajaj, deberíamos ver
el mensaje de "Servidor en escucha en el puerto 3000" y abriendo un
navegador web y escribiendo `http://localhost:3000/ping` deberiamos ver
`pong` escrito, o si usamos `curl` también.

En la terminal del cliente

```bash
curl http://localhost:3000/ping
pong
```

En la terminal del servidor

```bash
node build/index.js
Servidor en escucha en puerto 3000
Some one pinged here
```

Ahora para poder ir desarrollando y viendo los cambios
tendríamos que eliminar la carpeta `build` a cada cambio
y compilando nuevamente, sin embargo esto es tardado, y
existe una dependencia que nos permite ejecutar una vez
el proyecto y cada que hagamos un cambio que se re compile
solo

Definiremos dos scripts, `start` para que se ejecute por
defecto nuestro archivo, cuando pongamos en uso de forma
oficial el sistema este es el comando que ejecutaremos
y un script `dev` que será el que recompile todo cada que
hagamos un cambio.

En nuestro `package.json` agregaremos ambos scripts

```json
{
  "scripts": {
    "start": "node build/index.js",
    "dev": "ts-node-dev src/index.ts",
    "tsc": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

Como ven, colocamos un `ts-node-dev` esta es la dependencia
que nos va a recompilar y ejecutar esto, pero debemos
instalarla

```bash
npm install ts-node-dev -D
```

De esta forma pueden abrir una terminal de vscode, ejecutar
`npm run dev` y cada que hagan un cambio y o guarden se
volverá a ejecutar el programa, intenté yo con mi terminal
en linux pero sólo jala con la terminal del vscode, ni idea
de pq xd.
