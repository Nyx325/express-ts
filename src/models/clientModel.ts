export class Client {
  public clientId: number | undefined;
  public clientName: string;
  public clientLastName: string;
  public clientBirthDay: Date;

  constructor(
    clientId: number | undefined,
    clientName: string,
    clientLastName: string,
    clientBirthDay: Date
  ) {
    if (
      (clientId != undefined && clientId <= 0) ||
      clientId != undefined && !Number.isInteger(clientId)
    ) {
      throw Error(`ID ${clientId} not valid`);
    }

    if (clientName === "" || clientLastName === "") {
      throw Error(`Client must have a name and lastname`);
    }

    this.clientId = clientId;
    this.clientName = clientName;
    this.clientLastName = clientLastName;
    this.clientBirthDay = clientBirthDay;
  }
}
