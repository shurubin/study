(($)=>{

    $('.pension-btn').on({
        click(e){
            e.preventDefault();
            $.ajax({
                url:'./data/pension.csv',
                data:'GET',
                dataType:'TEXT',
                success(res){
                    // console.log('AJAX 성공');
                    // console.log(res);

                    let arr = [];
                    const result = res.split('\r\n');
                    $.each(result, function(idx, item){
                        // console.log(idx, item);
                        arr[idx] = [];
                        arr[idx][0] = Number(item.split(',')[0]);
                        arr[idx][1] = String(item.split(',')[1]);
                        arr[idx][2] = String(item.split(',')[2]);
                        arr[idx][3] = String(item.split(',')[3]);
                        arr[idx][4] = String(item.split(',')[4]);
                        arr[idx][5] = String(item.split(',')[5]);
                        arr[idx][6] = String(item.split(',')[6]);
                        arr[idx][7] = String(item.split(',')[7]);

                    });
                    console.log(arr);

                    $('.pension-list').empty();
                    for(let i=0; i<arr.length; i++){
                        $('.pension-list').append('<tr>');
                        for(let j=0; j<arr[i].length; j++){
                            $('.pension-list').append(`<td>${arr[i][j]}</td>`);
                        }
                        $('.pension-list').append('</tr>');
                    }

                    let a=0; 
                    let b=0; 
                    let c=0;
                    let d=0;

                    for(let i=0; i<arr.length; i++){
                    
                
                        if(arr[i][3] == "영업/정상"){                            
                            a++;
                        }
                        else if(arr[i][3] == "휴업"){

                            b++;
                        }
                        else if(arr[i][3] == "폐업"){
                            c++;
                        }
                        else if(arr[i][3] == "취소/말소/만료/정지/중지"){
                            d++;
                        }
                   
                    }
                    
                    console.log(`정상${a}`);
                    console.log(`휴업${b}`);
                    console.log(`폐업${c}`);
                    console.log(`취소${d}`);

                    $('.count').empty();
                    for(let i=0; i<1; i++){
                        $('.count').append('<tr>');
                        for(let j=0; j<1; j++){
                            $('.count').append(`<td>${a}</td>`);
                            $('.count').append(`<td>${b}</td>`);
                            $('.count').append(`<td>${c}</td>`);
                            $('.count').append(`<td>${d}</td>`);
                        }
                        $('.count').append('</tr>');
                    }




                },
                error(err){
                    console.log(`에러발생 ${err}`);
                }
            })



        }
    })

})(jQuery);