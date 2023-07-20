import java.util.Scanner;

public class J01_구구단따라하기 {
    public static void main(String[] args) {

        int sDan=0;
        int eDan=0;
        int[][] arr;
        Scanner sc = new Scanner(System.in);


        while(true){        

            // 입력값이 정상적으로 입력될 때까지 반복수행 while(true){}
            System.out.println("구구단 시작 정수 입력(2~9): ");
            sDan = sc.nextInt();
            if(sDan<2 || sDan>9){ // 2~9 사이의 숫자를 입력 안하면 오류 그 때 출력문 수행
                System.out.println("2~9 사이의 값으로 다시 입력하세요.");
            }
            else{
                while(true){            
                    // 시작단 입력완료
                    // 다음 종료단입력을 받음

                    // 입력값이 정상적으로 입력될 때까지 반복수행 while(true){}
                    System.out.println("구구단 종료 정수 입력(2~9) 단, 시작정수보다 큰 숫자입력: ");
                    eDan = sc.nextInt();
                    if(eDan<2 || eDan>9 || sDan > eDan){
                        System.out.println("2~9사이의 수 중 시작단보다 작은 수를 넣어주세요.");
                    }
                    else{
                        // 열[4] 시작단 2 종료단 5   > 2, 3, 4, 5 총 4칸
                        // 시작단, 종료단 정상입력완료 배열 생성 new int[9][eDan-sDan+1]
                        arr = new int[9][eDan-sDan+1];

                        System.out.println("배열크기 행 " + arr.length);
                        System.out.println("배열크기 열 " + arr[0].length);

                        // 구구단 저장, 출력
                        for(int i= 1; i<=9; i++){ // 행 반복
                            int col = -1;
                            for(int j=sDan; j<=eDan; j++){ // 열 반복
                                col++;
                                arr[i-1][col] = j*i;
                                System.out.printf("%d*%d=%2d  ",j,i, j*i);
                            }
                            System.out.println();

                        }

                        // 배열에 저장된 내용 출력
                        System.out.println();
                        System.out.println("arr행" + arr.length);
                        System.out.println("arr열" + arr[0].length);
                        for(int i=0; i<arr.length; i++){
                            for(int j=0; j<arr[i].length;j++){
                                System.out.printf("%2d", arr[i][j]);
                            }
                            System.out.println();
                        }

                        break;



                    }

                }

                break;
            }

        }

        
        // System.out.println();
        // for(int i=1;i<=arr.length;i++){
        //     int col=-1;
        //     for(int j=2; j<=5; j++){
        //         col++;
        //         arr[i-1][col] = j*i;
        //     }
        // }




        // // 출력설계
        // System.out.println();
        // for(int i=1; i<=arr.length; i++){
        //     for(int j=2; j<=5; j++){
        //         System.out.printf("%dx%d=%2d  ", j,i, j*i);
        //     }
        //     System.out.println();
        // }












    }
}
