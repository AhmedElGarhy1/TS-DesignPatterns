import { ITable } from "./table.interface";

export class ArtdecoTable implements ITable {
  tableType(): string {
    return "Artdeco Table";
  }
}
