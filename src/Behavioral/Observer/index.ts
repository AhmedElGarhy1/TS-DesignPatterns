import { Publisher } from "./publisher";
import { Subscriber1 } from "./subscribers/Subscriber1";
import { Subscriber2 } from "./subscribers/Subscriber2";

function main() {
  const sub1 = new Subscriber1();
  const sub2 = new Subscriber2();
  const publisher = new Publisher();

  publisher.subscribe(sub1);
  publisher.subscribe(sub2);

  publisher.setDegree(10);
  publisher.notify();
}

main();
