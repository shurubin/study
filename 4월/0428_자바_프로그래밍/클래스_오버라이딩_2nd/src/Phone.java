
class Phone{
    private String name;
    private String telecom;
    private int price;

    
    public void setData(String name, String telecom, int price){
        this.name = name;
        this.telecom = telecom;
        this.price = price;
    }

    public void showData(){
        System.out.println("이름 : " + this.name);
        System.out.println("통신사 : " + this.telecom);
        System.out.println("가격 : " + this.price);
    }

}
