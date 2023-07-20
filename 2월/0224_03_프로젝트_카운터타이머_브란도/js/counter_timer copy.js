(function($,window,document){

    const counter_timer = {
        init(){
            this.main();
        },
        main(){

            const num = $('#sectionCounter .num');

            let countNum1 = 7823/1000;  //Number
            let countNum2 = 9015/1000;  //Number
            let countNum3 = 3614/1000;  //Number
            let countNum4 = 1770/1000;  //Number

            let countSum1 = 0;  //Number
            let countSum2 = 0;  //Number
            let countSum3 = 0;  //Number
            let countSum4 = 0;  //Number

            let setId = 0;  
            let cnt = 0;

            function countFn(){
                cnt++; 

                countSum1 += countNum1;
                countSum2 += countNum2;
                countSum3 += countNum3;
                countSum4 += countNum4;

                num.eq(0).html(Math.round(countSum1));
                if(countSum1>7823){
                    clearInterval(setId);
                }
                num.eq(1).html(Math.round(countSum2));
                num.eq(2).html(Math.round(countSum3));
                num.eq(3).html(Math.round(countSum4));
            }
            
            setId = setInterval(countFn, 10);
            
        }

    }
    counter_timer.init();



})(jQuery,window,document);