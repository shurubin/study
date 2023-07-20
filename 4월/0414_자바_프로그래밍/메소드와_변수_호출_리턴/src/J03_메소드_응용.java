import java.util.Scanner;

public class J03_메소드_응용 {

    // 1. 리턴 X, 매개변수 X 메소드
    // 예제) "안녕하세요" 문자열을 5번 출력하는 메소드를 만들고 실행하시오
    static void hello(){
        for(int i=0; i<3; i++){
            System.out.println((i+1) + " 안녕하세요!");
        }
    }   

    // static이 없는 메소드는 실행할 수 없다.
    // 단 클래스 생성자를 만들어서 메소드 호출 실행 가능하다
    // 생성자.hello1();
    // hello1(); // static 키워드가 없는 경우 : 오류발생
    // 빨강 밑줄이 뜬다. 그럼 빨간 밑줄에 마우스 오버 시
    // 빠른 수정클릭하면 메소드에서 
    public void hello1(){
        for(int i=0; i<3; i++){
            System.out.println((i+1) + " 안녕하세요! static 없음");
        }
    }   

    // 2. 리턴X, 매개변수 2개인 메소드
    // 매개값 문자열과 숫자를 입력받고
    // 받은 숫자의 횟수만큼 문자열 내용을 반복 출력하는 메소드를 작성하고 실행하시오
    // 메소드 이름 repeatStr 매개변수는 문자열 str, 숫자는 num 사용
    static void repeatStr(){

        Scanner sc = new Scanner(System.in);

        System.out.print("반복횟수 입력");
        int num = sc.nextInt();
        System.out.print("반복문자열 입력");
        String str = sc.next();

        for(int i=0; i<num; i++){
            System.out.println((i+1) + str);
        }
    }

    // 선생님이 하심
    static void repeatStr1(String str1, int num1){
        for(int i=0; i<num1; i++){
            System.out.println(str1);
        }
    }


    // 3. 리턴O, 매개변수 O 메소드
    // 문제)
    // 3개의 숫자를 입력받고, 평균값을 리턴하는 메소드를 작성하고 실행하시오
    // 메소드 이름 average 매개변수는 숫자는 a, b, c 사용
    public static void average(int a, int b, int c) {
        System.out.println(a + b + c);
        System.out.println("평균값은 " + (a+b+c)/3);
    }

    // 선생님
    static double average1(int x, int y, int z){
        return (x + y + z)/3.0;
    }

    // 4. 리턴 x, 매개변수 O 메소드(int[] arr)
    // 문제) 매개변수가 1차원 배열
    // 매개변수받아서 배열을 반복문 사용 출력하는 메소드 작성하고 실행
    // 메서드 이름 arrMethod1 매개변수 배열은 정수형 1차원 배열 변수 사용 arr
    static void arrMethod1(int[] arr){

        for(int i=0; i<arr.length; i++){
            System.out.print(arr[i] + " ");            
        }
        System.out.println();
    }

    


    // 5. 리턴 x, 매개변수 O 메소드(int[][] arr)
    // 문제) 매개변수가 2차원 배열
    // 매개변수받아서 배열을 반복문 사용 출력하는 메소드 작성하고 실행
    // 메서드 이름 arrMethod2 매개변수 배열은 정수형 1차원 배열 변수 사용 arr
    static void arrMethod2(int[][] arr){

        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length;j++){
                System.out.printf("%2d",arr[i][j]);
            }
            System.out.println();
        }
    }

    // 6. 리턴 O, 매개변수 O 메소드(int[][] arr)
    // 문제) 매개변수가 2차원 배열
    // 매개변수받아서 배열을 반복문 사용 출력하는 메소드 작성하고 실행
    // 메서드 이름 arrMethod2 매개변수 배열은 정수형 1차원 배열 변수 사용 arr
    static int arrMethod3(int[][] arr){
        int sum = 0;
        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length;j++){
                sum += arr[i][j];
            }            
        }
        return sum;
    }

    
    public static void main(String[] args) {


        // static 없으면 반드시 클래스를 생성자를 만들어서
        // 실행할 수 있다.
        J03_메소드_응용 newJ03_메소드_응용 = new J03_메소드_응용(); // 클래스 생성자

        // 1. 리턴X, 매개변수 X 매소드 => 메소드 호출
        System.out.println();
        hello();
        
        System.out.println();
        newJ03_메소드_응용.hello1(); // static 키워드가 없는 경우에 사용 방법
        System.out.println();

        // 2. 
        repeatStr();

        // 2-1 리턴X 매개변수 
        repeatStr1("금요일이당", 3);

        average(2, 4, 8);        

        // 3-1 
        double avg = average1(5, 6, 8);
        System.out.println("세 수의 평균 = " + avg);
    
        // 4. 1차원 배열
        // 배열 선언과 생성하여 전달
        int arr[] = {1,2,3,4,5};
        arrMethod1(arr);


        // 5. 2차원 배열
        // 배열 선언과 생성하여 전달
        int [][] arr2 = {
            {1,2,3,4,5},
            {1,3,5,7,9},
            {2,4,6,8,1},
            {5,4,3,2,1},
            {1,2,3,4,7}
        };
        arrMethod2(arr2);

        System.out.println();
        System.out.println("2차원 배열 합 = " + arrMethod3(arr2));
       
    }
}
