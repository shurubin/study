package kurly;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import kurly.UserDTO;
import java.util.*; // List, ArrayList


public class UserDAO {
    
        
    private Connection conn = null;
    private PreparedStatement ps = null;
    private ResultSet rs = null;

    public UserDAO(){
        try{
            // 변수설정
            String URL = "jdbc:mysql://localhost:3306/user";
            String ID = "root";
            String PW = "1234";
            

            // 1. 데이터베이스 드라이버(JDBC)
            Class.forName("com.mysql.jdbc.Driver");
            System.out.println("JDBC Driver 로드성공");

            // 2. 데이터베이스 인증&인가(URL, ID, PW)
            conn = DriverManager.getConnection(URL, ID, PW);
            System.out.println("데이터베이스 Connection  연결성공");


        }
        catch(Exception e){
            e.printStackTrace();
        }

    }



        public int signup(UserDTO userDTO){
            String SQL = "INSERT INTO signup_table(user_id, user_pw, user_name, user_email, user_hp, user_addr, user_gender, user_birth, user_chooga, user_service) VALUES(?,?,?,?,?,?,?,?,?,?)";
            try{
                ps = conn.prepareStatement(SQL);
                ps.setString(1,  userDTO.getUser_id());
                ps.setString(2,  userDTO.getUser_pw());
                ps.setString(3,  userDTO.getUser_name());
                ps.setString(4,  userDTO.getUser_email());
                ps.setString(5,  userDTO.getUser_hp());
                ps.setString(6,  userDTO.getUser_addr());
                ps.setString(7,  userDTO.getUser_gender());
                ps.setString(8,  userDTO.getUser_birth());                
                ps.setString(9,  userDTO.getUser_chooga());                
                ps.setString(10, userDTO.getUser_service());                
                return ps.executeUpdate();
            }
            catch(Exception e){
                e.printStackTrace();
            }
            finally{ // 무조건 실행하는 키워드
                try{
                    if(rs != null){rs.close();}
                    if(ps != null){ps.close();}
                    if(conn != null){conn.close();}
                }
                catch(Exception e){

                }
            }

            return -1;
        }
        public int signin(String user_id, String user_pw){
            String SQL = "SELECT user_pw FROM signup_table WHERE user_id = ?";

            try{
                ps = conn.prepareStatement(SQL);
                ps.setString(1, user_id);

                rs = ps.executeQuery();
                if(rs.next()){
                    if(rs.getString(1).equals(user_pw)){
                        return 1;   
                    }
                    else{
                        return 0;   
                    }
                }
                else{
                    return -1; 
                }
            }
            catch( Exception e ){
                e.printStackTrace();
            }
            finally{ // 무조건 실행하는 키워드
                try{
                    if(rs != null){rs.close();}
                    if(ps != null){ps.close();}
                    if(conn != null){conn.close();}
                }
                catch(Exception e){

                }
            }

            return -2;  
        }


        public int update(UserDTO userDTO){
            String SQL = "UPDATE signup_table SET user_pw = ?, user_name = ?, user_email = ?, user_hp = ?, user_addr = ?, user_gender = ?, user_birth = ?, user_chooga = ?, user_service WHERE user_id = ? ";
            try{
                ps = conn.prepareStatement(SQL);                
                ps.setString(1,  userDTO.getUser_pw());
                ps.setString(2,  userDTO.getUser_name());
                ps.setString(3,  userDTO.getUser_email());
                ps.setString(4,  userDTO.getUser_hp());
                ps.setString(5,  userDTO.getUser_addr());
                ps.setString(6,  userDTO.getUser_gender());
                ps.setString(7,  userDTO.getUser_birth());
                ps.setString(8,  userDTO.getUser_chooga());                
                ps.setString(9,  userDTO.getUser_service());                
                ps.setString(10, userDTO.getUser_id());     

                return ps.executeUpdate();
            }
            catch(Exception e){
                e.printStackTrace();
            }
            finally{ // 무조건 실행하는 키워드
                try{
                    if(rs != null){rs.close();}
                    if(ps != null){ps.close();}
                    if(conn != null){conn.close();}
                }
                catch(Exception e){

                }
            }
            return -1;
        }

        
        public int delete(String user_id, String user_pw){
            String SQL = "DELETE FROM signup_table  WHERE user_id = ? AND  user_pw = ?";

            try{
                ps = conn.prepareStatement(SQL);      
                ps.setString(1, user_id);           
                ps.setString(2, user_pw);             
                return ps.executeUpdate();
            }
            catch(Exception e){
                e.printStackTrace();
            }
            finally{ // 무조건 실행하는 키워드
                try{
                    if(rs != null){rs.close();}
                    if(ps != null){ps.close();}
                    if(conn != null){conn.close();}
                }
                catch(Exception e){

                }
            }

            return -1;
        }


