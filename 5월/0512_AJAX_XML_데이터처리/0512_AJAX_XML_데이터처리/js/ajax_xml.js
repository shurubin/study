;(($)=>{

    
    $.ajax({

        url:'./data/member.xml',
        type:'GET',
        success(res){   // xml 데이터 파라미터 값에서 검색  list > name

            // 배열처리
            let arr=[];
            let txt='';
            let suk=1;
            $(res).find('list').each(function(idx,item){
                console.log(idx,$(item).find('name').text(), Number($(item).find('kor').text()), Number($(item).find('mat').text()), Number($(item).find('eng').text()));
                let i;
                arr[i] = [];
                arr[i][0] = $(item).find('name').text();
                arr[i][1] = Number($(item).find('kor').text()); //국어
                arr[i][2] = Number($(item).find('eng').text()); //영어
                arr[i][3] = Number($(item).find('mat').text()); //수학
                arr[i][4] = arr[i][1]+arr[i][2]+arr[i][3]; //총점
                arr[i][5] = Math.round(arr[i][4]/3); //평균

                //학점 ABCDEF
                if(arr[i][5]>=95){
                    arr[i][6] = 'A';
                }
                else if(arr[i][5]>=85){
                    arr[i][6] = 'B';
                }
                else if(arr[i][5]>=75){
                    arr[i][6] = 'C';
                }
                else if(arr[i][5]>=65){
                    arr[i][6] = 'D';
                }
                else if(arr[i][5]>=55){
                    arr[i][6] = 'E';
                }
                else{
                    arr[i][6] = 'F';
                }
         
            });

            // 석차
            for(let i=0; i<arr.length; i++){
                suk=1;
                for(let j=0; j<arr.length; j++){
                    if(arr[i][5] < arr[j][5]){
                        suk++;
                    }               
                    
                }
                arr[i][7] = suk; // 동등석차
               
            }

            // 정렬하기 : 순위별 오름차순 정렬 출력
            let imsi='';
            for(let i=0; i<arr.length-1; i++){    // 처음부터 마지막 -1
                suk=1;
                for(let j=i+1; j<arr.length; j++){  // 두번째부터 마지막까지
                        // 순위별 정렬
                    if(arr[i][7] > arr[j][7]){  // 석차기준 오름차순


                        for(let k=0; k<=7; k++){
                            imsi = arr[i][k];
                            arr[i][k] = arr[j][k];
                            arr[j][k] = imsi;
                        }

                        // imsi = arr[i][0];
                        // arr[i][0] = arr[j][0];
                        // arr[j][0] = imsi;

                        // imsi = arr[i][1];
                        // arr[i][1] = arr[j][1];
                        // arr[j][1] = imsi;

                        // imsi = arr[i][2];
                        // arr[i][2] = arr[j][2];
                        // arr[j][2] = imsi;

                        // imsi = arr[i][3];
                        // arr[i][3] = arr[j][3];
                        // arr[j][3] = imsi;

                        // imsi = arr[i][4];
                        // arr[i][4] = arr[j][4];
                        // arr[j][4] = imsi;

                                                // imsi = arr[i][5];
                        // arr[i][5] = arr[j][5];
                        // arr[j][5] = imsi;

                        // imsi = arr[i][6];
                        // arr[i][6] = arr[j][6];
                        // arr[j][6] = imsi;

                        // imsi = arr[i][7];
                        // arr[i][7] = arr[j][7];
                        // arr[j][7] = imsi;


                    }
                }               
                   
                

               
            }




            // 출력
            for(let i=0; i<arr.length; i++){
                txt += "<tr>";
                for(let j=0; j<arr[i].length; j++){
                    
                    txt+="<td>"+ arr[i][j] +"</td>";
                    
                }
                txt += "</tr>";
            }

            // 화면에 바인딩
            $('table tbody').append( txt );

            ////////////////////////////////////////////////////////////////////
            


        },
        error(err){
            console.log("에러" + err);
        }
    });


    $.ajax({
        url:'./data/member.xml',
        type:'GET',
        success(res){
            $(res).find('row').each(function(i, item){
                console.log(item);
            });
        },
        error(err){

        }
    });

    

})(jQuery);