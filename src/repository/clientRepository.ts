import { Client, NewClient } from "../models/clientModel";
import pool from "./dbPool";
import dotenv from "dotenv";
import { Repository } from "./repository";
// Cargar variables de entorno una sola vez al principio
dotenv.config();

export class ClientRepository extends Repository {
  // Agregar cliente a la base de datos
  async add(client: NewClient): Promise<void> {
    const conn = await pool.getConnection();
    const query =
      "INSERT INTO clients (client_name, client_lastname, client_birthday) VALUES (?,?,?);";
    try {
      await conn.query(query, [
        client.clientName,
        client.clientLastName,
        client.clientBirthDay,
      ]);
    } finally {
      if (conn) conn.release();
    }
  }

  // Obtener lista de clientes paginada
  async getClients(pageNumber: number): Promise<Client[]> {
    if (!Number.isInteger(pageNumber)) {
      throw new Error("Page number must be an integer");
    }

    const pageSize = this.getPageSize();
    const offset = (pageNumber - 1) * pageSize;

    const query =
      "SELECT client_name, client_lastname, client_birthday FROM clients LIMIT ? OFFSET ?;";
    const conn = await pool.getConnection();
    try {
      const rows = await conn.query(query, [pageSize, offset]);
      return rows as Client[];
    } finally {
      if (conn) conn.release();
    }
  }
}
