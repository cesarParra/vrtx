import Builder from "../parser";
import Build from "./build";
jest.mock("../parser");

test("build calls the builder", async () => {
  Builder.execute = jest.fn();

  await Build.run();
  expect(Builder.execute).toHaveBeenCalled();
});
