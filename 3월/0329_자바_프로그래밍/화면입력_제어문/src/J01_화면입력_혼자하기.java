import java.util.Scanner;  //Scanner 대신 *도 가능

public class J01_화면입력_혼자하기 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        
        System.out.println("문장을 입력해보세요");
        String moonjang = sc.nextLine();
        System.out.println("입력한 문장은 : " + moonjang);

        System.out.println("단어를 입력해보세요");
        String danu = sc.next();
        System.out.println("입력한 단어는 : " + danu);

        System.out.println("정수를 입력해보세요");
        int jungsu = sc.nextInt();
        System.out.println("입력한 정수는 : " + jungsu);

        System.out.println("실수를 입력해보세요");
        double silsu = sc.nextDouble();
        System.out.println("입력한 실수는 : " + silsu);

        System.out.println("글자를 입력해보세요");
        char first = sc.next().charAt(0);
        System.out.println("입력한 첫번째 글자는 : " + first);








        sc.close();

    }
}
