public class J02_합계 {
    public static void main(String[] args) {
        
        
        int[][] arr = {
            {12, 2, 5, 12},
            {78, 22, 26, 65, 100, 130},
            {1, 12, 5, 42, 400},
            {9, 85, 39, 4, 123, 564, 324, 12, 78, 5, 90}
        };
        int[] sum = new int[arr.length];       



        for(int i=0; i<arr.length; i++){ // 행(줄)=Row
            sum[i]=0;
            for(int j=0; j<arr[i].length; j++){ // 열(칸)=Column
                sum[i] += arr[i][j];
                System.out.printf("%4d", arr[i][j]);
                
                               
            }
            System.out.printf("      " + i +"행 합" + sum[i]);
            System.out.println();

        }
        System.out.println();


    }
}
