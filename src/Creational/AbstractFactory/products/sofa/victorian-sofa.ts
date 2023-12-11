import { ISofa } from "./sofa.interface";

export class VictorianSofa implements ISofa {
  sofaType(): string {
    return "Victorian Sofa";
  }
}
