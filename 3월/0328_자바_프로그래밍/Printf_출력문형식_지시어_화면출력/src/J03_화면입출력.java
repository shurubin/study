/* 
 * 스캐너 클래스 가져와서 사용하기
 * 클래스 사용 시 반드시 생성자를 생성하고 사용한다.
 */
// import java.util.Scanner; //유틸 패키지(폴더) 들어있는 Scanner. 클래스만 가져와서 사용한다.
import java.util.*;  // 유틸 패키지(폴더) 들어있는 모든 클래스를 가져와서 사용한다.

public class J03_화면입출력 {
    public static void main(String[] args) {

        // 생성자 생성 : 화면입력
        Scanner sc = new Scanner(System.in);
        
        // 1. 문자를 입력해주세요 (한줄) 엔터 라인단위
        System.out.println("문자열을 입력하세요");

        // 2. 화면입력 :sc.nextLine(); 문자열 입력을 하는 코딩
        String str = sc.nextLine(); // 화면에서 입력받는 문자열 => str 변수에 대입

        // 3. 입력받은 str 변수 문자열 출력
        System.out.printf("str = %s \n", str);
        System.out.println();


        // 문자열 입력받기(한 단어) : 공백 전까지 입력받음
        // newScanner.next(); 문자열 입력을 단어 단위로 입력 받는다.
        System.out.println("문자열 단어를 입력하세요");
        String word = sc.next();
        System.out.printf("word = %s\n", word);
        System.out.println();


    }
}
