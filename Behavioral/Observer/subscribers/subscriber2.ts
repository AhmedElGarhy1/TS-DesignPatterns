import { ISubscriber } from "./subscriber.interface";

export class Subscriber2 implements ISubscriber {
  update(degree: number): void {
    console.log("Sub2 degree is: " + degree);
  }
}
