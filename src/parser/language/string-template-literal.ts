import { VertexParserListener } from "../base/VertexParserListener";
import { TokenStreamRewriter, ParserRuleContext } from "antlr4ts";
import { LiteralContext } from "../base/VertexParser";
import RewritableSupport from "./rewritable-support";
import { TerminalNode, ErrorNode } from "antlr4ts/tree";

export default class StringTemplateLiteral
  implements VertexParserListener, RewritableSupport {
  visitTerminal?: (node: TerminalNode) => void;
  visitErrorNode?: (node: ErrorNode) => void;
  enterEveryRule?: (ctx: ParserRuleContext) => void;
  exitEveryRule?: (ctx: ParserRuleContext) => void;

  rewriter: TokenStreamRewriter | undefined;

  enterLiteral(ctx: LiteralContext): void {
    if (ctx.StringTemplateLiteral() && ctx.stop) {
      const tick = /`/gi;
      const stringContents =
        ctx.StringTemplateLiteral()?.text.replace(tick, "'") || "";
      const _matches = StringTemplateLiteral.getMatches(stringContents);

      if (!_matches.length) {
        if (this.rewriter) {
          this.rewriter.replace(
            ctx.start.tokenIndex,
            ctx.stop.tokenIndex,
            stringContents
          );
        }

        return;
      }
      const _buffer = this.buildStringFormat(_matches, stringContents);
      if (this.rewriter) {
        this.rewriter.replace(
          ctx.start.tokenIndex,
          ctx.stop.tokenIndex,
          _buffer
        );
      }
    }
  }

  private buildStringFormat(
    matches: RegExpExecArray[],
    stringContents: string
  ): string {
    matches.forEach((match, index) => {
      stringContents = stringContents.replace(match[0], `{${index}}`);
    });

    let buffer = `String.format(${stringContents}, new List<String>{`;
    matches.forEach((match) => {
      buffer += `${match[1]},`;
    });

    if (buffer.endsWith(",")) {
      buffer = buffer.substring(0, buffer.length - 1); // Removing trailing comma
    }
    buffer += "})";
    return buffer;
  }

  private static getMatches(stringContents: string) {
    const templateFormatRegEx = "\\${(.*?)}";
    const expression = new RegExp(templateFormatRegEx, "gi");
    let match;
    const matches = [];

    do {
      match = expression.exec(stringContents);
      if (match) {
        matches.push(match);
      }
    } while (match);
    return matches;
  }
}
