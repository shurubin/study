import java.util.Scanner;

public class J05_입력화면_조건문_할인율 {
    public static void main(String[] args) {
        // 문제)
        // 정가를 입력받아서
        // 할인율 정하기
        // 판매가를 구하시오

        // 조건표
        // 정가 500,000 이상 할인율 20%
        // 정가 100,000 이상 할인율 10%
        // 정가  50,000 이상 할인율 5%
        // 정가  10,000 이상 할인율 1%

        Scanner sc = new Scanner(System.in);


        // 1. input 설계

        double rate = 0.0;

        System.out.println("물품가격을 입력하세요");

        long price = sc.nextLong();


        // 2. PROCESS 처리
        if(price >= 500000){
            rate = 0.2;
        }
        else if(price < 500000 && price >=100000){
            rate = 0.1;
        }
        else if(price < 100000 || price >=50000){
            rate = 0.05;
        }
        else if(price < 50000 || price >=10000){
            rate = 0.01;
        }
        else {
            rate = 0.0;
        }


        // 3. OUTPUT 설계
        System.out.println();
        System.out.printf("정가는 [%d] 입니다", price);
        System.out.printf("할인율은 [%f]입니다", rate);
        System.out.printf("판매가 [%d] 입니다", (long)(price*(1-rate)));




        sc.close();






    }
}
