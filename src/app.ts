import express from 'express'
import clientsRoutes from './routes/clientRoutes';

const app = express()

// Middleware para procesar JSON
app.use(express.json())

/* Considerando que clientRoutes es un "Router"
 * app.use('/clients', clientRoutes)
 */
// Rutas
app.use("/clients", clientsRoutes)

export default app;