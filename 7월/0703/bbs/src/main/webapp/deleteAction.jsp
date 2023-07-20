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
</head>
<body>

	<h1>글쓰기 액션파일</h1>
	
<% 
	// 세션 가져오기
	String userId = null;
	if(session.getAttribute("userId")!=null){ //세션값이 비어있지 않으면 세션아이디 변수에 저장
		userId = (String)session.getAttribute("userId");
	}

// 1 로그인 성공한 회원만 글을 쓸 수 있도록 제한을 정한다.
if(userId == null){
%>
	<script>
		alert("회원만 글을 쓸 수 있습니다.\n로그인해주세요.");
		location.href="./login.jsp";
	</script>
<%
}
else{   // 1. 로그인 성공한 회원만 글을 쓸수있도록 제한 조건을 구현한다.
        //     여기에 글번호 이후 모든 코딩 여기에 코딩한다.
        //2. 글번호 유효성 검증
        int bbsId = 0;
        if(request.getParameter("bbsId") != null ){
	    bbsId = Integer.parseInt(request.getParameter("bbsId")); // 글번호를 정수형으로 형변환
        }

        if(bbsId==0){ // 3.삭제할 글번호가 없는경우
        %>
            <script>
                alert("유효한 글이 아닙니다.");
                location.href='./bbsListAction.jsp';
            </script>
        <%
        }
        else{ //3. 삭제할 글번호가 있는경우
            //4. BbsDAO.getView(bbsId) 게시글 정보를 가져와서 
            //	 삭제하고자하는 글번호와 작성자 일치여부 확인
                BbsDTO bbsDTO = new BbsDAO().getView(bbsId);
                if(bbsDTO==null){ //리턴값이 null인 경우
            %>
                <script>
                    alert("삭제할 데이터가 없습니다.");
                    location.href='./bbsListAction.jsp';
                </script>
            <%	
            }
            else{ // 리턴값이 null 이 아닌경우  실제 삭제 번호가 존재하는 경우

                // 작성자와 글 데이터정보 비교  글번호==본인글번호 작성자 아이디 본인아이디
					if(!userId.equals(bbsDTO.getUserId())){ // 지금 삭제할 글번호의 작성자가 아니면
					%>
						<script>
							alert("삭제할 권한이 없습니다."); // 작성자 본인만이 삭제 가능하다.
							location.href='./bbsListAction.jsp';
						</script>
					<%		
					}
                    else{
                        // 4. 삭제 메소드에 삭제할 글번호를 전달하고 삭제한다.
                        BbsDAO bbsDAO = new BbsDAO();
                        int result = bbsDAO.delete(bbsId);
                        
                        if(result==-1){
                %>
                            <script>
                                alert("글 삭제 실패했습니다.");
                                history.go(-1);
                            </script>
                <%		
                        }
                        else{
                %>
                            <script>
                                alert("글 삭제 성공했습니다.");
                                location.href='./bbsListAction.jsp';
                            </script>
                <%
                    }                
		    }
        } // 삭제할 글번호가 유효성이 있는 번호 조건
    } // 삭제할 글번호가 있는 경우의 조건 end		
}  // 로그인이 된경우 end

%>





</body>
</html>