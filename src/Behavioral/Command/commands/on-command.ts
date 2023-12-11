import { ICommand } from "./command.interface";

export class OnCommand implements ICommand {
  execute(): void {
    console.log("Turning on...");
    console.log("Turning on...");
    console.log("Turning on...");
    console.log("Turning on...");
  }
}
