import java.util.Scanner;

/**
 * J02_반복문_for_팩토리얼_누적
 */
public class J02_반복문_for_팩토리얼_누승 {

    public static void main(String[] args) {
        // 5 팩토리얼(!) 구하기
        // 5! = 1 * 2 * 3 * 4 * 5
        // 결과 = 120
        // 곱한 결과를 누적한다(누승)

        // 1. 입력
        int i;
        int sum = 1;  //곱하기는 반드시 초기값 1

        // 3. 처리
       for(i=1; i<=5; i++){
            sum = sum * i;
       } 
        
        // 2. 출력
        System.out.println("팩토리얼 누적 합" + sum);




        // 수업용 다르게 
        Scanner sc = new Scanner(System.in);
        System.out.println("팩토리얼 정수 입력 : ");
        i = sc.nextInt();

        
        sum = 1;
        for(i=i; i>=1; i--){
            System.out.print(i);
            if(i!=1){
                System.out.print(" x ");
            }
            else{
                System.out.print(" ");
            }
            sum*=i;
        }

        System.out.println("팩토리얼 누적 합: " + sum);




    }
}