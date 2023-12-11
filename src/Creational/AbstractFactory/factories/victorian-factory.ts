import { VictorianChair } from "../products/chair/victorian-chair";
import { VictorianSofa } from "../products/sofa/victorian-sofa";
import { VictorianTable } from "../products/table/victorian-table";
import { IAbstractFactory } from "./abstract-factory.interface";

export class VictorianFactory implements IAbstractFactory {
  createChair() {
    return new VictorianChair();
  }
  createTable() {
    return new VictorianTable();
  }
  createSofa() {
    return new VictorianSofa();
  }
}
