import { TokenStreamRewriter } from "antlr4ts";
import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import {
  ExpressionContext,
  NullCoalesceExpressionContext,
} from "../base/VertexParser";
import StringBuilder from "../../utils/string-builder";
import { VertexParserVisitor } from "../base/VertexParserVisitor";
import RewritableSupport from "./rewritable-support";

export default class NullCoalesce extends AbstractParseTreeVisitor<void>
  implements VertexParserVisitor<void>, RewritableSupport {
  rewriter: TokenStreamRewriter | undefined;

  protected defaultResult(): void {
    return;
  }

  constructor() {
    super();
  }

  visitNullCoalesceExpression(ctx: NullCoalesceExpressionContext): void {
    if (!ctx.stop) {
      return;
    }

    if (this.rewriter) {
      this.rewriter.replace(
        ctx.start.tokenIndex,
        ctx.stop.tokenIndex,
        this.getNodeText(ctx)
      );
    }
  }

  private getNodeText(ctx: ExpressionContext | undefined): string {
    if (!ctx) {
      return "";
    }
    if (ctx.ruleContext instanceof NullCoalesceExpressionContext) {
      const left = this.getNodeText(
        (<NullCoalesceExpressionContext>ctx).expression()[0]
      );
      const right = this.getNodeText(
        (<NullCoalesceExpressionContext>ctx).expression()[1]
      );
      const buffer = new StringBuilder();
      buffer
        .append("(")
        .append(left)
        .append(" != null ? ")
        .append(left)
        .append(" : ")
        .append(right)
        .append(")");
      return buffer.build();
    }

    return ctx.text;
  }
}
