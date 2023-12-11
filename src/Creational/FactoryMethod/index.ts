import { GroundProductFactory } from "./factories/ground-product-factory";

function main() {
  const factory = new GroundProductFactory();
  const product = factory.create();
  product.drive();
}

main();
