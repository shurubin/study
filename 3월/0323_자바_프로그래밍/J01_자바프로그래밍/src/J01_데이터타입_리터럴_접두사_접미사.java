public class J01_데이터타입_리터럴_접두사_접미사 {
    public static void main(String[] args) {
        // 변수의 타입
        // 기본형 타입(primitive 프리미티브) : 실제 값을 저장(스레드)

        // Byte 별 구분 타입
        // 1Byte : boolean, byte
        // 2Bytes : char, short
        // 4Bytes : int, float
        // 8bytes : long, double
        
        // 논리형 : boolean (true/false)
        // 문자형 : char
        // 정수 : byte, short, int, long  부호(Sign)와 절대값(Absolute) 부호를 포함하지 않는 숫자
        // 실수 : float, double => 부동소수점 표현식 : 수치의 정밀도가 높다


        // 참조형 타입(Referrence Type 레퍼런스) : 기본형을 제외한 나머지
        // 참조형 타입 : 객체의 주소를 저장
        // String, system, 객체, 배열, 나열



        // 부호의 유무의 분류 => 자료표현 범위가 달라진다.

        // -2^(n-1) ~ 2^(n-1)-1
        // 음수, 양수 부호가 있는것 (Signed) int => 4byte => 32bit => -2^(32-1 ~ 2^(32-1)-1 => -2^31 ~ 2^(31)-1 => -2,147,483,648 ~  -2,147,483,647
        // 양수만 사용(부호가 없다 Unsigned) int => 4byte => 32bit => -2^(32)-1 => -2^31 ~ 2^(31)-1 => 0 ~ 4,294,967,295
        // *n-1 => n-1의 의미는 부호비트 1비트를 제외한 것
        // 부호가 있는 자료형 : byte, short, int, long, float, double 

        // 2^(n)-1
        // boolean => 1byte => 8bit => 2^(8)-1 => 256-1 => 255 최대수 시작은 0~255 
        // -1의 의미 => 모든 수는 기본이 0부터 시작하기 때문에 최대수=n-1 10진수는 0~9 최대수:9
        // 부호가 없는 자료형 : boolean, char


        // 자료형 변수이름 = 변수값(리터럴) <= 자료형에 맞는 리터럴값 지정
        // int cnt = 0;
        // 변수이름 => 명명규칙 = > 네이밍규칙
        // 클래스 => 첫글자 대문자이면서 영문 중간연결단어 대문자 [파스칼케이스]
        // 예) projectKurly
        // 변수, 메서드 => 첫글자 소문자이면서 중간연결단에 대문자 [카멜케이스(낙타혹과 비슷 asDoa) ]
        // 예) _ 와 $ 특수문자 사용가능
        // a = 50; abc = 70; loveIs = 66; _int $long

        // 상수 => 모두 대문자로 사용 단어와 단어사이 연결되는 단어는 언더바(팟홀) 사용 [팟홀케이스 또는 스네이크케이스]
        // 예) final double PI = 3.14; ROOT_2 = 1.414213


        // 리터럴 => 변수에 대입되는 값
        int cnt = 0; //리터럴
        char ch1 = 'A'; // 반드시 싱글따옴표 사용 한글자만 가능 리터럴
        //char ch2 = 'AB'; //두글자는 오류
        char ch3 = 64; //아스키코드(ASCII CODE) 값 65(A) ~ 리터럴
        char ch4 = '\u0041'; //유니코드(Unicode) \u0041(A) ~ 리터럴
        char ch5 = '\t'; //tab 일정한 사이 간격을 띄어준다 리터럴
        byte by1 = 99; //byte 정수 리터럴
        short sh1 = 17536; //short 정수 리터럴
        int bi = 0b10101; // 2진수 zero b >0b
        int oct = 037;  //octal 8진수 영문 BIG O
        //011 111 > 16 + 8 + 7 = 31
        int hex = 0x1100; //octal 16진수
        long lon = 2165432131L; //LONG 숫자 맨 뒤에 영문 L 소문자 l
        long lon2 = 2165432131L; //LONG 숫자 맨 뒤에 영문 L 소문자 l
        long lon3 = 2165432131L; //LONG 숫자 맨 뒤에 영문 L 소문자 l
        float flo = 1.41423f; // float 숫자 맨 뒤에 영문 F 소문자 f
        float flo1 = 1.41423f; // float 숫자 맨 뒤에 영문 F 소문자 f
        double dou = 3.1414232d; //double

        System.out.println("cnt" + cnt);
        System.out.println("ch1" + ch1);
        System.out.println("ch3" + ch3);
        System.out.println("ch4" + ch4);
        System.out.println("ch5" + ch5);
        System.out.println("by1" + by1);
        System.out.println("sh1" + sh1);
        System.out.println("bi" + bi);
        System.out.println("oct" + oct);
        System.out.println("hex" + hex);
        System.out.println("lon" + lon);
        System.out.println("flo" + flo);
        System.out.println("dou" + dou);
        System.out.println("ch1" + "ch3" + ch5 + "ch4");


    }
}
