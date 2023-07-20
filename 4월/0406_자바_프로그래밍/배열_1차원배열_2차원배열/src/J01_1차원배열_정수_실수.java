public class J01_1차원배열_정수_실수 {
    public static void main(String[] args) {
        
        // 실수형 1차원 배열 생성하고 데이터를 대입
        double[] grade = {4.5, 3.7, 2.3, 4.2, 3.8, 3.3, 3.5};  // 7개 배열 갯수(배열의 길이)
        // double[] garde = new doubel[7];  // 7개 배열 갯수(배열의 길이)


        // 문제1) 배열값 => 배열 인덱스
        // 세번째 배열 인덱스를 이용 데이터 가져오기
        // 배열이름[index number] index : 0 ~ n   n은 배열의 총 갯수-1
        // 배열이름.길이   =>   grade.length   =>   결과 : 7    =>   배열 인덱스번호는 n-1이므로 7-1  => 6
        System.out.println("grade[0]" + grade[0] ); 
        System.out.println("grade[1]" + grade[1] ); 
        System.out.println("grade[2]" + grade[2] ); 
        System.out.println("grade[3]" + grade[3] ); 
        System.out.println("grade[4]" + grade[4] ); 
        System.out.println("grade[5]" + grade[5] ); 
        System.out.println("grade[6]" + grade[6] ); 
        System.out.println();
        System.out.println();
        System.out.println();




        // 반복문(for(){}) 출력
        // 반복문의 종료값은 grade.length를 이용
        // 조건 : 점수가 3.5이상인 인원 수를 카운트하라
        // 1. 조건문 필요
        // 2. 카운트 누적변수 필요
        // 3. 총점(3.5 이상 누적점수)

        // 출력 3.5이상 데이터 출력 그리고 카운트 값 출력

        int cnt = 0;
        double sum = 0;
        for(int i=0;i<grade.length;i++){
            if(grade[i]>=3.5){
                cnt++;
                sum+= grade[i];
                System.out.println("grade["+ i +"]" + grade[i]);                
            }            
        }
        System.out.println("성적 3.5 이상, 인원수 " + cnt + "명");
        System.out.println("성적 3.5 이상 총점 " + sum + "점");
        System.out.println();
        System.out.println();
        System.out.println();



        // 반복문(while(){}) 출력  *** length-1을 해줘야함
        int i = -1;
        cnt = 0;
        sum = 0;
        while(i<grade.length-1){  // -1 하기 전 i < 7 : -1 0 1 2 3 4 5 6
            i++; // 0 1 2 3 4 5 6 7 => 버그 발생 인덱스 번호 초과 오류!!!
            if(grade[i]>=3.5){
                cnt++;
                sum+= grade[i];
            }
            System.out.println("grade["+ i +"] = " + grade[i]);  // grade[i] 디버깅
        }

        // 3.5이상 인원 카운트 및 총점
        System.out.println("성적 3.5 이상 인원수: " + cnt + "명");
        System.out.println("성적 3.5 이상 총점: " + sum + "점");
        System.out.println();
       



    }
}
