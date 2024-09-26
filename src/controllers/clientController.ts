import { Request, Response } from "express";
import { Client } from "../models/clientModel";
import { ClientRepository } from "../repository/clientRepository";

export const createClient = async (
  req: Request,
  res: Response,
): Promise<void> => {
  let client;
  // Validar campos
  try {
    const { clientName, clientLastName, clientBirthDay } = req.body;
    client = new Client(undefined, clientName, clientLastName, clientBirthDay);
  } catch (error) {
    res.status(400).json({ code: 400, error: `${error}` });
    res.send();
    return;
  }

  const repo = new ClientRepository();

  try {
    await repo.add(client);
    res.status(201).json({ code: 201, message: "Client created succesfuly" });
  } catch (error) {
    res
      .status(500)
      .json({ code: 500, error: `Error al crear cliente: ${error}` });
  }
};

export const getClient = async (req: Request, res: Response): Promise<void> => {
  const { pageNumber } = req.body;
  const repo = new ClientRepository();

  try {
    const clients = await repo.getClients(pageNumber);
    res.status(201).json({ code: 201, message: clients });
  } catch (error) {
    res
      .status(500)
      .json({ code: 500, error: `Error al obtener clientes: ${error}` });
  }
};
