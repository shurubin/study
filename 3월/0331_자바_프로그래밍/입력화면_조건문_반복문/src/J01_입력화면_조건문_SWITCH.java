import java.text.DecimalFormat;
import java.util.Scanner;

/**
 * J01_입력화면_조건문_SWITCH
 * 제한적인 조건문
 * 범위 조건에는 조금 부족하다 그래서 if문을 사용한다.
 */
public class J01_입력화면_조건문_SWITCH {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        // 변수 선인 및 타입 지정

        int menu = 1;
        int soo = 1;
        int price = 8000;
        int pan = price * soo;
        String menuStr = "떡볶이";

        // 주문 시 수량 입력안하면 기본은 1이다.
        // 아래의 지시사항대로 구현 하시오.

        //1-1. 입력화면 설계 메뉴선택 : 1. 떡볶이, 2. 순대, 3. 튀김
        //1-2. 입력화면 설계 수량선택 : 


        // 2-1. 가격조건표
        // 1. 떡볶이 : 8000
        // 2. 순대 : 7000
        // 3. 튀김 :6000

        // 2-2. 조건문 스위치 케이스 switch(){}
        // 2-3. 정가 * 수량 = 판매가

        System.out.println("메뉴 선택해주세요");
        menu = sc.nextInt();

        System.out.println("수량을 입력해주세요");
        soo = sc.nextInt();


        switch(menu){ //메뉴가
            case 1: // 1인 경우 (~인 경우)
            // case "떡볶이";
                price = 8000;
                pan = price * soo;
                menuStr = "떡볶이";
            break;

            case 2:
            // case "순대";
                price = 7000;
                pan = price * soo;
                menuStr = "순대";
            break;

            case 3:
            // case "튀김";
                price = 6000;
                pan = price * soo;
                menuStr = "튀김";
            break;
            


            default:

        }


        // output(출력)
        // 3. 출력설계 :  ~를 선택했습니다. 잠시만 기다리세요
        // 3-2. 출력표시형식 : 메뉴, 수량, 판매가격
        // 세자리마다 콤마형식 : 데시멀(dec) 포멧형식
        // 외부클래스를 가져오면 반드시 생성자를 생성하여 사용한다.
        // DecimalFormat은 숫자를 스트링 형태의 표시형으로 변환 => 반드시 출력은 스트링자료형
        DecimalFormat df = new DecimalFormat("#,###");  // #,##0 > 0으로 채움  #,### > 공란으로 채움 /인용부호는 반드시 스트링이니까 더블쿼트

        System.out.printf(" %d번 %s를. %d개 선택하셨습니다.", menu, menuStr, soo);
        System.out.printf("결제금액은 %d원입니다.\n", pan);
        System.out.printf("결제금액은 %s원입니다.", df.format(pan));
        System.out.println();
        System.out.println();
        System.out.println();


        System.out.println("메뉴를 입력해주세요 1. 떡볶이, 2. 순대, 3. 튀김 ");
        menu = sc.nextInt();
        System.out.println("수량을 입력해주세요");
        soo = sc.nextInt();
 

        if(menu == 1){            
            price = 8000; 
            menuStr = "떡볶이";           
        }
        else if(menu == 2){
            price = 7000;
            menuStr = "순대";            
           
        }
        else if(menu ==3 ){
            price = 6000;            
            menuStr = "튀김";
        }
        else{
            System.out.println("잘못된 선택입니다.");
        }

        pan = price * soo;
        System.out.printf("%s %d개 선택했습니다. %d원 계산해주세요", menuStr, soo, pan);

        System.out.println();
        System.out.println();
        System.out.println();
        System.out.println();


        System.out.println("메뉴 선택해주세요");
        menu = sc.nextInt();

        System.out.println("수량을 입력해주세요");
        soo = sc.nextInt();

        if( menu == 1 /* || menu == '떡볶이' */){
            price = 8000;
            pan = price * soo;
            menuStr = "떡볶이";
        }
        else if( menu == 2 /* || menu == '순대' */){
            price = 7000;
            pan = price * soo;
            menuStr = "순대";
        }
        else if( menu == 3 /* || menu == '튀김' */){
            price = 6000;
            pan = price * soo;
            menuStr = "튀김";
        }
        else{
            price = 0;
            pan = price * soo;
            System.out.println("주문한 메뉴 없습니다.");
        }

        System.out.printf(" %d번 %s를. %d개 선택하셨습니다.", menu, menuStr, soo);
        System.out.printf("결제금액은 %d원입니다.", pan);


        sc.close();
    }
}