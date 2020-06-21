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

  build(): string {
    return this.buffer;
  }
}