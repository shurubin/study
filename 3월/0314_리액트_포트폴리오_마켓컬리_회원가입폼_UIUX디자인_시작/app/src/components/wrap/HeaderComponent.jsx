import React from 'react';
import $ from 'jquery';

export default function HeaderComponent() {

    // 상태관리
    const [isFix, setFix] = React.useState({
        isFix:false        
    });

    const [state, setState] = React.useState({        
        isSub1:false
    });


    //고객센터 서브메뉴(툴팁메뉴) 마우스 엔터 이벤트
    const onMouseEnterSub1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isSub1 :true
        })
    }
    // 고객센터 서브메뉴를 마우스가 떠나면
    const onMouseLeaveSub1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isSub1:false
        })
    }



    React.useEffect(()=>{
        // 헤더영역에 .row3 의 위에서 .row3 offset().top 포지션 스크롤탑값이 도달 시
        // .row2, .row3에 클래스를 추가해라
        const row3Top = document.querySelector('#header .row3').offsetTop;

        window.addEventListener('scroll', function(){
            let isFix = false;
            

            console.log( this.scrollY);
            console.log( window.scrollY);

            if(window.scrollY>=row3Top){  //scrollTop() => scrollY
                isFix = true;
            }
            else {
                isFix = false;
            }
            setFix(isFix);
        })

    },[]);




    return (
        <header id='header'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="row1">
                            <div className="container">
                                <ul>
                                    <li><a href="/회원가입" title='회원가입'>회원가입</a></li>
                                    <li><i>|</i></li>
                                    <li><a href="/로그인" title='로그인'>로그인</a></li>
                                    <li><i>|</i></li>
                                    <li>
                                        <a onMouseEnter={onMouseEnterSub1} href="/고객센터" title='고객센터'>고객센터 <img src="./images/sign_up/ico_down_16x10.png" alt="" /></a>
                                        {
                                            state.isSub1 && (
                                                    <div className="sub" onMouseLeave={onMouseLeaveSub1}> 
                                                        <ul>
                                                            <li><a href="!#">공지사항</a></li>
                                                            <li><a href="!#">자주하는 질문</a></li>
                                                            <li><a href="!#">1:1 문의</a></li>
                                                            <li><a href="!#">대량주문 문의</a></li>
                                                        </ul>
                                                    </div>
                                                    )
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`row2${isFix?' on':''}`}>
                            <div className="container">
                                <div className="left">
                                    <h1>
                                        <img src="./images/sign_up/logo.svg" alt="" />
                                        <span><a href="/">마켓컬리</a></span>
                                        <span><i>|</i></span>
                                        <span><a href="/뷰티컬리">뷰티컬리</a></span>
                                    </h1>
                                </div>
                                <div className="center">
                                    <div>
                                        <input type="text" name='' id='' placeholder='검색어를 입력해 주세요'/>
                                        <a href='!#'><img src="./images/sign_up/search.svg" alt="" /></a>
                                    </div>
                                </div>
                                <div className="right">
                                    <span>
                                        <a href="!#"><img src="./images/sign_up/map.svg" alt="" /></a>
                                        <div className="sub2">
                                            <ul>
                                                <li>
                                                    <span>배송지를 등록</span>하고
                                                </li>
                                                <li>
                                                    구매 가능한 상품을 확인하세요!
                                                </li>
                                                <li>
                                                    <button>로그인</button>
                                                    <button>
                                                        <img src="./images/sign_up/ico_search.svg" alt="" />
                                                        주소검색
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </span>
                                    <span><a href="!#"><img src="./images/sign_up/heart.svg" alt="" /></a></span>
                                    <span><a href="!#"><img src="./images/sign_up/cart.svg" alt="" /></a></span>
                                </div>
                            </div>
                        </div>
                        <nav id='nav' className={`row3${isFix?' on':''}`}>
                            <div className="container">
                                <div className="left">
                                    <a href="!#"><img src="./images/sign_up/nav_bar.svg" alt="" /><span>카테고리</span></a>
                                </div>
                                <div className="center">
                                    <ul>
                                        <li><a href='!#'>신상품</a></li>
                                        <li><a href='!#'>베스트</a></li>
                                        <li><a href='!#'>알뜰상품</a></li>
                                        <li><a href='!#'>특가혜택</a></li>
                                    </ul>
                                </div>
                                <div className="right">
                                    <a href="!#">샛별・택배<span>배송안내</span></a>
                                </div>
                            </div>

                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};
