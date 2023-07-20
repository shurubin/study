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
            let a = 0;

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


                // 갤러리박스 높이 지정
                galleryBoxUl.css({height: galBoxH});
                galleryBoxUlLi.css({width:imgW, height:imgH });  //transition설정이 되어있어서 animate()충돌


                switch(btnNumber){
                    case 0:
                        a=[0,1,2,3,4,5,6,7];  
                        break;
                    case 1:
                        a=[2,3,5,6,7];  
                        break;
                    case 2:
                        a=[0,1,3,4,6,7];  
                        break;
                    case 3:
                        a=[0,2,4,6];  
                        break;
                    case 4:
                        a=[0,1,3,4,5,6,7];  
                
                } 
                                   
         
                //전체 반복처리 마무리
                imgBox.removeClass('addZoom'); //줌효과 모두 초기화
                
                let k=-1;
                for(let i=0; i<rows; i++){
                    for(let j=0; j<cols; j++){
                        k++;
                        galleryBoxUlLi.eq(a[k]).stop().animate({ top:imgH*i, left:imgW*j},300);

                    }

                }

                for(let i=0; i<a.length; i++){
                    imgBox.eq(a[i]).addClass('addZoom');
                }

                


            } //2번 갤러리 함수 끝

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