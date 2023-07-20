public class J02_2차원배열값증가와출력 {
    public static void main(String[] args) {
        // 2차원 배열 생성과 값 증가 출력
        // 문제 1) 
        // 1. 2차원 5행 5열 배열 생성
        // 2. 2차원 배열에 행열에 값을 1씩 증가시켜 출력하세요
        // 3. 증가변수는 정수형 cnt
        

        // 1 입력설계
        int cnt = 0;
        int arr1 [][] = new int[5][5];


        // 3 처리문 행, 열 반복 시 cnt 증가
       
        for(int i=0; i<arr1.length; i++){
            for(int j=0; j<arr1[i].length; j++){
                
                arr1[i][j]= ++cnt;     // ++cnt = 전위연산(먼저 증가), cnt++ = 후위연산(값을 넣어준 후 증가)               
            }
           
        }



        // 2-1. 출력설계 cnt 숫자 우측정렬 출력 오름차순

        for(int i=0; i<arr1.length; i++){
            for(int j=0; j<arr1[i].length; j++){                
                System.out.printf("%2d ", arr1[i][j]);    
            }
            System.out.println();
           
        }

        System.out.println();
        System.out.println();
      
       
        // 2-2. 출력설계 cnt 숫자 우측정렬 출력 내림차순
        // [4][4] [4][3] [4][2] [4][1] [4][0]
        // 34 33 32 31 30
        // 24 23 22 21 20
        // 14 13 12 11 10
        // 04 03 02 01 00

        for(int i=arr1.length-1; i>=0; i--){ //4 3 2 1 0
            for(int j=arr1[i].length-1; j>=0; j--){ //4 3 2 1 0           
                System.out.printf("%2d ", arr1[i][j]);    
            }
            System.out.println();
           
        }


    }
}
