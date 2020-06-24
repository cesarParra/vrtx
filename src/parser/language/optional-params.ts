import {
  ClassBodyDeclarationContext,
  ConstructorDeclarationContext,
  FormalParameterListContext,
  MethodDeclarationContext,
  OptionalPositionalFormalParametersContext,
} from "../base/VertexParser";
import StringBuilder from "../../utils/string-builder";
import { OptionalParameter, FormalParameter } from "../model";
import MethodBuilder, { IMethodBuilder } from "../helpers/method-builder";
import RewritableSupport from "./rewritable-support";
import { VertexParserListener } from "../base/VertexParserListener";
import { TokenStreamRewriter, ParserRuleContext } from "antlr4ts";
import { TerminalNode, ErrorNode } from "antlr4ts/tree";

export default class OptionalParams
  implements VertexParserListener, RewritableSupport {
  visitTerminal?: (node: TerminalNode) => void;
  visitErrorNode?: (node: ErrorNode) => void;
  enterEveryRule?: (ctx: ParserRuleContext) => void;
  exitEveryRule?: (ctx: ParserRuleContext) => void;

  constructorBuilder: IMethodBuilder;

  private returnType = "";
  private modifiersStack: string[][] = [];
  private methodName = "";
  private optionalParameters: OptionalParameter[] = [];
  private formalParameters: FormalParameter[] = [];
  rewriter: TokenStreamRewriter | undefined;

  constructor(builder: IMethodBuilder = new MethodBuilder()) {
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

  enterMethodDeclaration(ctx: MethodDeclarationContext): void {
    this.methodName = ctx.id().text;
    this.returnType = ctx.typeRef()?.text || "void";
  }

  enterConstructorDeclaration(ctx: ConstructorDeclarationContext): void {
    this.methodName = ctx.qualifiedName().text;
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
    if (this.rewriter) {
      this.rewriter.replace(
        ctx.start.tokenIndex,
        ctx.stop?.tokenIndex,
        buffer.build()
      );
    }
  }

  exitMethodDeclaration(ctx: MethodDeclarationContext): void {
    if (!ctx.stop) {
      this.clear();
      return;
    }

    const formalParameters = this.formalParameters;
    const optionalParameters = this.optionalParameters;
    const constructorBuffer = new StringBuilder();
    const modifiers = this.modifiersStack[this.modifiersStack.length - 1];
    this.buildMethods(
      optionalParameters,
      constructorBuffer,
      modifiers,
      formalParameters,
      false,
      this.returnType
    );

    if (this.rewriter) {
      this.rewriter.insertAfter(ctx.stop, constructorBuffer.build());
    }

    this.clear();
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
    this.buildMethods(
      optionalParameters,
      constructorBuffer,
      modifiers,
      formalParameters,
      true
    );

    if (this.rewriter) {
      this.rewriter.insertAfter(ctx.stop, constructorBuffer.build());
    }

    this.clear();
  }

  private buildMethods(
    optionalParameters: OptionalParameter[],
    constructorBuffer: StringBuilder,
    modifiers: string[],
    formalParameters: FormalParameter[],
    isConstructor: boolean,
    returnType?: string
  ) {
    while (optionalParameters.length) {
      constructorBuffer.append(
        this.constructorBuilder.build(
          modifiers,
          this.methodName,
          formalParameters,
          optionalParameters,
          isConstructor,
          returnType
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
    this.methodName = "";
    this.optionalParameters = [];
    this.formalParameters = [];
  }
}
