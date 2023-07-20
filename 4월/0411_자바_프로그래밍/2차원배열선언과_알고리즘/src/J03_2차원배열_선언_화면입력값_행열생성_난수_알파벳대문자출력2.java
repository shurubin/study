import java.lang.reflect.Array;
import java.util.Scanner;

public class J03_2차원배열_선언_화면입력값_행열생성_난수_알파벳대문자출력2 {
    public static void main(String[] args) {
        // 2차원 배열 화면입력 행개수, 열개수 입력받는다.
        // 행열 값은 난수 *65~91를 이용 영문 대문자를 출력한다.
        // 배열[i][j] = (int)(Math.random()*26+65)  // 실수 0<= x < 1 사이의 실수
        // 아스키코드(ASCII CODE) A(65) B(66) ...Z(90) => 26자 * 난수 + 65
        // 아스키코드(ASCII CODE) a(97) b(98) ...z(122) => 26자 * 난수 + 97
        // 아스키코드(ASCII CODE) 0(48) 1(49) ...9(57) => 10자 * 난수 + 48
        // 영문대문자 배열값 = 난수 * 26자 + 65 ==> 65 ~ 90 A ~ Z
        // 영문소문자 배열값 = 난수 * 26자 + 65 ==> 97 ~ 122 A ~ Z
        // 출력 강제형변환 정수를 문자로 출력


        // 1. 입력설계
        int[][] arr;   
        int row = 0;
        int col = 0;
                
        Scanner sc = new Scanner(System.in);
        

    
        System.out.println("행 입력 *1~30까지");
        row = sc.nextInt();


        System.out.println("열 입력 *1~30까지");
        col = sc.nextInt();
        
        arr = new int[row][col];


        for(int i=0; i<arr.length; i++){    
            for(int j=0; j<arr[i].length; j++){
                arr[i][j] = (int)(Math.random()*26+65);                
            }           
        }
      
        

        // 2. 출력설계

        

        for(int i=0; i<arr.length; i++){    
            for(int j=0; j<arr[i].length; j++){
                
                System.out.printf("%3c", (char)arr[i][j]);              
            }
            System.out.println();
        }
        System.out.println();



    }
}

