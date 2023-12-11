import { ISofa } from "./sofa.interface";

export class ModernSofa implements ISofa {
  sofaType(): string {
    return "Modern Sofa";
  }
}
