import { BaseDecorator } from "./base-decorator";

export class MilkDecorator extends BaseDecorator {
  cost(): number {
    console.log("Added Milk");
    return this.component.cost();
  }
}
