import File from "../parser/model/file";
import fs from "fs";
import path from "path";

export default class FileWriter {
  public static createFile(outputDir: string, file: File): void {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    const filePath = path.join(outputDir, `${file.name}.${file.extension}`);
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    fs.writeFile(filePath, file.body, "utf8", () => {});
  }
}
