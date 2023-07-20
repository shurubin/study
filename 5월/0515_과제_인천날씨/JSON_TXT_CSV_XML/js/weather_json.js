(($)=>{

    $('.whether-btn').on({
        click(e){
            e.preventDefault();
            $.ajax({
                url:'./data/weather.json',
                data:'GET',
                dataType:'JSON',
                success(res){
                    // console.log("AJAX 성공");
                    // console.log(res);

                    let arr = [];
                    res.인천날씨.map(function(item, idx){
                        console.log(idx, item);
                        arr[idx] = [];
                        arr[idx][0] = item.관측지점별;
                        arr[idx][1] = item.월별;
                        arr[idx][2] = item.맑음;
                        arr[idx][3] = item.구름조금;
                        arr[idx][4] = item.구름많음;
                        arr[idx][5] = item.흐림;
                        arr[idx][6] = item.강수;
                        arr[idx][7] = item.서리;
                        arr[idx][8] = item.안개;
                        arr[idx][9] = item.눈;
                        arr[idx][10] = item.뇌전;
                        arr[idx][11] = item.폭풍;
                        arr[idx][12] = item.황사;
                    });

                    $('.in-weather').empty();
                    for(let i=0; i<arr.length; i++){
                        $('.in-weather').append('<tr>');
                        for(let j=0; j<arr[i].length; j++){
                            $('.in-weather').append(`<td>${arr[i][j]}</td>`);
                        }
                        $('.in-weather').append('</tr>');
                    }


                },
                error(err){
                    console.log(`AJAX 실패 ${err}`);
                }
            })

        }
    })

})(jQuery);