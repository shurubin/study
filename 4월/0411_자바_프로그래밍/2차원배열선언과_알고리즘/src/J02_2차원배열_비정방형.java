public class J02_2차원배열_비정방형 {
    public static void main(String[] args) {
        
        // 정방형   2차원 배열 : 열의 개수가 행마다 같은 것
        // 비정방형 2차원 배열 : 열의 개수가 행마다 다른 것

        // 비정방형 선언과 생성
        int[][] arr = {
            {12, 2, 5, 12},
            {78, 22, 26, 65, 100, 130},
            {1, 12, 5, 42, 400},
            {9, 85, 39, 4, 123, 564, 324, 12, 78, 5, 90}
        };

        for(int i=0; i<arr.length; i++){ // 행(줄)=Row
            for(int j=0; j<arr[i].length; j++){ // 열(칸)=Column
                System.out.printf("%4d", arr[i][j]);
            }
            System.out.println();
        }
        System.out.println();


        // 2차원 배열 선언과 생성방식
        int[][] arr1 = new int [4][]; // 행만 명시(생성)
        // 각 행마다 열(칸)만 생성한다.
        arr1[0] = new int [4];
        arr1[1] = new int [6];
        arr1[2] = new int [5];
        arr1[3] = new int [11];

        int cnt = 0;
        
        for(int i=0; i<arr1.length; i++){
            for(int j=0; j<arr1[i].length; j++){
                cnt++;
                arr1[i][j] = cnt;                
            }
            
        }

        for(int i=0; i<arr1.length; i++){
            for(int j=0; j<arr1[i].length; j++){
                System.out.printf("%3d", arr1[i][j]);               
            }
            System.out.println();
            
        }
        System.out.println();
        System.out.println();
        System.out.println("혼자 출력하기");

        int self[][] = {
            {1, 3, 5, 7,},
            {11, 32, 5, 8, 4, 132},
            {7},
            {9, 8, 7}
        };

        for(int i=0; i<self.length; i++){
            for(int j=0; j<self[i].length; j++){
                System.out.printf("%4d", self[i][j]);
            }
            System.out.println();
        }

     



    }
}
