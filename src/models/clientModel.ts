export interface Client {
  clientId: number;
  clientName: string;
  clientLastName: string;
  clientBirthDay: Date;
}

// Crear una nueva interfaz sin la propiedad clientId
export type NewClient = Omit<Client, "clientId">;

const newClient: NewClient = {
  clientName: "A",
  clientLastName: "B",
  clientBirthDay: new Date(2024, 5, 28),
};

console.log(newClient);
