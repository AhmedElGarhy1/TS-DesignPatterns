import { ISubscriber } from "./subscribers/subscriber.interface";

export class Publisher {
  private subscribers: ISubscriber[];
  private degree: number;

  constructor() {
    this.subscribers = [];
    this.degree = 0;
  }

  subscribe(subscribe: ISubscriber): void {
    this.subscribers.push(subscribe);
  }

  unsubscribe(subscriber: ISubscriber): void {
    this.subscribers.filter((sub) => sub !== subscriber);
  }

  notify(): void {
    this.subscribers.forEach((sub) => sub.update(this.degree));
  }

  setDegree(degree: number) {
    this.degree = degree;
  }
}
