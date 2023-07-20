import java.util.Scanner;

/**
 * J03_입력화면 최대값
 */
public class J03_입력화면_최대값 {

    public static void main(String[] args) {
        
        // 자연수 3개를 입력받아서
        // 최대값(Max)을 구하시오.
        // 최소값(Min)을 구하시오.
        // 입력값과 출력(print, printf, println 사용) 하시오

        // 최대값 구현 알고리즘 : 중첩조건문 활용 구현하시오
        // 최소값 구현 알고리즘 : 중첩조건문 활용 구현하시오

        Scanner sc = new Scanner(System.in);


        System.out.println("숫자를 3개 입력하세요");

        int num1 = sc.nextInt();
        int num2 = sc.nextInt();
        int num3 = sc.nextInt();

        int go = 0;
        int ju = 0;


        
        if(num1>num2){
            if(num1>num3){
                go = num1;                
            }
            else{
                go = num3;               
            }
        }
        else{
            if(num2>num3){
                go = num2;               
            }
            else{
                go = num3;              
            }
        }

        System.out.println("최대값은 " + go + "입니다");
       
        if(num1<num2){
            if(num1<num3){
                ju = num1;                
            }
            else{
                ju = num3;                
            }
        }
        else{
            if(num2<num3){
                ju = num2;              
            }
            else{
                ju = num3;               
            }
        }
        
        System.out.println("최소값은 " + ju + "입니다");

        // System.out.println("");
        // System.out.println("");
        // System.out.println("");
        // System.out.println("");
        // System.out.println("");


        System.out.println("입력하세요 자연수1");
        int no1 = sc.nextInt();

        System.out.println("입력하세요 자연수2");
        int no2 = sc.nextInt();

        System.out.println("입력하세요 자연수3");
        int no3 = sc.nextInt();

        int max = 0;
        int min = 0;

        // 2-1. 조건문(최대값) & 변수저장 max
        if(no1 > no2){
            if(no1 > no3){
                max = no1;
            }
            else{
                max = no3;
            }
        }       
        else{
            if(no2 > no3){
                max = no2;
            }
            else{
                max = no3;
            }

        }


        // 2-2. 조건문(최소값) & 변수저장 min
        if(no1 < no2){
            if(no1 < no3){
                min = no1;
            }
            else{
                min = no3;
            }
        }       
        else{
            if(no2 < no3){
                min = no2;
            }
            else{
                min = no3;
            }

        }


        // 3-1. 출력형식 : 최대값
        System.out.println("최대값은");
        System.out.printf(" 자연수 1: %d, 자연수2: %d, 자연수3: %d, 최대값: %d", no1, no2, no3, max);
        System.out.println("");



        // 3-2. 출력형식 : 최소값
        System.out.println("최소값은");
        System.out.printf(" 자연수 1: %d, 자연수2: %d, 자연수3: %d, 최소값: %d", no1, no2, no3, min);
        System.out.println("");

        sc.close();








    }
}