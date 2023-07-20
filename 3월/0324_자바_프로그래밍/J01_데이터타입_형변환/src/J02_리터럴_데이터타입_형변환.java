public class J02_리터럴_데이터타입_형변환 {
    public static void main(String[] args) {
        // 숫자리터럴
        long priceNum = 1_234_567_891_234_567_89L;
        // long priceNum = 1_234_567_891_234_567_890_L; 끝에 사용불가
        System.out.println("숫자 리터럴_언더바(언더스코어) 사용: 가독성을 높여준다____________");
        System.out.println("1_234_567_891_234_567_89L "+ priceNum);

        float floatNum = 3.14____159f;
        // float floatNum = 3_.14159f; 소숫점 앞뒤에는 사용불가
        // float floatNum = 3._14159f; 소숫점 앞뒤에는 사용불가
        System.out.println("floatNum = 3.14____159f " + floatNum);


        long longNum = 0x7________6;
        // long longNum2 = 0_x76; x 앞뒤 사용불가
        // long longNum3 = 0x_76; x 앞뒤 사용불가
        System.out.println("longNum = 0x7________6 " + longNum);


        long longNum2 = 0b01010;
        // long longNum3 = 0_b01010; b 앞뒤 사용불가
        // long longNum4 = 0b_01010; b 앞뒤 사용불가
        System.out.println("longNum2 = 0b01010; " + longNum2);

        int ingNum = 04______6;
        // int ingNum1 = 0_46; 0뒤 사용불가        
        System.out.println("ingNum = 04______6; " + ingNum);


        int ingNum2 = 05________6___24;
        System.out.println("ingNum2 = 05________6___24; " + ingNum2);



        // var


















    }
}
