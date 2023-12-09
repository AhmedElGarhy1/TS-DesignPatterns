import { IChair } from "./chair.interface";

export class ArtdecoChair implements IChair {
  chairType(): string {
    return "Artdeco Chair";
  }
}
