import { TokenStreamRewriter } from "antlr4ts";

export default interface RewritableSupport {
  rewriter: TokenStreamRewriter | undefined;
}
