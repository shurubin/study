
import java.util.Scanner;

public class J04_예외처리 {
    public static void main(String[] args) {
        // 포함할 수없는 닉네임  %나그네%
        String[] nickName ={"사랑해","왕자님","구름님","나그네","대통령"};
        Object strArray;
        
        String nick = "";
        // 예시] =>  "왕자"(은)는 사용할 수없는 단어입니다.

        // 입력은 화면 입력 받는다.
        // 제한글자는 3글자 ~ 16자 이내로 사용  
        // 예외처리 
        // 1. 닉네임은 3~16자 이내로 작성해야 합니다.  nick.length >=3 &&  nick.length <=16
        // 2. 닉네임은 입력된 단어를 포함할 수 없습니다. nick.indexOf( nickName[i] ) >=0
        // if(){
        //      throw new Exception("닉네임은 3~16자 인내로 작성해야 합니다.");
        // }
        // if(){
        //      throw new Exception("닉네임은 입력된 단어를 포함할 수 없습니다.");
        // }

        // try{
        //     코딩
        //     
        //     예외처리
        // }
        // catch(Exception e){
        //    System.err.println("오류발생 " +  오류메시지호출()); 
        // }

        while(true) {   
            try{
                System.out.println("닉네임 입력 : ");
                Scanner sc = new Scanner(System.in);
                nick = sc.next(); // 문자열 입력

                if(nick.length() < 3 || nick.length() > 16){
                    throw new Exception("닉네임은 3~16자 인내로 작성해야 합니다.");
                }

                for(String item: nickName){
                    System.out.println("contains() " +  item.contains(nick)  );
                    System.out.println("equals() " +  item.equals(nick)  );
                }

                
                for(int i=0; i<nickName.length; i++) {
                    // indexOf() 비교
                    System.out.println("indexOf()  " + nick.indexOf( nickName[i] ) );
                    
                    // contains() 비교
                    System.out.println("contains() " +  nickName[i].contains(nick)  );

                    // euals()
                    System.out.println("equals() " +  nickName[i].equals(nick)  );

                    if(nickName[i].equals(nick) ){ // 배열안에 있는 모든 닉네임 문자열 검사
                        System.out.println(  nick.indexOf( nickName[i] )  );
                        throw new Exception( nick +  " 닉네임은 입력된 단어를 포함할 수 없습니다.");
                    }

                    // if(nickName[i].contains(nick) ){ // 배열안에 있는 모든 닉네임 문자열 검사
                    //     System.out.println(  nick.indexOf( nickName[i] )  );
                    //     throw new Exception( nick +  " 닉네임은 입력된 단어를 포함할 수 없습니다.");
                    // }

                    // if(nick.indexOf( nickName[i] ) >=0){ // 배열안에 있는 모든 닉네임 문자열 검사
                    //     System.out.println(  nick.indexOf( nickName[i] )  );
                    //     throw new Exception( nick +  " 닉네임은 입력된 단어를 포함할 수 없습니다.");
                    // }
                }
                            

                System.out.println("닉네임 등록 성공!");
                break;
            }
            catch(Exception e){
                System.err.println("닉네임 오류 : " + e.getMessage());
            }
        }



    }
}
