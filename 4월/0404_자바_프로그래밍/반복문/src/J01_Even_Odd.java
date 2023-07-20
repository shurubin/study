import java.util.Scanner;

/**
 * J01_Even_Odd
 */
public class J01_Even_Odd {

    public static void main(String[] args) {
        // 문제1)
        // 1 ~ 100 짝수와 홀수의 합계 출력
        // 반복문은 for(){} 사용

        // 1. 입력 : 변수 자료형 지정 및 초기값
        Scanner sc = new Scanner(System.in);

        int odd = 0;
        int even = 0;
        int i = 1;
        int even_sum = 0;  // 누적합의 변수는 반드시 초기값을 지정해야한다.
        int odd_sum = 0;


        // 3. 처리 : 홀짝  1 ~ 100까지 정수를 2로 나누어 나머지가 0이면 짝수 아니면 홀수
        for(i=1; i<=100; i++ ){
            if(i%2==0){ //even
                even_sum+=i;  // even_sum = even_sum + i;
            }
            else{ //odd
                odd_sum+=i;  // odd_sum = odd_sum + i;
            }
        }

        // 2. 출력 구문
     
        System.out.println("홀수합은"+ odd_sum + "입니다.");
        System.out.println("짝수합은"+ even_sum + "입니다.");

        sc.close();

        

    }
}