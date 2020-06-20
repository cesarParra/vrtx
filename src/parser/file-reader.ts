import * as fs from "fs";
import * as path from "path";
import File from "./model/file";

export default class FileReader {
  public static read(): File[] {
    // TODO: Do not hardcode this
    const sourceDirectory = "./example/src/";
    const directoryContents = fs.readdirSync(sourceDirectory);
    return directoryContents
      .filter((currentFile) => currentFile.endsWith(".vertex"))
      .map((currentFile) => {
        const currentPath = path.join(sourceDirectory, currentFile);
        const rawFile = fs.readFileSync(currentPath);
        return {
          name: currentFile.replace(".vertex", ""),
          body: rawFile.toString(),
          extension: "vertex",
        };
      });
  }
}
