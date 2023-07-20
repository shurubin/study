public class J01_데이터타입_형변환 {
    public static void main(String[] args) {
        System.out.println( 65 );
        System.out.println( (char)65 ); //ASCII 아스키코드 65 A upper case
        System.out.println( 'a' );
        System.out.println( (int)'a' ); //ASCII 아스키코드 97 a lower case
        System.out.println( 'z' );
        System.out.println( (int)'z' ); //ASCII 아스키코드 122 z
        System.out.println( 'A' );
        System.out.println( (int)'A' );
        System.out.println( 'Z' );
        System.out.println( (int)'Z' ); //ASCII 아스키코드 90 Z


        // 정수 & 실수
        System.out.println("정수 & 실수 ________________");
        System.out.println( 255 );
        System.out.println("(float)255  " + (float)255 );
        System.out.println("(double)255  " + (double)255 );

        System.out.println( 3.14159f);
        System.out.println("(int)3.14159f  " + (int)3.14159f);
        System.out.println("(int)3.14159d  " + (int)3.14159d);

        // 정수(int, Long) & 실수(Double, Float) & 리터럴 접두사, 접미사
        System.out.println("");
        System.out.println("// 실수(Double, Float)____________");        

        double num_doubleD = 354.123456789123456789D; //맨 뒤에 접미사 D
        double num_doubled = 354.123456789123456789d; //맨 뒤에 접미사 d
        double num_double = 354.123456789123456789;   //맨 뒤에 접미사 생략(더블형)

        System.out.println(num_doubleD);
        System.out.println(num_doubled);
        System.out.println(num_double);

        System.out.println( "실수(double) = > 정수(int) 형변환" );

        int num_int1 = (int) num_doubleD;
        int num_int2 = (int) num_doubled;
        long num_long = (long) num_double;

        System.out.println("num_int1  " + num_int1 );
        System.out.println("num_int2  " + num_int2 );
        System.out.println("num_long  " + num_long );


        System.out.println("//  실수( Float)____________");
        float num_float_F = 354.123456789123456789F; //맨 뒤에 접미사 F
        float num_float_f = 354.123456789123456789f; //맨 뒤에 접미사 f
        // float num_float = 354.123456789123456789; // float는 맨 뒤에 접미사 생략 오류

        double num_double_D = (double)num_float_F;
        double num_double_d = (double)num_float_f;

        System.out.println("num_float_F  " + num_float_F);
        System.out.println("num_float_f  " + num_float_f);

        System.out.println("num_double_D  " + num_double_D);
        System.out.println("num_double_d  " + num_double_d);



        System.out.println(" 수동형변환 (명시적 형변환____________");
        
        // 1. 문자 => 숫자
        String strNum = "1"; //스트링은 첫글자 대문자로 선언한다. 리터럴값은 더블쿼트를 사용한다.

        int intNum = Integer.parseInt(strNum);
        System.out.println(" String  to int_______________");
        System.out.println("String strNum " + strNum);
        System.out.println("Integer.parseInt(strNum) > intNum " + intNum);

        // String to double
        double doubleNum = Double.valueOf(strNum);
        System.out.println(" String  to double_______________");
        System.out.println("String strNum " + strNum);
        System.out.println("Integer.parseInt(strNum) > doubleNum " + doubleNum);


        // String to float
        float floatNum = Float.valueOf(strNum);
        System.out.println(" String  to float_______________");
        System.out.println("String strNum " + strNum);
        System.out.println("Integer.parseInt(strNum) > floatNum " + floatNum);


        // String to long
        long longNum = Long.parseLong(strNum);
        System.out.println(" String  to long_______________");
        System.out.println("String strNum " + strNum);
        System.out.println("Long.parseLong(strNum) > longNum " + longNum);


        // String to short
        short shortNum = Short.parseShort(strNum);
        System.out.println(" String  to short_______________");
        System.out.println("String strNum " + strNum);
        System.out.println("Long.parseShort(strNum) > shortNum " + shortNum);


        //2. 숫자 => 문자        
        int intNum2 = 10;
        // String strNum2 = ''; 싱글쿼트는 String에서 리터럴값이 오류 
        String strNum2 = ""; 
        strNum2 = String.valueOf(intNum2);

        System.out.println("int intNum2 " + intNum2);
        System.out.println("String.valueOf(intNum2) =>  " + strNum2);


        strNum2 = Integer.toString(intNum2);
        System.out.println("int intNum2 " + intNum2);
        System.out.println("Integer.toString(intNum2) =>  " + strNum2);


        //3. 정수 <=> tlftn
        double doubleNum2 = 1.12345;
        int intNumResult;

        // Double to Int
        intNumResult = (int)doubleNum2;
        System.out.println("doubleNum2 " + doubleNum2);
        System.out.println("(int)doubleNum2=> intNumResult =>  " + intNumResult);


        float floatNum2 = 1.12345f;
        intNumResult = (int)floatNum2;
        System.out.println("floatNum2 " + floatNum2);
        System.out.println("(int)floatNum2=> intNumResult =>  " + intNumResult);

    




        
    }
}
