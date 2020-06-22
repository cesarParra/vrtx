import { CharStreams, CommonTokenStream, TokenStreamRewriter } from "antlr4ts";
import { VertexLexer } from "../../base/VertexLexer";
import { VertexParser } from "../../base/VertexParser";
import { ParseTreeWalker } from "antlr4ts/tree";
import StringTemplateLiteral from "../string-template-literal";

describe("String Template Literal", () => {
  function walk(input: string): string {
    const inputStream = CharStreams.fromString(input);
    const lexer = new VertexLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new VertexParser(tokenStream);
    const tree = parser.literal();

    const rewriter = new TokenStreamRewriter(tokenStream);
    const optionalParametersListener = new StringTemplateLiteral();
    optionalParametersListener.rewriter = rewriter;
    const walker = new ParseTreeWalker();
    walker.walk(optionalParametersListener, tree);
    return rewriter.getText();
  }

  test("Literal with no template variable is converted to regular string", () => {
    const input = "`Test String`";
    const result = walk(input);

    expect(result).toBe("'Test String'");
  });

  test("Literal with single template is rewritten", () => {
    const input = "`Test ${arg1}`";
    const result = walk(input);

    expect(result).toBe("String.format('Test {0}', new List<String>{arg1})");
  });

  test("Literal with multiple templates is rewritten", () => {
    const input = "`Test ${arg1} and ${arg2}`";
    const result = walk(input);

    expect(result).toBe(
      "String.format('Test {0} and {1}', new List<String>{arg1,arg2})"
    );
  });
});
