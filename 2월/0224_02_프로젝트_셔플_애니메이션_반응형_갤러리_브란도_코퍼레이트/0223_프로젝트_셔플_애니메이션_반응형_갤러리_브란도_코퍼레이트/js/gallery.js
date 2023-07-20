(function($, window, document){

    const gallery = {
        init(){
            this.main();
        },
        main(){
            // Element 요소 선택자
            const galleryBoxUl = $('#gallery-box  ul');
            const galleryBoxUlLi = $('#gallery-box ul li');
            let n = galleryBoxUlLi.length;  // li 갯수 hide 갯수 show 갯수
            let cols = 4;  // 기본 4칸
            let rows = Math.ceil(n/cols);  // 8개/4칸 = 2줄
            let winW = $(window).innerWidth();
            let imgW = winW/cols   // 창너비/칸수
            let imgH = imgW*0.75   // 이미지너비 * 0.75
            let galBoxH = imgH*rows  // 갤러리박스 전체 높이

            // 1. 반응형 이벤트
            // $(window).scroll() // 스크롤값이 변경될 때 이벤트 발생
            $(window).resize(function(){
                galleryFn();
            }) // 크기 변경시 이벤트 발생


            // 2. 갤러리 함수
            function galleryFn(){
                // 1200 ~ 4개 배열
                // 991 ~ 1200미만 3개 배열
                // 768 ~ 991미만 2개 배열
                // 0 ~ 768미만 1개 배열
                if( $(window).innerWidth() >= 1200 ){
                    cols = 4;
                }                     
                else if( $(window).innerWidth() >= 991 ){
                    cols = 3;
                }                     
                else if( $(window).innerWidth() >= 768 ){
                    cols = 2;
                }
                else {
                    cols = 1;
                }
                rows = Math.ceil(n/cols);  // 8개/4칸 = 2줄
                winW = $(window).innerWidth();
                imgW = winW/cols   // 창너비/칸수
                imgH = imgW*0.75   // 이미지너비 * 0.75
                galBoxH = imgH*rows  // 갤러리박스 전체 높이


                console.log( `n        ${n}` );
                console.log( `cols     ${cols}` );
                console.log( `rows     ${rows}` );
                console.log( `winW     ${winW}` );
                console.log( `imgW     ${imgW}` );
                console.log( `imgH     ${imgH}` );
                console.log( `galBoxH  ${galBoxH}` );


                // 갤러리박스 높이 지정
                galleryBoxUl.css({height: galBoxH});
                galleryBoxUlLi.css({width:imgW, height:imgH});

                // if(cols===4){
                //     galleryBoxUlLi.eq(0).stop().animate({top: imgH*0, left: imgW*0}, 300);
                //     galleryBoxUlLi.eq(1).stop().animate({top: imgH*0, left: imgW*1}, 300);
                //     galleryBoxUlLi.eq(2).stop().animate({top: imgH*0, left: imgW*2}, 300);
                //     galleryBoxUlLi.eq(3).stop().animate({top: imgH*0, left: imgW*3}, 300);
                    
                //     galleryBoxUlLi.eq(4).stop().animate({top: imgH*1, left: imgW*0}, 300);
                //     galleryBoxUlLi.eq(5).stop().animate({top: imgH*1, left: imgW*1}, 300);
                //     galleryBoxUlLi.eq(6).stop().animate({top: imgH*1, left: imgW*2}, 300);
                //     galleryBoxUlLi.eq(7).stop().animate({top: imgH*1, left: imgW*3}, 300);
                // }
                // else if(cols===3){
                //     galleryBoxUlLi.eq(0).stop().animate({top: imgH*0, left: imgW*0}, 300);
                //     galleryBoxUlLi.eq(1).stop().animate({top: imgH*0, left: imgW*1}, 300);
                //     galleryBoxUlLi.eq(2).stop().animate({top: imgH*0, left: imgW*2}, 300);

                //     galleryBoxUlLi.eq(3).stop().animate({top: imgH*1, left: imgW*0}, 300);                    
                //     galleryBoxUlLi.eq(4).stop().animate({top: imgH*1, left: imgW*1}, 300);
                //     galleryBoxUlLi.eq(5).stop().animate({top: imgH*1, left: imgW*2}, 300);

                //     galleryBoxUlLi.eq(6).stop().animate({top: imgH*2, left: imgW*0}, 300);
                //     galleryBoxUlLi.eq(7).stop().animate({top: imgH*2, left: imgW*1}, 300);
                // }
                // else if(cols===2){
                //     galleryBoxUlLi.eq(0).stop().animate({top: imgH*0, left: imgW*0}, 300);
                //     galleryBoxUlLi.eq(1).stop().animate({top: imgH*0, left: imgW*1}, 300);

                //     galleryBoxUlLi.eq(2).stop().animate({top: imgH*1, left: imgW*0}, 300);
                //     galleryBoxUlLi.eq(3).stop().animate({top: imgH*1, left: imgW*1}, 300);                    

                //     galleryBoxUlLi.eq(4).stop().animate({top: imgH*2, left: imgW*0}, 300);
                //     galleryBoxUlLi.eq(5).stop().animate({top: imgH*2, left: imgW*1}, 300);

                //     galleryBoxUlLi.eq(6).stop().animate({top: imgH*3, left: imgW*0}, 300);
                //     galleryBoxUlLi.eq(7).stop().animate({top: imgH*3, left: imgW*1}, 300);
                // }
                // else {
                //     galleryBoxUlLi.eq(0).stop().animate({top: imgH*0, left: imgW*0}, 300);
                //     galleryBoxUlLi.eq(1).stop().animate({top: imgH*1, left: imgW*0}, 300);
                //     galleryBoxUlLi.eq(2).stop().animate({top: imgH*2, left: imgW*0}, 300);
                //     galleryBoxUlLi.eq(3).stop().animate({top: imgH*3, left: imgW*0}, 300);                    
                //     galleryBoxUlLi.eq(4).stop().animate({top: imgH*4, left: imgW*0}, 300);
                //     galleryBoxUlLi.eq(5).stop().animate({top: imgH*5, left: imgW*0}, 300);
                //     galleryBoxUlLi.eq(6).stop().animate({top: imgH*6, left: imgW*0}, 300);
                //     galleryBoxUlLi.eq(7).stop().animate({top: imgH*7, left: imgW*0}, 300);
                // }


                // 스위치(조건) 케이스(case ~경우) 문
                switch(cols){  // 변수 cols가
                    case 4:    // 4인경우
                        galleryBoxUlLi.eq(0).stop().animate({top: imgH*0, left: imgW*0}, 300);
                        galleryBoxUlLi.eq(1).stop().animate({top: imgH*0, left: imgW*1}, 300);
                        galleryBoxUlLi.eq(2).stop().animate({top: imgH*0, left: imgW*2}, 300);
                        galleryBoxUlLi.eq(3).stop().animate({top: imgH*0, left: imgW*3}, 300);
                        
                        galleryBoxUlLi.eq(4).stop().animate({top: imgH*1, left: imgW*0}, 300);
                        galleryBoxUlLi.eq(5).stop().animate({top: imgH*1, left: imgW*1}, 300);
                        galleryBoxUlLi.eq(6).stop().animate({top: imgH*1, left: imgW*2}, 300);
                        galleryBoxUlLi.eq(7).stop().animate({top: imgH*1, left: imgW*3}, 300);    
                        break;
                    case 3:    // 3인경우
                        galleryBoxUlLi.eq(0).stop().animate({top: imgH*0, left: imgW*0}, 300);
                        galleryBoxUlLi.eq(1).stop().animate({top: imgH*0, left: imgW*1}, 300);
                        galleryBoxUlLi.eq(2).stop().animate({top: imgH*0, left: imgW*2}, 300);
    
                        galleryBoxUlLi.eq(3).stop().animate({top: imgH*1, left: imgW*0}, 300);                    
                        galleryBoxUlLi.eq(4).stop().animate({top: imgH*1, left: imgW*1}, 300);
                        galleryBoxUlLi.eq(5).stop().animate({top: imgH*1, left: imgW*2}, 300);
    
                        galleryBoxUlLi.eq(6).stop().animate({top: imgH*2, left: imgW*0}, 300);
                        galleryBoxUlLi.eq(7).stop().animate({top: imgH*2, left: imgW*1}, 300);    
                        break;
                    case 2:   // 2인경우
                        galleryBoxUlLi.eq(0).stop().animate({top: imgH*0, left: imgW*0}, 300);
                        galleryBoxUlLi.eq(1).stop().animate({top: imgH*0, left: imgW*1}, 300);
    
                        galleryBoxUlLi.eq(2).stop().animate({top: imgH*1, left: imgW*0}, 300);
                        galleryBoxUlLi.eq(3).stop().animate({top: imgH*1, left: imgW*1}, 300);                    
    
                        galleryBoxUlLi.eq(4).stop().animate({top: imgH*2, left: imgW*0}, 300);
                        galleryBoxUlLi.eq(5).stop().animate({top: imgH*2, left: imgW*1}, 300);
    
                        galleryBoxUlLi.eq(6).stop().animate({top: imgH*3, left: imgW*0}, 300);
                        galleryBoxUlLi.eq(7).stop().animate({top: imgH*3, left: imgW*1}, 300);    
                        break;
                    default:   // 1인경우 다른 모든것 그 밖에 else
                        galleryBoxUlLi.eq(0).stop().animate({top: imgH*0, left: imgW*0}, 300);
                        galleryBoxUlLi.eq(1).stop().animate({top: imgH*1, left: imgW*0}, 300);
                        galleryBoxUlLi.eq(2).stop().animate({top: imgH*2, left: imgW*0}, 300);
                        galleryBoxUlLi.eq(3).stop().animate({top: imgH*3, left: imgW*0}, 300);                    
                        galleryBoxUlLi.eq(4).stop().animate({top: imgH*4, left: imgW*0}, 300);
                        galleryBoxUlLi.eq(5).stop().animate({top: imgH*5, left: imgW*0}, 300);
                        galleryBoxUlLi.eq(6).stop().animate({top: imgH*6, left: imgW*0}, 300);
                        galleryBoxUlLi.eq(7).stop().animate({top: imgH*7, left: imgW*0}, 300);                        
                }






            }





        }
    }
    gallery.init();

})(jQuery, window, document);