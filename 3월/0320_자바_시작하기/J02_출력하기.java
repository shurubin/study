public class J02_출력하기 {
    public static void main(String[] args) {

        //문자열
        System.out.println("자바 출력문입니다. 라이피드 줄바꿈");

        //문자열 연결연산자
        System.out.println("자바" + "JDK 프로그램"); //문자열 + 문자열  연결연산자

        // 숫자출력
        System.out.println(30); //정수 출력
        System.out.println(255.5); //실수 출력


        //사칙연산
        System.out.println(150+130); //숫자 더하기 연산
        System.out.println(12.98 + 35.33); //실수 더하기 연산
        System.out.println("250 + 130 = " + (250 + 130));  //(괄호) 연산부터 없으면 텍스트 처리
        System.out.println("250 * 130 = " + (250 * 130));  
        System.out.println("250 - 130 = " + (250 - 130));  
        System.out.println("250 / 130 = " + (250 / 130));  


        //줄바꿈없는 프린트 출력 Escape New Line
        System.out.println("문자열 안에 \n");
        System.out.println("줄바꿈 넣기 \n");
        System.out.println("새로운 줄 \n 에서 줄바꿈");


        //printf %d 사용 숫자 출력 > c언어 형식 출력
        System.out.printf("\n정수 : %d", 3300);
        System.out.printf("\n정수 : %d", 15600);


        //줄바꿈 메서드사용하기
        System.out.println("메서드를 이용 줄바꿈하기" + System.lineSeparator() + "다음줄 내용");


        //시스템 줄바꿈 메서드 사용하기
        System.out.println(130*2); //숫자 곱하기 연산
    }

}

