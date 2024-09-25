# Índice

1. [Introducción](#crear-api-con-express-ts-y-js)
2. [¿Por qué JavaScript?](#por-qué-javascript)
3. [¿Por qué TypeScript?](#por-qué-typescript)
4. [¿Son lenguajes lentos?](#son-lenguajes-lentos)
5. [Inserte título](#inserte-título)
6. [Conceptos básicos](#conceptos-básicos)
   - [JavaScript](#javascript)
   - [DOM](#dom)
     - [¿Para qué sirve?](#para-qué-sirve)
   - [TypeScript](#typescript)
     - [Traspilador](#traspilador)
   - [NodeJS](#nodejs)
   - [NPM](#npm)
   - [Express](#express)
   - [API](#api)
   - [API REST](#api-rest)
   - [Endpoint](#endpoint)
   - [Solicitudes HTTP](#solicitudes-http)
   - [Cabeceras HTTP](#cabeceras-http)
   - [Respuestas HTTP](#respuestas-http)
     - [Códigos de estado comunes](#códigos-de-estado-comunes)
   - [Rutas](#rutas)
   - [Middleware](#middleware)
   - [JSON](#json)
   - [Prerequisitos](#prerequisitos-para-el-proyecto)
   - [¿Qué es un Linter](#linter)
7. [Crear Proyecto](#crear-el-proyecto)
   - [Configurar TypeScript](#configuración-de-typescript)
   - [Dependencias API](#dependencias-para-crear-la-api)

# Crear api con express, ts y js

En este doc voy a concentrar conceptos básicos
de backend sumado a cómo realizar una API
haciendo uso de JavaScript, TypeScript y el
framework de Express.

## ¿Por qué JavaScript?

Porque es un lenguaje sencillo dentro de todo,
extremadamente flexible (incluso para mal), y
moderno, además que se puede usar para front
como back y es bastante usado de forma general.

## ¿Por qué TypeScript?

Porque JavaScript al ser demasiado flexible
con tipado debil y dinámico a veces llegan a
ocurrir cosas... Peculiares, y al no haber una
revisión de código demasiada estricta aún cuando
descargamos una herramienta para la revisión del
código, implica que pueden haber cosas que salgan
mal por tipado, y peor aún, que sea dificil de
encontrar la causa, TypeScript al agregarle tipado
estricto como los de otros lenguajes quita esto,
permitiendo permitir el uso del tipado de JavaScript
de ser necesario.

## ¿Son lenguajes lentos?

Si, al ser lenguajes interpretados pueden ser más
lentos que otros como C y Java, pero como vamos
a hacer CRUD y las consultas de datos o calculos
de los reportes pretendo que las haga la BD con
querys, creo que puedo darme el lujo de la practicidad
de estos lenguajes.

Si van a hacer cálculos con JavaScript, investiguen
si hay una libreria que permita calculos presisos,
porque JavaScript es pésimo redondeando decimales o
haciendo cálculos exactos en general.

## Inserte título

Los conceptos básicos si son bastantes, leanlo
con calma y no se los echen de una, lo puse
lo más resumido y sencillo que pude.

## Conceptos básicos

### JavaScript

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

### DOM

El DOM (Document Object Model) es una representación
estructurada de una página web en forma de árbol, donde
cada parte del contenido (como elementos HTML, atributos,
y texto) se convierte en un nodo dentro de este árbol.

#### ¿Para qué sirve?

El DOM permite que los lenguajes de programación, como
JavaScript, interactúen con la estructura de una página
web. Gracias al DOM, puedes acceder y modificar el
contenido, el diseño y la estructura de una página HTML
de manera dinámica

### TypeScript

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

#### Traspilador

Un transpilador es un software que traduce
un código fuente a otro código fuente haciendo validaciones
en el proceso.

Podría decirse erroneamente que TypeScript se "compila" a
JavaScript, pero recordemos que en si compilar es pasarlo
a lenguaje máquina, aquí sólo se queda en código de JS.

### NodeJS

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

### NPM

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

### Express

Express es un framework minimalista para Node.js, utilizado
para crear aplicaciones web y APIs de manera rápida y eficiente.
Se encarga de gestionar rutas, solicitudes y respuestas HTTP,
y de servir archivos estáticos o dinámicos.

- Características:
  - Simplifica la creación de aplicaciones web y APIs RESTful.
  - Soporta middleware, que permite interceptar y procesar las
    solicitudes HTTP antes de enviarlas a los controladores.
  - Extensible con múltiples plugins y bibliotecas.

### API

Una API (Interfaz de Programación de Aplicaciones) es un
conjunto de reglas y protocolos que permiten a diferentes
aplicaciones o servicios comunicarse entre sí. En otras palabras,
es una manera en la que un software puede interactuar con otro.
Por ejemplo, una API puede permitir que una aplicación de terceros
acceda a funciones o datos de otra aplicación.

En este caso el plan es realizar una API que gestione la base
de datos, el CRUD, pero brindaremos `enpoints` para que otra
aplicaciòn, como la interfaz web, pueda consultar los datos de
nuestra base de datos, de esta forma podríamos tener incluso
la base de datos en un servidor, la api en otro y la plataforma
web en otro distinto, o los 3 en el mismo servidor e incluso
separados

### API REST

Una API REST (Transferencia de Estado Representacional) es un
tipo de API que utiliza el protocolo HTTP y sigue principios
específicos de diseño. REST permite la comunicación entre un
cliente y un servidor mediante recursos, que se identifican
mediante URLs. Las APIs REST son ampliamente utilizadas debido
a su simplicidad y eficiencia.

### Endpoint

Un endpoint (o "punto de acceso") es una URL específica en una
API que representa un recurso o una acción en particular. Es el
lugar donde se puede acceder a los recursos de la API, y cada
endpoint está asociado a una operación que se puede realizar
(como obtener, crear, actualizar o eliminar datos).

- **Características:**
  - **URL Específica:** Cada endpoint tiene una URL única que
    lo identifica. Por ejemplo, en una API de gestión de usuarios,
    un endpoint podría ser `/usuarios` para acceder a la lista de
    usuarios. Una vez inicializada la API la forma de acceder al
    endpoint deberia ser algo como `localhost:8080/usuarios` o
    `danieltellez.net/usuarios`.
  - **Métodos HTTP:** Los endpoints responden a diferentes métodos
    HTTP, como GET, POST, PUT y DELETE, que indican la acción que
    se desea realizar en el recurso.
  - **Recursos:** Cada endpoint generalmente representa un recurso
    específico o una colección de recursos. Por ejemplo:

### Solicitudes HTTP

Las solicitudes HTTP son mensajes enviados desde el cliente al
servidor para pedirle que realice alguna acción. Existen varios
tipos de solicitudes, pero los más comunes son:

- **POST:** Envía datos al servidor para que se creen nuevos
  recursos. (Create)
- **GET:** Solicita datos del servidor. (Read)
- **PUT:** Actualiza un recurso existente en el servidor. (Update)
- **PATCH:** Se utiliza para actualizar parcialmente un recurso
  existente. A diferencia de PUT, que reemplaza todo el recurso,
  PATCH solo actualiza los campos especificados.
- **DELETE:** Elimina un recurso del servidor. (Delete)

La elección entre Put y Patch dependerá de ustedes, cuando se
tienen tablas con 1000 columnas, puede ser más práctico sólo
actualizar un campo especifico que actualizar toda la fila
aunque de todas formas sólo se actualice un dato, pero en el
caso de estancia puede ser irrelevante, y se podría usar PUT
pa' to' jajaja

### Cabeceras HTTP

Las cabeceras HTTP (o headers en inglés) son elementos que se
envían en las solicitudes y respuestas HTTP para proporcionar
información adicional sobre la comunicación. Estas cabeceras
ayudan a los servidores y clientes a entender cómo manejar la
solicitud o la respuesta, y a intercambiar información relevante
sobre el contenido, la autenticación, el tipo de conexión, entre
otros aspectos.

Dentro de estas cabeceras puede venir información del equipo
del cliente, la forma en el que te están enviando, o en el caso
del log-in puede venir un token que indique si está autenticado
o no, les toca investigar eso porque no logro resumir la info
porque ns qué más hacen jajaja

También viene información del servidor al momento de la respuesta,
el formato, si el servidor envía una cookie, etc.

### Respuestas HTTP

Las respuestas HTTP son los mensajes que el servidor envía de
vuelta al cliente después de procesar una solicitud. Incluyen un
código de estado que indica el resultado de la operación. Algunos
códigos comunes son:

- 200 OK: La solicitud se procesó correctamente.
- 201 Created: Un nuevo recurso se creó con éxito.
- 400 Bad Request: La solicitud no se pudo entender.
- 404 Not Found: El recurso solicitado no se encontró.
- 500 Internal Server Error: Hubo un error en el servidor al
  procesar la solicitud.

El código definido ya tiene un significado dado, es decir cualquier
error 404 significa que el recurso no se encontró, si necesitan
marcar algún error en específico pueden hacer uso de estos además
están estandarizados, no se asusten si ven alguno raro como mi favorito:

#### 418 Soy una tetera

El código de error HTTP 418 Soy una tetera indica que el servidor se
rehusa a preparar café porque es una tetera. Este error es una
referencia al Hyper Text Coffee Pot Control Protocol, creado como
parte de una broma del April Fools' de 1998.

Una página que tiene documentación sobre los códigos http, etiquetas
HTML e incluso propiedades de estilos CSS, existe una página llamada
[MDN web docs](https://developer.mozilla.org/es/), vayan a su sección de
"References"

### Rutas

Las rutas son las URLs a las que se puede acceder en una API. Cada
ruta generalmente corresponde a un recurso específico. Por ejemplo:

- `GET /usuarios:` Obtener una lista de usuarios.
- `POST /usuarios:` Crear un nuevo usuario.
- `PUT /usuarios/1:` Actualizar el usuario con ID 1.
- `DELETE /usuarios/1:` Eliminar el usuario con ID 1.

Estas rutas se definen en el código de tu API y son tus endpoints.

Dentro de estas rutas puedes pasar argumentos que corresponden
a tu info, de ahi que se vean urls como
`search?client=firefox-b-d&q=expressjs`, corresponde a una busqueda
en google, donde envìo mi navegador, firefox y mi busqueda, expressjs

Estos argumentos corresponde a una función real en tu código, no
creo que se escriba así pero normalmente. En esta se suele definir
el tipo de solicitud HTTP y la ruta, en este caso les mostraré un
endpoint GET en distintos lenguajes y frameworks.

Ejemplo en Java framework Spring Boot

```Java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClientController {

    @GetMapping("/clients")
    public String getClientInfo(
            @RequestParam String nombre,
            @RequestParam String apellido,
            @RequestParam int edad) {

        // Aquí podrías procesar la información como necesites
        return String.format("Cliente: %s %s, Edad: %d", nombre, apellido, edad);
    }
}
```

En lenguaje Rust con framework Arctix Web

```rust
use actix_web::{get, web, App, HttpResponse, HttpServer, Responder};

//Endpoint
#[get("/clients")]
async fn get_client_info(query: web::Query<ClientQuery>) -> impl Responder {
    let nombre = &query.nombre;
    let apellido = &query.apellido;
    let edad = query.edad;

    // Procesar la información recibida
    HttpResponse::Ok().body(format!("Cliente: {} {}, Edad: {}", nombre, apellido, edad))
}

// Cosas extra del framework
#[derive(serde::Deserialize)]
struct ClientQuery {
    nombre: String,
    apellido: String,
    edad: u32,
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(get_client_info) // Registra el endpoint
    })
    .bind("127.0.0.1:8080")? // Escucha en el puerto 8080
    .run()
    .await
}
```

Ejemplo en javascript con framework Express

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

// Definición del endpoint
app.get("/clients", (req, res) => {
  const { nombre, apellido, edad } = req.query;

  // Procesar la información recibida
  if (!nombre || !apellido || !edad) {
    return res
      .status(400)
      .send("Faltan parámetros: nombre, apellido y edad son requeridos.");
  }

  res.send(`Cliente: ${nombre} ${apellido}, Edad: ${edad}`);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
```

Ejemplo de cómo quedaría la solicitud en url

```
http://localhost:8080/clients?nombre=Juan&apellido=Pérez&edad=30
```

### Middleware

El middleware es un componente que se encuentra entre la solicitud
y la respuesta en una aplicación web. Puede realizar tareas como la
autenticación, el registro de solicitudes, el manejo de errores, etc.

El middleware permite modificar la solicitud o la respuesta antes de
que lleguen al controlador final.

### Servir archivos estáticos o dinámicos

- **Archivos estáticos:** Son archivos que no cambian y se envían tal
  como están al cliente. Ejemplos incluyen imágenes, hojas de estilo
  CSS y archivos JavaScript. Se suelen servir directamente desde el
  servidor sin procesar.

- **Archivos dinámicos:** Son generados en tiempo real por el
  servidor en función de la solicitud del cliente. Por ejemplo, una
  página web que muestra información de un usuario específico se
  genera dinámicamente al acceder a su URL.

### JSON

JSON (JavaScript Object Notation) es un formato ligero
de intercambio de datos que es fácil de leer y escribir
para los humanos, y fácil de analizar y generar para
las máquinas. Se utiliza comúnmente para transmitir
datos entre un servidor y un cliente en aplicaciones web.

#### **Características:**

- **Formato de Texto:** JSON es un formato de texto
  que se puede enviar y recibir a través de la red,
  y puede ser leído y escrito en muchos lenguajes de
  programación.
- **Estructura de Datos:** JSON representa datos
  estructurados en forma de pares clave-valor, similares
  a un objeto en JavaScript. Esta estructura lo hace
  intuitivo y fácil de entender.
- **Soporte Multilenguaje:** Aunque JSON se deriva de
  JavaScript, es compatible con muchos otros lenguajes
  de programación, como Python, Java, C#, y más.

#### Sintaxis

- **Objetos:** Se definen con llaves `{}` y pueden tener
  pares clave-valor

**Ejemplo:**

```json
{
  "nombre": "Juan",
  "edad": 30
}
```

- **Arreglos:** Se definen mediante corchetes `[]` y
  pueden contener multiples valores

**Ejemplo:**

```json
{
  "nombres": ["Juan", "María", "Pedro"]
}
```

Con este formato podemos guardar incluso arreglos
de objetos o incluso contener dentro del mismo
archivo objetos de diferente tipo, o incluso objetos
que sus atributos son objetos, muchas posibilidades.

```json
{
  "personas": [
    {
      "nombre": "Juan",
      "edad": 15
    },
    {
      "nombre": "Ana",
      "edad": 15
    },
    {
      "nombre": "Polo",
      "edad": 27
    }
  ],
  "mascotas": [
    {
      "nombre": "Koda"
    },
    {
      "nombre": "Indiana"
    },
    {
      "nombre": "Reese"
    },
    {
      "nombre": "Tasmi"
    },
    {
      "nombre": "Sisi"
    }
  ]
}
```

### CURL

cURL (Client for URLs) es una herramienta de línea de comandos
que permite transferir datos desde o hacia un servidor. Utiliza
varios protocolos, siendo HTTP y HTTPS los más comunes. cURL es
muy útil para realizar pruebas de APIs, descargar archivos, y
enviar datos.

cURL debería ya venir instalado en windows y listo para usarse
desde el cmd

#### Uso

Solicitud GET por defecto

```bash
curl https://api.ejemplo.com/datos
```

Indicar solicitud especifica con `-X` e indicar el cuerpo
de la solicitud mediante `-d`.

```bash
curl -X PUT https://api.ejemplo.com/datos/1 -d "nombre=Juan&edad=31"
```

Puedes agregar cabeceras con `-H`

```bash
curl -H "Authorization: Bearer tu_token" https://api.ejemplo.com/datos

```

Incluso podemos mandar un `json` en el cuerpo, se usa `\`
para indicar saltos de linea sin que se mande el comando
linea por linea

```bash
curl -X POST https://api.ejemplo.com/datos \
-H "Content-Type: application/json" \
-d '{"nombre": "Juan", "edad": 30}'
```

Descargar archivos con `-o`

```bash
curl -O https://ejemplo.com/archivo.zip
```

Guardar la respuesta en un archivo con `-o`

```bash
curl https://api.ejemplo.com/datos -o respuesta.json
```

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

## Configuración de typescript

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

