import { Product } from "./product";

export class ProductFactory {
  public createProductA(): Product {
    return new Product();
  }
}
