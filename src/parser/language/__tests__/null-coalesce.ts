import { CharStreams, CommonTokenStream, TokenStreamRewriter } from "antlr4ts";
import { VertexLexer } from "../../base/VertexLexer";
import { VertexParser } from "../../base/VertexParser";
import NullCoalesce from "../null-coalesce";

describe("Null Coalesce", () => {
  function visit(input: string): string {
    const inputStream = CharStreams.fromString(input);
    const lexer = new VertexLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new VertexParser(tokenStream);
    const tree = parser.expression();

    const rewriter = new TokenStreamRewriter(tokenStream);
    const visitor = new NullCoalesce();
    visitor.rewriter = rewriter;
    visitor.visit(tree);
    return rewriter.getText();
  }

  test("Single null coalesce is correctly translated", () => {
    const input = "arg1 ?? arg2";
    const result = visit(input);
    expect(result).toBe("(arg1 != null ? arg1 : arg2)");
  });

  test("Multiple null coalesce are correctly translated", () => {
    const input = "arg1 ?? arg2 ?? arg3";
    const result = visit(input);
    expect(result).toBe("(arg1 != null ? arg1 : (arg2 != null ? arg2 : arg3))");
  });
});
