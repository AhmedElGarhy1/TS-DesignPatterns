import { Coffee } from "./component";
import { ChocolateDecorator } from "./decorators/chocolate-decorator";
import { MilkDecorator } from "./decorators/milk-decorator";

function main() {
  const coffee = new ChocolateDecorator(
    new MilkDecorator(new ChocolateDecorator(new MilkDecorator(new Coffee())))
  );
  console.log(coffee.cost());
}

main();
