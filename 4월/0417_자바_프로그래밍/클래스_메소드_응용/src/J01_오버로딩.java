public class J01_오버로딩 {

    // 매개변수 없고 static 키워드 없는 메소드
    // => 클래스 생성자 생성하고 매소드 호출 실행
    public void Overloading(){
        System.out.println("static 없는 메소드 실행");
    }

    // 매개변수 없고 리턴 없는 메소드
    public static void Overloading(String str){
        System.out.println("매개변수 없는 기본 메소드" + str);
    }


    // 오버로딩1 메소드 선언
    // void 없는 메소드는 리턴값 있는 메소드
    public static String overloading(String name, String jikcheck){
        return name +" "+ jikcheck;
    }

    // 오버로딩2 메소드 선언
    public static int overloading(int a, int b){
        return a + b;
    }

    // 오버로딩3 메소드 선언
    public static String overloading(String a, int b){
        return a + " " + b;
    }

    // 오버로딩4 메소드 선언
    public static String overloading(float a, String b){
        return a + " " + b;
    }

    // 파라미터 개수와 아규먼트 개수가 달라도 되는데
    // 단 파라미터 개수가 아규먼트 개수보다 ㄴ적으면 오류
    // 오버로딩5 메소드 선언
    public static String overloading(String a, String b, String c){
        return a + " " + b + " " +c;
    }




    public static void main(String[] args) {

        // static 없는 메소드
        // 클래스 생성하고 실행한다
        J01_오버로딩  newJ01_오버로딩 = new J01_오버로딩();



        String overload1 = overloading("이순신", "전라좌수영");  // 아규먼트(전달인자)
        int overload2 = overloading(10, 30);
        String overload3 = overloading("김유신", 50);  // 스트링 => 스트링 + 정수
        String overload4 = overloading(4.17f, "오늘");  // 스트링 => 스트링 + 정수
        String overload5 = overloading("이번주", "빵곤", "돌");  // 스트링 => 스트링 + 정수


        System.out.println();
        newJ01_오버로딩.Overloading();
        Overloading("리턴값없는 기본메소드");
        System.out.println();

        System.out.println("오버로딩1 결과 = " + overload1 );
        System.out.println("오버로딩2 결과 = " + overload2 );
        System.out.println("오버로딩3 결과 = " + overload3 );
        System.out.println("오버로딩4 결과 = " + overload4 );
        System.out.println("오버로딩5 결과 = " + overload5 );


    }
}
