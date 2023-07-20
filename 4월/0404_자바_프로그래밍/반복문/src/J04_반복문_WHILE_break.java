import java.util.Scanner;

public class J04_반복문_WHILE_break {
    public static void main(String[] args) {
        // 무한반복문 while문
        // 화면에서 정수입력받아서
        // 숫자만큼 *기호를 반복출력한다.
        // 그리고 프로그램 종료는 0(Zero)을 입력받으면 종료한다.
        // 무한반복은 값이 true면 계속
        // 중간탈출 break문 사용



        while(true){
            Scanner sc = new Scanner(System.in);
            System.out.println("숫자를 입력하세요!");
            int num = sc.nextInt();
            for(int i=1; i<=num; i++){
                System.out.print("*");
            }
            System.out.println();
            // 프로그램 종료는 0을 입력받는다
            // break 문으로 탈출(강제종료)
            if(num==0){
                System.out.println("프로그램을 종료합니다.");
                break;
            }




        }





    }
}
