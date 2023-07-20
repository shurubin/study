class UpdatePhone extends Phone{
    
    String card;
    int month;


    public UpdatePhone(String name, String telecom, int price, String card, int month ){
        super(name, telecom, price);
        this.card = card;
        this.month = month;
    }

    public void showData(){
        super.showData();
        System.out.println("카드 : " + this.card);
        System.out.println("약정 : " + this.month);
    }


}
