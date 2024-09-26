import app from "./app";
import pool from "./repository/dbPool";

const PORT = 3000;

app.get("/pool", (_req, res) => {
  pool
    .getConnection()
    .then((conn) => {
      // Realizar una consulta
      return conn
        .query("SELECT * FROM servicios")
        .then((rows) => {
          res.send(`Datos obtenidos: ${JSON.stringify(rows)}`);
          conn.release(); // Liberar la conexión después de usarla
        })
        .catch((queryErr) => {
          res.send(`Error al realizar consulta: ${queryErr}`);
          conn.release(); // Asegurarse de liberar la conexión en caso de error en la consulta
        });
    })
    .catch((connErr) => {
      res.send(`Error al obtener conexión: ${connErr}`);
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
