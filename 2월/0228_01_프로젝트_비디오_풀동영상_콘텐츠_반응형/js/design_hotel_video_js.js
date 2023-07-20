((window, document, undefined)=>{


    class DesignHotelClass { //클래스 선언
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

                // 로딩 시 실행
                setId = setInterval(resizeVideo, 100);

                console.log(`$video ${video}`  );
                console.log(`winW   ${winW}` );
                console.log(`winH   ${winH}` );
                console.log(`vidW   ${vidW}` );
                console.log(`vidH   ${vidH}` );
                console.log(`marT   ${marT}` );
                console.log(`marL   ${marL}` );

                //반응형함수
                function resizeVideo(){

                    winW = window.innerWidth;
                    winH = window.innerHeight; 
                    vidW = $video.clientWidth;
                    vidH = $video.clientHeight;
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

    const newDesignHotelClass = new DesignHotelClass();
    newDesignHotelClass.init(); //생성자를 생성하여 메서드 호출 실행


})(window, document);