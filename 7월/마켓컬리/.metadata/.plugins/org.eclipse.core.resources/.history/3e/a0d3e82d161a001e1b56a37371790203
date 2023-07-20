<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>




</head>
<body>
	
	<header id="header">
		<div class="container">
			<div class="left">
				<h1>BBS Board</h1>
				<a href="./admin.jsp">HOME</a>
				<a href="./bbsListAction.jsp">게시판</a>
			</div>
			<div class="right">

				<a href="./signup.jsp">회원가입</a>
				<a href="./login.jsp">Login</a>

			</div>
		</div>		
	</header>
	
	
<div id='login'>
	<div class='container'>
		<div class='title'>
			<h1>비밀번호 찾기</h1>
		</div>
		
		<div class="content">
		    <form name="pwSearchForm" autocomplete="off" id="pwSearchForm" method="post" action="./pwSearchAction.jsp">
		        <ul>
		            <li><input  maxlength="16" type="text" name="userId" id="userId" placeholder="아이디를 입력하세요"></li>
		            <li><input maxlength="100" type="text" name="userEmail" id="userEmail" placeholder="이메일을 입력하세요"></li>
		        </ul>
		        <div class="search-box">

		        </div>
		        <div class="button-box" style="text-align:center">
		            <button type="submit"> 비밀번호 찾기</button>
		        </div>
		    </form>
		</div>
	
	</div>
</div>	
	
	

</body>

<style type="text/css">
	* {margin:0; padding:0; vertical-align:center;box-sizing:border-box;}
	ul {list-style:none;}
	a {color:#333;text-decoration:none;}	
	
   #header{width:100%; height:80px; background:#e9e9e9;}
   #header .container{width:100%; max-width:80%; margin:0 auto; height:100%; display:flex; align-items:center; justify-content:space-between;}
   #header .container .left{width:50%; font-weight:600;}
   #header .container .left h1{font-size:20px; display:inline-block; color:#5f0080; margin: 0 20px 0 0;}
   #header .container .left a{font-size:17px; color:#333; margin:0 10px;}
   #header .container .left a:hover{color:#5f0080;}
   #header .container .right{width:50%; text-align:right;}
   #header .container .right a{font-size:17px; color:#333; margin:0 10px;}
   #header .container .right a:hover{color:#5f0080;}
	
	
	
	#login {width:100%;padding:100px 0;}
	#login .container {width:100%;max-width:600px;margin:0 auto;background:#f7f7f7;padding:100px;}
	#login .container .title {text-align:center;padding:0 0 60px 0;}
	#login .container .title h1 {font-size:28px;text-align:center;color:#5f0080;font-weight:500;}
	
	#login .container .content {width:100%;height:auto;}
	#login .container .content form {width:100%;}
	#login .container .content form ul {width:100%;}
	#login .container .content form ul li {width:100%;padding:5px 0;}
	#login .container .content form ul li input {
		width:100%;height:48px;padding:0 15px;font-size:16px;border:1px solid #ddd;
		outline-offset:-1px;outline:1px solid transparent;transition: all 0.3s;
	}
	#login .container .content form ul li input:focus {outline:1px solid #888;}

	#login .container .content form .search-box{width:100%; padding: 10px 0 0 0; text-align:right; font-size:13px; font-style:normal;}
	#login .container .content form .search-box a{color:#444;}
	#login .container .content form .search-box a:hover{color:#5f0080;}
	
	#login .container .content form .search-box i{margin:0 10px; font-style:normal;}
	
	#login .container .content form .button-box {width:100%;padding: 50px 0; text-align:center;}
	#login .container .content form .button-box button {
		width:100%;height:48px;font-size:17px;color:#fff;border-radius:3px;border:0;
		background:#5f0080;cursor:pointer;		
		transition: all 0.3s;
	}
	#login .container .content form .button-box button:hover {opacity:0.8}
	
</style>

</html>