import java.util.Scanner;

public class J04_반복문_시작_종료값_연산 {
    public static void main(String[] args) {

        // 입/출력 설계
        // 코딩
        // 결과 확인
        // 처리(Process)


        // 시작 정수 입력
        // 종료 정수 입력




        // 0. 변수 선언
        int s=0, e=0, sum=0;

        // 1. INPUT
        Scanner sc = new Scanner(System.in);
        System.out.println("시작값 입력: ");
        s = sc.nextInt();

        System.out.println("종료값 입력: ");
        e = sc.nextInt();

        // 문제1) 시작 ~ 종료 누적합 구하기
        // 3. process
        for(int i=s; i<=e; i++){
            sum+=i;  //sum = sum + i; 알고리즘 표현법
        }


      

        // 2. OUTPUT
        System.out.printf("시작값: %d, 종료값: %d, 누적합: %d", s, e, sum);
        System.out.println();
        System.out.println();
        System.out.println();
        System.out.println(String.format("시작값:%d, 종료값:%d, 누적합:%d", s, e, sum));


        
        // 문제2) 시작 ~ 종료 4의배수 합 구하기    
        sum = 0; // 누적변수는 반드시 초기화  
        for(int i=s; i<=e; i++){
            if(i%4==0){
                sum+=i;  //sum = sum + i; 알고리즘 표현법
            }
            
        }

        // 2. OUTPUT
        System.out.printf("시작값: %d, 종료값: %d, 누적합: %d", s, e, sum);
        System.out.println();
        System.out.println();
        System.out.println();
        System.out.println(String.format("시작값:%d, 종료값:%d, 누적합:%d", s, e, sum));


        sc.close();



    }
}
