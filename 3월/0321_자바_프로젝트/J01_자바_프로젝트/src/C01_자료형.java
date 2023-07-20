/**
 * C01_자료형
 */
public class C01_자료형 {
    public static void main(String[] args) {
        //자료형 > 데이터 타입(data type)
        // int >  정수형
        // string > 문자형
        // 100% 타입설정
        // 자바 기본타입 : int, long, float, double, char, string, boolean, byte, short

        //변수 _ $ 특수문자 2개만 사용가능
        //1. 정수 자료형
        //예 타입설정 변수이름= (대입연산자)  0(변수 값)
        //예 타입설정 cnt = 0
        //타입의 정의는 변수에 들어오는(대입하는) 변수값의 타음을 설정한다.
        //예 int cnt = 121; //cnt 변수에 정수형 값을 대입한다.
        //예 long cnt2 = 13585484; //cnt 변수에 정수형 값을 대입한다.


        //2. 실수 자료형
        //예 float num = 33.3333; //cnt 변수에 실수형(소수점 이하에 숫자가 포함된 것) 값을 대입한다.
        //예 double num2 = 33.3333354358976; //cnt 변수에 실수형(소수점 이하에 숫자가 포함된 것) 값을 대입한다.


        //3. 문자 자료형
        // '' 싱글 쿼트(따옴표) 사용
        //예 char grade = 'A';


        //4. 문자열 자료형
        // "" 더블 쿼트(따옴표) 사용
        //예 string str = "I Love You!";


        //5. 논리 자료형
        //참(true)/거짓(false) 데이터를 저장하는 자료형
        //예 boolean isGender1 = false;
        //예 boolean isGender2 = true;

        //1. 정수자료형
        int numInt = 30;
        long numLong = 300000000;
        System.out.println("int형" + numInt);
        System.out.println("long형" + numLong);

        //2. 실수자료형
        double numDouble = 1.45866;
        float numFloat = 3.14f; //플로트형은 더블형보다 작은 실수표현
                                //반드시 숫자 맨 뒤에 f를 붙여서 표기한다.     
        System.out.println("double형" + numDouble);
        System.out.println("float형" + numFloat);


        //3. 문자자료형
        char a = 'A';
        char b = '대';
        char c = 65; // 아스키코드 ASCII CODE A = 65, B = 66, C =67.....
        char d = 97; // 아스키코드 ASCII CODE a = 97, b = 98, C =99.....
        char e = 98; // 아스키코드 ASCII CODE 

        System.out.println("char a " + a);
        System.out.println("char b " + b);
        System.out.println("char c " + c);
        System.out.println("char d " + d);
        System.out.println("char e " + e);











    }
}