import { ICommand } from "./command.interface";

export class OffCommand implements ICommand {
  execute() {
    console.log("Turning off...");
    console.log("Turning off...");
    console.log("Turning off...");
    console.log("Turning off...");
    console.log("Turning off...");
  }
}
