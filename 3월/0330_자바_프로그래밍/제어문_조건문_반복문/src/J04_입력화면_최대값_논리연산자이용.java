import java.util.Scanner;

/**
 * J03_입력화면 최대값
 */
public class J04_입력화면_최대값_논리연산자이용 {

    public static void main(String[] args) {
        
        // 자연수 3개를 입력받아서
        // 최대값(Max)을 구하시오.
        // 최소값(Min)을 구하시오.
        // 입력값과 출력(print, printf, println 사용) 하시오
        // 논리연산자 && || 사용

        // 최대값 구현 알고리즘 : 중첩조건문 활용 구현하시오
        // 최소값 구현 알고리즘 : 중첩조건문 활용 구현하시오

        Scanner sc = new Scanner(System.in);


        System.out.println("입력 자연수1");
        int num1 = sc.nextInt();

        System.out.println("입력 자연수2");
        int num2 = sc.nextInt();

        System.out.println("입력 자연수3");
        int num3 = sc.nextInt();

        int max = 0;
        int min = 0;

        // 2-1. 조건문(최대값) & 변수저장 max
        if(num1 > num2 && num1 > num3){
            
            max = num1;      
        }     
        else if(num2 > num1 && num2 > num3){
            max = num2; 
        }  
        else{
            max = num3;
        }


        // 2-2. 조건문(최소값) & 변수저장 min
        if(num1 < num2 && num1 < num3){
            
            min = num1;      
        }     
        else if(num2 < num1 && num2 < num3){
            min = num2; 
        }  
        else{
            min = num3;
        }


        // 3-1. 출력형식 : 최대값
        System.out.println("최대값은");
        System.out.printf(" 자연수 1: %d, 자연수2: %d, 자연수3: %d, 최대값: %d", num1, num2, num3, max);
        System.out.println("");



        // 3-2. 출력형식 : 최소값
        System.out.println("최소값은");
        System.out.printf(" 자연수 1: %d, 자연수2: %d, 자연수3: %d, 최소값: %d", num1, num2, num3, min);
        System.out.println("");

        sc.close();








    }
}