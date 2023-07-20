public class J01_원의면적구하기 {
    public static void main(String[] args) {
        // 상수변수는 반드시 모두 대문자로 식별자를 지정한다.
        // 상수 선언은 반드시 파이널 final 키워드를 사용한다.
        // 상수형 변수는 한 번 선언하면 변경 불가능하다.

        final double PI = 3.14159; //원주율 변수를 상수로 선언
        double circleArea;
        double radius = 15.0;

        // 원의 면적 = 반지름 * 반지름 * 원주율
        circleArea = radius * radius * PI; // 원의 면적 계산

        System.out.println("원의 면적은 = " + circleArea);

        




    }
}
