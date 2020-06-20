import { CharStreams, CommonTokenStream, TokenStreamRewriter } from "antlr4ts";
import { VertexLexer } from "./base/VertexLexer";
import { VertexParser } from "./base/VertexParser";
import { ParseTreeWalker } from "antlr4ts/tree";
import ConstructorOptionalParams from "./language/constructor-optional-params";
import StringTemplateLiteral from "./language/string-template-literal";
import { VertexParserListener } from "./base/VertexParserListener";

export default class Transcompiler {
  public static transcompile(contents: string): string {
    const inputStream = CharStreams.fromString(contents);
    const lexer = new VertexLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new VertexParser(tokenStream);

    // Parse the input, where `compilationUnit` is whatever entry point you defined
    const tree = parser.compilationUnit();

    const rewriter = new TokenStreamRewriter(tokenStream);
    const listeners: VertexParserListener[] = [];
    listeners.push(new ConstructorOptionalParams(rewriter));
    listeners.push(new StringTemplateLiteral(rewriter));
    const walker = new ParseTreeWalker();
    listeners.forEach((listener) => {
      walker.walk(listener, tree);
    });

    return rewriter.getText();
  }
}
