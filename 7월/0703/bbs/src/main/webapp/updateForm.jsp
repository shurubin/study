<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "bbs.BbsDAO" %>
<%@ page import = "bbs.BbsDTO" %>

<% 
	request.setCharacterEncoding("UTF-8");
%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<style type="text/css">
	* {margin:0; padding:0; vertical-align:center;box-sizing:border-box;}
	ul {list-style:none;}
	a {color:#333;text-decoration:none;}
	
	#header {width:100%;height:80px;background:#f7f7f7;border-bottom:1px solid #ccc;}
	#header .container {
		width:100%;max-width:80%;margin:0 auto;
		height:100%;
		display:flex;
		align-items:center;		
		justify-content:space-between;
		font-weight:600;
	}	
	#header .container .left  {width:50%;}
	#header .container .left  h1 {font-size:24px;display:inline-block;color:#5f0080;margin:0 20px; 0 0;}
	#header .container .left  a  {foant-size:17px;color:#333;margin:0 10px;}
	#header .container .left  a:hover  {color:#5f0080;}
	#header .container .right {width:50%;text-align:right;}
	#header .container .right a  {foant-size:17px;color:#333;margin:0 10px;}
	#header .container .right a:hover  {color:#5f0080;}
	
	
	#write {width:100%;padding:100px 0;}
	#write .container {width:100%;max-width:1000px;margin:0 auto;}
	#write .container .title {text-align:center;padding:0 0 60px 0;}
	#write .container .title h1 {font-size:28px;text-align:center;font-weight:500;}
	
	#write .container .content {width:100%;height:auto;}
	#write .container .content form {width:100%;}
	#write .container .content form ul {width:100%;}
	#write .container .content form ul li {width:100%;padding:5px 0;}
	#write .container .content form ul li input {
		width:100%;height:48px;padding:0 15px;font-size:16px;border:1px solid #ccc;
		outline-offset:-1px;outline:1px solid transparent;transition: all 0.3s;
	}
	#write .container .content form ul li textarea  {
		width:100%;height:250px;font-size:16px;border:1px solid #ccc;
		outline-offset:-1px;outline:1px solid transparent;transition: all 0.3s;
		resize:none;padding:10px 15px;		
	}
	#write .container .content form .button-box {width:100%;padding: 50px 0; text-align:center;}
	#write .container .content form .button-box button {
		width:100%;height:48px;font-size:17px;color:#fff;border-radius:3px;border:0;
		background:#333;cursor:pointer;		
		transition: all 0.3s;
	}
	#write .container .content form .button-box button:hover {background:#111;}
	
</style>

<title>Insert title here</title>
</head>
<body>

<%

// 로그인 정보 => 세션 가져오기
String userId = null;
if(session.getAttribute("userId")!=null){ // 세션값이 비어있지 않으면 세션아이디 변수에 저장
	userId = (String)session.getAttribute("userId");
}

if(userId == null){ //로그인 안한 상태
%>
	<script>
		alert("회원만 글을 쓸 수 있습니다.\n로그인해주세요.");
		location.href="./login.jsp";
	</script>		
<%	
}
else{ //1. 로그인 상태
	  //2. 글번호 유효성
	  int bbsId = 10; //현재는 수정할 글번호가 없는 세팅
	  if(request.getParameter("bbsId")!=null){ // 업데이트 이전상태 즉 글보기상태에서 던져준 글번호
		  bbsId = Integer.parseInt(request.getParameter("bbsId")); //글번호 가져오기
	  }
	  
	  if(bbsId==0){ //수정할 글번호가 없다.
 %>
          <script>
	          alert("유효한 글이 아닙니다. 수정할 글을 선택하세요");
	          location.href='./bbsListAction.jsp';
	      </script>
<%
	  }
	  else{ // 수정할 글번호가 있다
			// 글보기 내용을 가져와서 화면폼에 데이터를 바인딩하여 수정한다
		    // 수정컨트롤러인(DAO) 업데이트함수(update(매개변수 글번호, 제목, 내용 전달하여))에게 전달한다 > 수정완료 수정액션파일.jsp
		  	BbsDTO bbsDTO = new BbsDAO().getView(bbsId);
		  	if(bbsDTO==null){ // null이면
			%>
                <script>
	                alert("수정할 데이터가 없습니다.");
	                location.href='./bbsListAction.jsp';
	            </script>
            <%
		  	}
		  	else{ // 3-2 null이 아니면 데이터가 있다면
		  		  // 4. 현재 데이터 글번호에 해당하는 아이디가 내가 쓴 글인가?
		  		if(!userId.equals(bbsDTO.getUserId())){ //로그인아이디와 해당글 아이디를 비교해서 다르면
		  			%>
						<script>
							alert("수정할 권한이 없습니다."); // 작성자 본인만이 삭제 가능하다.
							location.href='./bbsListAction.jsp';
						</script>
					<%
		  		}
		  		else{
		  			// 뷰 탬플릿 폼에 수정내용을 바인딩
		  			%>
		  			
	  						<header id="header">
								<div class="container">
									<div class="left">
										<h1>BBS Board</h1>
										<a href="./admin.jsp">HOME</a>
										<a href="./bbsListAction.jsp">게시판</a>
									</div>
									<div class="right">
									<%
										if(userId == null){					
										
									%>
										<a href="./signup.jsp">회원가입</a>
										<a href="./login.jsp">Login</a>
									<%
										}
										else{
									%>
										<a href="logoutAction.jsp">Logout</a>
									<%
										}
									%>
									</div>
								</div>		
							</header>
		  			
							<div id='write'>
								<div class='container'>
									<div class='title'>
										<h1>글수정</h1>
									</div>
									<div class='content'>
									    <form name="writeForm" autocomplete="off" id="writeForm" method="post" action="./updateAction.jsp?bbsId=<%=bbsId%>">
									        <ul>	           	           
									            <li>
									            	<input type="text" maxlength="1000" name="subject" id="subject" placeholder="제목을 입력하세요" value="<%=bbsDTO.getSubject() %>">
									            </li>
									            <li>
									            	<textarea name="conent" id="conent" placeholder="내용을 입력하세요"  ><%=bbsDTO.getConent() %></textarea>	
									            </li>
									        </ul>
									        <div class="button-box" style="text-align:center">
									            <button type="submit"> 수정등록 </button>
									        </div>
									    </form>
									</div>
								</div>
							</div>
		  			<%
		  		}
		  	}
	
		    
			
	  }
	 
}

%>

</body>
</html>