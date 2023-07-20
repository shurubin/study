<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "java.util.*" %>

<% 
    request.setCharacterEncoding("UTF-8"); 
%>

<%
    ArrayList<String> list = new ArrayList<>();
    list.add("딸기");
    list.add("사과");
    list.add("수박");
    list.add("바나나");
    list.add("포도");
    list.add("메론");
    list.set(4, "체리");
    list.remove(4);

    out.println("<hr>");
    out.println( list );



    out.println("<ol>");
        for(int i=0; i<list.size(); i++){
            out.println("<li>"+ list.get(i) +"</li>");
        }
    out.println("</ol>");



    out.println("<ol>");
        for(int i=0; i<list.size(); i++){
            out.println("<li>"+ list.get(i) +"</li>");
        }
    out.println("</ol>");

%>





