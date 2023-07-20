(function($,window,document){

    const gallery = {
        init(){
            this.main();
        },
        main(){
            //Element 요소 선택자
            //선택자 중복을 피하기 위해서 반드시 해당 섹션 아이디를 앞에서 표기한다.
            const galleryBtn = $('#gallery .gallery-btn'); //갤러리 이벤트 버튼
            const imgBox = $('#gallery .img-box'); //갤러리 이벤트 버튼

            const galleryBoxUl = $('#gallery-box ul'); //갤러리 박스
            const galleryBoxUlLi = $('#gallery-box ul li'); //갤러리 목록(이미지박스)

            //일반 선언변수
            let n = galleryBoxUlLi.length;  //li 개수
            let cols = 4; //기본 4칸
            let rows = Math.ceil(n/cols); //8개/4칸
            let winW = $(window).innerWidth();
            let imgW = winW/cols //창너비 / 칸수
            let imgH = imgW*0.75 //이미지너비 * 0.75
            let galBoxH = imgH*rows //갤러리박스 전체 높이

            let btnNumber = 0; //버튼 클릭 시 전달되는 번호

            // 로딩 시 함수 호출 실행
            galleryFn();
            galleryBtn.removeClass('on');
            galleryBtn.eq(btnNumber).addClass('on');

            // 1. 반응형
            // 2. 갤러리 함수
            // 3. 갤러리 버튼 클릭 이벤트 : 버튼마다 해다 ㅇ이미지 리스트가 다르다 구성



            // 1. 반응형 이벤트
            // $(window).scroll() // 스크롤 값이 변경될 때 이벤트 발생
            $(window).resize(function(){
                galleryFn();

            }) //크기 변경 시 이벤트 발생

            // 2. 갤러리 함수
            function galleryFn(){

                console.log('버튼 번호', btnNumber);

                switch(btnNumber){
                    case 0:
                        n=8;
                        break;
                    case 1:
                        n=5;
                        break;
                    case 2:
                        n=6;
                        break;
                    case 3:
                        n=4;
                        break;
                    case 4:
                        n=7;
                        break;
                    default:                        
                }

                console.log('갤러리 리스트 개수', n);

                if($(window).innerWidth() >= 1200){
                    cols = 4;
                }
                else if($(window).innerWidth() >= 991){
                    cols = 3;
                }
                else if($(window).innerWidth() >= 768){
                    cols = 2;
                }
                else {
                    cols = 1;
                }               
               
                rows = Math.ceil(n/cols); //8개/4칸
                winW = $(window).innerWidth();
                imgW = winW/cols //창너비 / 칸수
                imgH = imgW*0.75 //이미지너비 * 0.75
                galBoxH = imgH*rows //갤러리박스 전체 높이

                // console.log(`n       ${n}`);
                // console.log(`cols    ${cols}`);
                // console.log(`rows    ${rows}`);
                // console.log(`winW    ${winW}`);
                // console.log(`imgW    ${imgW}`);
                // console.log(`imgH    ${imgH}`);
                // console.log(`galBoxH ${galBoxH}`);


                // 갤러리박스 높이 지정
                galleryBoxUl.css({height: galBoxH});
                galleryBoxUlLi.css({width:imgW, height:imgH });  //transition설정이 되어있어서 animate()충돌

                // if(cols===4){
                //     galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);
                //     galleryBoxUlLi.eq(1).stop().animate({ top:imgH*0, left:imgW*1},300);
                //     galleryBoxUlLi.eq(2).stop().animate({ top:imgH*0, left:imgW*2},300);
                //     galleryBoxUlLi.eq(3).stop().animate({ top:imgH*0, left:imgW*3},300);

                //     galleryBoxUlLi.eq(4).stop().animate({ top:imgH*1, left:imgW*0},300);
                //     galleryBoxUlLi.eq(5).stop().animate({ top:imgH*1, left:imgW*1},300);
                //     galleryBoxUlLi.eq(6).stop().animate({ top:imgH*1, left:imgW*2},300);
                //     galleryBoxUlLi.eq(7).stop().animate({ top:imgH*1, left:imgW*3},300);
                // }

                // else if(cols===3){
                //     galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);
                //     galleryBoxUlLi.eq(1).stop().animate({ top:imgH*0, left:imgW*1},300);
                //     galleryBoxUlLi.eq(2).stop().animate({ top:imgH*0, left:imgW*2},300);

                //     galleryBoxUlLi.eq(3).stop().animate({ top:imgH*1, left:imgW*0},300);
                //     galleryBoxUlLi.eq(4).stop().animate({ top:imgH*1, left:imgW*1},300);
                //     galleryBoxUlLi.eq(5).stop().animate({ top:imgH*1, left:imgW*2},300);

                //     galleryBoxUlLi.eq(6).stop().animate({ top:imgH*2, left:imgW*0},300);
                //     galleryBoxUlLi.eq(7).stop().animate({ top:imgH*2, left:imgW*1},300);
                // }

                // else if(cols===2){
                //     galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);
                //     galleryBoxUlLi.eq(1).stop().animate({ top:imgH*0, left:imgW*1},300);

                //     galleryBoxUlLi.eq(2).stop().animate({ top:imgH*1, left:imgW*0},300);
                //     galleryBoxUlLi.eq(3).stop().animate({ top:imgH*1, left:imgW*1},300);

                //     galleryBoxUlLi.eq(4).stop().animate({ top:imgH*2, left:imgW*0},300);
                //     galleryBoxUlLi.eq(5).stop().animate({ top:imgH*2, left:imgW*1},300);

                //     galleryBoxUlLi.eq(6).stop().animate({ top:imgH*3, left:imgW*0},300);
                //     galleryBoxUlLi.eq(7).stop().animate({ top:imgH*3, left:imgW*1},300);
                // }

                // else{
                //     galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);
                //     galleryBoxUlLi.eq(1).stop().animate({ top:imgH*1, left:imgW*0},300);
                //     galleryBoxUlLi.eq(2).stop().animate({ top:imgH*2, left:imgW*0},300);
                //     galleryBoxUlLi.eq(3).stop().animate({ top:imgH*3, left:imgW*0},300);
                //     galleryBoxUlLi.eq(4).stop().animate({ top:imgH*4, left:imgW*0},300);
                //     galleryBoxUlLi.eq(5).stop().animate({ top:imgH*5, left:imgW*0},300);
                //     galleryBoxUlLi.eq(6).stop().animate({ top:imgH*6, left:imgW*0},300);
                //     galleryBoxUlLi.eq(7).stop().animate({ top:imgH*7, left:imgW*0},300);
                // }



                    //WEB - 5개
                    
                    if(btnNumber===0){ 
                        
                        //줌아웃(zoom out)효과
                        imgBox.removeClass('addZoom'); //줌효과 모두 초기화

                        //갤러리 리스트 포지션


                        switch(cols){  //변수 cols가 4인 경우
                            case 4:
                                galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);
                                galleryBoxUlLi.eq(1).stop().animate({ top:imgH*0, left:imgW*1},300);
                                galleryBoxUlLi.eq(2).stop().animate({ top:imgH*0, left:imgW*2},300);
                                galleryBoxUlLi.eq(3).stop().animate({ top:imgH*0, left:imgW*3},300);
            
                                galleryBoxUlLi.eq(4).stop().animate({ top:imgH*1, left:imgW*0},300);
                                galleryBoxUlLi.eq(5).stop().animate({ top:imgH*1, left:imgW*1},300);
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*1, left:imgW*2},300);
                                galleryBoxUlLi.eq(7).stop().animate({ top:imgH*1, left:imgW*3},300);
                                break;
                            case 3:
                                galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);
                                galleryBoxUlLi.eq(1).stop().animate({ top:imgH*0, left:imgW*1},300);
                                galleryBoxUlLi.eq(2).stop().animate({ top:imgH*0, left:imgW*2},300);
            
                                galleryBoxUlLi.eq(3).stop().animate({ top:imgH*1, left:imgW*0},300);
                                galleryBoxUlLi.eq(4).stop().animate({ top:imgH*1, left:imgW*1},300);
                                galleryBoxUlLi.eq(5).stop().animate({ top:imgH*1, left:imgW*2},300);
            
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*2, left:imgW*0},300);
                                galleryBoxUlLi.eq(7).stop().animate({ top:imgH*2, left:imgW*1},300);
                                break;
                            case 2:
                                galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);
                                galleryBoxUlLi.eq(1).stop().animate({ top:imgH*0, left:imgW*1},300);
            
                                galleryBoxUlLi.eq(2).stop().animate({ top:imgH*1, left:imgW*0},300);
                                galleryBoxUlLi.eq(3).stop().animate({ top:imgH*1, left:imgW*1},300);
            
                                galleryBoxUlLi.eq(4).stop().animate({ top:imgH*2, left:imgW*0},300);
                                galleryBoxUlLi.eq(5).stop().animate({ top:imgH*2, left:imgW*1},300);
            
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*3, left:imgW*0},300);
                                galleryBoxUlLi.eq(7).stop().animate({ top:imgH*3, left:imgW*1},300);
                                break;
                            default:  // 그 외 다른 모든 것
                                galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);
                                galleryBoxUlLi.eq(1).stop().animate({ top:imgH*1, left:imgW*0},300);
                                galleryBoxUlLi.eq(2).stop().animate({ top:imgH*2, left:imgW*0},300);
                                galleryBoxUlLi.eq(3).stop().animate({ top:imgH*3, left:imgW*0},300);
                                galleryBoxUlLi.eq(4).stop().animate({ top:imgH*4, left:imgW*0},300);
                                galleryBoxUlLi.eq(5).stop().animate({ top:imgH*5, left:imgW*0},300);
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*6, left:imgW*0},300);
                                galleryBoxUlLi.eq(7).stop().animate({ top:imgH*7, left:imgW*0},300);

                        }

                        //줌인(zoom in)효과

                        imgBox.eq(0).addClass('addZoom');
                        imgBox.eq(1).addClass('addZoom');
                        imgBox.eq(2).addClass('addZoom');
                        imgBox.eq(3).addClass('addZoom');
                        imgBox.eq(4).addClass('addZoom');
                        imgBox.eq(5).addClass('addZoom');
                        imgBox.eq(6).addClass('addZoom');
                        imgBox.eq(7).addClass('addZoom');



                    }
                    else if(btnNumber===1){ 

                        imgBox.removeClass('addZoom'); //줌효과 모두 초기화

                        //갤러리 리스트 포지션


                        switch(cols){  //변수 cols가 4인 경우
                            case 4:
                                galleryBoxUlLi.eq(2).stop().animate({ top:imgH*0, left:imgW*0},300);
                                galleryBoxUlLi.eq(3).stop().animate({ top:imgH*0, left:imgW*1},300);            
                                galleryBoxUlLi.eq(5).stop().animate({ top:imgH*0, left:imgW*2},300);
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*0, left:imgW*3},300);

                                galleryBoxUlLi.eq(7).stop().animate({ top:imgH*1, left:imgW*0},300);
                                break;
                            case 3:                                
                                galleryBoxUlLi.eq(2).stop().animate({ top:imgH*0, left:imgW*0},300);            
                                galleryBoxUlLi.eq(3).stop().animate({ top:imgH*0, left:imgW*1},300);                                
                                galleryBoxUlLi.eq(5).stop().animate({ top:imgH*0, left:imgW*2},300);
            
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*1, left:imgW*0},300);
                                galleryBoxUlLi.eq(7).stop().animate({ top:imgH*1, left:imgW*1},300);
                                break;
                            case 2:          
                                galleryBoxUlLi.eq(2).stop().animate({ top:imgH*0, left:imgW*0},300);
                                galleryBoxUlLi.eq(3).stop().animate({ top:imgH*0, left:imgW*1},300);
            
                                galleryBoxUlLi.eq(5).stop().animate({ top:imgH*1, left:imgW*0},300);            
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*1, left:imgW*1},300);

                                galleryBoxUlLi.eq(7).stop().animate({ top:imgH*2, left:imgW*0},300);
                                break;
                            default:  // 그 외 다른 모든 것
                                galleryBoxUlLi.eq(2).stop().animate({ top:imgH*0, left:imgW*0},300);
                                galleryBoxUlLi.eq(3).stop().animate({ top:imgH*1, left:imgW*0},300);
                                galleryBoxUlLi.eq(5).stop().animate({ top:imgH*2, left:imgW*0},300);
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*3, left:imgW*0},300);
                                galleryBoxUlLi.eq(7).stop().animate({ top:imgH*4, left:imgW*0},300);

                        }


                        // hide
                        imgBox.eq(0).removeClass('addZoom');
                        imgBox.eq(1).removeClass('addZoom');
                        imgBox.eq(4).removeClass('addZoom');

                        // show
                        imgBox.eq(2).addClass('addZoom');
                        imgBox.eq(3).addClass('addZoom');
                        imgBox.eq(5).addClass('addZoom');
                        imgBox.eq(6).addClass('addZoom');
                        imgBox.eq(7).addClass('addZoom');

                            // find() 자식요소 또는 자손요소 검색 가능하다
                        // 자기 자신의 요소는 검색 못한다. .hasClass((클래스 이름)
                        // galleryBoxUlLi.eq(0).find('.img-box').addClass('addZoom');

   
                    }
                    else if(btnNumber===2){ 
                        //줌아웃(zoom out)효과
                        imgBox.removeClass('addZoom'); //줌효과 모두 초기화

                        //갤러리 리스트 포지션

                        switch(cols){  //변수 cols가 4인 경우
                            case 4:
                                galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);
                                galleryBoxUlLi.eq(1).stop().animate({ top:imgH*0, left:imgW*1},300);
                                galleryBoxUlLi.eq(3).stop().animate({ top:imgH*0, left:imgW*2},300);
                                galleryBoxUlLi.eq(4).stop().animate({ top:imgH*0, left:imgW*3},300);
            
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*1, left:imgW*0},300);
                                galleryBoxUlLi.eq(7).stop().animate({ top:imgH*1, left:imgW*1},300);
                                break;
                            case 3:
                                galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);
                                galleryBoxUlLi.eq(1).stop().animate({ top:imgH*0, left:imgW*1},300);            
                                galleryBoxUlLi.eq(3).stop().animate({ top:imgH*0, left:imgW*2},300);

                                galleryBoxUlLi.eq(4).stop().animate({ top:imgH*1, left:imgW*0},300);            
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*1, left:imgW*1},300);
                                galleryBoxUlLi.eq(7).stop().animate({ top:imgH*1, left:imgW*2},300);
                                break;
                            case 2:
                                galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);
                                galleryBoxUlLi.eq(1).stop().animate({ top:imgH*0, left:imgW*1},300);            
                               
                                galleryBoxUlLi.eq(3).stop().animate({ top:imgH*1, left:imgW*0},300);            
                                galleryBoxUlLi.eq(4).stop().animate({ top:imgH*1, left:imgW*1},300);                                
            
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*2, left:imgW*0},300);
                                galleryBoxUlLi.eq(7).stop().animate({ top:imgH*2, left:imgW*1},300);
                                break;
                            default:  // 그 외 다른 모든 것
                                galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);
                                galleryBoxUlLi.eq(1).stop().animate({ top:imgH*1, left:imgW*0},300);
                                galleryBoxUlLi.eq(3).stop().animate({ top:imgH*2, left:imgW*0},300);
                                galleryBoxUlLi.eq(4).stop().animate({ top:imgH*3, left:imgW*0},300);
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*4, left:imgW*0},300);
                                galleryBoxUlLi.eq(7).stop().animate({ top:imgH*5, left:imgW*0},300);

                        }
                        
                        //줌인
                        //hide
                        imgBox.eq(2).removeClass('addZoom');
                        imgBox.eq(5).removeClass('addZoom');

                        //show
                        imgBox.eq(0).addClass('addZoom');
                        imgBox.eq(1).addClass('addZoom');                        
                        imgBox.eq(3).addClass('addZoom');
                        imgBox.eq(4).addClass('addZoom');
                        imgBox.eq(6).addClass('addZoom');
                        imgBox.eq(7).addClass('addZoom');

                    }
                    else if(btnNumber===3){

                        //줌아웃(zoom out)효과
                        imgBox.removeClass('addZoom'); //줌효과 모두 초기화

                        //갤러리 리스트 포지션


                        switch(cols){  //변수 cols가 4인 경우
                            case 4:
                                galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);
                                galleryBoxUlLi.eq(2).stop().animate({ top:imgH*0, left:imgW*1},300);            
                                galleryBoxUlLi.eq(4).stop().animate({ top:imgH*0, left:imgW*2},300);
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*0, left:imgW*3},300);

                                break;
                            case 3:
                                galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);
                                galleryBoxUlLi.eq(2).stop().animate({ top:imgH*0, left:imgW*1},300);
                                galleryBoxUlLi.eq(4).stop().animate({ top:imgH*0, left:imgW*2},300);
            
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*1, left:imgW*0},300);

                                break;
                            case 2:
                                galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);            
                                galleryBoxUlLi.eq(2).stop().animate({ top:imgH*0, left:imgW*1},300);         
            
                                galleryBoxUlLi.eq(4).stop().animate({ top:imgH*1, left:imgW*0},300);            
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*1, left:imgW*1},300);

                                break;
                            default:  // 그 외 다른 모든 것
                                galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);
                                galleryBoxUlLi.eq(2).stop().animate({ top:imgH*1, left:imgW*0},300);
                                galleryBoxUlLi.eq(4).stop().animate({ top:imgH*2, left:imgW*0},300);
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*3, left:imgW*0},300);


                        }

                        imgBox.eq(1).removeClass('addZoom');
                        imgBox.eq(3).removeClass('addZoom');
                        imgBox.eq(5).removeClass('addZoom');
                        imgBox.eq(7).removeClass('addZoom');


                        imgBox.eq(0).addClass('addZoom');                        
                        imgBox.eq(2).addClass('addZoom');                        
                        imgBox.eq(4).addClass('addZoom');                        
                        imgBox.eq(6).addClass('addZoom');
                        

                    }
                    else if(btnNumber===4){ 

                        //줌아웃(zoom out)효과
                        imgBox.removeClass('addZoom'); //줌효과 모두 초기화

                        //갤러리 리스트 포지션


                        switch(cols){  //변수 cols가 4인 경우
                            case 4:
                                galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);
                                galleryBoxUlLi.eq(1).stop().animate({ top:imgH*0, left:imgW*1},300);
                                galleryBoxUlLi.eq(3).stop().animate({ top:imgH*0, left:imgW*2},300);            
                                galleryBoxUlLi.eq(4).stop().animate({ top:imgH*0, left:imgW*3},300);

                                galleryBoxUlLi.eq(5).stop().animate({ top:imgH*1, left:imgW*0},300);
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*1, left:imgW*1},300);
                                galleryBoxUlLi.eq(7).stop().animate({ top:imgH*1, left:imgW*2},300);
                                break;
                            case 3:
                                galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);
                                galleryBoxUlLi.eq(1).stop().animate({ top:imgH*0, left:imgW*1},300);            
                                galleryBoxUlLi.eq(3).stop().animate({ top:imgH*0, left:imgW*2},300);

                                galleryBoxUlLi.eq(4).stop().animate({ top:imgH*1, left:imgW*0},300);
                                galleryBoxUlLi.eq(5).stop().animate({ top:imgH*1, left:imgW*1},300);            
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*1, left:imgW*2},300);

                                galleryBoxUlLi.eq(7).stop().animate({ top:imgH*2, left:imgW*0},300);
                                break;
                            case 2:
                                galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);
                                galleryBoxUlLi.eq(1).stop().animate({ top:imgH*0, left:imgW*1},300);            

                                galleryBoxUlLi.eq(3).stop().animate({ top:imgH*1, left:imgW*0},300);            
                                galleryBoxUlLi.eq(4).stop().animate({ top:imgH*1, left:imgW*1},300);

                                galleryBoxUlLi.eq(5).stop().animate({ top:imgH*2, left:imgW*0},300);            
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*2, left:imgW*1},300);

                                galleryBoxUlLi.eq(7).stop().animate({ top:imgH*3, left:imgW*0},300);
                                break;
                            default:  // 그 외 다른 모든 것
                                galleryBoxUlLi.eq(0).stop().animate({ top:imgH*0, left:imgW*0},300);
                                galleryBoxUlLi.eq(1).stop().animate({ top:imgH*1, left:imgW*0},300);
                                galleryBoxUlLi.eq(3).stop().animate({ top:imgH*2, left:imgW*0},300);
                                galleryBoxUlLi.eq(4).stop().animate({ top:imgH*3, left:imgW*0},300);
                                galleryBoxUlLi.eq(5).stop().animate({ top:imgH*4, left:imgW*0},300);
                                galleryBoxUlLi.eq(6).stop().animate({ top:imgH*5, left:imgW*0},300);
                                galleryBoxUlLi.eq(7).stop().animate({ top:imgH*6, left:imgW*0},300);

                        }

                        // hide
                        imgBox.eq(2).removeClass('addZoom');

                        //show
                        imgBox.eq(0).addClass('addZoom');
                        imgBox.eq(1).addClass('addZoom');
                        imgBox.eq(3).addClass('addZoom');
                        imgBox.eq(4).addClass('addZoom');
                        imgBox.eq(5).addClass('addZoom');
                        imgBox.eq(6).addClass('addZoom');
                        imgBox.eq(7).addClass('addZoom');

                    }

            }

            // 3. 갤러리 버튼 클릭 이벤트
            //   5개 버튼 개체 배열처리
            galleryBtn.each(function(idx){
                $(this).on({
                    click(e){
                        e.preventDefault();
                        galleryBtn.removeClass('on'); //버튼 초기화
                        $(this).addClass('on'); //해당버튼 클래스 추가
                        btnNumber = idx;
                        galleryFn();
                    
                    }
                })

            });

        }
    }
    gallery.init();



})(jQuery,window,document);