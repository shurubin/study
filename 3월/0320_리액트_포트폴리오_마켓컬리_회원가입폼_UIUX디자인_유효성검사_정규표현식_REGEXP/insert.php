<?
    // 1. 데이터베이스(DataBase) 접근권한 
    // susubini03.dothome.co.kr/signup_db/insert.php
    
    $db_server    = 'localhost';
    $db_user_name = 'susubini03';
    $db_password  = 'ho8297pa!';
    $db_name      = 'susubini03';

    $conn = mysqli_connect($db_server, $db_user_name, $db_password, $db_name);
    mysqli_set_charset($conn, 'utf8');

    // 데이터베이스 접속 확인
    // if( !$conn ){
    //     die('데이터베이스 접근실패!');
    // }
    // else{
    //     echo('데이터베이스 접근성공!');
    // }

    //필드명(Field == item == attribute == column)
    //id, pw, name, email, hp, addr, gender, birth, chooga, service, gaib_date
    
    // 데이터베이스에 회원정보 저장하기
    // "INSERT INTO 테이블이름 (필드1, 필드2, 필드3.....) VALUES ('필드1값', '필드2값', '필드3값',....)"

    $sql =  "INSERT INTO signup_table(id, pw, name, email, hp, addr, gender, birth, chooga, service, gaib_date)
            VALUES
            ('ideass', 'password', '빵빵빵', '000@naver.com', '000-0000-0000', '인천시 서구 검암동 101번지', '여자', '2022-04-25', '마켓컬리 일일세일', '이용약관 동의필수 개인정보 수집∙이용 동의필수 본인은 만 14세 이상입니다.필수', '2023-03-16'),
            ('ideass1', 'password1', '일일일', '111@naver.com', '000-1111-0000', '서울', '여자', '1992-09-15', '마켓컬리 일일세일', '이용약관 동의필수 개인정보 수집∙이용 동의필수 본인은 만 14세 이상입니다.필수', '2023-02-16'),
            ('ideass2', 'password2', '둘둘둘', '222@naver.com', '000-2222-0000', '대전', '여자', '1988-03-23', '마켓컬리 일일세일', '이용약관 동의필수 개인정보 수집∙이용 동의필수 본인은 만 14세 이상입니다.필수', '2023-01-16'),
            ('ideass3', 'password3', '셋셋셋', '333@naver.com', '000-3333-0000', '대구', '여자', '1999-12-25', '마켓컬리 일일세일', '이용약관 동의필수 개인정보 수집∙이용 동의필수 본인은 만 14세 이상입니다.필수', '2023-03-08'),
            ('ideass4', 'password4', '넷넷넷', '444@naver.com', '000-4444-0000', '부산', '여자', '2002-01-18', '마켓컬리 일일세일', '이용약관 동의필수 개인정보 수집∙이용 동의필수 본인은 만 14세 이상입니다.필수', '2023-02-08'),
            ('ideass5', 'password5', '다서엇', '555@naver.com', '000-5555-0000', '경기', '여자', '1967-06-25', '마켓컬리 일일세일', '이용약관 동의필수 개인정보 수집∙이용 동의필수 본인은 만 14세 이상입니다.필수', '2023-01-31')";
    $result = mysqli_query($conn, $sql);

    if(!$result){
        echo("데이터베이스 테이블에 회원정보 저장 실패!");
    }
    else{
        echo("데이터베이스 테이블에 회원정보 저장 성공!");
    }

?>

