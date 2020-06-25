public class AnotherClass {
  @TestVisible
  protected AnotherClass(String greeting) {
    System.debug(greeting);
  }

  @TestVisible
  protected AnotherClass() {
    this('Hello World!');
  }
}
