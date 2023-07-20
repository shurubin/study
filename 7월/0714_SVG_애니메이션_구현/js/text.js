;(($)=>{

    // console.log($);
    // svg 애니메이션 구현
    // 1. svg 내에 원형 그래프를 가져온다.
    const svgBox = $('.svg-box2');
    const circle = $('.path');
    // 반응형 글자크기(0.14) = 숫자글자크기 / svgBox 너비
    // 반응형 글자크기적용 = 너비 * 0.14

    let tot = 0;      
    let setId = 0;
    let cnt = 0; // 증가값
    let step = 0.1;
    


    $.each(circle, function(idx, obj){
        tot = obj.getTotalLength();
        // console.log(tot);
        obj.style.strokeDasharray = tot;
        obj.style.strokeDashoffset = tot;   // 간격이 벌어진 상태의 값


        setId = setInterval(function(){
            cnt += step;

            $(obj).stop().css({strokeDashoffset: tot-cnt });
          
        }, 1000);


    });



})(jQuery);