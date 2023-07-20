/**
 * J01_Phone_클래스_오버라이딩
 * 
 * 기존의 Phone이라는 클래스로 휴대폰 정보를 관리했으나
 * 업데이트가 진행되면서 새로운 정보들이 추가되었다
 * Phone 클래스는 그대로 사용, 상속을 하여
 * 추가된 정보들을 저장하도록 업그레이드를 한다
 * 
 * 부모클래스 Phone
 * 모든 필드는 private 접근제한자 사용
 * 필드 : 이름(name), 통신사(telecom), 가격(price)
 * 
 * 생성자 Phone
 * 
 * 메소드 showData
 * 
 * 
 * 메소드 오버라이딩
 * 자식클래스 업데이트폰 UpdatePhone
 * 할인카드(card), 보험기간(month)
 * 
 * 모든 필드를 초기화하는 생성자
 * 
 * 오버라이딩 메소드
 * 
 */
public class J02_Phone_클래스_오버라이딩 {

    public static void main(String[] args) {

        UpdatePhone p = new UpdatePhone();

        p.setData("갤럭시", "SKT", 2500, "농협카드", 36);

        p.showData();

        System.out.println();

        p.setData("아이폰", "KT", 3000, "현대카드", 24);

        p.showData();
  

  

        




    }
}



