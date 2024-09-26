import { Client } from "../models/clientModel";
import pool from "./dbPool";
import dotenv from "dotenv";

export class ClientRepository {
  async add(client: Client): Promise<void> {
    const conn = await pool.getConnection();
    const query =
      "INSERT INTO clients (client_name, client_lastname, client_birthday) VALUES (?,?,?);";

    await conn.query(query, [
      client.clientName,
      client.clientLastName,
      client.clientBirthDay,
    ]);

    if (conn) conn.release();
  }

  async getPage(pageNumber: number): Promise<Client[]> {
    if (!Number.isInteger(pageNumber)) {
      throw Error("Page number must be an integer");
    }

    dotenv.config();
    const pageSize = process.env.DB_HOST; 
    const conn = await pool.getConnection();
    const query =
      "SELECT client_name, client_lastname, client_birthday FROM clients LIMIT ? OFFSET ( ? - 1 ) * ?;";

    const rows = await conn.query(query, [
      pageSize,
      pageNumber,
      pageSize,
    ]);

    if (conn) conn.release();

    return rows as Client[]
  }
}
