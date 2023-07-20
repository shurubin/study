import java.util.Scanner;

public class J03_약수_화면입력_메소드 {

    public static void Jung(int num){
        
        for(int i=1; i<=num; i++){
            if(num%i == 0){
                System.out.print(i + ", ");
            }
        }
    }

    public static void main(String[] args) {
        // 정수를 화면입력받아서
        // 약수를 구하시오
        // 단 리턴문 없는 메소드를 호출 실행한다.
        // 10의 약수
        // 1 2 5 10
        

        Scanner sc = new Scanner(System.in);

        int num = 0;

        System.out.print("정수를 입력하세요");
        num = sc.nextInt();

        Jung(num);






    }
}
