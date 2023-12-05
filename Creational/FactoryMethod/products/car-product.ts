import { IProduct } from "./product.interface";

export class CarProduct implements IProduct {
  drive(): void {
    console.log("Drive Car");
  }
}
