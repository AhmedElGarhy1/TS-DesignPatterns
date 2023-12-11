import { IProduct } from "./product.interface";

export class Product implements IProduct {
  // imagin that this is a expensive operation
  constructor() {
    for (let i = 0; i < 100000000; i++) {
      // expensive operation
      if (i % 100000 === 0) console.log("Product is beeing created");
    }
    console.log("Product constructor");
  }

  request(): number {
    return 10;
  }
}
