import java.util.Scanner;

public class J02_화폐단위구하기_혼자 {
    public static void main(String[] args) {
        
        long price = 0;
        long oman = 0;
        long man = 0;
        long ochen = 0;
        long chen = 0;

        System.out.println("금액을 입력하세요");
        
        Scanner sc = new Scanner(System.in);
        price = sc.nextLong();

        oman = price / 50000;
        man = (price - (50000 * oman)) / 10000;
        ochen = (price - (50000 * oman + 10000 * man)) / 5000;
        chen = (price - (50000 * oman + 10000 * man + 5000 * ochen)) / 1000;


        System.out.printf("오만원권 %d장 ", oman);
        System.out.printf("만원권 %d장 ", man);
        System.out.printf("오천원권 %d장 ", ochen);
        System.out.printf("천원권 %d장 ", chen);



    }
}
