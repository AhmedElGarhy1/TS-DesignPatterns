import { Product } from "./product";
export class Calculator {
  private product: Product;

  constructor(initPrice: number) {
    this.product = new Product();
    this.product.setPrice(initPrice);
  }

  public add5(): Product {
    console.log("Add 5 to the number");
    this.product.setPrice(this.product.getPrice() + 5);
    return this.product;
  }

  public add10(): Product {
    console.log("Add 10 to the number");
    this.product.setPrice(this.product.getPrice() + 10);
    return this.product;
  }

  public mult2(): Product {
    console.log("Add 5 to the number");
    this.product.setPrice(this.product.getPrice() * 2);
    return this.product;
  }
}
