import * as fs from "fs";
import * as path from "path";
import File from "../parser/model/file";

const vertexExtension = ".vrtx";

export default class FileReader {
  public static read(sourceDirectory: string): File[] {
    const directoryContents = fs.readdirSync(sourceDirectory);
    return directoryContents
      .filter((currentFile) => currentFile.endsWith(vertexExtension))
      .map((currentFile) => {
        const currentPath = path.join(sourceDirectory, currentFile);
        const rawFile = fs.readFileSync(currentPath);
        return {
          name: currentFile.replace(vertexExtension, ""),
          body: rawFile.toString(),
          extension: "vrtx",
        };
      });
  }
}
