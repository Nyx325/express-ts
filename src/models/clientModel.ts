export interface Client {
  clientId: number;
  clientName: string;
  clientLastName: string;
  clientBirthDay: Date;
}

export type NewClient = Omit<Client, "clientId">;
