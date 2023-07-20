(function popup(){ //함수 안에서 사용되는 변수 지역(Local)변수
    
    // window.open ('팝업.html,'창이름','너비=500', 높이'600, 'x축좌표=0', y축좌표=0);

    const windowName = 'popup_20230215';
    const windowName2 = 'popup_230215';
    const popupWidth= 530;  //변수에 값을 대입하면서 선언시는 const 지정가능하다.
    const popupHeight= 570;
    const popupWidth2= 200;
    const popupHeight2=300;
    const popupX= 0;
    const popupY= 0;
    const popupX2= 1650;
    const popupY2= 0;
   
    //위에서 팝업창의 설정 정한 후 팝업창 오픈 명령어(window.open)에 팝업창 내용의 html파일, 이름, 넓이, 높이, X축, Y축을 설정 !!(); 즉시실행!!
    window.open('./popup.html', windowName, `width=${popupWidth}, height=${popupHeight}, left=${popupX}, top=${popupY}`);
    window.open('./popup2.html', windowName2, `width=${popupWidth2}, height=${popupHeight2}, left=${popupX2}, top=${popupY2}`);

})//(); //즉시실행함수

//(function(){})

