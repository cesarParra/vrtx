import { Command, flags } from "@oclif/command";
import Builder from "../parser";

export default class Build extends Command {
  static description = "Transcompiles Vertex code into Apex.";

  static examples = [`$ vertex build`];

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run(): Promise<void> {
    Builder.execute();
  }
}
