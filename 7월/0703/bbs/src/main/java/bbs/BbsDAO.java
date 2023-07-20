package bbs;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class BbsDAO {
	private Connection conn;
	private PreparedStatement ps;
	private ResultSet rs;
	private int totalRecords= 0;
	private int viewList = 3;
	
	public BbsDAO() {
		try {
			String DBURL = "jdbc:mysql://localhost:3306/bbs";	
			String DBID = "root";
			String DBPW = "1234";
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(DBURL, DBID, DBPW);
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}		
	}
	
		// 글쓰기에 사용한 현재날짜시간 메소드 : dateTime
		public String getDate() {
			String SQL = "SELECT now()";
			
			try {
				PreparedStatement ps = conn.prepareStatement(SQL);
				rs = ps.executeQuery();
				if(rs.next()) {
					return rs.getString(1);
				}
			}catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			
			return ""; //데이터베이스 오류
		}
		
	
		// 게시글 번호 다음 번호 생성
		public int getNumber() {
			// 마지막 글번호 +1
			String SQL = "SELECT bbsId FROM bbs ORDER BY bbsId DESC";
			try {
				PreparedStatement ps = conn.prepareStatement(SQL);
				rs = ps.executeQuery();
				if(rs.next()) {
					return rs.getInt(1) + 1;	//글번호 증가
				}
                else{
				    return 1; // 첫번째 입력할 글번호 즉 => 저장된 게시글이 한 개도 없을 때
                }
			}catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return -1;
		}
        
		
			// 게시판 글쓰기(Write) 메서드
			public int write(String userId, String subject, String content) {
				String SQL = "INSERT INTO bbs VALUES(?, ?, ?, ?, ?, ?, ?)";	
				
				try {
					PreparedStatement ps = conn.prepareStatement(SQL);
					ps.setInt(1, getNumber()); // 글번호(마지막글번호+1 함수 getNumber)  
					ps.setString(2, userId); // 작성자
					ps.setString(3, subject); // 제목  
					ps.setString(4, content); // 내용  
					ps.setString(5, getDate()); // 작성일(현재날짜가져오기 함수) 
					ps.setInt(6, 1); // 삭제여부기본값입력(1) (0은삭제)
					ps.setInt(7, 0); // 조회수 = > 글보기하면 1씩 증가하는 조회수 hit
					return ps.executeUpdate();
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
				}				
				return -1;  // 데이터베이스 오류
			}	
            
            
		// 게시글 리스트(목록) 메소드
		// 페이지네이션
		// 1. 매개변수로 글번호 bbsId deleteOk=1 사용가능한 목록만 글번호 bbsId 내림차순 그리고 5개씩 출력
		public ArrayList<BbsDTO> getList(int pageNumber){
//			String SQL = "SELECT * FROM	(SELECT *, @no := @no+1 as no FROM bbs, (SELECT @no:=0) as v_format_no WHERE deleteOk=1) as v_table WHERE no <=?  ORDER BY bbsId DESC LIMIT ?";
			String SQL = "SELECT * FROM "
					   + "(SELECT *, @no := @no + 1 as no FROM bbs, "
					   + "(SELECT @no:=0) as v_format_no  WHERE deleteOk=1) as v_table "
					   + "WHERE no <=? ORDER BY bbsId DESC LIMIT ?"; 
			ArrayList<BbsDTO> list = new ArrayList<BbsDTO>();
			
			try {
				PreparedStatement ps = conn.prepareStatement(SQL);
				ps.setInt(1, totalRecordsMethod() - (pageNumber-1) * viewList);
				ps.setInt(2, viewList);
				rs = ps.executeQuery();
				while(rs.next()) {
					BbsDTO bbsDTO = new BbsDTO();
					bbsDTO.setBbsId(rs.getInt(1));
					bbsDTO.setUserId(rs.getString(2));
					bbsDTO.setSubject(rs.getString(3));
					bbsDTO.setConent(rs.getString(4));
					bbsDTO.setWriteDate(rs.getString(5));
					bbsDTO.setDeleteOk(rs.getInt(6));
					bbsDTO.setHit(rs.getInt(7));
					list.add(bbsDTO);
				}
			}
			catch (Exception e) {
				e.printStackTrace();
			}
			return list;
		}
		
		// 다음페이지함수 리턴값은 다음페이지 유무 true(다음페이지 존재함) or false(다음페이지없음)
		// 다음페이지카운트함수
		public boolean nextPage(int pageNumber) {
			String SQL = "select * from bbs where bbsId < ? and deleteOk=1 order by bbsId desc limit ?";
			try {
				PreparedStatement ps = conn.prepareStatement(SQL);
				ps.setInt(1, totalRecordsMethod() - (pageNumber-1) * viewList);		
				ps.setInt(2, viewList);
				rs = ps.executeQuery();
				while(rs.next()) {
					return true;
				}
			}
			catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return false;
		}
		
		// 전체레코드 수 카운트 함수
		public int totalRecordsMethod() {			
			String SQL = "SELECT COUNT(bbsId) FROM bbs WHERE deleteOk = 1";
			try {
				PreparedStatement ps= conn.prepareStatement(SQL);
				rs = ps.executeQuery();
				while(rs.next()){
					return totalRecords = rs.getInt(1);
				}
			}
			catch(Exception e){
				e.printStackTrace();
			}
			return totalRecords;
		}
		
		// 조회수 증가하는 함수(bbsId)
		public int hitCount(int bbsId) {
			// SQL 조회수 증가
			String SQL = "UPDATE bbs SET hit=hit+1 WHERE deleteOk=1 AND bbsId = ?";
			try {
				PreparedStatement ps = conn.prepareStatement(SQL);
				ps.setInt(1, bbsId);
				return ps.executeUpdate();
				
			}catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			return -1;
		}
		
		
		
		

		// 글보기 하나의 글목록 내용을 return
		public BbsDTO getView(int bbsId) {
			String SQL = "SELECT * FROM bbs WHERE deleteOk=1 and bbsId = ?";
			try {
				PreparedStatement ps = conn.prepareStatement(SQL);
				ps.setInt(1, bbsId);
				rs = ps.executeQuery();
				// 조회수 증가 함수
				hitCount(bbsId);
				while(rs.next()) {
					BbsDTO bbsDTO = new BbsDTO();
					bbsDTO.setBbsId(rs.getInt(1));
					bbsDTO.setUserId(rs.getString(2));
					bbsDTO.setSubject(rs.getString(3));
					bbsDTO.setConent(rs.getString(4));
					bbsDTO.setWriteDate(rs.getString(5));
					bbsDTO.setDeleteOk(rs.getInt(6));
					bbsDTO.setHit(rs.getInt(7));
					return bbsDTO;
					
				}
			}catch (Exception e) {
				e.printStackTrace();
			}
			return null;
		}
		
		// 삭제 구현
		// 게시글 삭제 메소드
		public int delete(int bbsId) {
			// 글의 작성자 일치 and 글번호 일치 삭제
			// String SQL = "DELETE FROM bbs WHERE bbsId = ? AND userId = ?";
			String SQL = "UPDATE bbs SET deleteOk = 0 WHERE bbsId = ? ";
			try {
				PreparedStatement ps = conn.prepareStatement(SQL);
				ps.setInt(1, bbsId);
				return ps.executeUpdate();
			}
			catch (Exception e) {
				e.printStackTrace();
			}
			return -1;
		}
		
		// 게시판 글 수정
		public int update(int bbsId, String subject, String conent) {
			String SQL = "UPDATE bbs SET subject=?, conent=?, writeDate=? WHERE bbsId = ?";
			try {
				PreparedStatement ps = conn.prepareStatement(SQL);
				ps.setString(1, subject);
				ps.setString(2, conent);
				ps.setString(3, getDate());
				ps.setInt(4, bbsId);
				return ps.executeUpdate();
			}catch (Exception e) {
				e.printStackTrace();
			}
			return -1;
		}
		
	
	
	
}
