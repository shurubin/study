public class J03_반복문_WHILE {
    public static void main(String[] args) {
        // 1 ~ 10까지 출력하는 반복문 
        // 1 ~ 10까지 수의 누적합 출력
        // while(){} 사용구현

        // 1. 입력설계
        int i = 0;
        int sum = 0;


        // 3. 처리
        while(i<10){
            i++;
            sum+=i;
            System.out.println( "카운트 : " + i );

        }



        // 2. 출력설계        
        System.out.println();        
        System.out.println( "누적합 : " + sum );
        System.out.println();



    }
}
