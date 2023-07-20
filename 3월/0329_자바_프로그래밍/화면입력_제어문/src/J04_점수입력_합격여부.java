import java.util.Scanner;;

public class J04_점수입력_합격여부 {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        // 1. 화면입력
        // 국어점수
        // 영어점수
        // 수학점수
        // 3과목 점수 입력받아서

        // 2. 연산처리
        // 총점 연산
        // 평균 연산

        // 3. 조건문 구현 출력
        // 평균이 80점 이상이면 합격 그렇지 않으면 불합격
        // 알고리즘을 구현하시오
       
             
                
        // double avg = sc.nextDouble();



        System.out.println("국어 점수를 입력하세요");
        int ko = sc.nextInt(); 
        System.out.println("국어점수는 " + ko);

        System.out.println("영어 점수를 입력하세요");
        int eng = sc.nextInt();
        System.out.println("영어점수는 " + eng);

        System.out.println("수학 점수를 입력하세요");
        int math = sc.nextInt(); 
        System.out.println("수학점수는 " + math);        

        System.out.println("총합은 " + (ko+eng+math) + " 입니다");        
        
        if((ko+eng+math) / 3 >=80){
            System.out.println("축하합니다. 합격입니다.");
        }
        else {
            System.out.println("불합격입니다.");
        }

       

        sc.close();






    }
}
