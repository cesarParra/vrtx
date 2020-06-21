import { CharStreams, CommonTokenStream, TokenStreamRewriter } from "antlr4ts";
import { VertexLexer } from "../../base/VertexLexer";
import { VertexParser } from "../../base/VertexParser";
import ConstructorOptionalParams from "../constructor-optional-params";
import { ParseTreeWalker } from "antlr4ts/tree";
import { IConstructorBuilder } from "../../helpers/constructor-builder";
import { OptionalParameter, FormalParameter } from "../../model";

class TestConstructorBuilder implements IConstructorBuilder {
  built = 0;
  build(
    modifiers: string[],
    constructorName: string,
    formalParameters: FormalParameter[],
    optionalParameters: OptionalParameter[]
  ): string {
    this.built++;
    return "";
  }
}

describe("Constructor Optional Parameters", () => {
  function walk(input: string, constructorBuilder: IConstructorBuilder) {
    const inputStream = CharStreams.fromString(input);
    const lexer = new VertexLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new VertexParser(tokenStream);
    const tree = parser.compilationUnit();

    const rewriter = new TokenStreamRewriter(tokenStream);
    const optionalParametersListener = new ConstructorOptionalParams(
      rewriter,
      constructorBuilder
    );
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

  test("No extra constructor is created for a class with single constructor with required param", () => {
    const input = `public class Test {
      public Test(String arg1) {}
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

  test("An additional constructor is per optional param", () => {
    const input = `public class Test {
      public Test([String arg, String arg1]) {}
    }`;
    const constructorBuilder = new TestConstructorBuilder();
    walk(input, constructorBuilder);

    expect(constructorBuilder.built).toBe(2);
  });
});
