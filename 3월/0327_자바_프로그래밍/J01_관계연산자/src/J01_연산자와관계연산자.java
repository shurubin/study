public class J01_연산자와관계연산자 {
    public static void main(String[] args) {
        // 성적 연산 
        // 국어, 영어, 수학, 총점, 평균 자료형에 맞게 변수 저정하고
        // 총점과 평균을 출력하시오
        // 출력은 국어, 영어, 수학, 총점, 평균 모두 출력
        // 1. 변수 선언
        // 국어, 영어, 수학, 총점, 자료형 => 정수형 Integer
        // 평균은 소숫점이 포함된 결과가 나오기 때문에 실수형으로 선언

        // 내가 한 것
        int korean = 92;
        int english = 88;
        int math = 84;
        int all = (korean + english + math);
        float average = (korean + english + math)/3;
        
        System.out.println("korean " + korean);
        System.out.println("english " + english);
        System.out.println("math " + math);
        System.out.println("all " + all);
        System.out.println("average " + average);

        // 수업
        int kor, eng, mat, hap;
        float avg;

        // 점수입력 => 리터럴 값
        kor = 77;
        eng = 80;
        mat = 85;

        // 총점 연산 합계
        hap = kor + eng +mat;
        
        // 평균 연산 = 총점 / 3 형변환 float 
        avg = (float)hap / 3;

        // 출력
        System.out.println("국어 " + kor);
        System.out.println("영어 " + eng);
        System.out.println("수학 " + mat);
        System.out.println("총점 " + hap);
        System.out.println("평균 " + avg);




    }
}
