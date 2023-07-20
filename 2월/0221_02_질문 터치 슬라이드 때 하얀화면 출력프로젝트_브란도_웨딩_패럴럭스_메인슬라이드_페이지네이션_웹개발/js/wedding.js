// $(function(){  // 제이쿼리 선언문 => $ 사인이 제이쿼리 라이브러리와 충돌성 있다.
//     console.log( $ );
// });

(function($, window, document){ // 내부변수


    // 객체 생성 : 변수의 중복을 피한다.
    const wedding = {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
        },
        header(){


            //패럴럭스 구현
            //스크롤 탑값이 아래로 내려가면 헤더에 on 클래스를 추가한다.
            //스크롤 탑값이 위로 올라가면 헤더에 on 클래스를 삭제한다.

            console.log( `윈도우 스크롤 이벤트 $(window).scrollTop() ${$(window).scrollTop()}`);
            // $(window).resize(); //창크기 높이 너비가 변하면 동작
            // $(window).resize(); //창크기 높이 너비가 변하면 동작

            let newScroll = $(window).scrollTop(); //새로운 스크롤값
            let oldScroll = newScroll;             //이전 스크롤값

            $(window).scroll(function(e){

                newScroll = $(window).scrollTop();
                    // console.log(newScroll);

                    console.log(`newScroll-oldScroll ${newScroll-oldScroll}`);
                    if(newScroll-oldScroll>0){
                        // console.log('아래로');
                        $('#header').addClass('on');
                        $('#header').removeClass('off');
                
                    }
                    if(newScroll-oldScroll<0){
                        // console.log('위로');
                        $('#header').removeClass('on');
                        $('#header').addClass('off');
                    }

                   

                oldScroll = newScroll;
                console.log(oldScroll);

                  



            }); //스크롤값이 변경되면 동작


        


            //스크롤 이벤트는 스크롤이 동작되어야만 동작한다.

            // 로딩시 바로가기 메뉴의 포지션 탑값을 가져오기
            // console.log( $('#section6').offset().top );   // top
            // console.log( $('#section6').offset().left );  // left 값

            // 메인버튼 클릭 이벤트 : 스무스 스크롤링 이벤트
            $('.main-btn').on({
                click(){
                    // attribute 어트리뷰트  속성 포로퍼티
                    // console.log( $(this).attr('href') )
                    let pos = $(this).attr('href');
                    
                    $('html,body').animate({ scrollTop: $( pos ).offset().top }, 500);
                }
            });






            // 모바일 버튼 이벤트
            // 선택자 : 모바일 메뉴 햄버거메뉴 클릭 이벤트
            // 클릭하면
            // 이 버튼 안에 자식요소에서 line 클래스를 찾아서  find('.line')
            // on 클래스 추가(addClass('on')) 
            $('.mobile-btn').on({
                click(){
                    $(this).find('.line').toggleClass('on');
                }
            }); 
            // '7' == 7   true   등호2개는 같다고 출력
            // '7' === 7  false   등호2개는 다르다고 출력


            // let t = false;  // 토글 구현 : 스위칭 교환
            // $('.mobile-btn').on({
            //     click(){
            //         if(t===false){ // t가 false 이면 true 로 변환
            //             t=true;
            //             $(this).find('.line').addClass('on');
            //         }
            //         else{   // t가 true 이면 false 로 변환
            //             t=false;
            //             $(this).find('.line').removeClass('on');
            //         }
            //     }
            // });    
            



            // let t = 0;  // 토글 구현 : 스위칭 교환
            // $('.mobile-btn').on({
            //     click(){
            //         if(t===0){ // t가 0 이면 1 로 변환                       
            //             $(this).find('.line').addClass('on');
            //             t=1;
            //         }
            //         else{   // t가 1 이면 0 로 변환                        
            //             $(this).find('.line').removeClass('on');
            //             t=0;
            //         }
            //     }
            // });    


        },
        section1(){
            let cnt = 0;
            let setId = 0; // 메모리에 할당된 인덱 번호를 저장한다.

            // 1. 메인슬라이드함수 
            function mainSlide(){

                $('.slide-wrap').stop().animate({left: `${-100*cnt}%` }, 1000,'easeInOutExpo', function(){
                    if(cnt > 2) cnt=0;  // 슬라이드 3개 0 1 2 
                    if(cnt < 0) cnt=2;  // 첫번째 왼쪽으로 이동하면 마지막 슬라이드 
                    $('.slide-wrap').stop().animate({left: `${-100*cnt}%` }, 0); // 처음으로 리턴
                });

                // 슬라이드박스 좌표 구하기
                // console.log(cnt, $('.slide-wrap').offset().left );

                // 페이지네이션 함수 추가해주기
                pageNation()


            }

            // 2-1. 다음카운트함수
            function nextCount(){
                cnt++;
                mainSlide();
            }
            // 2-2. 이전카운트함수
            function prevCount(){
                cnt--;
                mainSlide();
            }

            // 3. 자동타이머함수
            function autoTimer(){
                // nextCount(); //즉시실행
                setId = setInterval(nextCount, 4000);  // 다음카운트함수 3초간격으로 호출하기
                console.log( setId ); // 메모리 할당된 인덱번호 확인하기
            }
            autoTimer(); // 로딩시 실행


            // 4. 다음슬라이드, 이전슬라이드
            //    타이머 일시정지
            //    좌우화살버튼에 마우스 올리면
            //    슬라이드 컨테이너 박스에 마우스 올리면(마우스오버 mouseover ===  mouseenter)
            //    슬라이드 컨테이너 박스에 마우스 떠나면(마우스아웃 mouseout ===  mouseleave)
            $('.arrow-next-btn').on({
                mouseenter(){
                    clearInterval(setId);                    
                },
                mouseleave(){
                    autoTimer();
                },
                click(){
                    // 슬라이드 랩퍼 박스가 애니메이션이 진행 중 아니면 다음슬라이드 호출
                    if( !$('.slide-wrap').is(':animated') ){
                        nextCount(); // 다음 슬라이드
                    }
                        
                }
            });
            
            $('.arrow-prev-btn').on({
                mouseenter(){
                    clearInterval(setId);                    
                },
                mouseleave(){
                    autoTimer();
                },
                click(){
                    // 슬라이드 랩퍼 박스가 애니메이션이 진행 중 아니면 이전슬라이드 호출
                    if( !$('.slide-wrap').is(':animated') ){
                        prevCount(); // 이전 슬라이드
                    }
                }
            });


            // 5. 터치 스와이프 & 드래그 앤 드롭(drag & drop)
            //    터치는 section1
            //    마우스로 우측에서 좌측으로 터치하면 방향을 계산하는 알고리즘
            //    마우스로 좌측에서 우측으로 터치하면 방향을 계산하는 알고리즘
            let touchStart = 0;
            let touchEnd = 0;
            let mouseDown = false; // 마우드 다운하면 true 아니면 false
            let dragStart = 0;
            let dragEnd = 0;
            let winWidth =  $(window).innerWidth();

            // 데스크탑
            $('#section1').on({
                mousedown(e){
                    winWidth =  $(window).innerWidth();
                    clearInterval(setId);
                    mouseDown=true; //마우스 다운 알림
                    touchStart = e.clientX;
                    dragStart = e.clientX - $('.slide-wrap').offset().left-winWidth * 2;
                },
                mouseup(e){
                    touchEnd = e.clientX;                    
                    if( touchStart-touchEnd > 0 ){
                        if( !$('.slide-wrap').is(':animated') ){
                            nextCount();
                        }
                    }
                    if( touchStart-touchEnd < 0 ){
                        if( !$('.slide-wrap').is(':animated') ){
                            prevCount();
                        }
                    }
                    mouseDown=false; //마우스 드래그 끝났다 마우스 업이다.                    
                },
                mousemove(e){  //마우스 방향에 따라다닌다.
                    if(mouseDown!==true) return;
                    // 마우스가 다운되면 그 때 부터 따라다녀라
                    // 마우스다운할 때 변수에 다운상태를 저장한다.
                    // 만약 마우스 다운상태가 아니면 마우스 무브는 취소해라
                    dragEnd = e.clientX;
                    console.log( dragEnd-dragStart );

                    $('.slide-wrap').css({left: dragEnd-dragStart });
                }
            });

            // 6. 모바일 태블릿, 모바일 손가락으로 터치
            $('#section1').on({
                touchstart(e){ //mousedown
                    winWidth =  $(window).innerWidth();
                    clearInterval(setId);
                    mouseDown=true; //마우스 다운 알림
                    console.log(  e );
                    touchStart = e.originalEvent.changedTouches[0].clientX;
                    dragStart = e.originalEvent.changedTouches[0].clientX - $('.slide-wrap').offset().left-winWidth * 2;
                },
                touchend(e){ //mouseup
                    touchEnd = e.originalEvent.changedTouches[0].clientX;                    
                    if( touchStart-touchEnd > 0 ){
                        if( !$('.slide-wrap').is(':animated') ){
                            nextCount();
                        }
                    }
                    if( touchStart-touchEnd < 0 ){
                        if( !$('.slide-wrap').is(':animated') ){
                            prevCount();
                        }
                    }
                    mouseDown=false; //마우스 드래그 끝났다 마우스 업이다.    
                },
                touchmove(e){  //mousemove
                    if(mouseDown!==true) return;
                    // 마우스가 다운되면 그 때 부터 따라다녀라
                    // 마우스다운할 때 변수에 다운상태를 저장한다.
                    // 만약 마우스 다운상태가 아니면 마우스 무브는 취소해라
                    dragEnd = e.originalEvent.changedTouches[0].clientX;

                    $('.slide-wrap').css({left: dragEnd-dragStart });
                }
            });


            // 7. 페이지 네이션 함수 ==> 메인슬라이드 함수 연결
            function pageNation(){
                // console.log(cnt===3 ? 0 : cnt);
                // console.log(cnt>2 ? 0 : cnt);
                $('.page-btn').removeClass('on'); //페이지버튼 클래스 모두 삭제
                $('.page-btn').eq(cnt>2 ? 0 : cnt ).addClass('on'); //현재슬라이드 번호 클래스 추가
            }


            // 8. 페이지버튼 클릭 이벤트
            //슬라이드 첫번째 버튼
            // $('.page-btn').eq(0).on({
            //     click(e){
            //         e.preventDefault();
            //         clearInterval(setId);
            //         cnt=0;
            //         // 메인슬라이드 함수() 호출
            //         mainSlide();

            //     }
            // });

            // //슬라이드 두번째 버튼
            // $('.page-btn').eq(1).on({
            //     click(e){
            //         e.preventDefault();
            //         clearInterval(setId);
            //         cnt=1;
            //         // 메인슬라이드 함수() 호출
            //         mainSlide();

            //     }
            // });

            // //슬라이드 세번째 버튼
            // $('.page-btn').eq(2).on({
            //     click(e){
            //         e.preventDefault();
            //         clearInterval(setId);
            //         cnt=2;
            //         // 메인슬라이드 함수() 호출
            //         mainSlide();

            //     }
            // });

            // 페이지버튼 클릭이벤트 선택자 배열처리
            $('.page-btn').each(function(idx){
                console.log(idx);
                $(this).on({
                    click(e){
                        e.preventDefault();
                        clearInterval(setId);
                        cnt = idx; //cnt 전역변수 값이 수정
                        // console.log(idx);
                        // console.log(cnt);                        
                        mainSlide();

                    }
                })
            });



            
            

        },
        section2(){

        },
        section3(){

        }
    }

    wedding.init(); 

})(jQuery, window, document);  // 즉시실행함수 IIFE 


// (function(){
//     alert('즉시실행함수');
// })();

