import { IStrategy } from "./strategy.interface";

export class BinarySearchStrategy implements IStrategy {
  execute(target: number, list: number[]): number {
    console.log("Searching by binary search");
    return target;
  }
}
