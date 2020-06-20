import { VertexParserListener } from "./../base/VertexParserListener";
import { TokenStreamRewriter, ParserRuleContext } from "antlr4ts";
import { TerminalNode, ErrorNode } from "antlr4ts/tree";
import { LiteralContext } from "./../base/VertexParser";
import { string } from "@oclif/command/lib/flags";

export default class StringTemplateLiteral implements VertexParserListener {
  visitTerminal?: (node: TerminalNode) => void;
  visitErrorNode?: (node: ErrorNode) => void;
  enterEveryRule?: (ctx: ParserRuleContext) => void;
  exitEveryRule?: (ctx: ParserRuleContext) => void;

  rewriter: TokenStreamRewriter;

  constructor(rewriter: TokenStreamRewriter) {
    this.rewriter = rewriter;
  }

  enterLiteral(ctx: LiteralContext) {
    if (ctx.StringTemplateLiteral() && ctx.stop) {
      const tick = /`/gi;
      let stringContents =
        ctx.StringTemplateLiteral()?.text.replace(tick, "'") || "";

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

      this.rewriter.replace(ctx.start.tokenIndex, ctx.stop.tokenIndex, buffer);
    }
  }
}
