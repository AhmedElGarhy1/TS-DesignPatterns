import { BaseDecorator } from "./base-decorator";

export class ChocolateDecorator extends BaseDecorator {
  cost(): number {
    console.log("Added Chocolate");
    return this.component.cost() + 10;
  }
}
