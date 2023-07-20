import java.util.Scanner;

public class J04_2차원배열_무한반복문_혼자 {
    public static void main(String[] args) {
     
        // 2차원 행렬 1~10까지 

        // 칸과 줄 입력하면 html, jsp table p

        int arr[][];
        int row = 0;
        int col = 0;

        Scanner sc = new Scanner(System.in);
        
        while(true){
            System.out.print("1~10 행 값 입력");
            row = sc.nextInt();
       
            if(row<1 || row>10){
                System.out.println("입력값 초과");
            }

            else{
                
                while(true){
                    System.out.print("1~10 열 값 입력");
                    col = sc.nextInt();                

                    if(col<1 || col>10){
                        System.out.println("입력값 초과");
                    }
                    else{

                        arr = new int [row][col];

                        for(int i=0; i<arr.length; i++){
                            for(int j=0; j<arr[i].length; j++){
                                arr[i][j] = (int)(Math.random()*26+65);
                            }
                        }

                        for(int i=0; i<arr.length; i++){
                            for(int j=0; j<arr[i].length; j++){
                                System.out.printf("%3c", (char)arr[i][j]);
                            }
                            System.out.println();
                        }
                        break;
                    } 
                    
                }
                
                break;

            }
            
        }




        

        



    }
}
