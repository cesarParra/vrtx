export default class StringBuilder {
  buffer = "";

  appendComma(): StringBuilder {
    this.buffer += ",";
    return this;
  }

  append(text: string): StringBuilder {
    this.buffer += text;
    return this;
  }

  removeTrailingComma(): StringBuilder {
    if (this.buffer.endsWith(",")) {
      this.buffer = this.buffer.substring(0, this.buffer.length - 1);
    }
    return this;
  }

  appendReturn(): StringBuilder {
    this.buffer += "\n";
    return this;
  }

  appendTab(): StringBuilder {
    this.buffer += "\t";
    return this;
  }

  addMethodSignature(
    modifiers: string[],
    methodName: string,
    params: [string, string][]
  ): StringBuilder {
    modifiers.forEach((modifier) => {
      this.append(modifier).append(" ");
    });
    this.append(methodName).append("(");
    params.forEach((param) => {
      const [type, identifier] = param;
      this.append(`${type}  ${identifier}`).append(",");
    });
    this.removeTrailingComma();
    this.append(")");
    return this;
  }

  appendBlockStart(): StringBuilder {
    this.append("{");
    return this;
  }

  appendBlockEnd(): StringBuilder {
    this.append("}");
    return this;
  }

  addMethodCall(methodName: string, parameterValues: string[]): StringBuilder {
    this.append(methodName).append("(");
    parameterValues.forEach((param) => {
      this.append(`${param},`);
    });
    this.removeTrailingComma();
    this.append(");");
    return this;
  }

  build(): string {
    return this.buffer;
  }
}
