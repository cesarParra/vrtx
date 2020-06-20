import StringBuilder from "../string-builder";

describe("string builder util", () => {
  it("builds an empty string by default", () => {
    const builder = new StringBuilder();
    expect(builder.build()).toBe("");
  });

  it("can append text", () => {
    const builder = new StringBuilder();
    builder.append("test");
    expect(builder.build()).toBe("test");
  });

  it("can append a comma", () => {
    const builder = new StringBuilder();
    builder.appendComma();
    expect(builder.build()).toBe(",");
  });

  it("returns trailing comma if it has one", () => {
    const builder = new StringBuilder();
    builder.appendComma().removeTrailingComma();
    expect(builder.build()).toBe("");
  });

  it("can append return", () => {
    const builder = new StringBuilder();
    builder.appendReturn();
    expect(builder.build()).toBe("\n");
  });

  it("can append tab", () => {
    const builder = new StringBuilder();
    builder.appendTab();
    expect(builder.build()).toBe("\t");
  });
});
