import * as fs from "fs";

const configPath = "vrtxconfig.json";

interface Config {
  compilerOptions: CompilerOptions;
}

interface CompilerOptions {
  targetApiVersion: number;
  rootDir: string;
  targetDir: string;
}

export default class Configuration {
  static config: Config | undefined;

  public static get(): Config {
    if (this.config) {
      return this.config;
    }
    try {
      const rawFile = fs.readFileSync(configPath);
      this.config = JSON.parse(rawFile.toString());
      return this.config as Config;
    } catch (error) {
      throw new Error(
        "Error occurred while reading the configuration file " +
          error.toString()
      );
    }
  }
}
