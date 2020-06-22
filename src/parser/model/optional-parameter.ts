import FormalParameter from "./formal-parameter";

export default interface OptionalParameter extends FormalParameter {
  value?: string;
}
