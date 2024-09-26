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

  async getClients(pageNumber: number): Promise<Client[]> {
    if (!Number.isInteger(pageNumber)) {
      throw Error("Page number must be an integer");
    }

    dotenv.config();
    const pageSizeEnvVar = process.env.PAGE_SIZE;

    if (pageSizeEnvVar === undefined)
      throw Error("PAGE_SIZE variable isn't set on .env file");

    if (!Number.isInteger(Number(pageSizeEnvVar)))
      throw Error("PAGE_SIZE must be an interger");

    const pageSize = Number(pageSizeEnvVar);

    const offset = (pageNumber - 1) * pageSize;

    const conn = await pool.getConnection();
    const query =
      "SELECT client_name, client_lastname, client_birthday FROM clients LIMIT ? OFFSET ?;";

    const rows = await conn.query(query, [pageSize, offset]);

    if (conn) conn.release();

    return rows as Client[];
  }
}
