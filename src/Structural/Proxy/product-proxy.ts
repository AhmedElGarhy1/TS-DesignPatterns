import { Product } from "./pizza-product";
import { IProduct } from "./product.interface";

export class ProductProxy implements IProduct {
  private product: IProduct | null;

  constructor() {
    this.product = null;
  }

  request() {
    if (!this.product) {
      this.product = new Product();
    }
    return this.product.request();
  }
}
