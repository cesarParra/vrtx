import File from "../parser/model/file";
import fs from "fs";
import path from "path";
import mkdirp from "mkdirp";
import Configuration from "../parser/builder/configuration";

export default class FileWriter {
  public static createFile(outputDir: string, file: File): void {
    outputDir = `${
      Configuration.get().compilerOptions.targetDir
    }\\${outputDir}`;
    mkdirp.sync(outputDir);

    const filePath = path.join(outputDir, `${file.name}.${file.extension}`);
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    fs.writeFile(filePath, file.body, "utf8", () => {});
  }
}
