import { Command, flags } from "@oclif/command";
import Builder from "../parser";

export default class Build extends Command {
  static description = "Transcompiles Vertex code into Apex.";

  static examples = [`$ vrtx build`];

  static flags = {
    help: flags.help({ char: "h" }),
    source: flags.string({
      char: "s",
      required: false,
      description: "Source directory that contains the Vertex files",
    }),
  };

  async run(): Promise<void> {
    const { flags } = this.parse(Build);
    const sourceDirectory = flags.source || "./src";

    Builder.execute(sourceDirectory);
  }
}
