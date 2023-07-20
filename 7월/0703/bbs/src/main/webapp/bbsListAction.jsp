<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "bbs.BbsDAO" %>
<%@ page import = "bbs.BbsDTO" %>
<%@ page import = "java.util.ArrayList" %>

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
<title>게시판 메인</title>



</head>
<body>

	<%
	// 로그인 정보 => 세션 가져오기
	String userId = null;
	if(session.getAttribute("userId")!=null){ // 세션값이 비어있지 않으면 세션아이디 변수에 저장
		userId = (String)session.getAttribute("userId");
	}
	%>
	
		<header id='header'>
			<div class='container'>
				<div class='left'>
					<h1>BBS Board</h1>
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

<div id='bbsList' >

	<table>
		<caption>BBS BOARD</caption>
		<thead>
			<tr>
				<th>번호</th>
				<th>제목</th>
				<th>작성자</th>
				<th>작성일</th>
				<th>조회수</th>
			</tr>			
		</thead>
		<tbody>
		
		<%
			int pageNumber = 1;
			// 다음페이지 클릭하면 보내진 쿼리스트링의 겟파라미터 키인 pageNumber 
			// 파라미터가 비어있지않으면 파라미터값을 가져와서
			// pageNumber 변수에 값을 대입(저장)한다
			if(request.getParameter("pageNumber") != null){
				pageNumber = Integer.parseInt(request.getParameter("pageNumber"));
			}
		
		
			BbsDAO bbsDAO = new BbsDAO();
			ArrayList<BbsDTO> list = bbsDAO.getList(pageNumber);
			for(int i=0; i<list.size(); i++){
		%>
		
		
			<tr>
				<td><%=list.get(i).getBbsId() %></td>
				<td><a href="viewAction.jsp?bbsId=<%=list.get(i).getBbsId() %>"><%=list.get(i).getSubject() %></a></td>
				<td><%=list.get(i).getUserId() %></td>
				<td><%=list.get(i).getWriteDate() %></td>
				<td><%=list.get(i).getHit() %></td>
			</tr>	
			
		<%
			}		
		%>			
		</tbody>
	</table>
	
	<div class="pagebtn-box" style='text-align:center;'>
	<%
		if(pageNumber>1){
	%>
			<a class="prev-btn" href="./bbsListAction.jsp?pageNumber=<%= pageNumber-1%>">이전</a>
	<%
		}
	%>
	

	<%
		// 전체레코드수
		// 한페이지에 보여지는 목록의 개수 5
		//페이지수 5페이지
		int totalRecords = bbsDAO.totalRecordsMethod();
		//int totalRecords = bbsDAO.전체레코드수();
		//int totalRecords = 9;
		int viewList = 3;
		int viewGroup = 2;
		int pages = (int)Math.ceil(totalRecords/(double)viewList);		
		int groups = (int)Math.ceil(pages/(double)viewGroup);
		int cnt = 1;
		int startNum = (cnt-1)*viewGroup;
		int endNum=startNum+viewGroup;
	%>

	
		
	<%	
		if(request.getParameter("cnt") !=null ){
			cnt = Integer.parseInt(request.getParameter("cnt"));
		}
		
		// 버튼그룹 => 파라미터를 통해서 다음 페이지 이동
		startNum = (cnt-1) * viewGroup; //  0
		endNum=startNum + viewGroup;    // < 2
		if(endNum > pages){
			endNum = pages;
		}
	%>
		
		
		
	<%
		if( cnt > 1 ){ // 그룹버튼 개수 미만
 	%>
		<a class='next-group-btn' href='./bbsListAction.jsp?cnt=<%=cnt-1%>'>&lt;</a>
 	<%
		}
 	%>
 	
 	
		
	<%	
		for(int i=startNum; i<endNum; i++){ //0~1 / 2~3 / 4~5 / 6~7
	%>		
			<a class='page-btn' href='./bbsListAction.jsp?pageNumber=<%=i+1%>'><%=i+1%></a>
	<%		
		}
	%>	
	
	
			
	<%
		if(cnt < groups ){ // 그룹버튼 개수 미만
 	%>
		<a class='next-group-btn' href='./bbsListAction.jsp?cnt=<%=cnt+1%>'>&gt;</a>
 	<%
		}
 	%>

	<script>
	//	alert(<%= totalRecords%>);
	</script>
	
	<%
		if(bbsDAO.nextPage(pageNumber+1)){
	%>
			<a class="next-btn" href="./bbsListAction.jsp?pageNumber=<%= pageNumber+1%>">다음</a>
	<%
		}
	%>
		
		
	</div>
	
		<%
			if(userId!=null){
		%>	
		<div class="button-box" style="text-align:center">
	        <a href="./write.jsp"> 글쓰기 </a>
	    </div>
		<%
			}
		%>
	

