public class J02_형변환 {
    public static void main(String[] args) {
        // 형변환
        short sMin = -32768;
        short sMax = 32767;
        char cMin = 0;
        char cMax= 65535;

        System.out.println("sMin    = " + sMin);  //-32768
        System.out.println("sMin-1  = " + (short)(sMin-1)); //32767
        System.out.println("sMax    = " + sMax); //32767
        System.out.println("sMax+1  = " + (short)(sMax+1)); //-32768
        System.out.println("sMax+1  = " + (long)(sMax+1)); //32768
        System.out.println("cMin    = " + (int)cMin); //0
        System.out.println("cMin    = " + (int)--cMin);  //65535
        System.out.println("cMax    = " + (int)cMax); //65535
        System.out.println("cMax    = " + (int)++cMax); //0
    }
}
