import { Calculator } from "./subsystems/calcolator";
import { Product } from "./subsystems/product";

// Hide the complexity of the subsystems from the client.
export class Facade {
  public getProductWithTips(): Product {
    const calculator = new Calculator(10);
    const productWith5 = calculator.add5();
    return productWith5;
  }
}
