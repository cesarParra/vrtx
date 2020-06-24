import MethodBuilder from "../method-builder";
import { purgeWhitespaces } from "../../../utils/string";
import FormalParameter from "../../model/formal-parameter";
import OptionalParameter from "../../model/optional-parameter";

describe("Constructor Builder", () => {
  test("No modifiers, formal params or optional params", () => {
    let result = new MethodBuilder().build([], "Test", [], [], true);
    result = purgeWhitespaces(result);
    expect(result).toBe("Test(){this();}");
  });

  test("With modifiers, no formal params or optional params", () => {
    let result = new MethodBuilder().build(["public"], "Test", [], [], false);
    result = purgeWhitespaces(result);
    expect(result).toBe("publicTest(){this();}");
  });

  test("With modifiers and formal params, no optional params", () => {
    const formalParams: FormalParameter[] = [
      {
        type: "String",
        id: "arg1",
      },
      {
        type: "Integer",
        id: "arg2",
      },
    ];
    let result = new MethodBuilder().build(
      ["public"],
      "Test",
      formalParams,
      [],
      false
    );
    result = purgeWhitespaces(result);
    expect(result).toBe("publicTest(Stringarg1,Integerarg2){this(arg1,arg2);}");
  });

  test("With modifiers and formal params and optional params", () => {
    const formalParams: FormalParameter[] = [
      {
        type: "String",
        id: "arg1",
      },
      {
        type: "Integer",
        id: "arg2",
      },
    ];
    const optionalParams: OptionalParameter[] = [
      {
        type: "String",
        id: "arg3",
        value: "'test'",
      },
      {
        type: "Integer",
        id: "arg4",
      },
    ];
    let result = new MethodBuilder().build(
      ["public"],
      "Test",
      formalParams,
      optionalParams,
      false
    );
    result = purgeWhitespaces(result);
    expect(result).toBe(
      "publicTest(Stringarg1,Integerarg2){this(arg1,arg2,'test',null);}"
    );
  });
});
