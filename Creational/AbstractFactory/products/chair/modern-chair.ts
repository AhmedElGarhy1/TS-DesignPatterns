import { IChair } from "./chair.interface";

export class ModernChair implements IChair {
  chairType(): string {
    return "Modern Chair";
  }
}
