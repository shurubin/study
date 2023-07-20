<?
    // 1. 데이터베이스(DataBase) 접근권한 
    // http://susubini03.dothome.co.kr/signup_db/select.php

    //CORS
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    
    $db_server    = 'localhost';
    $db_user_name = 'susubini03';
    $db_password  = 'ho8297pa!';
    $db_name      = 'susubini03';

    $conn = mysqli_connect($db_server, $db_user_name, $db_password, $db_name);
    mysqli_set_charset($conn, 'utf8');

    //데이터 조회 SELECT 필드, 필드... FROM 테이블이름  ||일부데이터
    //데이터 조회 SELECT * FROM 테이블이름   ||전체 데이터 
    //구조적인 질의 언어
    $sql = "SELECT id, email FROM signup_table";
    $result = mysqli_query($conn, $sql);

    // 응답데이터 response 조회된 결과 $result 데이터를 
    // 배열객체로 변환하고  
    // JSON형태의 데이터로 변환시켜야 JS가 표준으로 사용할 수 있다

    // 1. 배열 객체 선언
    // 2. 레코드(Record)==튜플(Tuple)(한 명(사람1) 데이터정보 row 줄단위) 단위로 데이터를 추출한다.
    // 3. 반복문은 화일문(while(){})
    // 4. 객체속성을 만들고 배열객체에 데이터를 저장한다.
    // 5. JSON으로 변경한다.


    $arr = array();
    while($row = mysqli_fetch_array($result) ){
        array_push($arr, array(
            '아이디'=> $row['id'],
            '이메일'=> $row['email']
        ));
    }


    //인코딩(JSON 데이터변환)
    //기본 상태 : 이스케이프(ESCAPED)문자 유니코드 문자 응답
    //이스케이프(ESCAPED)문자 유니코드 문자 사용 안 함 JSON_UNESCAPED_UNICODE
    echo json_encode($arr, JSON_UNESCAPED_UNICODE);  //echo(에코)를 이용해 리턴에 응답한다 
    


?>

