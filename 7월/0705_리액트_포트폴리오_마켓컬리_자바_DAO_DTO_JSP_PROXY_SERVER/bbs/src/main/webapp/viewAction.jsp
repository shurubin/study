<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "bbs.BbsDAO" %>
<%@ page import = "bbs.BbsDTO" %>

<%
   request.setCharacterEncoding("UTF-8");
%> 

<jsp:useBean id="BbsDTO" class="bbs.BbsDTO" scope="page"/> 
<jsp:setProperty name='BbsDTO'  property="userId"/>
<jsp:setProperty name='BbsDTO'  property="subject"/>
<jsp:setProperty name='BbsDTO'  property="conent"/>  
   

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<style type="text/css">

   *{margin:0; padding:0; vertical-align:center; box-sizing:border-box;}
   ul{list-style:none;}
   a{color:#333; text-decoration:none;}
   
   #header{width:100%; height:80px; background:#e9e9e9;}
   #header .container{width:100%; max-width:80%; margin:0 auto; height:100%; display:flex; align-items:center; justify-content:space-between;}
   #header .container .left{width:50%; font-weight:600;}
   #header .container .left h1{font-size:20px; display:inline-block; color:#5f0080; margin: 0 20px 0 0;}
   #header .container .left a{font-size:17px; color:#333; margin:0 10px;}
   #header .container .left a:hover{color:#5f0080;}
   #header .container .right{width:50%; text-align:right;}
   #header .container .right a{font-size:17px; color:#333; margin:0 10px;}
   #header .container .right a:hover{color:#5f0080;}
   
   #viewPage{width:100%; padding:100px 0;}
   #viewPage .container{width:100%; max-width:1000px; margin:0 auto; padding:50px; background:#f3f3f3;}
   #viewPage .container .title{text-align:center; padding: 0 0 30px 0;}
   #viewPage .container .title h1{font-size:26px; text-align:left; font-weight:500;}
   
   #viewPage .container .content{width:100%; padding:60px 0 100px 0;}
   #viewPage .container .content ul{width:100%; border:1px solid #ddd; border-top:2px solid #333;}
   #viewPage .container .content ul li{width:100%; line-height:50px; display:flex; border:1px solid #ddd;}
   #viewPage .container .content ul li:nth-child(5){background:#fff;}
   #viewPage .container .content ul li span{padding: 0 0 0 20px;}
   #viewPage .container .content ul li span:nth-child(1){width:120px; background:#fafafa;}
   #viewPage .container .content ul li span:nth-child(2){width:880px; border-left:1px solid #ddd;}    
   #viewPage .container .content ul li div{width:100%; padding:20px 20px 100px 20px; line-height:180%; background:#fff;}
   #viewPage .container .content ul li:nth-child(6){border-top:1px solid #333;}
   
   	#viewPage .container .content .button-box {width:100%;padding: 50px 0 0 0; text-align:center;}
	#viewPage .container .content .button-box a {
		display:block; width:10%;height:48px;font-size:17px;color:#fff;border-radius:3px;border:0;display:inline-flex;
		background:#666;cursor:pointer;	transition: all 0.3s; align-items:center;justify-content:center;
	}
	#viewPage .container .content .button-box a:hover {background:#111;}
   
   
</style>

</head>
<body>

<%
// 로그인 정보 => 세션 가져오기
String userId = null;
if(session.getAttribute("userId")!=null){  // 세션값이 비어있지 않으면 세션아이디 변수에 저장한다.
   userId = (String)session.getAttribute("userId");
}
%>

<header id='header'>
   <div class='container'>
      <div class='left'>
         <h1>BBS BOARD</h1>
         <a href='./admin.jsp'>HOME</a>
         <a href='./bbsListAction.jsp'>게시판</a>
      </div>
      <div class='right'>
      <%
         if(userId==null){
      %>
         <a href='./signup.jsp'>Signup</a>
         <a href='./login.jsp'>Login</a>
      <%
         }
         else{
      %>
         <a href='./logoutAction.jsp'>Logout</a>
      <%
         }
      %>
      </div>
   </div>
</header>
   
   
<div id='viewPage'>
   <div class='container'>
      <div class='title'>
         <h1>글보기</h1>
      </div>
      <div class='content'>
         <%
         //게시판 목록에서 보내온 쿼리스트링 키와 키값을 받아서 DAO 에 전달
         //그러면 DAO는 해당 글번호에 상세내용을 리턴해준다.
         //리턴 받는 글내용 모두를
         //현재 페이지에
         //내용을 모두 바인딩해서 화면에 보여준다.
         
         // bbsId 를 변수 bbsId=0(받은게없다는뜻) 으로 초기화하고 받는다.
            int bbsId = 0;
            if(request.getParameter("bbsId") != null){
               bbsId = Integer.parseInt(request.getParameter("bbsId"));
            }
            
            // 만약 클릭한 글번호에 데이터가 없다면
            // 다시 게시판 목록으로 돌려보낸다.
            if(bbsId==0){
         %>
         
               <script>
                  alert("데이터가 없습니다. 다시 확인하고 클릭하세요!");
                  history.go(-1);
               </script>
               
         <%
            }
      
            // 해당 글번호 DAO에게 전달하기
            BbsDTO bbsDTO = new BbsDAO().getView(bbsId);
         %>
         
         <ul>
            <li><span>글번호</span> <span><%= bbsDTO.getBbsId() %></span></li>
            <li><span>작성자</span> <span><%= bbsDTO.getUserId() %></span></li>
            <li><span>작성일</span> <span><%= bbsDTO.getWriteDate() %></span></li>
            <li><span>글제목</span> <span><%= bbsDTO.getSubject() %></span></li>
            <li><span class="guel" >글내용</span> </li>
            <li>
            	<div>
            		<%= bbsDTO.getConent().replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br>") %>
           		</div>
   			</li>
         </ul>
         
         <% 
         	// 제목, 내용안에 < => &lt;  > => &gt;  공백=&nbsp;  \n 줄바꿈 =><br>
         	// bbsDTO.getConent().replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll(" ", "&nbsp;")
         	// .replaceAll("\n", "<br>");
         %>
         
         <div class='button-box' style='text-align:center;'>
         	<a class="list-btn" href="./bbsListAction.jsp">목록</a>
         	<a class="update" href="./updateForm.jsp?bbsId=<%=bbsId%>">수정</a>
         	<a class="delete-btn" onClick="return confirm("정말 삭제하시겠습니까?");" href="./deleteAction.jsp?bbsId=<%=bbsId %>">삭제</a>
         </div>
         
      </div>
   </div>
</div>



    
</body>
</html>