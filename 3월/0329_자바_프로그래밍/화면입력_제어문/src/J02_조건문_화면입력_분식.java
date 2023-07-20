import java.util.Scanner;;

public class J02_조건문_화면입력_분식 {

    public static void main(String[] args) {
        // 1. 화면입력 Scanner 클래스 가져오기
        // 2. 생성자 sc 생성한다.
        // 3. 간식메뉴를 만든다. 1. 메뉴 2. 메뉴2 3. 메뉴3
        // 4. 조건문 구분을 만든다
        // 5. 간식메뉴번호를 입력받아 선택한다
        // 6. 해당하는 조건문 구현한다.

        Scanner sc = new Scanner(System.in);

        // 메뉴선택
        System.out.println("간식메뉴 번호 선택 : ? ");
        System.out.println("1. 떡볶이 2. 순대 3. 튀김 ");

        // 화면입력
        int menu = sc.nextInt();

        // 조건문 : if(){} else if(){} else{}
        if( menu == 1){ //메뉴1 떡볶이
            System.out.println("떡볶이를 선택했습니다. 잠시 기다리세요");
        }
        else if( menu == 2){
            System.out.println("순대를 선택했습니다. 잠시 기다리세요");
        }
        else if(menu == 3){
            System.out.println("튀김을 선택했습니다. 잠시 기다리세요");
        }
        else{
            System.out.println("없는 메뉴입니다.");
        }










    }
}