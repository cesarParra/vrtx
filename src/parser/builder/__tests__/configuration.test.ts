import * as fs from "fs";
import Configuration from "../configuration";

jest.mock("fs");

describe("builder", () => {
  test("No file results in error", () => {
    (fs.readFileSync as jest.Mock).mockReturnValue(undefined);
    expect(() => {
      Configuration.get();
    }).toThrow();
  });

  test("Bad file results in error", () => {
    (fs.readFileSync as jest.Mock).mockReturnValue({});
    expect(() => {
      Configuration.get();
    }).toThrow();
  });

  test("Good file results in good config", () => {
    (fs.readFileSync as jest.Mock).mockReturnValue(`{
      "compilerOptions": {
        "targetApiVersion": 48.0,
        "rootDir": "src",
        "targetDir": "lib"
      }
    }`);
    const result = Configuration.get();
    expect(result.compilerOptions.targetApiVersion).toBe(48.0);
    expect(result.compilerOptions.rootDir).toBe("src");
    expect(result.compilerOptions.targetDir).toBe("lib");
  });
});
