public class J04_1차원배열_문자열처리_글자단위처리 {
    public static void main(String[] args) {
  
        // 문자열을 글자 단위로 출력
        String str = "fall";
        System.out.println(str + ", " + str.charAt(0));
        System.out.println(str + ", " + str.charAt(1));
        System.out.println(str + ", " + str.charAt(2));
        System.out.println(str + ", " + str.charAt(3));

        System.out.println();
        System.out.println();
        System.out.println();
        
        for(int i=0; i<str.length(); i++){
            System.out.println(str + ", " + str.toUpperCase().charAt(i));
            System.out.println(str + ", " + str.toLowerCase().charAt(i));
        }

        System.out.println();
        System.out.println();
        System.out.println();


        int i = -1;
        while(i < str.length()-1){
            i++;
            System.out.println(str + ", " + str.charAt(i));
        }


        // summer 문자열을 문자배열 생성하여 저장
        // 출력은 문자배열만 출력

        String su = "summer";     

        // for
        for(i=0; i<su.length();i++){
            System.out.println("for문 " + su.charAt(i));
        }

        System.out.println();
        System.out.println();
        System.out.println();

        // while
        i = -1;
        while(i<su.length()-1){
            i++;
            System.out.println("while문 " + su.charAt(i));
        }


        
        char[] c = new char[su.length()];
        // char[] c = new char[6];  위와 동일한 결과

        for(i=0; i<su.length();i++){
            c[i] = su.charAt(i);
        }
        
        i = -1;
        while(i<c.length-1){
            i++;
            System.out.println("c["+ i +"]" + c[i]);
        }

    }
}
