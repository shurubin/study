import java.util.Scanner;

public class J01_구구단_단화면입력_시작번호_화면입력_while문_2차원배열저장_출력 {
    public static void main(String[] args) {
        // 문제1) 2차원배열에 구구단을 저장 출력
        // 1. 화면에서 구구단 단을 입력받는다.
        // 2. 단 2 ~ 9단까지 입력제한조건
        // 3. 행수는 1~9까지 기본 실행
        // 4. 2차원 배열에 저장
        // 5. 출력실행 2 x 1 = 2
        // 예) 구구단 시작단 입력 2,
        // 예) 구구단 종료단 입력 9,
        // 2*1=2 ..... 9*9=63


        // 입력설계
        Scanner sc = new Scanner(System.in);
        int start;
        int end;

            while(true){
                System.out.print("시작단을 입력하세요");
                start = sc.nextInt();
                if(start>9){                
                    System.out.println("1~9까지 입력해주세요");                
                }
                
                else{
                    while(true){
                        System.out.print("종료단을 입력하세요");
                        end = sc.nextInt();
                    
                        if(end>9){
                            System.out.println("1~9까지 입력해주세요");
                        }                    
                        else{

                            for(int i=1;i<=start;i++){
                                for(int j=1;j<=end;j++){
                                    System.out.printf("%dx%d = %2d  ",i, j, i*j );
                                }
                                System.out.println();
                            }
                            break;
                        }
                    }
                    break;
                

                }
                
                
                
            }
        
          


        
        










        

        
        // 처리설계




        // 출력설계
     








    }
}
