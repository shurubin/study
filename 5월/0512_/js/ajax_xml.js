;(($)=>{
      
    // $.ajax({
    //     url:'./data/member.xml',
    //     type:'GET',
    //     sucess(res){ //xml 데이터 파라미터 값에서 검색
    //         alert("화면출력");
    //         console.log( res);
    //         console.log( $(res).find('member'));
    //         // console.log( $(res).find('name').text() );
    //         // 제이쿼리 each()
    //         // console.log(idx, $(item).find('name').text());
    //         // console.log(idx, $(item).find('kor').text());
    //         // console.log(idx, $(item).find('eng').text());
    //         // console.log(idx, $(item).find('mat').text());
           

    //     },
    //     error(err){
           
    //     }
    // });
    $.ajax({
        url:'./data/member.xml',
        type:'GET',
        sucess(res){
            alert();
        },
        error(err){
            console.log(err);
        }
    })


})(jQuery);