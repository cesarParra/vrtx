import FileReader from "../../utils/file-reader";
import rimraf from "rimraf";
import Translator from "../translator/translator";
import FileWriter from "../../utils/file-writer";
import { APEX_METADATA, File, ApexFileBundle } from "../model";
import Configuration from "./configuration";
import prettier from "prettier";

export default class Builder {
  public static execute(): void {
    const config = Configuration.get();
    const translatedFiles = FileReader.read(config.compilerOptions.rootDir).map(
      (file) => {
        return this.translate(file);
      }
    );

    const outputDir = config.compilerOptions.targetDir;
    rimraf(outputDir, () => {
      this.createApexFiles(outputDir, translatedFiles);
    });
  }

  private static translate(file: File): ApexFileBundle {
    return {
      mainFile: this.buildMainFile(file),
      metadataFile: this.buildMetadataFile(file),
    };
  }

  private static buildMainFile(file: File) {
    let translatedCode = Translator.translate(file.body);
    translatedCode = prettier.format(translatedCode, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      parser: "apex",
    });
    return {
      name: file.name,
      body: translatedCode,
      extension: "cls",
    } as File;
  }

  private static buildMetadataFile(file: File) {
    return {
      name: file.name,
      body: APEX_METADATA,
      extension: "cls-meta.xml",
    } as File;
  }

  private static createApexFiles(
    outputDir: string,
    apexBundles: ApexFileBundle[]
  ): void {
    apexBundles.forEach((bundle) => {
      FileWriter.createFile(outputDir, bundle.mainFile);
      FileWriter.createFile(outputDir, bundle.metadataFile);
    });
  }
}
