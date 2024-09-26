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
app.get("/ping", (_req, res) => {
  // Imprimimos como
  console.log("Some one pinged here");

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
