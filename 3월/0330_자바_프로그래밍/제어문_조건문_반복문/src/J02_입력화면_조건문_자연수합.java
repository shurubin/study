import java.util.Scanner;

public class J02_입력화면_조건문_자연수합 {
    public static void main(String[] args) {
        // 문제2)
        // 자연수 2개 입력값 받아서
        // 합과
        // num1 - num2 = 차를 구하시오

        Scanner sc = new Scanner(System.in);


        System.out.println("숫자를 입력하세요");
        int pr1 = sc.nextInt();
        System.out.println("다음 숫자를 입력하세요");
        int pr2 = sc.nextInt();

        System.out.println("나이 합은 " + (pr1 + pr2) + "입니다.");
        System.out.println("나이 차는 " + (pr1 - pr2) + "입니다.");

        // 2-2. 두 수의 합


        System.out.println("숫자를 입력하세요");
        int num1 = sc.nextInt();
        System.out.println("다음 숫자를 입력하세요");
        int num2 = sc.nextInt();

        System.out.printf("두 자연수의 합은 %d + %d = %d\n", num1, num2, num1+num2);
        System.out.println();

        if(num1 > num2){
            System.out.printf("두 자연수의 차는 %d = %d = %d\n", num1, num2, num1-num2);
            System.out.println();
        }
        else {
            System.out.printf("두 자연수의 차는 %d - %d = %d\n", num2, num1, num2-num1);
            System.out.println();
        }

        





    }
}
