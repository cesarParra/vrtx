import { VertexParserListener } from "./../base/VertexParserListener";
import { TokenStreamRewriter, ParserRuleContext } from "antlr4ts";
import { TerminalNode, ErrorNode } from "antlr4ts/tree";
import {
  ClassBodyDeclarationContext,
  ConstructorDeclarationContext,
  FormalParameterListContext,
  OptionalPositionalFormalParametersContext,
} from "./../base/VertexParser";

interface OptionalParameter {
  type: string;
  id: string;
  value?: string;
}

interface FormalParameter {
  type: string;
  id: string;
}

export default class ConstructorOptionalParams implements VertexParserListener {
  visitTerminal?: (node: TerminalNode) => void;
  visitErrorNode?: (node: ErrorNode) => void;
  enterEveryRule?: (ctx: ParserRuleContext) => void;
  exitEveryRule?: (ctx: ParserRuleContext) => void;

  rewriter: TokenStreamRewriter;

  private modifiersStack: string[][] = [];
  private constructorName = "";
  private optionalParameters: OptionalParameter[] = [];
  private formalParameters: FormalParameter[] = [];

  constructor(rewriter: TokenStreamRewriter) {
    this.rewriter = rewriter;
  }

  enterClassBodyDeclaration(ctx: ClassBodyDeclarationContext) {
    const modifiers: string[] = [];
    ctx.modifier().forEach((modifier) => {
      modifiers.push(modifier.text);
    });
    this.modifiersStack.push(modifiers);
  }

  exitClassBodyDeclaration(ctx: ClassBodyDeclarationContext) {
    this.modifiersStack.pop();
  }

  enterConstructorDeclaration(ctx: ConstructorDeclarationContext) {
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

  enterFormalParameterList(ctx: FormalParameterListContext) {
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
    if (ctx.start && ctx.stop) {
      let buffer = "";
      this.optionalParameters.forEach((optionalParameter) => {
        buffer += `${optionalParameter.type} ${optionalParameter.id},`;
      });
      buffer = buffer.substring(0, buffer.length - 1); // Removing the trailing comma
      this.rewriter.replace(ctx.start.tokenIndex, ctx.stop?.tokenIndex, buffer);
    }
  }

  exitConstructorDeclaration(ctx: ConstructorDeclarationContext) {
    const formalParameters = this.formalParameters;
    const optionalParameters = this.optionalParameters;
    let constructorBuffer = "";
    while (optionalParameters.length) {
      constructorBuffer += this.createConstructor(
        ctx,
        formalParameters,
        optionalParameters
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
    if (ctx.stop) {
      this.rewriter.insertAfter(ctx.stop, constructorBuffer);
    }

    this.constructorName = "";
    this.optionalParameters = [];
    this.formalParameters = [];
  }

  private createConstructor(
    ctx: ConstructorDeclarationContext,
    formalParameters: FormalParameter[],
    optionalParameters: OptionalParameter[]
  ): string {
    let constructorOverload = "\n\n\t";
    this.modifiersStack[this.modifiersStack.length - 1].forEach((modifier) => {
      constructorOverload += `${modifier} `;
    });
    constructorOverload += this.constructorName + "(";
    formalParameters.forEach((parameter) => {
      constructorOverload += `${parameter.type}  ${parameter.id},`;
    });
    if (constructorOverload.endsWith(",")) {
      constructorOverload = constructorOverload.substring(
        0,
        constructorOverload.length - 1
      ); // Removing trailing comma
    }

    constructorOverload += "){ this(";
    formalParameters.forEach((parameter) => {
      constructorOverload += `${parameter.id},`;
    });
    optionalParameters.forEach((optionalParameter) => {
      const parameterValue = optionalParameter.value ?? "null";
      constructorOverload += `${parameterValue},`;
    });
    constructorOverload = constructorOverload.substring(
      0,
      constructorOverload.length - 1
    ); // Removing trailing comma
    constructorOverload += "); }";
    return constructorOverload;
  }
}
