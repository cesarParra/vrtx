import { test } from "@oclif/test";
import Build from "./build";
import Builder from "../parser";
jest.mock("../parser/Builder");

describe("build", () => {
  test
    .stdout()
    .command(["build"])
    .it("runs build", (ctx) => {
      expect(Builder).toHaveBeenCalled();
    });
});
