import java.util.Scanner;

public class J01_사칙연산_메소드 {

    public static int addMethod(int num1, int num2){
        return num1 + num2;
    }

    public static int subMethod(int num1, int num2){
        return num1 - num2;
    }

    public static int mulMethod(int num1, int num2){
        return num1 * num2;
    }

    public static float divMethod(int num1, int num2){
        return num1 / num2;
    }


    public static void main(String[] args) {
        // 프로젝트 : 사칙연산 메소드 구현 => 1.덧셈, 2.뺄셈, 3.곱셈 4.나눗셈
        // 입력화면에서 : 1번 선택하면 덧셈 메소드로 이동 연산결과를 리턴값으로 받는다
        // 선택은 switch(){} 
        // 메소드 이름은
        // 1.덧셈   : addMethod
        // 2.뺄셈   : subMethod
        // 3.곱셈   : mulMethod
        // 4.나눗셈 : divMethod
        // 모든 메소드는 리턴값이 있는 메소드로 제작한다.
        // 연산 매개변수는 2개로 한다. num1, num2
        // 연산결과는 println(); 출력

        // [예시]
        // 입력설계: 
        // 정수1 입력 : 5
        // 정수2 입력 : 10
        

        int four = 0;

        Scanner sc = new Scanner(System.in);
        System.out.print("사칙연산 입력해주세요 1+ 2- 3* 4/");
        four = sc.nextInt();
        System.out.print("num1을 입력해주세요");
        int num1 = sc.nextInt();
        System.out.print("num2를 입력해주세요");
        int num2 = sc.nextInt();

        switch (four) {
            case 1:
                System.out.println(addMethod(num1, num2));                
                break;
            case 2:
                System.out.println(subMethod(num1, num2));                
                break;
            case 3:
                System.out.println(mulMethod(num1, num2));           
                break;
            case 4:
                System.out.println(divMethod(num1, num2));                
                break;
        
            default:
                System.out.println("1부터 4만 입력해주세요.");
                break;
        }




    }
}
