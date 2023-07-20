public class J02_문자타입_배열처리 {
    public static void main(String[] args) {
        // 문제1) 1문자(char)타입 배열 6개 생성하기
        // 타입지정 배열이름  = new 키워드 타입지정[배열길이지정]

        // 입력설계
        char[] ch = new char[6];
        ch[0]='L';
        ch[1]='O';
        ch[2]='V';
        ch[3]='E';
        ch[4]='I';
        ch[5]='S';



        // 출력
        // 배열값 모두 줄바꿈 없이 한 줄로 출력하시오
        // 반복문 for
        for(int i=0;i<ch.length;i++){

            if(i==4){
                System.out.print(" "); // 4 I앞에서 공간벌림
            }

            System.out.print(ch[i]);

            if(i==3){
                System.out.print(" "); // 3 E뒤에서 공간벌림
            }

        }
        System.out.println();
        System.out.println();

        
        // 반복문 while
        int i = -1;
        while(i < ch.length-1){
            i++;
            if(i==4){
                System.out.print(" ");
            }
            System.out.print(ch[i]);
        }






    }
}
