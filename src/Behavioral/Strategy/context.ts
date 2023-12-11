import { BinarySearchStrategy } from "./Strategies/binary-search-strategy";
import { IStrategy } from "./Strategies/strategy.interface";

export class Context {
  private strategy: IStrategy;

  constructor() {
    // default strategy
    this.strategy = new BinarySearchStrategy();
  }

  setStrategy(strategy: IStrategy) {
    this.strategy = strategy;
  }

  search(target: number, list: number[]): number {
    return this.strategy.execute(target, list);
  }
}
