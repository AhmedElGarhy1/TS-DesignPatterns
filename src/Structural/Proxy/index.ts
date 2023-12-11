import { ProductProxy } from "./product-proxy";
import { IProduct } from "./product.interface";

function main() {
  const product: IProduct = new ProductProxy();
  //   if i removed this line the product would not be created
  console.log(product.request());
}

main();
