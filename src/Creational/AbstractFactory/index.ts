import { ArtdecoFactory } from "./factories/artdeco-factory";
import { ModernFactory } from "./factories/modern-factory";
import { VictorianFactory } from "./factories/victorian-factory";

function main() {
  const factory = new ModernFactory();
  //   const factory = new ArtdecoFactory();
  //   const factory = new VictorianFactory();

  const chair = factory.createChair();
  const sofa = factory.createSofa();
  const table = factory.createTable();

  console.log(chair.chairType());
  console.log(sofa.sofaType());
  console.log(table.tableType());
}

main();
