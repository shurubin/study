import java.util.Scanner;

public class J02_조건문_화면입력_신호등 {

    public static void main(String[] args) {
       
        Scanner sc = new Scanner(System.in);

        // 신호등 색상을 입력하여 조건문 구현
        System.out.println("신호등의 색상을 입력하세요 대소문자 구별없음(R, G, Y) ");
        char sign = sc.next().charAt(0);


        // 주의 소문자(Lower Case), 대문자(Upper Case) 구별없이 입력
        // | 바(Bar) 키보드 원 사인 위에있는 기호 파이프(|) || OR 연산 논리합  ~거나 또는 ~거나
        if( sign == 'R' || sign == 'r'){
            System.out.println("빨간불 정지 신호!");
        }
        else if( sign == 'G' || sign == 'g'){
            System.out.println("초록불 진행 신호");
        }
        else if( sign == 'Y' || sign == 'y'){
            System.out.println("노란색 주의 신호");
        }
        else{
            System.out.println("없는 신호입니다.");
        }









    }
}