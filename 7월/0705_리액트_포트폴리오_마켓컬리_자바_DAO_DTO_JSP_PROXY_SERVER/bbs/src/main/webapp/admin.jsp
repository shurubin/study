<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<style type="text/css">
	* {margin:0; padding:0; vertical-align:center;box-sizing:border-box;}
	ul {list-style:none;}
	a {color:#333;text-decoration:none;}
	
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
	#login .container .content form .button-box {width:100%;padding: 50px 0; text-align:center;}
	#login .container .content form .button-box button {
		width:100%;height:48px;font-size:17px;color:#fff;border-radius:3px;border:0;
		background:#5f0080;cursor:pointer;		
		transition: all 0.3s;
	}
	#login .container .content form .button-box button:hover {opacity:0.8}
	
</style>


</head>
<body>
	
	
<div id='login'>
	<div class='container'>
		<div class='title'>
			<h1>로그인</h1>
		</div>
		
		<div class="content">
		    <form name="loginForm" autocomplete="off" id="loginForm" method="post" action="./loginAction.jsp">
		        <ul>
		            <li><input  maxlength="16" type="text" name="userId" id="userId" placeholder="아이디를 입력하세요"></li>
		            <li><input maxlength="16" type="text" name="userPw" id="userPw" placeholder="비밀번호를 입력하세요"></li>
		        </ul>
		        <div class="button-box" style="text-align:center">
		            <button type="submit"> 로그인 </button>
		        </div>
		    </form>
		</div>
	
	</div>
</div>
	
	

</body>
</html>