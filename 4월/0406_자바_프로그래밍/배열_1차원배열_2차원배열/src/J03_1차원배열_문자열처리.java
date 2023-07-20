public class J03_1차원배열_문자열처리 {
    public static void main(String[] args) {
        // 문제1)
        // 문자열 배열 선언하고 생성하기
        // 배열의 길이는 10개로 한다.
        // 데이터는 연예인

        // 1. 배열선언, 생성
        String[] star = new String[10];

        
        // 2. 배열 데이터 넣기
        star[0] = "유재석";
        star[1] = "아이유";
        star[2] = "태연";
        star[3] = "임영웅";
        star[4] = "전소민";
        star[5] = "윤아";
        star[6] = "송혜교";
        star[7] = "아이브";
        star[8] = "아이들";
        star[9] = "뉴진스";

        
        // for
        for(int i=0;i<star.length;i++){
            // System.out.println("star["+ i +"] " + star[i]);

            // 이름이 2글자 이하인 이름만 출력
            if(star[i].length()<=2){
                System.out.println("star["+ i +"] " + star[i]);
            }
        }

        System.out.println();
        System.out.println();
        System.out.println();

        // while
        int i = -1;
        while(i<star.length-1){
            i++;
            // System.out.println("star["+ i +"] " + star[i]);
            System.out.println("이름: " + star[i] +", 글자수 : "+ star[i].length());

        }

        // 문자열을 글자 단위로 출력
        String str = "fall";
        System.out.println(str + ", " + str.charAt(0));
        System.out.println(str + ", " + str.charAt(1));
        System.out.println(str + ", " + str.charAt(2));
        System.out.println(str + ", " + str.charAt(3));

        while(str.length()<4){
            
        }





    }
}
