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

// TODO: Params can have modifiers (like final) so let's make sure that they are respected
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
    const params = this.getParamsTuples(formalParameters);
    constructorOverload.addMethodSignature(modifiers, constructorName, params);
    constructorOverload.appendBlockStart();

    const parameters = [
      ...formalParameters.map((formalParam) => formalParam.id),
      ...optionalParameters.map((param) => param.value ?? "null"),
    ];

    constructorOverload.addMethodCall("this", parameters);
    constructorOverload.appendBlockEnd();
    return constructorOverload.build();
  }

  private getParamsTuples(formalParameters: FormalParameter[]) {
    return formalParameters.map((parameter) => {
      return <[string, string]>[parameter.type, parameter.id];
    });
  }
}
