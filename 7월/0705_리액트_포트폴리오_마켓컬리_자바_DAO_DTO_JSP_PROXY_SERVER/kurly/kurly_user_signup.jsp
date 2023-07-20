<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./public/css/style.css">
</head>
<body>
<div id="wrap">
    <section id="signup">
        <div class="container">
            <div class="title">
                <h2>SIGN UP</h2>
            </div>
            <div class="content">
                <form name="sign_up" autocomplete="off" id="signUp" method="post" action="./kurly_user_signup_action.jsp">
                    <ul>
                        <li><input maxlength="16" type="text" name="user_id" id="" placeholder="아이디를 입력하세요" ></li>
                        <li><input maxlength="16" type="password" name="user_pw" id="" placeholder="비밀번호를 입력하세요" ></li>
                        <li><input maxlength="30" type="text" name="user_name" id="" placeholder="이름을 입력하세요" ></li>
                        <li><input maxlength="250" type="email" name="user_email" id="" placeholder="이메일을 입력하세요" ></li>
                        <li><input maxlength="13" type="text" name="user_hp" id="" placeholder="휴대폰을 입력하세요" ></li>
                        <li><input maxlength="250" type="text" name="user_addr" id="" placeholder="주소를 입력하세요" ></li>
                        <li>
                            <input type="radio" name="user_gender" id="male" placeholder="성별을 입력하세요" value="남성">
                            <label for="male">남성</label>
                            <input type="radio" name="user_gender" id="female" placeholder="성별을 입력하세요" value="여성">
                            <label for="female">여성</label>
                            <input type="radio" name="user_gender" id="none" placeholder="성별을 입력하세요" value="선택안함">
                            <label for="none">선택안함</label>
                        </li>
                        <li><input maxlength="10" type="text" name="user_birth" id="" placeholder="생년월일을 입력하세요" ></li>
                    </ul>
                    <div class="submit">
                        <button type="submit">가입하기</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</div>

</body>
</html>