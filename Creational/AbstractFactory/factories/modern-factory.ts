import { ModernChair } from "../products/chair/modern-chair";
import { ModernSofa } from "../products/sofa/modern-sofa";
import { ModernTable } from "../products/table/modern-table";
import { IAbstractFactory } from "./abstract-factory.interface";

export class ModernFactory implements IAbstractFactory {
  createChair() {
    return new ModernChair();
  }
  createTable() {
    return new ModernTable();
  }
  createSofa() {
    return new ModernSofa();
  }
}
