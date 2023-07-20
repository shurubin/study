$(function(){ //제이쿼리 선언문 > $사인이 제이쿼리 라이브러리와 충돌성이 있다.
    console.log( $ );
});

(function($){  //내부변수

    //객체 생성 : 변수의 중복을 피한다.
    const wedding = {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();

        },
        header(){

            //로딩 시 바로가기 메뉴의 포지션 탑값을 가져오기
            console.log($('#section6').offset().top);  //top값
            console.log($('#section6').offset().left); //left값


            // 메인버튼 스무스 스크롤링 이벤트 : 스무스 스크롤링 이벤트
            $('.main-btn').on({
                click(){
                    // attribute 어트리뷰트 속성 프로퍼티
                    console.log($(this).attr('href'));
                    let pos = $(this).attr('href');
       
                    $('html.body').animate({scrollTop: $( pos ).offset().top}, 500);
                }
                    
            })




            //모바일 버튼 이벤트
            //선택자 : 모바일 메뉴 햄버거메뉴 클릭 이벤트 구현
            //클릭하면 이 버튼 안에 자식요소에서 line클래스를 찾아서 find('.line')
            //on 클래스 추가 (addClass('on'))
            $('.mobile-btn').on({
                click(){
                    // $(this).find('.line').addClass('on');
                    // $(this).find('.line').removeClass('on');
                    $(this).find('.line').toggleClass('on');
                }
            });


            // '7' == 7 등호 2개는 참으로 나오나 잘못됨 앞은 문자 뒤는 숫자
            // '7' === 7 등호 3개는 거짓으로 나옴 정상동작 논리비교는 = 3개를 사용 

            // let t = false; //토글 구현 : 스위칭 교환
            // $('.mobile-btn').on({
            //     click(){
            //         if(t===false){ //t가 0이면 1로 변환
            //             t=true;
            //             $(this).find('.line').addClass('on');
            //         }
            //         else {  //t가 1이면 0으로 변환
            //             t=false;
            //             $(this).find('.line').removeClass('on');
            //         }
            //     }
            // });



            
        },
        section1(){
            console.log( 'section1' );
        },
        section2(){
            console.log( 'section2' );
        },
        section3(){
            console.log( 'section3' );
        },
        section4(){},
        section5(){},
        section6(){},
        section7(){},
        section8(){}
    }

    wedding.init();

})(jQuery); //즉시 실행함수 IIFE

// (function(){
//     alert('즉시실행함수');    
// });

