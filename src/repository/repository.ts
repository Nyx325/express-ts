import dotenv from "dotenv";

dotenv.config();

export abstract class Repository {
  public getPageSize(): number {
    const pageSizeEnvVar = process.env.PAGE_SIZE;

    if (!pageSizeEnvVar) {
      throw new Error("PAGE_SIZE variable isn't set in the .env file");
    }

    const pageSize = Number(pageSizeEnvVar);
    if (!Number.isInteger(pageSize)) {
      throw new Error("PAGE_SIZE must be an integer");
    }

    return pageSize;
  }
}
