<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "bbs.UserDAO" %>

<% 
	request.setCharacterEncoding("UTF-8");
%>

<jsp:useBean id="UserDTO" class="bbs.UserDTO" scope="page" />
<jsp:setProperty name="UserDTO" property="userId"/>
<jsp:setProperty name="UserDTO" property="userPw"/>


    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<% 
	if(UserDTO.getUserId()==null || UserDTO.getUserPw()==null){	
%>
	<script>
		alert("빈 값은 허용하지 않습니다.\n확인하고 다시 시도해주세요.");
		history.go(-1);
		location.href="./login.jsp";
	</script>
<% 
	}
	else{
		UserDAO userDAO = new UserDAO();
		int result = userDAO.login(UserDTO.getUserId(), UserDTO.getUserPw());
		
		if(result==1){
			// 로그인 세션(session)의 속성(Attribute) 설정(setter)하기
			// session.setAttribute("세션의 속성(키 (아이디))", 세션에 넣어줄 필드(키값 (아이디)); //세션할당
			session.setAttribute("userId", UserDTO.getUserId());

			
			
%>
			<script>
				alert("로그인 되었습니다.");
				location.href="./write.jsp";
			</script>
<%
		}
		else if(result==0){
%>
		<script>
			alert("비밀번호가 틀렸습니다.\n확인하고 다시 시도해주세요");
			history.go(-1);
		</script>
<%			
		}
		else if(result==-1){
%>			
		<script>
			alert("아이디가 틀렸습니다.\n확인하고 다시 시도해주세요");
			history.go(-1);
		</script>
			
<%			
		}
		else{
%>			
 		<script>
			alert("데이터베이스를 확인하고 다시 시도해주세요");
			history.go(-1);
		</script>
<%
		}
	}
%>

</body>
</html>