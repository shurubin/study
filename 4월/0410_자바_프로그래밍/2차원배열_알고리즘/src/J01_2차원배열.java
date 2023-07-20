public class J01_2차원배열 {
    public static void main(String[] args) {

        // 1. 1차원배열 3개 생성
        int[] num1 = {5, 10, 15, 20, 25};
        int[] num2 = {10, 20, 30, 40, 50};
        int[] num3 = {20, 40, 60, 80, 100};


        // 2. 2차원 배열 생성하기
        int [][] arr1 = {
            {5, 10, 15, 20, 25, 40, 50},
            {10, 20, 30},
            {20, 40, 60, 80, 100}
        };

        // 3. 배열의 길이(행개수)
      
        System.out.println("arr1 행개수 : " + arr1.length);
        System.out.println();
                  
        
        // 4. 배열의 길이(열개수)
        System.out.println("arr1[0] 열개수 : " + arr1[0].length);
        System.out.println("arr1[1] 열개수 : " + arr1[1].length);
        System.out.println("arr1[2] 열개수 : " + arr1[2].length);   
        System.out.println();


        // 5. 2차원 배열출력
        for(int i=0; i<arr1.length; i++){
            for(int j=0; j<arr1[i].length; j++){
                System.out.print(arr1[i][j] + "\t");
            }
            System.out.println();
        }
        System.out.println();

        // 행과 열의 상태를 볼 수 있음
        for(int i=0; i<arr1.length; i++){
            for(int j=0; j<arr1[i].length; j++){
                System.out.print( j + "\t");
            }
            System.out.println();
        }
        System.out.println();


        // 6. 1차원배열 2차원 배열로 병합하기
        int[][] arr2 = {num1, num2, num3};
        
        System.out.println("arr2 행개수 : " + arr2.length);

        System.out.println("arr2[0] 열개수 : " + arr2[0].length);
        System.out.println("arr2[1] 열개수 : " + arr2[1].length);
        System.out.println("arr2[2] 열개수 : " + arr2[2].length);   
        System.out.println();

        for(int i=0; i<arr2.length; i++){
            for(int j=0; j<arr2[i].length; j++){
                System.out.print(arr2[i][j] + "\t");
            }
            System.out.println();
        }



    }
}
