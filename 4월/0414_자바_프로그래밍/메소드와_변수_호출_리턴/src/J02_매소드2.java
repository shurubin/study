public class J02_매소드2 {
    public static void main(String[] args) {
        Method1();
        Method2("이순신");
        Method3(3, 5);
        System.out.println("리턴값이 있는 메소드 호출 결과 " + Method4(5, 8));

        int result = Method4(5, 8);
        System.out.println("리턴값이 있는 매개변수 2개 메소드 변수에 호출 결과 " + result);

        result = Method5(3, 5, 7);
        System.out.println("리턴값이 있는 매개변수 3개 메소드 변수에 호출 결과 " + result);

        result = Method5(100,2,3);
        System.out.println("리턴값이 있는 오버로딩 결과1 " + result);

        result = Method5(9,22,3);
        System.out.println("리턴값이 있는 오버로딩 결과2 " + result);

        result = Method5(10,1,33);
        System.out.println("리턴값이 있는 오버로딩 결과3 " + result);

        // 리턴값이 문자열
        String resultStr = Method5("오버로딩","매개변수2개");
        System.out.println("리턴값이 있는 문자열 " + resultStr);







    }

    // 1. 기본 메소드 : 리턴값이 없는 메소드 void
    //    기본 메소드 : 매개변수없는 매소드()
    public static void Method1() {
        System.out.println("여기는 기본 메소드입니다.");
    }

    // 2.void 메소드 : 리턴값이 없는 메소드 void
    //              : 매개변수 있는 매소드(매개변수)
    public static void Method2(String name) {
        System.out.println("리턴값이 없는 메소드, 매개변수 있는 메소드 " + name);
    }

    // 3. void 메소드 : 리턴값이 없는 메소드 void
    //               : 매개변수 있는 메소드(매개변수1, 매개변수2)
    public static void Method3(int a, int b) {
        System.out.println("a + b = " + (a + b));
    }
    
    // 4. 정수형 리턴값이 있는 메소드
    //               : 매개변수 있는 메소드(매개변수1, 매개변수2)
    public static int Method4(int a, int b){
        return a + b;
    }

    // 5. 정수형 리턴값이 있는 메소드
    //               : 매개변수 있는 메소드(매개변수1, 매개변수2, 매개변수3)
    public static int Method5(int x, int y, int z){
        return x * y + z;
    }

    // 오버로딩(Overloading)
    // 6. 리턴값 자료형 같고 메서드 이름 같은 메소드(매개변수 자료형이 다르다)
    //    매개변수 자료형이 다르면 같은 이름의 매소드 사용 가능하다.
    //               : 정수형 리턴값이 있는 메소드
    //               : 매개변수 있는 메소드(매개변수1, 매개변수2)
    public static int Method5(int x, int y, long z){
        return x * y + (int)z;
    }

    public static long Method5(long x, int y, long z){
        return x - y - z;
    }

    public static long Method5(long x, int y, int z){
        return x * y + (int)z;
    }

    public static long Method5(long x, long y, int z){
        return x * y + z;
    }

    public static long Method5(long x, long y, long z){
        return x * y + z;
    }

    public static String Method5(String x, String y){
        return x + " , " + y;
    }



}
