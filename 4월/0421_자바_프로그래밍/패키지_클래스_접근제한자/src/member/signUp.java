package member;

public class signUp {

    private String id;
    private String pw;
    private String name;
    private String email;
    private String hp;
    private String address;
    private String gender;

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPw() {
        return this.pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHp() {
        return this.hp;
    }

    public void setHp(String hp) {
        this.hp = hp;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getGender() {
        return this.gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
    
    public void showData(){
        System.out.println("아이디 : " + getId() );
        System.out.println("비밀번호 : " + getPw() );
        System.out.println("이름 : " + getName() );
        System.out.println("이메일 : " + getEmail() );
        System.out.println("전화번호 : " + getHp() );
        System.out.println("주소 : " + getAddress() );
        System.out.println("성별 :" + getGender() );
    }
  

}
