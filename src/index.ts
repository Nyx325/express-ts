// Importamos express. Debería dar error
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

/*
  */
app.get('/ping', ())
