import { IChair } from "../products/chair/chair.interface";
import { ISofa } from "../products/sofa/sofa.interface";
import { ITable } from "../products/table/table.interface";

//

export interface IAbstractFactory {
  createSofa(): ISofa;
  createChair(): IChair;
  createTable(): ITable;
}
