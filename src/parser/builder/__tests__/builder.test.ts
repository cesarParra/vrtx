import FileReader from "../../../utils/file-reader";
import Translator from "../../translator/translator";
import Builder from "../builder";
jest.mock("../../utils/file-reader");
jest.mock("../../utils/file-writer");
jest.mock("../translator");
jest.mock("prettier");

describe("builder", () => {
  beforeEach(() => {
    (<jest.Mock>(<unknown>FileReader)).mockClear();
    (<jest.Mock>(<unknown>Translator)).mockClear();
  });

  test("File reader is called", () => {
    ((FileReader.read as unknown) as jest.Mock).mockReturnValue([]);
    Builder.execute("");
    expect(FileReader.read).toHaveBeenCalled();
    expect(Translator.translate).toHaveBeenCalledTimes(0);
  });

  test("Translator is called ", () => {
    ((FileReader.read as unknown) as jest.Mock).mockReturnValue([
      {
        name: "Test",
        body: "test",
        extension: "vrtx",
      },
    ]);
    Builder.execute("");
    expect(FileReader.read).toHaveBeenCalled();
    expect(Translator.translate).toHaveBeenCalled();
  });

  function mockRimRaf(outputDir: string, callback: () => void) {
    callback();
  }
});
