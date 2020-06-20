import FileReader from "./file-reader";
import rimraf from "rimraf";
import Transcompiler from "./transcompiler";
import FileWriter from "./file-writer";
import { APEX_METADATA, File, ApexFileBundle } from "./model";

export default class Builder {
  public static execute(): void {
    const transcompiledFiles = FileReader.read().map((file) => {
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
    return {
      name: file.name,
      body: Transcompiler.transcompile(file.body),
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
