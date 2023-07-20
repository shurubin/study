<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
 <%@ page import = "kurly.UserDAO" %>
 <%@ page import = "kurly.UserDTO" %>
        
<% 
	request.setCharacterEncoding("UTF-8");
%>

<%
	// 아이디 입력상자, 이메일 입력상자 유효성 검사
	if(request.getParameter("user_id")==null || request.getParameter("user_hp")==null){
		%>
			<script>
				alert("아이디, 전화번호 입력상자를 입력해주세요!");
				history.go(-1);
			</script>
		<%	
	}
	else{
		// DAO 클래스 인스턴스 생성하고 비밀번호 찾기 함수를 호출실행(매개변수 아이디, 이메일)
		// 결과는 UserDTO().비밀번호찾기함수(파라미터1, 파라미터2) 로 반환받는다.
		UserDTO userDTO = new UserDAO().pwSearch(request.getParameter("user_id"), request.getParameter("user_hp"));
		
		if(userDTO==null){ //찾는데 실패
			%>
				<script>
					alert("아이디와 전화번호를 확인하고 다시 시도하세요");
					history.go(-1);
				</script>			
			<%			
		}
		else{ // 찾음 => 검색 결과 아이디를 검색결과 화면에 쿼리스트링 파라미터로 보내준다.
			%>
				<script>
					location.href="./pwSearchResult.jsp?user_Pw=<%=userDTO.getUser_pw()%>"
				</script>
			<%
		}
	}
%>
