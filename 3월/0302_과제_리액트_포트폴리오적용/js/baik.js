(function($,window){
    const baik = {
        init(){            
            this.section1();
            
        },

        section1(){
            let cnt=0;
            let setId=0;            

            function mainSlide(){
                $('.slide-wrap').stop().animate({left: `${-100*cnt}%`}, 1000, 'easeInQuart', function(){
                    if(cnt > 3) cnt=0;
                    if(cnt < 0) cnt=4;
                    $('.slide-wrap').stop().animate({left: `${-100*cnt}%`},0);                    
                   
                });  
                pageNation();             
            }

            function nextCount(){
                cnt++;                
                mainSlide();
            }

            function prevCount(){
                cnt--;
                mainSlide();
            }

            function autoTimer(){
                setId = setInterval(nextCount, 4000);
            }          
            autoTimer();

            function pageNation(){
                console.log(cnt===3 ? 0 : cnt);
                console.log(cnt>2 ? 0 : cnt);

            }

            function pageNation(){
                                
                $('.page').removeClass('on');
                $('.page').eq(cnt>3 ? 0 : cnt).addClass('on');               

            }

            $('.page').eq(0).on({
                click(e){
                    e.preventDefault();
                    clearInterval(setId);
                    cnt=0;
                    mainSlide();
                }
            });
            $('.page').eq(1).on({
                click(e){
                    e.preventDefault();
                    clearInterval(setId);
                    cnt=1;
                    mainSlide();
                }
            });
            $('.page').eq(2).on({
                click(e){
                    e.preventDefault();
                    clearInterval(setId);
                    cnt=2;
                    mainSlide();
                }
            });
            $('.page').eq(3).on({
                click(e){
                    e.preventDefault();
                    clearInterval(setId);
                    cnt=3;
                    mainSlide();
                }
            });

        }


    }
    baik.init();




})(jQuery,window);

