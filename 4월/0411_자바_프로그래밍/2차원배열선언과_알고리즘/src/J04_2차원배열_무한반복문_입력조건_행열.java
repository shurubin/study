import java.util.Random;
import java.util.Scanner;

public class J04_2차원배열_무한반복문_입력조건_행열 {
    public static void main(String[] args) {

        // 1. 2차원 배열 선언하기
        // 2. 행수(1~10), 열수(1~10) 입력(화면입력) 받아서 2차원 배열 생성하기
        // 3. 행수와 열수 제한조건 맞으면 다음으로 넘어가서 실행
        //    아니면 계속 행수 요구, 열수 요구


        // 알고리즘 : 무한반복문(while(true){}), 조건문 if(줄수 <1 || 줄수>10){}
        // 행수 조건문 if( 줄수<1 || 줄수>10)
        // 열수 조건문 if( 줄수<1 || 줄수>10)
        // 모두 만족하면 배열 생성한다.
        // 그리고 배열에 난수*26*65 영문 대문자 입력
        // 그리고 배열 출력 문자(char)로 출력 완료


        // 1. 입력설계
        int [][] arr;
        
        int row = 0;        
        int col = 0;
        Scanner sc = new Scanner(System.in);


        while(true){ // 행입력만

            System.out.print("행 길이를 입력하세요 *1~10까지");
            row = sc.nextInt();
            if(row<1 || row>10){
                System.out.println("범위 초과");
            }
            else{
                // 열 입력조건  
                while(true){              
                    System.out.print("열 길이를 입력하세요 *1~10까지");
                    col = sc.nextInt();                    

                    if(col<1 || col>10){
                        System.out.println("범위 초과");
                    }
                    else{
                        
                        // 행, 열 모두 정상입력 그리고 배열 생성한다.
                        
                        arr = new int [row][col];
                        // 문자입력 난수 입력저장

                        for(int i=0; i<arr.length;i++){
                            for(int j=0; j<arr[i].length;j++){
                                arr[i][j] = (int)(Math.random()*26+65);
                            }
                        }


                        // 출력
                        for(int i=0; i<arr.length; i++){
                            for(int j=0; j<arr[i].length; j++){
                                System.out.printf("%3c", (char)arr[i][j]);
                            }
                            System.out.println(); // 줄바꿈
                        }
                        System.out.println();
                        



                        break; // 열입력 조건 만족 시  소멸
                    }
                    
                }
                break; // 행입력 종료 소멸 이제 열길이 입력으로 조건이 넘어감
                

            }           

            
        }

        





        // 2. 출력설계




    }
}
