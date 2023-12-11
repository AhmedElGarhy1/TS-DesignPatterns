import { ICommand } from "./commands/command.interface";

export class Invoker {
  private command: ICommand | null;

  constructor() {
    this.command = null;
  }
  setCommand(command: ICommand) {
    this.command = command;
  }
  executeCommand() {
    if (!this.command) throw new Error("Command not set");
    this.command.execute();
  }
}
