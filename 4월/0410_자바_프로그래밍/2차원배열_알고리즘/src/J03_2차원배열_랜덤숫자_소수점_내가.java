public class J03_2차원배열_랜덤숫자_소수점_내가 {
    public static void main(String[] args) {
        // 임의숫자(random number)를 증가시켜서 정수로 저장
        // Math.random() => 0보다 크고 1보다 작은 임의의 실수가 출력
        // arr[i][j] = (int)(Math.random() * 10 + 1);
        // 5행 5열

        // 1. 입력설계
        double arr[][] = new double [5][5];
        int cnt = 0;


        // 3. 처리설계 : arr[i][j] = (int)(Math.random() * 10 + 1);
        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length; j++){
                arr[i][j] = (double)(Math.random() * 10 + 1);    
                          
            }
        }

        // 2. 출력설계 : 소수점 2자리 오른쪽 정렬(첫 칸은 공백 없음 .도 1칸취급)
        System.out.println("오른쪽 정렬 %숫자d");
        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length; j++){
                if(j==0){
                    System.out.printf("%5.2f" , arr[i][j]);  
                }
                else{
                    System.out.printf("%6.2f" , arr[i][j]);  
                }
                                   
            }
            System.out.println(); 
        }


        
        








    }
}
