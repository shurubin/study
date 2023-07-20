import java.util.Scanner;

/* 
 * 예외처리
 * 화면입력 숫자 연산 오류처리
 */

public class J02_예외처리_화면입력 {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        while(true){
            try{
                System.out.println("첫번째 정수를 입력!");
                int num1 = sc.nextInt();

                System.out.println("두번째 정수를 입력!");
                int num2 = sc.nextInt();

                if(num2==0){
                    Exception e = new Exception("예외처리 => 0으로 나눌 수 없습니다.");
                    throw e; // 예외를 발생시킨다.
                }

                System.out.println( num1 + "/" + num2 + "=" + (num1/num2) );


            }
            catch(Exception e){
                // System.out.println("오류" + e);
                System.out.println("오류" + e.getMessage()); // e.가져올 오류메시지
                
            }
        }

    }
}
