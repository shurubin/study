/**
 * J01_빌딩_호텔_상속
 * 문제1)
 * 주어진 빌딩 클래스를 상속하여
 * 다음 클래스들을 구현하고 객체를 실행해보자
 * 필드값은 매소드로 초기화하고,
 * 자식클래스의 setData() 메소드는 부모클래스의 메소드를 오버로딩하여 구현
 * 
 * 1. 부모클래스 : Building
 *      - 필드 : 이름, 가격
 * 
 * 2. 자식클래스 : Hotel
 *      -필드 : 호텔 이름, 숙박가격, vip룸 수
 * 
 * 3. 자식클래스 : Apart
 *      -필드 : 아파트 이름, 가격, 층수
 * 
 *  예)
 *  이름: 신라호텔
 *  가격: 100
 *  vip 룸 수: 20
 * 
 *  이름: 자이
 *  가격: 20
 *  층수: 40
 * 
 * 
 * 
 *       
 */
public class J01_빌딩_호텔_상속 {

    public static void main(String[] args) {

        System.out.println("빌딩");
        Building b = new Building();
        b.setData("엠파이어빌딩", 5000);
        b.showData();
        System.out.println();
       
        
        Hotel h = new Hotel();
        h.setData("신라호텔", 100, 20);
        h.showHotel();
        System.out.println();

        
        Apart a = new Apart();
        a.setData("자이", 20, 40);
        a.showApart();


        
    }
}



// 슈퍼클래스(부모클래스)
class Building{
    String name;
    int price;

    public void setData(String name, int price){
        this.name = name;
        this.price = price;
    }

    public void showData(){
        System.out.println("이름 " + name);
        System.out.println("가격 " + price);
    }

}

// 서브클래스(자식클래스1)
class Hotel extends Building{
    int vip_room;

    // 메소드1 : 오버라이딩
    public void setData(String name, int price, int vip_room){
        super.setData(name, price);
        this.vip_room = vip_room;
    }

    // 메소드2 : 출력
    public void showHotel(){
        //부모메소드 실행
        System.out.println("자식클래스 호텔");
        super.showData();
        System.out.println("vip룸 수" + vip_room);        

    }


}

// 서브클래스(자식클래스2)
class Apart extends Building{
    int floor;

    // 메소드1 : 오버라이딩
    public void setData(String name, int price, int floor){
        super.setData(name, price);
        this.floor = floor;        
    }

    // 메소드2 : 출력
    public void showApart(){
        //부모메소드 실행
        System.out.println("자식클래스 아파트");
        super.showData();
        System.out.println("층 수" + floor);
    }




}