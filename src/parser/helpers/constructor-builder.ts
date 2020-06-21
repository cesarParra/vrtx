import { FormalParameter, OptionalParameter } from "../model";
import StringBuilder from "../../utils/string-builder";

export interface IConstructorBuilder {
  build: (
    modifiers: string[],
    constructorName: string,
    formalParameters: FormalParameter[],
    optionalParameters: OptionalParameter[]
  ) => string;
}

export default class ConstructorBuilder implements IConstructorBuilder {
  build(
    modifiers: string[],
    constructorName: string,
    formalParameters: FormalParameter[],
    optionalParameters: OptionalParameter[]
  ): string {
    const constructorOverload = new StringBuilder()
      .appendReturn()
      .appendReturn()
      .appendTab();
    modifiers.forEach((modifier) => {
      constructorOverload.append(`${modifier} `);
    });
    constructorOverload.append(constructorName + "(");
    formalParameters.forEach((parameter) => {
      constructorOverload.append(`${parameter.type}  ${parameter.id},`);
    });
    constructorOverload.removeTrailingComma();
    constructorOverload.append("){ this(");
    formalParameters.forEach((parameter) => {
      constructorOverload.append(`${parameter.id},`);
    });
    optionalParameters.forEach((optionalParameter) => {
      const parameterValue = optionalParameter.value ?? "null";
      constructorOverload.append(`${parameterValue},`);
    });
    constructorOverload.removeTrailingComma();
    constructorOverload.append("); }");
    return constructorOverload.build();
  }
}
