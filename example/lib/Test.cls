/**
 * @description Test class.
 */
public class Test {
  @NamespaceAccessible
  public Test(final String arg1, String arg2, Object arg3, Integer arg4) {
    String message = (arg1 != null ? arg1 : (arg3 != null ? arg3 : 'Hello '));
    System.debug(
      String.format(
        'Hello {0}! Message {1} received',
        new List<String>{ arg1, arg2 }
      )
    );
  }

  @NamespaceAccessible
  public Test(String arg1) {
    this(arg1, 'World!', null, 5);
  }

  @NamespaceAccessible
  public Test(String arg1, String arg2) {
    this(arg1, arg2, null, 5);
  }

  @NamespaceAccessible
  public Test(String arg1, String arg2, Object arg3) {
    this(arg1, arg2, arg3, 5);
  }

  /**
   * @description Example method.
   * @return String.
   */
  public static String execute(String arg1, String arg2) {
    return 'test';
  }

  public static String execute(String arg1) {
    return execute(arg1, null);
  }

  public void executeVoid(String arg1, Integer arg2) {
    System.debug('Test');
  }

  public void executeVoid() {
    executeVoid(null, 5);
  }

  public void executeVoid(String arg1) {
    executeVoid(arg1, 5);
  }

  public class InnerClass {
    public InnerClass(String arg1) {
      System.debug(arg1);
    }

    public InnerClass() {
      this('Test From Inner class');
    }
  }
}
