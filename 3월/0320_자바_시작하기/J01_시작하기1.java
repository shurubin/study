/**
 * J01_시작하기
 * Java › Inlay Hints › Parameter Names: Enabled  None

 */ 
public class J01_시작하기1 { //파일이름.java 와 클래스이름 동일하게 설정

    public static void main(String[] args) {
        System.out.println("--------------------------------------");
        System.out.println("자바시작하기 내용 출력 줄바꿈 발생");
        System.out.print("Hello Java Start!!!");
        System.out.print("Hello Java Start!!!");
        System.out.print("Hello Java Start!!!");
        System.out.println("");
        System.out.println("");
        System.out.println("");
        System.out.println("");
        System.out.println("\n --------------이스케이프역슬래시new Line------------------------");

        // hap() 메서드 호출 실행
        System.out.println("더하기 메서드 호출" + hap(200, 300));
        System.out.println("곱하기 메서드 호출" + gob(200, 300));
        System.out.println("");
        System.out.println("");
        System.out.println("");
        System.out.println("");
        System.out.println("");
    }

    //리턴값이 있는 메서드
    //기본 자료형 정수 인트 int integer 실수 문자열 String 불....
    public static int hap(int a, int b) {
        return a + b;
    }
    public static int gob(int a, int b) {
        return a * b;
    }
    public static void name1(){
        
    }
}