import React from 'react';
import './scss/quick_menu.scss';
import $ from 'jquery';
import deliveryInfo from './img/quick_menu/deliveryInfo.png';
import icon_arrow_up from './img/quick_menu/icon_arrow_up.svg'

export default function QuickMenuComponent(){

    const [state, setState] = React.useState({
        isFixed: false,
        viewProduct: false
    });

    // 스크롤이벤트 동작 시 스크롤 탑값이 섹션1의 탑값에 도달하면
    // fixed로 구현한다.


    React.useEffect(()=>{
        let quickMenu = $('#quickMenu');
        let sec1Top = $('#section1').offset().top+40;
        let isFixed = false;

        console.log(`quickMenu.height() ${quickMenu.height()}`);
        

        $(window).scroll(function(){
            
            if($(window).scrollTop()>=sec1Top){
                isFixed = true;  
                quickMenu.css({marginTop: -quickMenu.height()/2});             
                
            }
            else{
                isFixed = false;
                quickMenu.css({marginTop: 0});
            }

            setState({
                ...state,
                isFixed: isFixed
            });

        });



    },[state.isFixed]);

    return (
        <div id='quickMenu' className={state.isFixed?'on':''}>
            <ul>
                <li>
                    <a href="!#">
                        <img src={deliveryInfo} alt="" />
                    </a>
                </li>
                <li>
                    <span><a href="!#">등급별혜택</a></span>
                    <span><a href="!#">레시피</a></span>

                </li>
                <li className='view-product'>
                    {      
                        state.viewProduct  && (           
                        <div>
                            <span><a href="!#"><img src={icon_arrow_up} alt="" /></a></span>
                            <h3>최근 본 상품</h3>
                            <div className="view-box">
                                <ul className='wrap-box'>

                                </ul>

                            </div>

                            <span><a href="!#"><img src={icon_arrow_up} alt="" /></a></span>
                        </div>
                        )
                    }
                </li>
            </ul>
        </div>
    );
};
