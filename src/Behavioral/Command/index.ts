import { OffCommand } from "./commands/off-command";
import { OnCommand } from "./commands/on-command";
import { Invoker } from "./invoker";

function main() {
  // const receiver = new Receiver();

  const command = new OffCommand();

  //   const command = new OnCommand();

  const invoker = new Invoker();

  invoker.setCommand(command);
  invoker.executeCommand();
}

main();
