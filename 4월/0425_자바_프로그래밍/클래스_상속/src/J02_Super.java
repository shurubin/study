/* 
 * # 클래스 한 페이지 내에 생성
 * super
 * ****!!!중요*** 
 * 자식클래스가 부모클래스의 생성자를 호출할 때 사용하는 이름이 super()다
 * 
 * : 자식클래스를 만들면 자동으로 부모클래스의 생성자도 호출되어 사용된다.
 * # 자식클래스에서 부모생성자 호출하기
 * 자식클래스(매개변수...){
 *      super(매개값...)
 * }
 * ※ super는 매개변수 값의 개수와 타입이 일치하는 부모생성자를 호출한다.
 * # 클래스는 다중상속을 지원하지 않는다.
 * # 다중상속은 차후에 공부하는 인테페이스에서 사용가능하다.
 */

public class J02_Super {
    public static void main(String[] args) {
        
        Actor newActor = new Actor();

        // System.out.println();
        // System.out.println("============================");

        // Actor newActor2 = new Actor("극한직업");
        // newActor2.showData();

        // System.out.println();
        // System.out.println("============================");

        // Actor newActor3 = new Actor("차태현", 48, "멍뭉이");
        // newActor3.showData();

        // System.out.println("============================");




    }
}

// 사람을 주제로 설정하고 상속하고 super() 호출한다.
class Human {
    String name;
    int age;

    Human(){
        System.out.println("부모클래스 위치의 휴먼입니다");
    }

    public Human(String name){
        this.name = name;
    }

    public Human(String name, int age){
        this.name = name;
        this.age = age;
        System.out.println("부모클래스 위치 이름 : " + this.name);
        System.out.println("부모클래스 위치 나이 : " + this.age);
    }
}
class Actor extends Human {
    private String movie;

    public Actor(){
        super();  // 표기 안해도 있는 걸로 간주됨
        // super는 자식클래스가 부모클래스의 생성자를 호출할 때 사용하는 키워드 입니다.
        // 부모생성자()
        // 부모생성자(매개변수1)
        // 부모생성자(매개변수1,매개변수2)
        // 부모생성자(매개변수1,매개변수2,매개변수3...)
        // 부모클래스의 매개변수가 없는 기본생성자를 호출
        // 첫 줄에서만 사용 가능하다.
        // super()는 부모의 기본 생성자를 호출하는 코드입니다.
        // super()는 생략되어도 자동적으로 포함하고 있다.

        System.out.println("자식클래스 배우입니다.");
    }

    public Actor(String movie){
        this.movie = movie;
    }

    public Actor(String name, int age){
        super(name);      
    }
    
    public Actor(String name, int age, String movie){
        super(name, age); // 부모생성자(매개변수사용) 호출 super()
        this.movie = movie;
        System.out.println("====================================");
    }

    public void showData(){
        System.out.println("부모클래스 멤버변수 2개 자식클래스 멤버변수 1개 출력");
        System.out.println("부모클래스 사람 이름 : " +  this.name);
        System.out.println("부모클래스 사람 나이 : " +  this.age);
        System.out.println("자식클래스 배우 영화 : " +  this.movie);
    }




}