import * as fs from "fs";
import * as path from "path";
import File from "../parser/model/file";
import Configuration from "../parser/builder/configuration";

const vertexExtension = ".vrtx";

export default class FileReader {
  public static read(sourceDirectory: string): File[] {
    const files: File[] = [];
    const directoryContents = fs.readdirSync(sourceDirectory);
    directoryContents.forEach((currentFile) => {
      const currentPath = path.join(sourceDirectory, currentFile);
      if (fs.statSync(currentPath).isDirectory()) {
        files.push(...this.read(currentPath));
      }

      if (!currentFile.endsWith(vertexExtension)) {
        return;
      }

      const rawFile = fs.readFileSync(currentPath);
      files.push({
        name: currentFile.replace(vertexExtension, ""),
        body: rawFile.toString(),
        extension: "vrtx",
        directory: sourceDirectory.replace(
          Configuration.get().compilerOptions.rootDir,
          ""
        ),
      });
    });

    return files;
  }
}
