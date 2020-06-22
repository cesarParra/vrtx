import FileReader from "../utils/file-reader";
import rimraf from "rimraf";
import Transcompiler from "./transcompiler";
import FileWriter from "../utils/file-writer";
import { APEX_METADATA, File, ApexFileBundle } from "./model";
import prettier from "prettier";

export default class Builder {
  public static execute(sourceDir: string): void {
    const transcompiledFiles = FileReader.read(sourceDir).map((file) => {
      return this.transcompile(file);
    });

    const outputDir = "./example/build/";
    rimraf(outputDir, () => {
      this.createApexFiles(outputDir, transcompiledFiles);
    });
  }

  private static transcompile(file: File): ApexFileBundle {
    return {
      mainFile: this.buildMainFile(file),
      metadataFile: this.buildMetadataFile(file),
    };
  }

  private static buildMainFile(file: File) {
    let translatedCode = Transcompiler.transcompile(file.body);
    translatedCode = prettier.format(translatedCode, {
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
