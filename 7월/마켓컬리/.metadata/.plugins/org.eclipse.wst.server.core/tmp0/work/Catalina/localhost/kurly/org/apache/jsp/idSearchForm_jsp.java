/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/9.0.73
 * Generated at: 2023-07-04 02:04:07 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class idSearchForm_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = null;
  }

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
      throws java.io.IOException, javax.servlet.ServletException {

    if (!javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
      final java.lang.String _jspx_method = request.getMethod();
      if ("OPTIONS".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        return;
      }
      if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSP들은 오직 GET, POST 또는 HEAD 메소드만을 허용합니다. Jasper는 OPTIONS 메소드 또한 허용합니다.");
        return;
      }
    }

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("<!DOCTYPE html>\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("<meta charset=\"UTF-8\">\r\n");
      out.write("<title>Insert title here</title>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("	\r\n");
      out.write("	\r\n");
      out.write("<div id='login'>\r\n");
      out.write("	<div class='container'>\r\n");
      out.write("		<div class='title'>\r\n");
      out.write("			<h1>아이디 찾기</h1>\r\n");
      out.write("		</div>\r\n");
      out.write("		\r\n");
      out.write("		<div class=\"content\">\r\n");
      out.write("		    <form name=\"idSearchForm\" autocomplete=\"off\" id=\"idSearchForm\" method=\"post\" action=\"./idSearchAction.jsp\">\r\n");
      out.write("		        <ul>\r\n");
      out.write("		            <li><input  maxlength=\"16\" type=\"text\" name=\"user_name\" id=\"user_name\" placeholder=\"이름을 입력하세요\"></li>\r\n");
      out.write("		            <li><input maxlength=\"16\" type=\"text\" name=\"user_hp\" id=\"user_hp\" placeholder=\"전화번호를 입력하세요\"></li>\r\n");
      out.write("		        </ul>\r\n");
      out.write("		        <div class=\"search-box\">\r\n");
      out.write("\r\n");
      out.write("		        </div>\r\n");
      out.write("		        <div class=\"button-box\" style=\"text-align:center\">\r\n");
      out.write("		            <button type=\"submit\"> ID SEARCH </button>\r\n");
      out.write("		        </div>\r\n");
      out.write("		    </form>\r\n");
      out.write("		</div>\r\n");
      out.write("	\r\n");
      out.write("	</div>\r\n");
      out.write("</div>	\r\n");
      out.write("	\r\n");
      out.write("	\r\n");
      out.write("\r\n");
      out.write("</body>\r\n");
      out.write("\r\n");
      out.write("<style type=\"text/css\">\r\n");
      out.write("	* {margin:0; padding:0; vertical-align:center;box-sizing:border-box;}\r\n");
      out.write("	ul {list-style:none;}\r\n");
      out.write("	a {color:#333;text-decoration:none;}	\r\n");
      out.write("	\r\n");
      out.write("   #header{width:100%; height:80px; background:#e9e9e9;}\r\n");
      out.write("   #header .container{width:100%; max-width:80%; margin:0 auto; height:100%; display:flex; align-items:center; justify-content:space-between;}\r\n");
      out.write("   #header .container .left{width:50%; font-weight:600;}\r\n");
      out.write("   #header .container .left h1{font-size:20px; display:inline-block; color:#5f0080; margin: 0 20px 0 0;}\r\n");
      out.write("   #header .container .left a{font-size:17px; color:#333; margin:0 10px;}\r\n");
      out.write("   #header .container .left a:hover{color:#5f0080;}\r\n");
      out.write("   #header .container .right{width:50%; text-align:right;}\r\n");
      out.write("   #header .container .right a{font-size:17px; color:#333; margin:0 10px;}\r\n");
      out.write("   #header .container .right a:hover{color:#5f0080;}\r\n");
      out.write("	\r\n");
      out.write("	\r\n");
      out.write("	\r\n");
      out.write("	#login {width:100%;padding:100px 0;}\r\n");
      out.write("	#login .container {width:100%;max-width:600px;margin:0 auto;background:#f7f7f7;padding:100px;}\r\n");
      out.write("	#login .container .title {text-align:center;padding:0 0 60px 0;}\r\n");
      out.write("	#login .container .title h1 {font-size:28px;text-align:center;color:#5f0080;font-weight:500;}\r\n");
      out.write("	\r\n");
      out.write("	#login .container .content {width:100%;height:auto;}\r\n");
      out.write("	#login .container .content form {width:100%;}\r\n");
      out.write("	#login .container .content form ul {width:100%;}\r\n");
      out.write("	#login .container .content form ul li {width:100%;padding:5px 0;}\r\n");
      out.write("	#login .container .content form ul li input {\r\n");
      out.write("		width:100%;height:48px;padding:0 15px;font-size:16px;border:1px solid #ddd;\r\n");
      out.write("		outline-offset:-1px;outline:1px solid transparent;transition: all 0.3s;\r\n");
      out.write("	}\r\n");
      out.write("	#login .container .content form ul li input:focus {outline:1px solid #888;}\r\n");
      out.write("\r\n");
      out.write("	#login .container .content form .search-box{width:100%; padding: 10px 0 0 0; text-align:right; font-size:13px; font-style:normal;}\r\n");
      out.write("	#login .container .content form .search-box a{color:#444;}\r\n");
      out.write("	#login .container .content form .search-box a:hover{color:#5f0080;}\r\n");
      out.write("	\r\n");
      out.write("	#login .container .content form .search-box i{margin:0 10px; font-style:normal;}\r\n");
      out.write("	\r\n");
      out.write("	#login .container .content form .button-box {width:100%;padding: 50px 0; text-align:center;}\r\n");
      out.write("	#login .container .content form .button-box button {\r\n");
      out.write("		width:100%;height:48px;font-size:17px;color:#fff;border-radius:3px;border:0;\r\n");
      out.write("		background:#5f0080;cursor:pointer;		\r\n");
      out.write("		transition: all 0.3s;\r\n");
      out.write("	}\r\n");
      out.write("	#login .container .content form .button-box button:hover {opacity:0.8}\r\n");
      out.write("	\r\n");
      out.write("</style>\r\n");
      out.write("\r\n");
      out.write("</html>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
