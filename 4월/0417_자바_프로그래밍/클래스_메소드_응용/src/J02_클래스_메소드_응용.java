import java.util.Scanner;

public class J02_클래스_메소드_응용 {

    // 1. 메소드 제작
    public void May(String str){
        System.out.println("5월은 가정의 달입니다. 5월 29일 대체휴일 좋아요");
    }

    public void methodfn(int num){
        for(int i=0; i<num; i++){
            System.out.println("따라하기입니다.");
        }
    }



    public static void main(String[] args) {
        // 출력할 횟수를 정수로 화면에서 입력
        // 그리고 메소드는 static 키워드도 없고 
        // 리턴값도 없는 메소드를 제작 구현 호출 실행

        // 2. 호출실행
        J02_클래스_메소드_응용 newJ02 = new J02_클래스_메소드_응용();
        String str = "5월은 가정의 달입니다. 5월 29일 대체휴일 좋아요";

        Scanner sc = new Scanner(System.in);

        System.out.print("출력횟수를 입력해주세요");
        int banbok = sc.nextInt();

        for(int i=0; i<banbok; i++){
            System.out.println(str);
        }

        // 따라하기 입력설계
        int num = 0;
        
        System.out.print("출력횟수를 입력해주세요");
        num = sc.nextInt();

        newJ02.methodfn(num);
        
        

       

    }
}
