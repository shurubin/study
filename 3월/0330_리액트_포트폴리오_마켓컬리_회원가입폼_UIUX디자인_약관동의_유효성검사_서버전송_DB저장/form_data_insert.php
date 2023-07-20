<?

    // 관리자 서버
    // http://susubini03.dothome.co.kr/myadmin
    // http://susubini03.dothome.co.kr/signup_db/form_data_insert.php

    // CORS
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');

    // DB 인증
    $db_server    = 'localhost';
    $db_user_name = 'susubini03';
    $db_password  = 'ho8297pa!';
    $db_name      = 'susubini03';

    $conn = mysqli_connect($db_server, $db_user_name, $db_password, $db_name);
    $result = mysqli_set_charset($conn, 'utf8');

    // 리액트 폼데이터 받는다
    // 변수에 저장   //변수 11개에서 $_POST[]를 지우고 값만 남겨 알드라이브에 저장 후 http://susubini03.dothome.co.kr/signup_db/form_data_insert.php 접속해보기
    // 성공 시 테이블에 회원정보저장 성공 화면 출력
    $user_id        = $_POST['user_id'];
    $user_pw        = $_POST['user_pw'];
    $user_name      = $_POST['user_name'];
    $user_email     = $_POST['user_email'];
    $user_hp        = $_POST['user_hp'];
    $user_addr      = $_POST['user_addr'];
    $user_gender    = $_POST['user_gender'];
    $user_birth     = $_POST['user_birth'];
    $user_add_input = $_POST['user_add_input'];
    $user_service   = $_POST['user_service'];
    $user_gaib_date = $_POST['user_gaib_date'];
    



    // DB에 저장
    $sql =  "INSERT INTO signup_table(id, pw, name, email, hp, addr, gender, birth, chooga, service, gaib_date)
            VALUES('$user_id','$user_pw','$user_name','$user_email','$user_hp','$user_addr','$user_gender','$user_birth','$user_add_input','$user_service','$user_gaib_date')";
    $result = mysqli_query($conn, $sql);

    if(!$result){
        echo("데이터베이스 테이블에 회원 정보 저장 실패!");
    }
    else {
        echo("데이터베이스 테이블에 회원 정보 저장 성공!");
    }




?>