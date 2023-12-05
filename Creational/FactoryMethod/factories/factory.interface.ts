import { IProduct } from "./../products/product.interface";
export interface IFactory {
  create(): IProduct;
}
