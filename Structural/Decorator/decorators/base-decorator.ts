import { IComponent } from "../component.interface";

export abstract class BaseDecorator implements IComponent {
  protected component: IComponent;

  constructor(component: IComponent) {
    this.component = component;
  }

  abstract cost(): number;
}
