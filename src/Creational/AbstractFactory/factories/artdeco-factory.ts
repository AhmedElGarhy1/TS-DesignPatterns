import { ArtdecoChair } from "../products/chair/artdeco-chair";
import { ArtdecoSofa } from "../products/sofa/artdeco-sofa";
import { ArtdecoTable } from "../products/table/artdeco-table";
import { IAbstractFactory } from "./abstract-factory.interface";

export class ArtdecoFactory implements IAbstractFactory {
  createChair() {
    return new ArtdecoChair();
  }
  createSofa() {
    return new ArtdecoSofa();
  }
  createTable() {
    return new ArtdecoTable();
  }
}
