public class J01_객체_응용_배열 {
    public static void main(String[] args) {
        
        // 단일 객체 사용


        // 문제)
        // 와플(Waffle) 객체만들고 생성자를 생성하되
        // 기본생성자와 멤버변수 값은 기본값 기본고객 0
        Waffle w0 = new Waffle();
        w0.showOrder();

        // 생성자 매개변수는 2개
        Waffle w1 = new Waffle("허니버터");
        w1.showOrder();

        // 생성자 매개변수는 2개
        Waffle w2 = new Waffle("허니버터", 5000);
        w2.showOrder();

        // 생성자 매개변수는 2개
        Waffle w3 = new Waffle("허니버터", 5000, 3);
        w3.showOrder();

        // 멤버변수는 구분(단골고객, 일반고객, 우수고객), 가격(5000, 10000, 15000)



        // 객체 배열 선언 사용 그리고 호출하기
        Waffle[] waf = new Waffle[6];

        waf[0] = new Waffle();
        waf[1] = new Waffle("크림와플");
        waf[2] = new Waffle("허니버터와플", 6000);
        waf[3] = new Waffle("초코와플", 5000);
        waf[4] = new Waffle("바닐라와플", 4000);
        waf[5] = new Waffle("딸기와플", 5000, 10);
        System.out.println();
        System.out.println();
  
        // 멤버함수(메소드) 호출 실행
        for(int i=0; i<waf.length; i++){
            waf[i].showOrder();
        }




    }
}


// 외부 클래스
    class Waffle{
        String 구분;
        int 가격;
        int 개수 = 1;

        Waffle(){
            this.구분 = "기본고객";
            this.가격 = 0;
        }

        Waffle(String seller){
            this.구분 = seller;
            this.가격 = 0;
        }

        Waffle(String seller, int price){
            this.구분 = seller;
            this.가격 = price;
        }

        Waffle(String seller, int price, int ea){
            this.구분 = seller;
            this.가격 = price;
            this.개수 = ea;
        }

        // 메소드(멤버함수)
        void showOrder(){
            System.out.println(this.구분+"와플, "+this.가격+"원, "+this.개수+"개");
        }

        




    }