import java.util.Scanner;

public class J01_2차원배열_선언_난수_열누적합 {
    public static void main(String[] args) {
        // 10 ~100미만 정수의 난수를 생성 그리고 
        // 배열 (열) 값으로 저장 그리고 누적합을 구한다.
        // 예)
        // 난수 출력 행과 열로 출력
        // 10 26 .... 누적합
        int[][] arr;
        
        // 입력값 행수 열수
        int row = 4;
        int col = 4;
        int cnt = 0;

        // 화면 입력 받기 행? 열?
        Scanner sc = new Scanner(System.in);

        System.out.println("행의 개수를 입력하세요");
        row = sc.nextInt(); 

        System.out.println("열의 개수를 입력하세요");
        col = sc.nextInt(); 


        arr = new int [row][col];  //그리고 배열 생성한다.

        // 배열이 arr[4][4] 정방형 배열 가로의 열의 개수 크기가 일정한 배열
        // 배열이 arr[4][4] 비정방형 배열 가로의 열의 개수 크기가 일정하지 않은 배열

        // int[][] arr2 = {
        //     {1, 2, 3, 4},
        //     {10, 20, 30},
        //     {100, 200, 300, 400, 500, 600}
        // };


        //열의 개수가 모두 같다 : 정방향 2차원 배열
        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length; j++){ // 배열의 열의 개수가 불규칙인 경우 반드시
                cnt++;
                arr[i][j] = cnt;                
            }
            
        }

        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length; j++){
                System.out.printf("%3d ", arr[i][j]);              
            }
            System.out.println();
            
        }








        


    }
}
