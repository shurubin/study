<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "bbs.UserDAO" %>

<%
	request.setCharacterEncoding("UTF-8");
%>
    
<jsp:useBean id="UserDTO" class="bbs.UserDTO" scope="page"/>
<jsp:setProperty name="UserDTO" property="userId"/>
<jsp:setProperty name="UserDTO" property="userPw"/>
<jsp:setProperty name="UserDTO" property="userName"/>
<jsp:setProperty name="UserDTO" property="userEmail"/>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<%
		// 유효성 체크
		if(UserDTO.getUserId()==null || UserDTO.getUserPw()==null || UserDTO.getUserName()==null){
	%>
			<script>
				alert("아이디, 비밀번호, 이름은 필수 입력사항입니다.");
				history.go(-1);
			</script>
			
	<%
		}
		else{
			// DAO 클래스의 정보를 저장하고 리턴값을 받는다.
			UserDAO userDAO = new UserDAO();
			//int result = userDAO.signup(UserDTO.getUserId(), UserDTO.getUserPw(), UserDTO.getUserName());
			int result = userDAO.signup(UserDTO); // 모든 입력값 하나의 아규먼트 1개 매개변수로 전달
			if(result==-1){ //데이터베이스 오류
	%>			
				<script>
					alert("이미 가입된 아이디입니다.");
					history.go(-1);
				</script>
	
	<%			
			}
			else{
	%>
				<script>
					alert("회원가입 성공했습니다.");
					location.href = "./write.jsp";
				</script>
	<%
			}
		}
	%>

</body>
</html>