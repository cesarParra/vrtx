/**
 * @description Test class.
 */
public class Test {

  @NamespaceAccessible
  public Test(String arg1, String arg2,Object arg3,Integer arg4) {
    String message = (arg1 != null ? arg1 : (arg3 != null ? arg3 : 'Hello '));
    System.debug(String.format('Hello {0}! Message {1} received', new List<String>{arg1,arg2}));
  }

	@NamespaceAccessible public Test(String  arg1){ this(arg1,'World!',null,5); }

	@NamespaceAccessible public Test(String  arg1,String  arg2){ this(arg1,arg2,null,5); }

	@NamespaceAccessible public Test(String  arg1,String  arg2,Object  arg3){ this(arg1,arg2,arg3,5); }

  /**
   * @description Example method.
   * @return String.
   */
  public static String execute() {
    return 'test';
  }

  public class TestInnerClass {
    public TestInnerClass(String arg1) {
      System.debug(arg1);
    }

	public TestInnerClass(){ this('Test From Inner class'); }
  }
}
