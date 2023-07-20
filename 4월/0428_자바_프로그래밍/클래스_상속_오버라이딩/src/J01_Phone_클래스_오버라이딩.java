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
public class J01_Phone_클래스_오버라이딩 {

    public static void main(String[] args) {


  
        // 생성자 인스턴스 배열처리

        UpdatePhone[] p = new UpdatePhone[3];

        p[0] = new UpdatePhone("아이폰", "LG", 1000, "삼성카드", 24);
        p[1] = new UpdatePhone("갤럭시", "LG", 1000, "신한카드", 12);
        p[2] = new UpdatePhone("모토로라", "LG", 1000, "현대카드", 24);

        for(int i=0; i<p.length; i++){
            System.out.println();
            p[i].showData();
        }

        




    }
}



