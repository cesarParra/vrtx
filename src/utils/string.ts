export function purgeWhitespaces(text: string): string {
  return text.split(/\s+/).join("");
}
