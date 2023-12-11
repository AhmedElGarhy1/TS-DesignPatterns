export class Product {
  private price: number;

  constructor(price?: number) {
    this.price = price || 0;
  }

  public setPrice(price: number): void {
    this.price = price;
  }
  public getPrice(): number {
    return this.price;
  }

  public toString(): string {
    return `Product: ${this.price}`;
  }
}
