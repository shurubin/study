import java.util.Scanner;

public class J01_화면입력 {
    public static void main(String[] args) {

        // 1. 문자열 입력을 받을 때 외부클래스인 Scanner를 임포트해서
        // 생성자를 생성하여 사용한다.
        // 문단을 입력받는다 즉 엔터까지 입력받는다. 즉 문단 파라그래프(Pharagraphe)

        Scanner sc = new Scanner(System.in);

        System.out.println("문자열을 입력하세요");
        String str = sc.nextLine();        
        System.out.println("입력된 문자는 = " + str);


        // 2. 단어 입력
        //    단어(word)는 공백전까지 입력받는다
        System.out.println("단어를 입력 : ?");
        String word = sc.next();
        System.out.println("입력된 단어는 = " + word);


        // 3. 정수 입력
        System.out.println("정수 입력 : ");
        int num = sc.nextInt();
        System.out.println("입력된 정수는 = " + num);


        // 4. 실수 입력
        System.out.println("실수 입력 : ");
        double num_d = sc.nextDouble();
        System.out.println("입력된 실수는 = " + num_d);


        // 5. 문자(1글자) 입력 : next().글자단위로(인덱스번호);  
        // next().charAt(index Number) 인덱스 번호가 첫번째 글자 0, 두번째 글자 1, 세번째 글자 2
        System.out.println("문자를 입력 : ");
        char ch0 = sc.next().charAt(0);
        System.out.println("입력된 첫번째 글자는 = " + ch0 );

        System.out.println("문자를 입력 : ");
        char ch1 = sc.next().charAt(1);
        System.out.println("입력된 두번째 글자는 = " + ch1 );
        
        System.out.println("문자를 입력 : ");
        char ch2 = sc.next().charAt(2);        
        System.out.println("입력된 세번째 글자는 = " + ch2 );



        sc.close();

        //



    }
}
