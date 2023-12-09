import { ITable } from "./table.interface";

export class VictorianTable implements ITable {
  tableType(): string {
    return "Victorian Table";
  }
}
