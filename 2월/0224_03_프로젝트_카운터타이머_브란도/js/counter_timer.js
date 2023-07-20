(function($,window,document){

    const counter_timer = {
        init(){
            this.main();
        },
        main(){

            const num = $('#sectionCounter .num');

            let countNum = [7823000,90150000,3614000,1770000]
            let countSum = [0,0,0,0];  //누적변수는 반드시 초기값 설정
            let setId = 0;  

            // 천단위마다 콤마형식으로 변환(치환 replace)
            // 스트링(문자열).replace(정규표현식REGEXP, '그룹1, 그룹2')
            // (^시작문자 숫자\d 1자이상+) (234  뒤에는 반드시 숫자 3자리{3} *^각괄호안에서는 부정)
            // (^시작문자 숫자\d 1자이상+) (156,234)
            // (^시작문자 숫자\d 1자이상+) (1,234)
            // (^시작문자 숫자\d 1자이상+) (3,156,234)
            // const regexp = /($1)($2)/g; 달러사인이 그룹 이름으로 지정
            const regexp = /(^\d+)(\d{3})/g;  //정규표현식은 중간에 띄어쓰기 절대 안 됨

            // 1회구현하기 1000000,000
            // 콤마형식 반복문 사용 구현하기 1,000,000,000

            let number = 7823;
            let number2 = 823;
            let number3 = String(1234567498742823);
            console.log(String(number).replace(regexp,'$1,$2'));

            //반복문 활용
            //정규표현식 참 거짓 확인테스트
            //정규표현식.test('문자열')
            //regexp.test('string(number)')
            console.log(regexp.test(String(number)));
            console.log(regexp.test(String(number2)));

            // console.log(String(number).replace(regexp,'$1,$2'));

            function commaFm(value){
                number3=String(value);
                while(regexp.test(String(number3))){
                    number3= number3.replace(regexp, '$1,$2');
                    console.log(number3);
                }

                //while문 끝나면 리턴 값을 되돌려 보내줘라
                return number3;
            }

            function countFn(){
                
                for(let i=0; i<countNum.length; i++){
                    countSum[i] += (countNum[i]/1000);
                }           
                console.log(countSum);     

                if(countSum[0]>countNum[0]){
                    clearInterval(setId);
                }

                for(let i=0; i<countNum.length; i++){
                    // num.eq(i).html(String(Math.round(countSum[i])).replace(regexp,'$1,$2'));
                    num.eq(i).html(commaFm(Math.round(countSum[i]))); //함수 호출 반복문 정규표현식 구현 리턴값 받는다
                }
                
            }            
            setId = setInterval(countFn, 10);            
        }

    }
    counter_timer.init();



})(jQuery,window,document);