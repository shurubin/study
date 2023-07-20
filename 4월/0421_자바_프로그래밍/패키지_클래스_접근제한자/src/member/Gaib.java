package member;

import member.signUp;

public class Gaib {
    public static void main(String[] args) {
        
        signUp newSignUp = new signUp();

        newSignUp.setId("goenjjang");
        newSignUp.setPw("goenjjang123");
        newSignUp.setName("빵곤");
        newSignUp.setEmail("goen@naver.com");
        newSignUp.setHp("010-5959-5959");
        newSignUp.setAddress("서울시 고은구 고은동 5959번지");
        newSignUp.setGender("여자");

        newSignUp.showData();

    }
}
