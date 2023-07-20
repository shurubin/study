import java.util.Scanner;

public class J04_예외처리_닉네임 {
    public static void main(String[] args) {
        // 포함할 수 없는 닉네임
        String[] nickName = {"사람","왕자","구름","나그네","대통령"};
        String nick = "";
        // 예시) => "왕자"(은)는 사용할 수 없는 단어입니다.

        // 입력은 화면입력받는다.
       

        // 제한글자는 3글자 ~ 16자 이내로 사용
        // 예외처리
        // 1. 닉네임은 3~16자 이내로 작성해야 합니다. nick.length >=3 && nick.length <=16
        // 2. 닉네임은 입력된 단어를 포함할 수 없습니다. nick.indexOf( nickName[i]) >= 0
        // if(){
        //     throw new Exception("닉네임은 3~16자 이내로 작성해야 합니다.");
        // }
        // if(){
        //     throw new Exception("닉네임은 입력된 단어를 포함할 수 없습니다.");
        // }

        while(true){
            try{
                System.out.println("닉네임 입력");
                Scanner sc = new Scanner(System.in);
                nick = sc.next();

                if(nick.length() < 3 || nick.length() > 16){
                    throw new Exception("닉네임은 3 ~ 16자 이내로 작성해야 합니다.");                
                }
                for(int i=0; i<nickName.length; i++){
                    if(nick.indexOf(nickName[i]) >= 0){ // 배열 안에 있는 모든 닉네임 문장
                        throw new Exception("닉네임은 사람,왕,구름,나그네,대통령을 포함할 수 없습니다.");                    
                    }
                }

                System.out.println("닉네임 등록 성공");
                break;
            }
            catch(Exception e){
                System.out.println("닉네임 오류 ");
                
            }
        }






    }
}
