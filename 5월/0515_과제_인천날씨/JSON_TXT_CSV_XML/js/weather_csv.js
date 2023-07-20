(($)=>{

    $('.whether-btn').on({
        click(e){
            e.preventDefault();
            $.ajax({
                url:'./data/weather.csv',
                data:'GET',
                dataType:'TEXT',
                success(res){
                    // console.log("AJAX 성공");
                    // console.log(res);

                    let arr = [];
                    const result = res.split('\r\n');
                    $.each(result, function(idx, item){
                        // console.log(idx, item);
                        arr[idx] = [];
                        arr[idx][0] = String(item.split(',')[0]);
                        arr[idx][1] = String(item.split(',')[1]);
                        arr[idx][2] = Number(item.split(',')[2]);
                        arr[idx][3] = Number(item.split(',')[3]);
                        arr[idx][4] = Number(item.split(',')[4]);
                        arr[idx][5] = Number(item.split(',')[5]);
                        arr[idx][6] = Number(item.split(',')[6]);
                        arr[idx][7] = Number(item.split(',')[7]);
                        arr[idx][8] = Number(item.split(',')[8]);
                        arr[idx][9] = Number(item.split(',')[9]);
                        arr[idx][10] = Number(item.split(',')[10]);
                        arr[idx][11] = Number(item.split(',')[11]);
                        arr[idx][12] = Number(item.split(',')[12]);
                    });
                    console.log(arr);

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

    // $(document).ready(function(){
    //     $('table').visualize();
    // });

})(jQuery);