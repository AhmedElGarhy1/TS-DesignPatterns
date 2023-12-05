import { Context } from "./Context";
import { BinarySearchStrategy } from "./Strategies/binary-search-strategy";
import { LinearSearchStrategy } from "./Strategies/linear-search-strategy";

function main() {
  const list = [...Array(30)].map((_, i) => i);
  const target = list[15];

  const context = new Context();
  // default search
  console.log(context.search(target, list));

  // linerSearch
  context.setStrategy(new LinearSearchStrategy());
  console.log(context.search(target, list));

  // binarySearch
  context.setStrategy(new BinarySearchStrategy());
  console.log(context.search(target, list));
}

main();
