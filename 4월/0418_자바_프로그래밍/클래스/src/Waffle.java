

// 외부 클래스 제작
// 클래스 1개에 다양한 주문형식의 메소드가 선택되어 주문되어진다.
class Waffle{
// 리턴값이 있는 메소드

// 1. 매개변수 없는 메소드
String name(){
    return "와플 ";
}

// 2. 매개변수 1개(문자열) 있는 메소드
String name(String source){
    return source + " 와플 ";
}

// 3. 매개변수 2개(문자열, 문자열) 있는 메소드
String name(String source, String source2){
    return source+source2 + " 와플 " ;
}

// 4. 매개변수 3개(문자열, ) 있는 메소드
String name(String source, int count){
    return source + " 와플 " + count + "개" ;
}



}

