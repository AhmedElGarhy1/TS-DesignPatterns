import { IChair } from "./chair.interface";

export class VictorianChair implements IChair {
  chairType(): string {
    return "Victorian Chair";
  }
}
