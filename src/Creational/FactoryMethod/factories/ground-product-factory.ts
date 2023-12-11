import { CarProduct } from "../products/car-product";
import { IProduct } from "../products/product.interface";
import { IFactory } from "./factory.interface";

export class GroundProductFactory implements IFactory {
  create(): IProduct {
    return new CarProduct();
  }
}
