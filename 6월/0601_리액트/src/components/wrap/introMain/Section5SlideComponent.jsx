import React from 'react';

export default function Section5SlideComponent({페스타특가, setViewProduct}){

    const onClickProductList=(e, 제품코드, 이미지)=>{
        e.preventDefault();
        let obj = {
            제품코드: 제품코드,
            이미지: `http://localhost:3000/images/intro/${이미지}`,
            저장일시: new Date().getTime()
        }
        console.log(obj);
        setViewProduct(obj);
    }


    return (

        <div className="right">
        <ul>
            {    
                페스타특가.map((item)=>{
                    return(
                        <li className="slide slide0" key={item.제품코드}>
                            <div className="col-gap">
                                <a href="!#" onClick={(e)=>onClickProductList(e, item.제품코드, item.이미지)}>
                                    <div className="img-box">
                                        <img src={`./images/intro/${item.이미지}`} alt="" />
                                        <span>
                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="tex-box">
                                        <ul>
                                            <li>{item.배송구분}</li>
                                            <li><strong>[{item.제조사}]</strong> <em>{item.제품명}</em></li>
                                            <li>{"큼직한 건더기를 아낌없이 넣은 찌개"}</li>
                                            <li><span className='rate-price'>{item.할인율 === 0? '':`${item.할인율 * 100}%`}</span><span className='panme-price'>{item.정가 - (item.정가 * item.할인율)}</span></li>
                                            <li>{ item.할인율 === 0? '':<s>{item.정가}</s>}</li> {/* { item.할인율 === 0? '':<s>{item.정가}</s>} */}
                                            <li>{item.판매처}</li>
                                        </ul>                                                        
                                
                                    </div>
                                </a>
                            </div>
                        </li>
                    )
                })


            }
        </ul>
        
    </div>
    );
};