        // 개인정보 수정하기 위해서 업데이트 폼에 데이터 내보내기
        public UserDTO getJoin(String user_id){
            UserDTO userDTO = new UserDTO();

            String SQL = "SELECT * FROM signup_table WHERE user_id = ?";

            try{
                ps = conn.prepareStatement(SQL);
                ps.setString(1, user_id);
                rs = ps.executeQuery();

                if(rs.next()){ // 데이터베이스 자료를 가져와서 DTO 세터에 저장
     
                    userDTO.setUser_id(rs.getString("user_id"));
                    userDTO.setUser_pw(rs.getString("user_pw"));
                    userDTO.setUser_name(rs.getString("user_name"));
                    userDTO.setUser_email(rs.getString("user_email"));
                    userDTO.setUser_hp(rs.getString("user_hp"));
                    userDTO.setUser_addr(rs.getString("user_addr"));
                    userDTO.setUser_gender(rs.getString("user_gender"));
                    userDTO.setUser_birth(rs.getString("user_birth"));
                    userDTO.setUser_chooga(rs.getString("user_chooga"));
                    userDTO.setUser_service(rs.getString("user_service"));
                    userDTO.setUser_gaib_date(rs.getString("user_gaib_date"));
                }
               
            }
            catch( Exception e ){
                e.printStackTrace();
            }
            finally{ // 무조건 실행하는 키워드
                try{
                    if(rs != null){rs.close();}
                    if(ps != null){ps.close();}
                    if(conn != null){conn.close();}
                }
                catch(Exception e){

                }
            }

            return userDTO;  
            
        }


        // 가입 회원 전체리스트 목록 가져오기
        public List<UserDTO> getJoinList(){
            UserDTO userDTO = null;
            List<UserDTO> list =  new ArrayList<>();

            // 모든 전체 리스트 목록을 가져오는 SQL
            String SQL = "SELECT * FROM signup_table";

            try{
                ps = conn.prepareStatement(SQL);
                rs = ps.executeQuery();
                while(rs.next()){
                    // 현재 레코드의 모든 컬럼데이터 빼오기
                    userDTO = new UserDTO();
                    userDTO.setUser_id(rs.getString("user_id"));
                    userDTO.setUser_pw(rs.getString("user_pw"));
                    userDTO.setUser_name(rs.getString("user_name"));
                    userDTO.setUser_email(rs.getString("user_email"));
                    userDTO.setUser_hp(rs.getString("user_hp"));
                    userDTO.setUser_addr(rs.getString("user_addr"));
                    userDTO.setUser_gender(rs.getString("user_gender"));
                    userDTO.setUser_birth(rs.getString("user_birth"));
                    userDTO.setUser_chooga(rs.getString("user_chooga"));
                    userDTO.setUser_service(rs.getString("user_service"));
                    userDTO.setUser_gaib_date(rs.getString("user_gaib_date"));
                    // 리스트에 저장(추가 add)하기
                    // 줄(행) 단위(레코드단위)로 리스트(ArrayList) 저장 추가한다
                    list.add(userDTO);

                }
            }
            catch(Exception e){
                e.printStackTrace();
            }
            finally{ // 무조건 실행하는 키워드
                try{
                    if(rs != null){rs.close();}
                    if(ps != null){ps.close();}
                    if(conn != null){conn.close();}
                }
                catch(Exception e){

                }
            }


            return list;

        }


    // 아이디찾기 메소드
	// 1차 검색 이름
	// 1차 검색 결과를 이용하여 반복문 while 사용 이메일을 검색
	public UserDTO idSearch(String user_name, String user_hp) {
		String SQL = "SELECT user_hp, user_id FROM signup_table WHERE user_name = ?";
		try {
			PreparedStatement ps = conn.prepareStatement(SQL);
			ps.setString(1, user_name);
			rs = ps.executeQuery();
			while (rs.next()) {
				// userEmail 비교
				if(rs.getString(1).equals(user_hp)) {
					UserDTO userDTO = new UserDTO();
					// 이메일 일치하면 검색정보 아이디를 반환한다.
					userDTO.setUser_id(rs.getString(2)); //SQL 조회된 아이디를 반환
					return userDTO;
				}
				// return 이메일이 틀린 것
			}
		}
        catch(Exception e){
            e.printStackTrace();
        }
        finally{ // 무조건 실행하는 키워드
            try{
                if(rs != null){rs.close();}
                if(ps != null){ps.close();}
                if(conn != null){conn.close();}
            }
            catch(Exception e){

            }
        }

		return null;
	}
	
	// 비밀번호찾기 메소드
	// 1차 검색 아이디
	// 1차 검색 결과를 이용하여 반복문 while 사용 이메일을 검색
	public UserDTO pwSearch(String user_id, String user_hp) {
		String SQL = "SELECT user_hp, user_pw FROM signup_table WHERE user_id = ?";
		try {
			PreparedStatement ps = conn.prepareStatement(SQL);
			ps.setString(1, user_id);
			rs = ps.executeQuery();
			while (rs.next()) {
				// userEmail 비교
				if(rs.getString(1).equals(user_hp)) {
					UserDTO userDTO = new UserDTO();
					// 이메일 일치하면 검색정보 아이디를 반환한다.					
					userDTO.setUser_pw(rs.getString(2)); //SQL 조회된 비밀번호를 반환
					return userDTO;
				}
				// return 이메일이 틀린 것
			}
		}
        catch(Exception e){
            e.printStackTrace();
        }
        finally{ // 무조건 실행하는 키워드
            try{
                if(rs != null){rs.close();}
                if(ps != null){ps.close();}
                if(conn != null){conn.close();}
            }
            catch(Exception e){

            }
        }

		return null;
	}


}
