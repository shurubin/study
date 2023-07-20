import java.util.Scanner;

/* 
 * 배열(Array)
 * 같은 자료형이 여러개 데이터를 묶어서 저장하는 공간
 * 배열의 저장공간은 배열 인덱스번호 시작이 0부터 ~ 순서를 갖는다
 * 처음 생성할 때 배열의 크기를 정해야하며,
 * 한 번 크기를 정하면 변경할 수 없다.
 * 
 * 배열의 선언방법
 * 1. 데이터 목록으로 배열을 생성하기
 *    자료형 [] 변수명 = {데이터1, 데이터2, 데이터3.....}
 * 
 *   
 */

public class J03_배열_일차원배열 {
    public static void main(String[] args) {
        
        // 1. 배열선언
        // 데이터 목록으로 배열을 생성하기
        // 자료형 [] 배열변수명 = {데이터1, 데이터2, 데이터3....}
        
        System.out.println("=============배열 선언과 생성하기==============");
        // 1차원 배열에 정수 데이터 10, 20, 30, 40, 50 => 5개를 저장하기
        int[] arr = {10, 20, 30, 40, 50};  //리터럴 방식

        // 1차원 배열값 출력하기
        System.out.println("=============배열 출력하기 배열 인덱스번호 사용==============");
        System.out.println("첫번째 배열[0] " + arr[0]);
        System.out.println("두번째 배열[1] " + arr[1]);
        System.out.println("세번째 배열[2] " + arr[2]);
        System.out.println("네번째 배열[3] " + arr[3]);
        System.out.println("다섯번째 배열[4] " + arr[4]);

        System.out.println();
        System.out.println("=============배열 출력하기 배열 인덱스번호 반복문 활용하기==============");
        System.out.println();

        // 1차원 배열값 출력하기 - 반복문 활용
        for(int i=0; i<5; i++){
            System.out.println("배열["+i+"] " + arr[i]);
        }

        System.out.println();

        // 2. 배열데이터 변경하기
        // int[] arr = {10, 20, 30, 40, 50};
        arr[0] = 200;  //첫번째 배열 값 10을 200으로 변경한다.
        arr[1] = 300;  //두번째 배열 값 20을 300으로 변경한다.
        arr[2] = 400;  //세번째 배열 값 30을 400으로 변경한다.
        arr[3] = 500;  //네번째 배열 값 40을 500으로 변경한다.
        arr[4] = 600;  //다섯번째 배열 값 50을 600으로 변경한다.

        System.out.println();
        System.out.println("=============변경된 배열 출력 인덱스번호 반복문 활용하기==============");
        System.out.println();

        // 1차원 배열값 출력하기 - 반복문 활용
        for(int i=0; i<arr.length; i++){
            System.out.println("배열["+i+"] " + arr[i]);
        }


        // 3. 배열 선언만 해놓고 나중에 데이터를 넣는 방법
        int[] arr2;

        // 방법1 선언된 배열에 데이터 넣기
        // arr2 = {10, 20, 30, 40, 50}; 오류발생 
        arr2 = new int[] {1, 2, 3, 4, 5};

        System.out.println();
        System.out.println("=============배열 선언 후 데이터 넣기 그리고 반복문 출력하기==============");
        System.out.println();

        // 1차원 배열값 출력하기 - 반복문 활용
        for(int i=0; i<arr.length; i++){
            System.out.println("배열["+i+"] " + arr2[i]);
        }

        

        // 4. 배열 생성하기
        int[] arr3 = new int[5]; // 정수형 1차원 배열 저장공간(원소갯수) 5개를 생성한다.

        // 배열 데이터 넣기
        arr3[0] = 1000*1;
        arr3[1] = 1000*2;
        arr3[2] = 1000*3;

        System.out.println();
        System.out.println("=============배열 선언 후 데이터 넣기 그리고 반복문 출력하기==============");
        System.out.println();

        for(int i=0; i<arr.length; i++){
            System.out.println("배열["+i+"] " + arr3[i]);
        }

        System.out.println();

        // 5. 배열 화면 입력받기 : 배열생성 그리고 내중에 화면입력으로 데이터 넣기 & 출력
        System.out.println();
        System.out.println("=============배열 화면 입력받기==============");
        System.out.println();

        Scanner sc = new Scanner(System.in);      
        int[] arr4 = new int[3]; // 배열 저장 공간 장소 3개(배열 원소가 3개)
        for(int i=0; i<arr4.length; i++){
            System.out.println("배열 데이터 입력 : ");
            arr4[i] = sc.nextInt();
        }


        System.out.println();
        System.out.println("=============배열 입력 받은 데이터 출력하기==============");
        System.out.println();

        for(int i=0; i<arr4.length; i++){
            System.out.println("arr4["+i+"]" + arr4[i]);
        }

        System.out.println();
        System.out.println();










    }
}
