import { Database } from "./Database";

function main() {
  const singleton = Database.getInstance();
  const singleton2 = Database.getInstance();
  console.log(singleton === singleton2);
}

main();
