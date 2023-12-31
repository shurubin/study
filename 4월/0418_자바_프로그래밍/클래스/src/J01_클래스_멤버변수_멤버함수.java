public class J01_클래스_멤버변수_멤버함수 {
    public static void main(String[] args) {
        
        // 존재하지 않은 클래스 생성자 만들면 빨간 밑줄이 생긴다. 
        // 빠른수정 그러면 외부클래스가 만들어진다.
        가입회원 new가입회원 = new 가입회원(); 

        // 외부 클래스 생성자를 생성한다.
        회원정보 new회원정보 = new 회원정보(); 

        // 생성자에 필드(속성) = 값을 저장
        new회원정보.이름 = "이순신";
        new회원정보.나이 = 49;
        new회원정보.시력 = 1.5;
        new회원정보.취미 = "보드";
        new회원정보.주소 = "한산도";
        
        // 멤버함수 호출 실행
        new회원정보.show_method();


        // 회원정보2 생성
        회원정보 new회원정보2 = new 회원정보();

        // 생성자에 필드(속성) = 값을 저장
        new회원정보2.이름 = "김유신";
        new회원정보2.나이 = 48;
        new회원정보2.시력 = 1.6;
        new회원정보2.취미 = "승마";
        new회원정보2.주소 = "경상도 경주";

        // 멤버함수 호출실행
        new회원정보2.show_method();







    }
}
