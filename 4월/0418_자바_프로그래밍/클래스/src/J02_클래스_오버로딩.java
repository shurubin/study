public class J02_클래스_오버로딩 {
    public static void main(String[] args) {
        
        // 클래스와 오버로딩

        /* 하나의 클래스에 같은 이름의 메소드를 여러개 선언하는 것
        같은 이름의 메소드로 입력 매개변수 값에 따라 다른 메소드를 호출하여 사용한다

        # 오버로딩의 조건
        1. 메소드 이름이 같아야 한다.
        2. 매개변수의 개수 혹은 타입이 달라야한다.

        */

        // 클래스 생성자를 생성하여        
        // 하나의 클래스 내에 같은 이름의 메소드 오버로딩 구현
        // 선택한 와플에 따른 주문내역 나타내기

        Waffle newWaffle = new Waffle();

        // 소스가 없는 와플 주문1 : 매개변수 x
        String 주문내역 = newWaffle.name();
        System.out.println(주문내역 + "주문했습니다.");

        // 소스가 있는 와플 주문2 : 매개변수1개;
        String 주문내역2 = newWaffle.name("핫소스");
        System.out.println(주문내역2 + "주문했습니다.");

        // 소스가 있는 와플 주문3 : 매개변수2개;
        String 주문내역3 = newWaffle.name("핫소스", "아이스크림");
        System.out.println(주문내역3 + "주문했습니다.");

        // 소스가 있는 와플 주문4 : 매개변수2개;
        String 주문내역4 = newWaffle.name("핫소스", 3);
        System.out.println(주문내역4 + "주문했습니다.");


    }  //메인 메소드 영역

} // 메인 클래스




