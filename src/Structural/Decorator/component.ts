import { IComponent } from "./component.interface";

export class Coffee implements IComponent {
  cost(): number {
    console.log("Coffee");
    return 10;
  }
}
