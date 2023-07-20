(function($){    
    const marketkurly = {            
        init(){
            this.header();
            this.section1();
            this.footer(); 
        },

        header(){
        },

        section1(){
            let cnt=0;

            function mainSlide(){
                $('.slide-wrap').stop().animate({left: `${-100*cnt}%`}, 1000, 'easeInQuart', function(){
                    if(cnt===15) cnt=0;
                    $('.slide-wrap').stop().animate({left: `${-100*cnt}%`},0);
                })
            }

            function nextCount(){
                cnt++;
                mainSlide();
            }

            function autoTimer(){
                setInterval(nextCount, 3000);
            }
            autoTimer();

        },
        
        footer(){}

    }
    marketkurly.init(); 


})(jQuery);