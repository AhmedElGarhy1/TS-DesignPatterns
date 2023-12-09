import { ITable } from "./table.interface";

export class ModernTable implements ITable {
  tableType(): string {
    return "Modern Table";
  }
}
