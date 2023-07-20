import React from 'react';

export default function Sub3ComponentChild({알뜰상품}){

    
    const newProductList=()=>{
        알뜰상품.map((item, idx)=>{
            console.log(idx, item);
        })
    }

    
    const result = 알뜰상품.map((item)=>{
        return(
            <li key={item.제품코드}>
                <a href="!#">
                    <div className="img-box">
                        <img src={`./images/sub1/${item.이미지}`} alt="" />
                        <span>
                            <img src="./images/sub1/icon_cart.svg" alt="" />
                        </span>
                    </div>
                    <div className="tit-box">
                        <ul>
                            <li>{item.배송구분}</li>
                            <li><strong>{item.제조사 ===''?'':`[${item.제조사}]`}</strong> <em>{item.제품명}</em></li>
                            <li>{item.제품특성}</li>
                            <li><span className='rate-price'>{item.할인율*100===0? '':`${Math.round(item.할인율*100)}%`}</span><span className='panme-price'>{Math.round(item.정가*(1-item.할인율)/10)*10}</span></li>
                            <li><s>{ item.할인율 === 0? '':`${(item.정가)}`}</s></li> {/* { item.할인율 === 0? '':<s>{item.정가}</s>} */}
                            <li>{item.판매처}</li>
                        </ul>
                    </div>
                </a>

            </li>
        )
    })
    


    React.useEffect(()=>{
        newProductList();
    },[알뜰상품]);


    // 정가, 판매가 금액에 콤마 형식 정규표현식 넣기
    const commaPrice=(price)=>{
        let value = price.toString();
        const regExp = /(^\d)+(\d{3})/g;  //(그룹1) (그룹2)
        console.log('정가 가져오기 파랑 = ' , price);
        console.log('정가.toString 검정 = ' , value);
        // 가져온 데이터 값은 숫자다. 그래서 파란색으로 콘솔로그에 표시
        // 정규표현식 반드시 문자열만 처리가능
        // 문자열 형식으로 변환 시키기

        // 반복문으로 모두처리
        // 리턴문으로 결과값 돌려준다
        while(regExp.test(value)){
            return value.replace(regExp, '$1,$2');
        }
    }




    return (
        <ul>
           
            {result}
 
        </ul>
   
    );
};

