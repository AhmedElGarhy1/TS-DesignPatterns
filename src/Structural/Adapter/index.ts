import { Resource } from "./Resource";
import { ResourceAdapter } from "./ResourceAdapter";

function main() {
  const resourceAdapter = new ResourceAdapter(new Resource());

  resourceAdapter.method();
}

main();
