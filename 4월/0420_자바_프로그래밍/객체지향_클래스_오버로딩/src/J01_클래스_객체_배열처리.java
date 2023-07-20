public class J01_클래스_객체_배열처리 {
    public static void main(String[] args) {

        // name         telecom     service
        // 폰기종       통신사      서비스시간
        // 객체배열[]
        // 매개변수 3개를 생성하고 처리하시오
        // 아이폰       LG          120
        // 갤럭시       KT          80
        // 모토로라     SKT         100

        // 1. 생성자 생성 일반변수 개별 사용
        // 클래스 이름 생성자이름 = new 클래스이름();

        // 2. 생성자 생성 배열변수[] 사용
        // 클래스이름[] 생성자이름 = new 클래스이름[3];
        Phone[] newPhone = new Phone[3];
        newPhone[0] = new Phone("아이폰", "LG", 120);
        newPhone[1] = new Phone("갤럭시", "KT", 80);
        newPhone[2] = new Phone("모토로라", "SKT", 100);

        for(int i=0; i<newPhone.length; i++){
            System.out.print("폰" + (i+1) + " : ");
            newPhone[i].show();
        }

        System.out.println();
        ///매개변수 2개///////////////////////////////////

        Phone[] newPhone2 = new Phone[2];
        newPhone2[0] = new Phone("연아폰", "LG", 180);
        newPhone2[1] = new Phone("가로본능", "SKT", 80);        

        for(int i=0; i<newPhone2.length; i++){
            System.out.print("폰" + (i+1) + " : ");
            newPhone2[i].show();
        }
 
        System.out.println();
        ///매개변수 1개///////////////////////////////////

        Phone newPhone3 = new Phone();
        newPhone3 = new Phone("비트박스폰", "LG", 50);

        newPhone3.show();
        System.out.println();


        // 기본생성자

        Phone newPhone4 = new Phone();

        newPhone4.show();
        System.out.println();



    }
}


// 문제)
// 클래스 : 클래스(객체) 이름 : Phone
// 필드 : Phone 클래스 내부 필드 : name, telecom, service
// 자료형 : 타입은 적절하게 지정 사용하시오
// 기본생성자
// 생성자 : (매개변수, 2개, 3개)
// void 메소드 : showTelecom(){} 출력
// 클래스(객체) 배열[3] 반복처리
// 결과를 출력하시오

class Phone{
    String name = "알뜰폰";;
    String telecom = "국민통신";;
    int service = 50;;

    // 생성자: 리턴값없고, void도 없는 생성자이다.
    // 여러 생성자 : 오버로딩

    Phone(){};

    // 생성자 오버로딩(매개변수 : 폰이름)
    public Phone(String name){
        this.name = name;
    }

    // 생성자 오버로딩(매개변수 : 폰이름, 통신사)
    public Phone(String name, String telecom){
        this.name = name;
        this.telecom = telecom;
    }

    // 생성자 오버로딩(매개변수 : 폰이름, 통신사, 서비스시간)
    public Phone(String name, String telecom, int service){
        this.name = name;
        this.telecom = telecom;
        this.service = service;
    }

    public void show(){
        System.out.println(this.name+ " " + this.telecom+"telecom " + this.service+"분");
    }





}
