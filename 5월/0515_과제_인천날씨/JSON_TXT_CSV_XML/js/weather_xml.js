(($)=>{

    $('.whether-btn').on({
        click(e){
            e.preventDefault();
            $.ajax({
                url:'./data/weather.xml',
                data:'GET',
                dataType:'XML',
                success(res){
                    // console.log("AJAX 성공");
                    // console.log(res);

                    let arr = [];
                    $.each($(res).find('data'), function(idx, item){
                        console.log(idx, item);
                        arr[idx] = [];
                        arr[idx][0] = $(item).find('addr').text();
                        arr[idx][1] = $(item).find('month').text();
                        arr[idx][2] = $(item).find('sunny').text();
                        arr[idx][3] = $(item).find('scloudy').text();
                        arr[idx][4] = $(item).find('mcloudy').text();
                        arr[idx][5] = $(item).find('lcloudy').text();
                        arr[idx][6] = $(item).find('rainy').text();
                        arr[idx][7] = $(item).find('frost').text();
                        arr[idx][8] = $(item).find('fog').text();
                        arr[idx][9] = $(item).find('snowy').text();
                        arr[idx][10] = $(item).find('thunder').text();
                        arr[idx][11] = $(item).find('storm').text();
                        arr[idx][12] = $(item).find('dust').text();
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