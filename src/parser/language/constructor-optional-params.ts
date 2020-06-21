import { VertexParserListener } from "../base/VertexParserListener";
import { TokenStreamRewriter, ParserRuleContext } from "antlr4ts";
import { TerminalNode, ErrorNode } from "antlr4ts/tree";
import {
  ClassBodyDeclarationContext,
  ConstructorDeclarationContext,
  FormalParameterListContext,
  OptionalPositionalFormalParametersContext,
} from "../base/VertexParser";
import StringBuilder from "../../utils/string-builder";
import { OptionalParameter, FormalParameter } from "../model";
import ConstructorBuilder, {
  IConstructorBuilder,
} from "../helpers/constructor-builder";

export default class ConstructorOptionalParams implements VertexParserListener {
  visitTerminal?: (node: TerminalNode) => void;
  visitErrorNode?: (node: ErrorNode) => void;
  enterEveryRule?: (ctx: ParserRuleContext) => void;
  exitEveryRule?: (ctx: ParserRuleContext) => void;

  rewriter: TokenStreamRewriter;
  constructorBuilder: IConstructorBuilder;

  private modifiersStack: string[][] = [];
  private constructorName = "";
  private optionalParameters: OptionalParameter[] = [];
  private formalParameters: FormalParameter[] = [];

  constructor(
    rewriter: TokenStreamRewriter,
    builder = new ConstructorBuilder()
  ) {
    this.rewriter = rewriter;
    this.constructorBuilder = builder;
  }

  enterClassBodyDeclaration(ctx: ClassBodyDeclarationContext): void {
    const modifiers: string[] = [];
    ctx.modifier().forEach((modifier) => {
      modifiers.push(modifier.text);
    });
    this.modifiersStack.push(modifiers);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  exitClassBodyDeclaration(ctx: ClassBodyDeclarationContext): void {
    this.modifiersStack.pop();
  }

  enterConstructorDeclaration(ctx: ConstructorDeclarationContext): void {
    this.constructorName = ctx.qualifiedName().text;
  }

  enterOptionalPositionalFormalParameters(
    ctx: OptionalPositionalFormalParametersContext
  ): void {
    ctx.defaultFormalParameter().forEach((parameter) => {
      this.optionalParameters.push({
        type: parameter.formalParameter().typeRef().text,
        id: parameter.formalParameter().id().text,
        value: parameter.expression()?.text,
      });
    });
  }

  enterFormalParameterList(ctx: FormalParameterListContext): void {
    ctx.formalParameter().forEach((parameter) => {
      this.formalParameters.push({
        type: parameter.typeRef().text,
        id: parameter.id().text,
      });
    });
  }

  exitOptionalPositionalFormalParameters(
    ctx: OptionalPositionalFormalParametersContext
  ): void {
    if (!ctx.stop) {
      return;
    }

    const buffer = new StringBuilder();
    this.optionalParameters.forEach((optionalParameter) => {
      buffer
        .append(`${optionalParameter.type} ${optionalParameter.id}`)
        .appendComma();
    });
    buffer.removeTrailingComma();
    this.rewriter.replace(
      ctx.start.tokenIndex,
      ctx.stop?.tokenIndex,
      buffer.build()
    );
  }

  exitConstructorDeclaration(ctx: ConstructorDeclarationContext): void {
    if (!ctx.stop) {
      this.clear();
      return;
    }

    const formalParameters = this.formalParameters;
    const optionalParameters = this.optionalParameters;
    const constructorBuffer = new StringBuilder();
    const modifiers = this.modifiersStack[this.modifiersStack.length - 1];
    this.buildConstructors(
      optionalParameters,
      constructorBuffer,
      modifiers,
      formalParameters
    );
    this.rewriter.insertAfter(ctx.stop, constructorBuffer.build());
    this.clear();
  }

  private buildConstructors(
    optionalParameters: OptionalParameter[],
    constructorBuffer: StringBuilder,
    modifiers: string[],
    formalParameters: FormalParameter[]
  ) {
    while (optionalParameters.length) {
      constructorBuffer.append(
        this.constructorBuilder.build(
          modifiers,
          this.constructorName,
          formalParameters,
          optionalParameters
        )
      );

      // We create a constructor per optional parameter, eliminating one
      // optional parameter each time and converting it to a formal parameter
      // instead
      const firstParam = optionalParameters.shift();
      if (firstParam) {
        formalParameters.push({
          type: firstParam.type,
          id: firstParam.id,
        });
      }
    }
  }

  private clear() {
    this.constructorName = "";
    this.optionalParameters = [];
    this.formalParameters = [];
  }
}
