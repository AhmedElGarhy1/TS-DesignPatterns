import { IStrategy } from "./strategy.interface";

export class LinearSearchStrategy implements IStrategy {
  execute(target: number, list: number[]): number {
    console.log("Searching by LinerSearch search");
    return target;
  }
}
