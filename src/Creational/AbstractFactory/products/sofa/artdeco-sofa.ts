import { ISofa } from "./sofa.interface";

export class ArtdecoSofa implements ISofa {
  sofaType(): string {
    return "Artdeco Sofa";
  }
}
