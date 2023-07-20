/**
 * 
 * Binary(이진파일) : J01_상속_오버라이딩_어네테이션.class => 톰캣 => webapp => root => web inf => class =>
 * 
 * J01_상속_@오버라이딩_어너테이션
 * # 오버라이딩(Overriding)
 * @어너테이션 : 메소드 바로 윗줄에 어네테이션 표기 @사용
 * 부모클래스에서 상속받은 같은 이름의 메소드를 변경(재정의)하는 것
 * 메소드 덮어쓰기(오버라이트 overwrite 수정상태)
 * 
 * - 부모클래스의 메소드와 이름, 매개변수, 리턴타입이 같아야한다
 * - 부모클래스의 메소드보다 접근제어자의 범위가 좁아질 수 없다.
 * 
 * # 오버로딩과 오버라이딩
 *  오버로딩(Overloading): 이름은 같고 매개변수가 다른 새로운 메소드를 정의한다.
 *  오버라이딩(Overriding): 상속받은 같은 이름의 메소드를 변경(재정의)한다.
 */
public class J01_상속_오버라이딩_어너테이션 {

    public static void main(String[] args) {
        
        // 부모클래스 Musicion 객체
        Musicion mus = new Musicion();
        mus.showJob();  
        mus.work();
        System.out.println("==========================================");

        // 자식클래스 Pianist 객체
        Pianist pia = new Pianist();
        pia.showJob();  //오버라이딩 메소드 호출
        pia.showJob("영웅"); // 오버로딩 메소드 호출
        System.out.println();


        // showJob_super() => 부모클래스 덮어쓰기된 super.메소드 호출
        // super.showJob()
        pia.showJob_super();
        pia.work();

        System.out.println("=========================================");
        System.out.println();

        // 자식 클래스 Singer 객체
        Singer sig = new Singer();
        sig.showJob();
        sig.work();
        sig.showJob("eleven");



    }
}

// 부모클래스
class Musicion {
    public void showJob(){
        System.out.println("부모클래스 위치 직업은 뮤지션");
    }
    void work(){ // 기본(default) 접근제한자
        System.out.println("부모클래스 위치 무대에서 공연합니다.");
    }
}

// 자식클래스
class Pianist extends Musicion{
    public void showJob(){
        System.out.println("자식클래스 위치 직업은 피아니스트");
    }
    public void showJob(String gok){
        System.out.println("자식클래스 위치 연주곡은 " + gok + "입니다");
    }
    // 부모클래스의 같은 이름의 메소드 호출 실행
    public void showJob_super(){
        super.showJob();    // 덮어쓰기된 부모 메소드 사용
    }

    // 부모클래스의 메소드 중 work() 메소드를
    // 오버라이딩 메소드로 재정의하시오.
    // 같은 패키지 내에서 사용하도록 재정의하시오
    
    // private void work(){}
    // 에러발생 : 오버라이딩할 메소드 접근제한자 범위는 좁아질 수 없다

    protected void work(){
        System.out.println("자식클래스 내용으로 오버라이딩 피아노연주");
    }



}


class Singer extends Musicion{

    // 상속받은 멤버 중 메소드가 같은 이름을 만들어서 실행
    @Override 
    public void showJob(){
        
        super.showJob(); // 부모클래스의 메소드를 호출하여 그대로 실행한다.
    }

    // 오버로딩 메서드 :  위에 있는 showJob()과 다른 매개변수를 가지는 새로운 메소드를 정의해서 사용한다
    public void showJob(String song){
        
        System.out.println("저의 1집 타이틀 곡은 " +song+"입니다");
    }

    // 부모클래스에 존재하는 메소드이다
    // 그러므로 상위메소드와 같은 이름 같은 매개변수다. 그것을 오버라이딩이라한다.
    @Override
    public void work(){
        super.work();   // 부모클래스의 메소드 실행하고 아래내용도 추가로 실행한다.
        System.out.println("오버라이딩한 메소드 내용 호출 실행해 보았습니다.");
    }


    
}