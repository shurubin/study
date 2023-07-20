public class J01_화폐단위구하기 {
    public static void main(String[] args) {
        // 금액 187000
        // 5만원권
        // 1만원권
        // 5천원권
        // 1천원권

        // 문제1) 위 금액을 각 지폐 단위로 매수를 구하시오
        // 1. 입력설계(input)
        int price = 187000;
        int oman = 0;
        int man = 0;
        int ochen = 0;
        int chen = 0;


        // 3. 처리설계
        oman = price / 50000; // 5만원권
        man = (price - (50000 * oman)) / 10000;
        ochen = (price - (50000 * oman + 10000 * man)) / 5000;
        chen = (price - ((50000* oman) + (10000 * man) + (5000 * ochen) )) / 1000;


        // 2. 출력설계(output)
        System.out.println("금액 " + price + "원");
        System.out.println("5만원권 " + oman + "매");       
        System.out.println("1만원권 " + man + "매");
        System.out.println("5천원권 " + ochen + "매");
        System.out.println("1천원권 " + chen + "매");




    }
}
