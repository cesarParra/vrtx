import { CharStreams, CommonTokenStream, TokenStreamRewriter } from "antlr4ts";
import { VertexLexer } from "./base/VertexLexer";
import { VertexParser, CompilationUnitContext } from "./base/VertexParser";
import { ParseTreeWalker } from "antlr4ts/tree";
import ConstructorOptionalParams from "./language/constructor-optional-params";
import StringTemplateLiteral from "./language/string-template-literal";
import { VertexParserListener } from "./base/VertexParserListener";
import NullCoalesce from "./language/null-coalesce";
import { VertexParserVisitor } from "./base/VertexParserVisitor";

export default class Transcompiler {
  public static transcompile(contents: string): string {
    const inputStream = CharStreams.fromString(contents);
    const lexer = new VertexLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new VertexParser(tokenStream);

    // `compilationUnit` is the entry point for class files.
    const tree = parser.compilationUnit();

    const rewriter = new TokenStreamRewriter(tokenStream);
    this.walk(rewriter, tree);
    this.visit(rewriter, tree);

    return rewriter.getText();
  }

  private static walk(
    rewriter: TokenStreamRewriter,
    tree: CompilationUnitContext
  ) {
    const listeners = this.getListeners(rewriter);
    const walker = new ParseTreeWalker();
    listeners.forEach((listener) => {
      walker.walk(listener, tree);
    });
  }

  private static getListeners(rewriter: TokenStreamRewriter) {
    const listeners: VertexParserListener[] = [];
    listeners.push(new ConstructorOptionalParams(rewriter));
    listeners.push(new StringTemplateLiteral(rewriter));
    return listeners;
  }

  private static visit(
    rewriter: TokenStreamRewriter,
    tree: CompilationUnitContext
  ) {
    const visitors = this.getVisitors(rewriter);
    visitors.forEach((visitor) => {
      visitor.visit(tree);
    });
  }

  private static getVisitors(rewriter: TokenStreamRewriter) {
    const visitors: VertexParserVisitor<unknown>[] = [];
    visitors.push(new NullCoalesce(rewriter));
    return visitors;
  }
}