</div>
	
	
		<style>
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
		#header .container .left  h1 {font-size:24px;display:inline-block;color:#5f0080;margin:0 20px 0 0;}
		#header .container .left  a  {foant-size:17px;color:#333;margin:0 10px;}
		#header .container .left  a:hover  {color:#5f0080;}
		#header .container .right {width:50%;text-align:right;}
		#header .container .right a  {foant-size:17px;color:#333;margin:0 10px;}
		#header .container .right a:hover  {color:#5f0080;}
		
		


		
		#bbsList {width:100%;padding:60px 0 100px 0; text-align:center;}
		#bbsList table {width:100%;max-width:1000px;margin:0 auto;border-collapse:collapse;}
		#bbsList table caption {width:100%;padding: 0 0 60px 0;font-size:24px;font-weight:600}
				
		#bbsList table th,td {border-bottom:1px solid #eee;}		
		#bbsList table th {height:60px;background:#f4f4f4;color:#222;font-size:16px;}
		#bbsList table td {height:50px;background:#fff;color:#444;font-size:15px;text-align:center;}		
		#bbsList table th:nth-child(1) {width:80px;}
		#bbsList table th:nth-child(2) {width:600px;}	
		#bbsList table th:nth-child(3) {width:120px;}
		#bbsList table th:nth-child(4) {width:150px;}
		#bbsList table th:nth-child(5) {width:50px;}
		#bbsList table tr:nth-child(even) td {background:#fcfcfc;}
		#bbsList table th {border-top:2px solid #444;border-bottom:1px solid #444;}		
		

		#bbsList table td:nth-child(2) {text-align:left;}			
		#bbsList table td:nth-child(4) {font-size:14px;color:#999;}			
		#bbsList table td a {			
			padding: 0 0 0 20px;
			white-space:nowrap;
			overflow: hidden;			
			display:block;			
			max-width:590px;
			text-overflow:ellipsis;
			transition: all 0.3s;			
		}
		#bbsList table td a:hover {color:#5f0080;}
		
		#bbsList .button-box {
			padding: 50px 0 0 0;
		}
		#bbsList .button-box  a {
			display:flex;
			margin:auto;
			align-items: center;
			justify-content:center;			
			width:200px;height:48px;font-size:17px;color:#fff;border-radius:3px;border:0;
			background:#333;cursor:pointer;		
			transition: all 0.3s;
		}
		#bbsList .button-box a:hover {background:#111;}
		
		#bbsList .pagebtn-box {padding:30px 0;text-align:center;}
		#bbsList .pagebtn-box a {
			display:inline-flex;width:30px;height:30px;border:1px solid #ddd;color:#555;
			font-size:14px;align-items:center;justify-content:center;border-radius:3px;		
		}
		#bbsList .pagebtn-box a.page-btn {margin: 0 1px;}
		#bbsList .pagebtn-box a.prev-btn {width:50px;margin: 0 10px 0 0;border:1px solid #5f0080;color:#5f0080;}
		#bbsList .pagebtn-box a.next-btn {width:50px;margin: 0 0 0 10px;border:1px solid #5f0080;color:#5f0080;}
	
	</style>
	
	

</body>
</html>