import { FormalParameter, OptionalParameter } from "../model";
import StringBuilder from "../../utils/string-builder";

export interface IMethodBuilder {
  build: (
    modifiers: string[],
    methodName: string,
    formalParameters: FormalParameter[],
    optionalParameters: OptionalParameter[],
    isConstructor: boolean,
    returnType?: string
  ) => string;
}

// TODO: Params can have modifiers (like final) so let's make sure that they are respected
export default class MethodBuilder implements IMethodBuilder {
  build(
    modifiers: string[],
    methodName: string,
    formalParameters: FormalParameter[],
    optionalParameters: OptionalParameter[],
    isConstructor: boolean,
    returnType?: string
  ): string {
    const constructorOverload = new StringBuilder()
      .appendReturn()
      .appendReturn()
      .appendTab();
    const params = this.getParamsTuples(formalParameters);
    constructorOverload.addMethodSignature(
      modifiers,
      methodName,
      params,
      returnType
    );
    constructorOverload.appendBlockStart();

    const parameters = [
      ...formalParameters.map((formalParam) => formalParam.id),
      ...optionalParameters.map((param) => param.value ?? "null"),
    ];

    const methodNameToCall = isConstructor ? "this" : methodName;
    constructorOverload.addMethodCall(
      methodNameToCall,
      parameters,
      !isConstructor && returnType !== "void"
    );
    constructorOverload.appendBlockEnd();
    return constructorOverload.build();
  }

  private getParamsTuples(formalParameters: FormalParameter[]) {
    return formalParameters.map((parameter) => {
      return <[string, string]>[parameter.type, parameter.id];
    });
  }
}
