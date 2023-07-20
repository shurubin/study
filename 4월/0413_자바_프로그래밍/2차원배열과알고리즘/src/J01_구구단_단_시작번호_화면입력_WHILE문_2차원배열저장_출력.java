import java.util.Scanner;

// J01_구구단_단_시작번호_화면입력_WHILE문_2차원arr저장_출력.java
/**
 * J01_구구단_단_시작번호_화면입력_WHILE문_2차원arr저장_출력
 */
public class J01_구구단_단_시작번호_화면입력_WHILE문_2차원배열저장_출력 {

    public static void main(String[] args) {
        // 문제1] 2차원arr에 구구단을 저장 출력
        // 1. 화면에서 구구단 단을 입력 받는다 
        // 2. 단 2~9단까지 입력제한조건(시작단, 끝단)
        // 3. 행수는 1~9까지 기본 반복 수행
        // 4. 2차원 arr에 저장
        // 5. 출력 실행 2 × 1 = 2

        /////////////////////////////
        // 예시] 구구단 시작단  입력 2 
        // 예시] 구구단 종료단  입력 9 
        //       2×1= 2  ...  9×1= 7
        //         :     ...    :
        //       2×9=18       9×9=81
        /////////////////////////////

        // 입력설계 2 ~ 9 사이 입력 받는다.
        // 예시]  시작단(sDan) = 2, 종료단(eDan)=5 인 경우
        // 시작단(sDan)보다 종료단(eDan)은 커야한다.
        // 행수는 1 ~ 9 => 9줄
        // 열수는 eDan(5)-sDan(2) = 3+1
        // 2차원arr 행[9]열[종료단-시작단+1]
        // arr[9][5-2+1]
        // arr[9][4]
        // 입력설계
        int sDan=0;
        int eDan=0;
        int[][] arr;
        Scanner sc = new Scanner(System.in);


        while(true){
            // 입력값이 정상적으로 입력될 때 까지 반복 수행 while(true){}
            System.out.println("구구단 시작 정수 입력(2~9): ");
            sDan = sc.nextInt();
            if(sDan<2 || sDan>9){ // 2~9 범위 안에 숫자를 입력 안하면 오류 그때 출력문 수행
                System.out.println("입력범위는 정수 2 ~ 9 입니다. 다시 입력하세요");
            }
            else{
                while(true){//  시작단 입력완료
                    // 다음 종료단 입력
                    // 입력값이 정상적으로 입력될 때 까지 반복 수행 while(true){}
                    System.out.println("구구단 종료 정수 입력(2~9) 단, 시작 정수보다 큰 숫자 입력: ");
                    eDan = sc.nextInt();
                    if(eDan<2 || eDan>9 || sDan > eDan ){
                        System.out.println("입력범위는 정수 2 ~ 9 그리고  시작단 숫자가 종료단 숫자보다 크면 안되요 . 다시 입력하세요"); 
                    }
                    else{
                        // 디버깅
                        // 열[4] 시작단 2  종료단 5  5-2=3+1  2단, 3단, 4단, 5단 총 4칸
                        // 열[7] 시작단 2  종료단 8  8-2=6+1  2단, 3단, 4단, 5단, 6단, 7단, 8단  총 7칸
                        // 시작단, 종료단 정상입력완료 배열 생성 new int[9][eDan-sDan+1]
                        arr = new int[9][eDan-sDan+1];  // 배열[9][4] 생성완료

                        System.out.println("배열크기 행 " + arr.length);
                        System.out.println("배열크기 열 " + arr[0].length);

                        // 구구단 저장, 출력
                        for(int i=1; i<=9; i++){ // 행 반복
                            int col=-1;
                            for(int j=sDan; j<=eDan; j++){ // 열 반복 0 1 2 3  
                                col++;  // 0 1 2 3 
                                // arr[i-1][col] = j*i;  // arr[0][0] =  2   arr[0][1] =  3  arr[0][2] = 4 arr[0][3] = 5
                                // :
                                arr[i-1][col] = j*i;  // arr[8][0] = 18   arr[8][1] = 27  arr[8][2] = 36 arr[8][3] = 45
                                System.out.printf("%d*%d=%2d  ", j, i, j*i);  // 2*1= 2  3*1= 3  4*1= 4  5*1= 5
                            }
                            System.out.println();
                        }

                        // 배열에 저장된 내용 출력
                        System.out.println();
                        System.out.println("구구단 계산 결과 값 ");
                        System.out.println("arr[][] 행 " + arr.length);
                        System.out.println("arr[][] 열 " + arr[0].length);
                        System.out.println();
                        for(int i=0; i<arr.length; i++){
                            for(int j=0; j<arr[i].length; j++){
                                System.out.printf("%2d ", arr[i][j]);
                            }
                            System.out.println();
                        }


                        break;                        
                    }
                }
                break;
            }
        }

        
        // // 처리설계
        // System.out.println();
        // for(int i=1;i<=arr.length;i++){
        //     int col=-1; //칸
        //     for(int j=2;j<=5;j++){
        //         col++;
        //         arr[i-1][col] = j*i;

        //         //arr[0][0] = 2*1;  arr[0][1] = 3*1; arr[0][2] = 4*1; arr[0][3] = 5*1; 
        //         //arr[1][0] = 2*2;  arr[1][1] = 3*2; arr[1][2] = 4*2; arr[1][3] = 5*2; 
        //         //:
        //         //arr[9][0] = 2*9;  arr[9][1] = 3*9; arr[9][2] = 4*9; arr[9][3] = 5*9; 
        //     }
        //     System.out.println();
        // }

        // // 출력설계
        // // 예시] arr[9][4]
        // System.out.println();
        // for(int i=1;i<=arr.length;i++){
        //     for(int j=2;j<=5;j++){
        //         System.out.printf("%d×%d=%2d  ", j,i, j*i );  // 2*1= 2  3*1= 3   4*1= 4  5*1= 5      
        //         //System.out.printf("%d×%d=%2d  ", j,i, j*i );  // 2*2= 2  3*2= 6   4*2= 8  5*2=10      
        //         //System.out.printf("%d×%d=%2d  ", j,i, j*i );  // 2*3= 6  3*3= 9   4*3=12  5*3=15      
        //     }
        //     System.out.println();
        // }







    }
}