import { CharStreams, CommonTokenStream, TokenStreamRewriter } from "antlr4ts";
import { VertexLexer } from "../../base/VertexLexer";
import { VertexParser } from "../../base/VertexParser";
import OptionalParams from "../optional-params";
import { ParseTreeWalker } from "antlr4ts/tree";
import { IMethodBuilder } from "../../helpers/method-builder";
import { OptionalParameter, FormalParameter } from "../../model";

class TestConstructorBuilder implements IMethodBuilder {
  built = 0;
  build(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    modifiers: string[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructorName: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formalParameters: FormalParameter[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    optionalParameters: OptionalParameter[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isConstructor: boolean,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    returnType?: string
  ): string {
    this.built++;
    return "";
  }
}

describe("Optional Parameters", () => {
  function walk(input: string, constructorBuilder: IMethodBuilder) {
    const inputStream = CharStreams.fromString(input);
    const lexer = new VertexLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new VertexParser(tokenStream);
    const tree = parser.compilationUnit();

    const rewriter = new TokenStreamRewriter(tokenStream);
    const optionalParametersListener = new OptionalParams(constructorBuilder);
    optionalParametersListener.rewriter = rewriter;
    const walker = new ParseTreeWalker();
    walker.walk(optionalParametersListener, tree);
  }

  test("No constructors are created for a class with no constructors", () => {
    const input = `public class Test {}`;
    const constructorBuilder = new TestConstructorBuilder();
    walk(input, constructorBuilder);

    expect(constructorBuilder.built).toBe(0);
  });

  test("No extra constructors are created for a constructor with no params", () => {
    const input = `public class Test {
      public Test() {}
    }`;
    const constructorBuilder = new TestConstructorBuilder();
    walk(input, constructorBuilder);

    expect(constructorBuilder.built).toBe(0);
  });

  test("No extra methods are created for a method with no params", () => {
    const input = `public class Test {
      public static String execute() {}
    }`;
    const constructorBuilder = new TestConstructorBuilder();
    walk(input, constructorBuilder);

    expect(constructorBuilder.built).toBe(0);
  });

  test("No extra constructor is created for a class with single constructor with required param", () => {
    const input = `public class Test {
      public Test(String arg1) {}
    }`;
    const constructorBuilder = new TestConstructorBuilder();
    walk(input, constructorBuilder);

    expect(constructorBuilder.built).toBe(0);
  });

  test("No extra methods are created for a method with required param", () => {
    const input = `public class Test {
      public String execute(String arg1) {}
    }`;
    const constructorBuilder = new TestConstructorBuilder();
    walk(input, constructorBuilder);

    expect(constructorBuilder.built).toBe(0);
  });

  test("No extra constructor is created for a class with single constructor with multiple required params", () => {
    const input = `public class Test {
      public Test(String arg1, String arg2) {}
    }`;
    const constructorBuilder = new TestConstructorBuilder();
    walk(input, constructorBuilder);

    expect(constructorBuilder.built).toBe(0);
  });

  test("An additional constructor is created for a class with single optional param", () => {
    const input = `public class Test {
      public Test([String arg]) {}
    }`;
    const constructorBuilder = new TestConstructorBuilder();
    walk(input, constructorBuilder);

    expect(constructorBuilder.built).toBe(1);
  });

  test("An additional method is created for method optional param", () => {
    const input = `public class Test {
      public String execute([String arg]) {}
    }`;
    const constructorBuilder = new TestConstructorBuilder();
    walk(input, constructorBuilder);

    expect(constructorBuilder.built).toBe(1);
  });

  test("An additional constructor is created per optional param", () => {
    const input = `public class Test {
      public Test([String arg, String arg1]) {}
    }`;
    const constructorBuilder = new TestConstructorBuilder();
    walk(input, constructorBuilder);

    expect(constructorBuilder.built).toBe(2);
  });

  test("An additional method created is per optional param", () => {
    const input = `public class Test {
      public String execute([String arg, String arg1]) {}
    }`;
    const constructorBuilder = new TestConstructorBuilder();
    walk(input, constructorBuilder);

    expect(constructorBuilder.built).toBe(2);
  });
});
