import java.util.Scanner;

/**
 * J01_입력화면_조건문
 */
public class J01_입력화면_조건문_홀짝검사 {

    public static void main(String[] args) {
        // 자연수 입력 받아서
        // 짝수(Even)인지 홀수(Odd)인지 판단 조건문
        // mode 나머지   mode 최빈수
        // 1. 입력 : 자연수
        // 2. 조건 : 짝수, 홀수 판단
        // 3. 출력 : 입력된 숫자와 "짝수입니다" || "홀수입니다."

        Scanner sc = new Scanner(System.in);


        // 1. 입력 메시지 & 입력화면
        System.out.println("숫자를 입력해주세요");
        int nat = sc.nextInt();
       
        // 2. 조건: num 변수를 2로 나누어서 나머지가 0이면 짝수, 아니면 홀수
        if( (nat % 2) == 0){
            System.out.printf("짝수입니다.");
        }
        else{
            System.out.println("홀수입니다.");
        }


        // 1. 입력 메시지 & 입력화면
        System.out.println("숫자를 입력해주세요");
        int num = sc.nextInt();
        
        // 2. 조건: num 변수를 2로 나누어서 나머지가 0이면 짝수, 아니면 홀수
        System.out.printf("입력값 : [%d]은 ", num);
        if( (num % 2) == 0){            
            System.out.println("짝수입니다.");
        }
        else{           
            System.out.println("홀수입니다.");
        }


        sc.close();
     











    }
}