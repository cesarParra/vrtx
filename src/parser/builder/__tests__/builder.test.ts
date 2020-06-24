import FileReader from "../../../utils/file-reader";
import Translator from "../../translator/translator";
import Builder from "../builder";
import fs from "fs";
jest.mock("../../../utils/file-reader");
jest.mock("../../../utils/file-writer");
jest.mock("../../translator/translator");
jest.mock("prettier");
jest.mock("fs");

describe("builder", () => {
  beforeEach(() => {
    (<jest.Mock>(<unknown>FileReader)).mockClear();
    (<jest.Mock>(<unknown>Translator)).mockClear();
  });

  function mockConfigFileRead() {
    (fs.readFileSync as jest.Mock).mockReturnValue(`{
      "compilerOptions": {
        "targetApiVersion": 48.0,
        "rootDir": "src",
        "targetDir": "lib"
      }
    }`);
  }

  test("File reader is called", () => {
    mockConfigFileRead();
    ((FileReader.read as unknown) as jest.Mock).mockReturnValue([]);
    Builder.execute();
    expect(FileReader.read).toHaveBeenCalled();
    expect(Translator.translate).toHaveBeenCalledTimes(0);
  });

  test("Translator is called ", () => {
    mockConfigFileRead();
    ((FileReader.read as unknown) as jest.Mock).mockReturnValue([
      {
        name: "Test",
        body: "test",
        extension: "vrtx",
      },
    ]);
    Builder.execute();
    expect(FileReader.read).toHaveBeenCalled();
    expect(Translator.translate).toHaveBeenCalled();
  });
});
