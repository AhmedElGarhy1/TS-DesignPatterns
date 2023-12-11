import { Facade } from "./facade";

function main() {
  const facade = new Facade();
  const product = facade.getProductWithTips();
  console.log(product.getPrice());
  console.log(product);
}

main();
