import React from 'react';
import axios from 'axios';
import Sub1ComponentChild from './Sub1ComponentChild';
import '../scss/sub1.scss';

export default function Sub1Component({setViewProduct}) {


    const [state, setState] = React.useState({
        신상품: []
    });

    // 신상품 가져오기
    React.useEffect(()=>{
        axios({
            url:'./data/sub_page//product.json',
            method:'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                신상품: res.data.신상품
            })
        })
        .catch((err)=>{
            console.log("AXIOS 오류!" + err);
        });  
    },[]);

    /////// 카테고리 아코디언 메뉴 구현 //////////////////////////////////////
    const [isClass, setIsClass] = React.useState([true, true, true, true, true]);
    const [subH, setSubH] = React.useState([0,0,0,0,0]); // 서브메뉴 각각의 높이 배열
    const subRef = React.useRef([]);

    // 서브메뉴 높이 저장
    React.useEffect(()=>{
        subH.map((item, idx)=>{
            subH[idx] = subRef.current[idx].offsetHeight;
        })
    },[]);

        // console.log(subRef.current[0].offsetHeight); //높이확인
        // console.log(subRef.current[1].offsetHeight);
        // console.log(subRef.current[2].offsetHeight);
        // console.log(subRef.current[3].offsetHeight);
        // console.log(subRef.current[4].offsetHeight);

    // 카테고리 버튼 클릭이벤트 5개
    const onClickCategory=(e, n)=>{
        e.preventDefault();

        if(isClass[n] === true){
            isClass[n] = false;   
            subRef.current[n].style.height = `0px`;
        }
        else{
            isClass[n] = true;    
            subRef.current[n].style.height = `${subH[n]}px`;       
        }
        setIsClass([...isClass]);
    }



    React.useEffect(()=>{
        // 카테고리 버튼 클릭 이벤트 : 토글 기능
        // $('.category-btn').on({
        //     click(e){
        //        e.preventDefault();
        //        $(this).next().stop().slideToggle();
        //        $(this).toggleClass('on');
        //     }
        // });
    },[]);

    const onClickOrder=(e, value)=>{
        e.preventDefault();
        if(value==='추천순'){
            setState({
                신상품:[...state.신상품.sort((a, b)=> (a.추천 > b.추천) ? (-1):((a.추천 < b.추천)? (1):(0)))]
            })
        }
        else if(value==='신상품순'){
            setState({
                신상품:[...state.신상품.sort((a, b)=> (a.제품코드 < b.제품코드) ? (-1):((a.제품코드 > b.제품코드)? (1):(0)))]
            })
        }
        else if(value==='판매량순'){
            setState({
                신상품:[...state.신상품.sort((a, b)=> (a.판매처 > b.판매처) ? (-1):((a.판매처 < b.판매처)? (1):(0)))]
            })
        }
        else if(value==='혜택순'){  // 할인율 높은 거 내림차순 b.속성이름 - a.속성이름 / 오름차순 a.속성이름 - b.속성이름
            setState({
                신상품:[...state.신상품.sort((a, b)=> b.할인율 - a.할인율)]
            })
        }
        else if(value==='낮은가격순'){  // 정가의 오름차순
            setState({
                신상품:[...state.신상품.sort((a, b)=> a.정가 - b.정가)]
            })
        }
        else if(value==='높은가격순'){
            setState({
                신상품:[...state.신상품.sort((a, b)=> b.정가 - a.정가)]
            })
        }
    }


    return (
        <main id='sub1'>
            <section id='section1'>
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <a href="!#">
                                <img src="./images/sub1/0HpXehniZlRXiBeSfEFpPK8rSl35tGLPMUOwNNWK.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id='section2'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>신상품</h2>    
                        </div>
                        <div className="content">                        
                            <div className="left">
                                <div className="left-title">
                                    <strong>필터</strong>
                                    <span>
                                        <img src="" alt="" />
                                        <em>초기화</em>
                                    </span>
                                </div>
                                <div className="left-content">
                                    <div>
                                        <a onClick={(e)=>onClickCategory(e, 0)} href="!#" className={`category-btn category1 ${isClass[0]?' on':''}`}><span>카테고리</span><img src="./images/sub1/icon_arrow_up.svg" alt="" /></a>
                                        <div ref={(el)=>(subRef.current[0] = el)} className="sub">
                                            <ul>
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        셀러드 간편식
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk2' id='category1Chk2'  value={'과일·견과·쌀'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk3' id='category1Chk3'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk4' id='category1Chk4'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk5' id='category1Chk5'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk6' id='category1Chk6'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk7' id='category1Chk7'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk8' id='category1Chk8'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk9' id='category1Chk9'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk10' id='category1Chk10'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk11' id='category1Chk11'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                            </ul>
                                        </div>
                                        <a onClick={(e)=>onClickCategory(e, 1)} href="!#" className={`category-btn category2 ${isClass[1]?' on':''}`}><span>브랜드</span><img src="./images/sub1/icon_arrow_up.svg" alt="" /></a>
                                        <div ref={(el)=>(subRef.current[1] = el)} className="sub">
                                            <ul>
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category2_chk1' id='category2Chk1'  value={'셀러드 간편식'} />
                                                        셀러드 간편식
                                                   </label>
                                                </li>                                                
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                            </ul>
                                        </div>
                                        <a onClick={(e)=>onClickCategory(e, 2)} href="!#" className={`category-btn category3 ${isClass[2]?' on':''}`}><span>가격</span><img src="./images/sub1/icon_arrow_up.svg" alt="" /></a>
                                        <div ref={(el)=>(subRef.current[2] = el)} className="sub">
                                            <ul>
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        셀러드 간편식
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'과일·견과·쌀'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                            </ul>
                                        </div>
                                        <a onClick={(e)=>onClickCategory(e, 3)} href="!#" className={`category-btn category4 ${isClass[3]?' on':''}`}><span>혜택</span><img src="./images/sub1/icon_arrow_up.svg" alt="" /></a>
                                        <div ref={(el)=>(subRef.current[3] = el)} className="sub">
                                            <ul>
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        셀러드 간편식
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'과일·견과·쌀'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li>                                               
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                            </ul>
                                        </div>
                                        <a onClick={(e)=>onClickCategory(e, 4)} href="!#" className={`category-btn category5 ${isClass[4]?' on':''}`}><span>유형</span><img src="./images/sub1/icon_arrow_up.svg" alt="" /></a>
                                        <div ref={(el)=>(subRef.current[4] = el)} className="sub">
                                            <ul>
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        셀러드 간편식
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'과일·견과·쌀'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li>                                    
                                            </ul>
                                        </div>
                                    </div>                                    

                                </div>
                            </div>
                            <div className="right">
                                <div className="right-title">
                                    <strong>총 215건</strong>
                                    <span>
                                        <a href="!#" onClick={(e)=>onClickOrder(e, '추천순')} className='order-btn'><span>추천순</span><img src="./images/sub1/icon_quet.svg" alt="" /></a>
                                        <i>|</i>
                                        <a href="!#" onClick={(e)=>onClickOrder(e, '신상품순')} className='order-btn'>신상품순</a>
                                        <i>|</i>
                                        <a href="!#" onClick={(e)=>onClickOrder(e, '판매량순')} className='order-btn'>판매량순</a>
                                        <i>|</i>
                                        <a href="!#" onClick={(e)=>onClickOrder(e, '혜택순')} className='order-btn'>혜택순</a>
                                        <i>|</i>
                                        <a href="!#" onClick={(e)=>onClickOrder(e, '낮은가격순')} className='order-btn'>낮은 가격순</a>
                                        <i>|</i>
                                        <a href="!#" onClick={(e)=>onClickOrder(e, '높은가격순')} className='order-btn'>높은 가격순</a>                                        
                                    </span>  
                                </div>
                                <div className="right-content">
                                    {/* state.신상품 => 하위컴포넌트 프롭스 데이터 내려주기 */}

                                   <Sub1ComponentChild 신상품={state.신상품} setViewProduct={setViewProduct} />  

                                </div>
                            </div>
                       </div>     
                    </div>     
                </div>     
            </section>
        </main>
    );
};