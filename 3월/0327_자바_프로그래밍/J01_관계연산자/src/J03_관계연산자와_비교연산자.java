public class J03_관계연산자와_비교연산자 {
    public static void main(String[] args) {
        // 관계연산자(비교연산자)
        // > 크다
        // >= 크거나 같다(이상)
        // < 작다
        // <= 작거나 같다(이하)
        // == 같다
        // != 같지않다(서로 다르다)
        // boolean 불린은 true(1), false(0) 논리 값을 나타낸다.

        int n = 10;
        boolean b1 = n > 5; //변수 n은 5보다 크다
        System.out.println("bl = n > 5 " + b1); //10은 5보다 크다 참.
        // Result = >b1 = n > 5 : true

        // 문제1)
        // n 변수에 8을 대입
        // a 변수에 20을 대입
        // b2 는 boolean 자료형 선언
        // 비교연산 구현하시오
        // n은 a보다 작거나 같다 조건식
        // 구현하고 출력하시오
        
        n = 8;
        int a = 20;

        boolean b2 = n <= a;

        System.out.println("b2 = n <= a " + (b2 = n <= a));

        // 강의용
        n = 8;
        a = 20;

        b2 = n <= a;
        System.out.println("1. n <= a : " + b2);
        System.out.println("1. n <= a : " + (n <= a));


        // b3 결과 변수
        // m 변수 = 15
        // n 변수 = 14
        // 비교연산 => 같지않다
        boolean b3;
        boolean b4;

        int m = 15;
        n = 14;

        b3 = n == m;
        b4 = n != m;
        
        System.out.println("n == m " + b3);
        System.out.println("n != m " + b4);

        // 문제2)
        // 변수 정수형 x = 90
        // 변수 정수형 y = 70
        // 변수 불형 p1 크다 
        // 변수 불형 p2 작다
        // 변수 불형 p3 크거나 같다
        // 변수 불형 p4 작거나 같다
        // 변수 불형 p5 같다
        // 변수 불형 p6 같지 않다

        // 구현 x, y, p1, p2, p3, p4, p5, p6 출력

        int x = 90;
        int y = 70;

        boolean p1, p2, p3, p4, p5, p6;

        p1 = x > y;
        p2 = x < y;
        p3 = x >= y;
        p4 = x <= y;
        p5 = x == y;
        p6 = x != y;

        System.out.println("x " + x );
        System.out.println("y " + y );
        System.out.println("x > y " + p1 );
        System.out.println("x < y " + p2 );
        System.out.println("x >= y " + p3 );
        System.out.println("x <= y " + p4 );
        System.out.println("x == y " + p5 );
        System.out.println("x != y " + p6 );
        









    }
}
