import java.util.Scanner;

public class J05_반복문_While_입력화면 {
    public static void main(String[] args) {
        // 문제)
        // 화면에서 문자입력 받는다
        // 입력문자 문자형 변수 ch 변수 사용
        // 증감 정수형 변수는 cnt 변수 사용
        // a를 입력하면 숫자 1증가
        // b를 입력하면 숫자 1증가
        // c를 입력하면 숫자 1증가
        // x를 입력하면 숫자 1감소
        // y를 입력하면 숫자 1감소
        // z를 입력하면 숫자 1감소
        // 프로그램 종료는 e를 입력 시 강제종료
        // 프로그램 종료 시 연산결과 출력하세요

        int cnt = 0;        
        Scanner sc = new Scanner(System.in);

        while(true){
            
            System.out.println("문자를 입력하세요 a,b,c 증가  x,y,z 감소 종료는 e");
            char i = sc.next().charAt(0);
            if(i=='a' || i=='b' || i=='c'){
                cnt ++;
                System.out.println(cnt);
            }
            else if(i=='x' || i=='y' || i=='z'){
                cnt --;
                System.out.println(cnt);
            }
            else if(i=='e'){
                System.out.println("프로그램을 종료합니다.");
                break;
            }
        }

        System.out.println();
        System.out.println("연산 결과는" + cnt);
        System.out.println();













    }
}
