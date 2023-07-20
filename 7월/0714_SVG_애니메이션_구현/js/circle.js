;(($)=>{

    // console.log($);
    // svg 애니메이션 구현
    // 1. svg 내에 원형 그래프를 가져온다.
    const svgBox = $('.svg-box');
    const circle = $('.circle');
    const number = $('.number');
    // 반응형 글자크기(0.14) = 숫자글자크기 / svgBox 너비
    // 반응형 글자크기적용 = 너비 * 0.14

    console.log(svgBox.css('width'));
    console.log(svgBox.innerWidth()*0.14);    
    $('.number').css({fontSize: svgBox.innerWidth()*0.14 + 'px'})

    // 원형 svg 길이 구하기 원둘레 = 반지름 * 3.14
    console.log(250*3.14);
    // circle
    // 단위 길이 계산
    // 100% => 98%
    // 100% => 현재 tot 길이
    // 98% 길이 = tot * (1-0.98)  //퍼센트 길이
    let tot = 0;    //원형의 원둘레의 전체길이 배열값
    let percent = 0.8;
    let setId = 0;
    let cnt = 0; // 증가값
    let step = 3;
    let percentLength = tot * percent;

    $.each(circle, function(idx, obj){
        tot = obj.getTotalLength() + 7;
        // console.log(tot);
        obj.style.strokeDasharray = tot;
        obj.style.strokeDashoffset = tot;   // 간격이 벌어진 상태의 값
        percentLength = percent * tot;

        setId = setInterval(function(){
            cnt += step;
            if(cnt > percentLength){
                clearInterval(setId);
            }
            else{ // 애니메이션
                $(obj).css({strokeDashoffset: tot-cnt });
                number.html(`${Math.ceil(cnt/tot*100)}%`);
            }
        }, 10);


    });



})(jQuery);