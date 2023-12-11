import { ISubscriber } from "./subscriber.interface";

export class Subscriber1 implements ISubscriber {
  update(degree: number): void {
    console.log("Sub1 degree is: " + degree);
  }
}
