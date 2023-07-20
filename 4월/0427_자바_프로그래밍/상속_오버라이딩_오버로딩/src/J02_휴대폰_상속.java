/* 
 * 부모클래스: Phone
 * 필드: 이름(name), 통신사(telecom), 가격(price)
 * 
 * setData()
 * showData()
 * 
 * 자식클래스1: Phone1
 * 필드: 서비스시간(time)
 * showPhone1()
 * 
 * 자식클래스2: Phone2
 * 필드: 서비스시간(time)
 * showPhone2()
 * 
 */

public class J02_휴대폰_상속 {
    public static void main(String[] args) {
        
        Phone ph = new Phone();
        ph.setData("휴대폰", "통신사", 10000);
        ph.showData();
        System.out.println();

        Phone1 ph1 = new Phone1();
        ph1.setData("아이폰", "KT", 1000000, 100);
        ph1.showData();
        System.out.println();

        Phone2 ph2 = new Phone2();
        ph2.setData("갤럭시", "SKT", 500000, 120);
        ph2.showData();
        System.out.println();


    }
}

class Phone{
    String name;
    String telecom;
    int price;

    public void setData(String name, String telecom, int price){
        this.name = name;
        this.telecom = telecom;
        this.price = price;
    }
    public void showData(){        
        System.out.println("이름 : " + name);
        System.out.println("통신사 : " + telecom);
        System.out.println("가격 : " + price);
    }
}

class Phone1 extends Phone{
    int time;

    public void setData(String name, String telecom, int price, int time){
        setData(name, telecom, price);
        this.time = time;
    }

    public void showData(){
        System.out.println("자식클래스 Phone1");
        super.showData();
        System.out.println("서비스시간 : " + time);
    }


}

class Phone2 extends Phone{
    int time;

    public void setData(String name, String telecom, int price, int time){
        setData(name, telecom, price);
        this.time = time;
    }

    public void showData(){
        System.out.println("자식클래스 Phone2");
        super.showData();
        System.out.println("서비스시간 : " + time);
    }


}