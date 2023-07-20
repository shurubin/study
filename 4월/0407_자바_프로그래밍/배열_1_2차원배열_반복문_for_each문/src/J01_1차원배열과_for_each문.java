public class J01_1차원배열과_for_each문 {

    // 내부 클래스 위치
    // enum Month {1,2,3,4,5,6,7,8,9,10,11,12}

    public static void main(String[] args) {

        // 1차원 배열생성하고
        // for-each문 이용 반복 출력
        // 순차적으로 나열(enum)된 각 원소값들을 접근하는데 유용한 반복문
        // 사용이 간단하다.
        // 정수데이터 순차나열된 배열

        int[] num1 = {1,2,3,4,5,6,7};
        
        for(int i: num1){
            System.out.println("num1 배열 원소 = " + i);
        }
        System.out.println();

        // 문자열 데이터 순차 나열된 배열
        String[] fruit = {"딸기","복숭아","포도","체리","바나나","홍시","한라봉","귤","파인애플","메론"};

        for(String f : fruit){   // f in fruit
            System.out.println("fruit = " + f);
        }
        System.out.println();
        

        String[] month = {"1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"};

        for(String m : month){
            System.out.println("month = " + m);
        }
        System.out.println();

        // 클래스 수업 내용
        // 내부 / 외부 클래스 위치한다.
        // enum Month{"1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"}

        // for(Month m : Month.values()){
        //     System.out.println("월별 = " + m + "월");
        // }



    }
}
