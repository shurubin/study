public class AccessEx {
    public static void main(String[] args) {
        Sample aClass = new Sample();
        aClass.a = 10;  //public 접근지정자 
        // 접근지정자 : 모든 패키지 & 모든 클래스 접근가능

        // aClass.b = 10;   // private 접근지정자
        // 접근지정자 : 다른 패키지와 다른 클래스 접근 불가능 (Only 자신의 클래스)

        aClass.c = 10;   
        // aClass.c => default 
        // 접근지정자 : 같은 패키지 내에서 모든 클래스 내에서 사용 가능
        
    }
}

class Sample{
    public int a;
    private int b;
    int c;
}