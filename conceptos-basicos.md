# Conceptos básicos

## Indice
1. [API](#api)
2. [API REST](#api-rest)
3. [Endpoint](#endpoint)
4. [Solicitud HTTP](#solicitudes-http)
5. [Cabeceras HTTP](#cabeceras-http)
6. [Respuestas HTTP](#respuestas-http)
7. [Rutas](#rutas)
8. [Middleware](#middleware)
9. [Servir archivos estáticos o dinámicos](#servir-archivos-estáticos-o-dinámicos)
10. [JSON](#json)
11. [cURL](#curl)


## API

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
web en otro distinto, o los 3 en el mismo servidor.

## API REST

Una API REST (Transferencia de Estado Representacional) es un
tipo de API que utiliza el protocolo HTTP y sigue principios
específicos de diseño. REST permite la comunicación entre un
cliente y un servidor mediante recursos, que se identifican
mediante URLs. Las APIs REST son ampliamente utilizadas debido
a su simplicidad y eficiencia.

## Endpoint

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

## Solicitudes HTTP

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

## Cabeceras HTTP

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

## Respuestas HTTP

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

### 418 Soy una tetera

El código de error HTTP 418 Soy una tetera indica que el servidor se
rehusa a preparar café porque es una tetera. Este error es una
referencia al Hyper Text Coffee Pot Control Protocol, creado como
parte de una broma del April Fools' de 1998.

Una página que tiene documentación sobre los códigos http, etiquetas
HTML e incluso propiedades de estilos CSS, existe una página llamada
[MDN web docs](https://developer.mozilla.org/es/), vayan a su sección de
"References"

## Rutas

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

## Middleware

El middleware es un componente que se encuentra entre la solicitud
y la respuesta en una aplicación web. Puede realizar tareas como la
autenticación, el registro de solicitudes, el manejo de errores, etc.

El middleware permite modificar la solicitud o la respuesta antes de
que lleguen al controlador final.

## Servir archivos estáticos o dinámicos

- **Archivos estáticos:** Son archivos que no cambian y se envían tal
  como están al cliente. Ejemplos incluyen imágenes, hojas de estilo
  CSS y archivos JavaScript. Se suelen servir directamente desde el
  servidor sin procesar.

- **Archivos dinámicos:** Son generados en tiempo real por el
  servidor en función de la solicitud del cliente. Por ejemplo, una
  página web que muestra información de un usuario específico se
  genera dinámicamente al acceder a su URL.

## JSON

JSON (JavaScript Object Notation) es un formato ligero
de intercambio de datos que es fácil de leer y escribir
para los humanos, y fácil de analizar y generar para
las máquinas. Se utiliza comúnmente para transmitir
datos entre un servidor y un cliente en aplicaciones web.

### **Características:**

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

### Sintaxis

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

## CURL

cURL (Client for URLs) es una herramienta de línea de comandos
que permite transferir datos desde o hacia un servidor. Utiliza
varios protocolos, siendo HTTP y HTTPS los más comunes. cURL es
muy útil para realizar pruebas de APIs, descargar archivos, y
enviar datos.

cURL debería ya venir instalado en windows y listo para usarse
desde el cmd

### Uso

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

A partir de aquí les empezaré a explicar
conceptos básicos sobre el framework y la
tecnología que voy a utilizar, pero por
si se les hace tentativo. Les muestro
un ejemplo de cómo queda el código de una
api que les permite enviar texto al servidor
y este les responde con un `pong`. Este
es el "hola mundo" de un servidor llamado
`ping pong`.

```javascript
// archivo: servidor.js
// Importar express
const express = require("express");
const app = express();
const PORT = 3000; // Puerto en el que escuchará el servidor

// Definir la ruta para "ping"
app.get("/ping", (req, res) => {
  res.send("pong");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor de ping-pong ejecutándose en http://localhost:${PORT}`);
});
```

Ejemplo de cómo consulto mi servidor y la
respuesta

```bash
curl 'http://localhost:3000/ping'
pong
```
