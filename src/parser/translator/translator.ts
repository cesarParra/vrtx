import { CharStreams, CommonTokenStream, TokenStreamRewriter } from "antlr4ts";
import { VertexLexer } from "../base/VertexLexer";
import { VertexParser } from "../base/VertexParser";
import { ParseTreeWalker } from "antlr4ts/tree";
import ConstructorOptionalParams from "../language/constructor-optional-params";
import StringTemplateLiteral from "../language/string-template-literal";
import { VertexParserListener } from "../base/VertexParserListener";
import NullCoalesce from "../language/null-coalesce";
import { VertexParserVisitor } from "../base/VertexParserVisitor";
import RewritableSupport from "../language/rewritable-support";

export default class Translator {
  public static translate(contents: string): string {
    [...this.getListeners(), ...this.getVisitors()].forEach((rewriter) => {
      contents = this.rewrite(contents, rewriter);
    });
    return contents;
  }

  private static getListeners() {
    const listeners: (VertexParserListener & RewritableSupport)[] = [];
    listeners.push(new ConstructorOptionalParams());
    listeners.push(new StringTemplateLiteral());
    return listeners;
  }

  private static getVisitors() {
    const visitors: (VertexParserVisitor<unknown> & RewritableSupport)[] = [];
    visitors.push(new NullCoalesce());
    return visitors;
  }

  private static rewrite(
    contents: string,
    listerOrVisitor: (VertexParserVisitor<unknown> | VertexParserListener) &
      RewritableSupport
  ) {
    const inputStream = CharStreams.fromString(contents);
    const lexer = new VertexLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new VertexParser(tokenStream);

    // `compilationUnit` is the entry point for class files.
    const tree = parser.compilationUnit();

    const rewriter = new TokenStreamRewriter(tokenStream);
    listerOrVisitor.rewriter = rewriter;
    if (this.isVisitor(listerOrVisitor)) {
      listerOrVisitor.visit(tree);
    } else {
      const walker = new ParseTreeWalker();
      walker.walk(listerOrVisitor, tree);
    }
    return rewriter.getText();
  }

  private static isVisitor(
    rewriter: VertexParserVisitor<unknown> | VertexParserListener
  ): rewriter is VertexParserVisitor<unknown> {
    return (rewriter as VertexParserVisitor<unknown>).visit !== undefined;
  }
}
