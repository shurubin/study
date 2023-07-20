((window, document, undefined)=>{

    class DesignHotelClass {  // 클래스 선언
        init(){
            this.mainMethod();
        }   
        mainMethod(){
            const $video = document.querySelector('#videoHotel video');
            let winW = window.innerWidth;
            let winH = window.innerHeight;
            let vidW = $video.clientWidth;
            let vidH = $video.clientHeight;
            let marT = (winH-vidH)/2;
            let marL = (winW-vidW)/2;
            let setId = 0;          

            // 로딩시 실행
            setId = setInterval(resizeVideo, 100); // 로딩시 강제 실행

            // 반응형함수
            function resizeVideo(){

                winW = winW = window.innerWidth;
                winH = winH = window.innerHeight;
                vidW = vidW = $video.clientWidth;
                vidH = vidH = $video.clientHeight;
                marT = (winH-vidH)/2;
                marL = (winW-vidW)/2;     

                if( winW > vidW ){
                    $video.style.width = `${winW}px`;
                    $video.style.height = 'auto';
                }
                if( winH > vidH ){
                    $video.style.width = 'auto';
                    $video.style.height = `${winW}px`;
                }

                    $video.style.marginTop = `${marT}px`;
                    $video.style.marginLeft = `${marL}px`;

            }

            // 반응형
            $(window).resize(function(){
                clearInterval(setId);
                resizeVideo();
            });

        }
    }

     const newDesignHotelClass  = new DesignHotelClass();
     newDesignHotelClass.init();  //생성자를 생성하여 메서드 호출실행

})(window, document);