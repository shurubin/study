import java.util.Scanner;

public class J04_소수 {
    public static boolean Prime(int num){
        boolean bool = true;
        if(num==1){
            bool = false;
        }
        for(int i=2; i<num; i++){
            if(num%i == 0){
                bool = false;
            }
        }

        return bool;
    }

    public static void main(String[] args) {
        // 소수를 구현하시오
        // 1보다 큰 자연수
        // 1과 자신만을 약수로 가지는 수
        // 메소드 리턴값 있음
        // 리턴값은 불린으로 사용
        // true or false 소수 출력 아니면 출력 안 함

        // 입력값의 소수를 구하시오

        Scanner sc = new Scanner(System.in);
       
        System.out.print("숫자를 입력하세요");
        int num = sc.nextInt();

        for(int i=1;i<=num;i++){
            if( Prime(i) ==  true){
                System.out.print(i + " ");
            }
        }



    }
}
