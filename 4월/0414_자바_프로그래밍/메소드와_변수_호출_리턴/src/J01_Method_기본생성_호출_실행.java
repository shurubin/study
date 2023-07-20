public class J01_Method_기본생성_호출_실행 {
    public static void main(String[] args) {  // 모든 클래스에 1개만 존재하는 메인 메소드
        // 메소드(Method)
        // 1. 메소드 선언 => 함수 같은 종류
        // 리턴타입 메소드이름(){
        //     실행문(영역 => 스코프 Scope)
        // }

        // 리턴타입 메소드이름(타입, 매개변수1,....){
        //      실행문(영역 => 스코프 Scope)
        // }

        // 기타 프로그램에서의 메소드와 함수 
        // 예)
        // 객체내에서의 함수
        // const Object = new Object();
        // Object = {
        //     state: { //멤버 변수 속성 필드
        //         isLogin: true;
        //     },
        //     mainSlide: function(){
                
        //     },
        //     scrollEvent(){

        //     },
        // }
        

        // class Object2{
                // init(){ //메인메소드
                //     this.state;
                //     this.mainSlide();
                // }
        //     state:{
        //         cnt:0  setState  직역 setCnt
            // setCnt
            // setId
            // setPw

            // getCnt
        //     }
        //     mainSlide(){
                
        //     }
        //     mainSlide2(){

        //     }
        // }

        // const newObject2 = new Object2();
        // Object2 newObject2 = new Object2();

        // function mainSide(){

        // }

        // void 음식(떡볶이, 어묵){  //리턴값이 없는 메소드
        //     ...
        //     System.out.println();
        // };
        // String 음식(떡볶이, 어묵, 순대); //리턴값이 있는 메소드
        // Int 음식(어묵, 순대);
        // Long 음식(매운어묵, 순대);
        // Float 음식(매운어묵, 순대){
        //     return 내용내용내용
        // };

        // 접근제한자 public
        // public static 리턴타입(자료형 String, int ...,/ void(리턴없음)) 메소드이름(){}
        // public static 리턴타입(자료형 String, int ...,/ void(리턴없음)) 메소드이름(매개변수){}

        // 메소드 호출 실행
        MainSlide("김유신");
        MainSlide("이순신");
        MainSlide("유관순");
        MainSlide("");
        MainSlide("");
        MainSlide("");
        MainSlide("");




    }  //메인 메소드


    public static void MainSlide(String irum){ // => 메소드 호출 실행 메인 메소드 내에서 메소드이름();
        System.out.println("출력결과 : 메인슬라이드 메소드입니다."+ irum );
    }



}
