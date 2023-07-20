import React from 'react';

export default function HeaderComponent(){
    return (
        <header id="header">
            <div className="container">
                <div className="gap">
                        <div className="headerT">
                        <span><a href="!#">회원가입</a></span>
                        <span>|</span>
                        <span><a href="!#">로그인</a></span>
                        <span>|</span>
                        <span><a href="!#">고객센터<img src="./images/sign_up/ico_down_16x10.png" alt="" /></a></span>
                    </div>
                    <div className="headerM">
                        <div className="left">
                            <span><a href="!#"><img src="./images/sign_up/Logo.svg" alt="Home" /></a></span>
                            <span><a href="!#">마켓컬리</a></span>
                            <span>|</span>
                            <span><a href="!#">뷰티컬리<i>N</i></a></span>
                        </div>
                        <div className="center">
                            <input type="text" name='search' id='search' placeholder='검색어를 입력해주세요' />
                            <a href="!#"><img src="./images/sign_up/search.svg" alt="돋보기" /></a>
                        </div>
                        <div className="right">
                            <span><a href="!#"><img src="./images/sign_up/point.svg" alt="맵" /></a></span>
                            <span><a href="!#"><img src="./images/sign_up/heart.svg" alt="하트" /></a></span>
                            <span><a href="!#"><img src="./images/sign_up/cart.svg" alt="장바구니" /></a></span>
                        </div>
                    </div>
                    <div className="headerB">
                        <div className="left">
                            <span><a href="!#"><img src="./images/sign_up/nav_bar.svg" alt="" />카테고리</a></span>
                        </div>
                        <div className="center">
                            <span><a href="!#">신상품</a></span>
                            <span><a href="!#">베스트</a></span>
                            <span><a href="!#">알뜰쇼핑</a></span>
                            <span><a href="!#">특가/혜택</a></span>
                        </div>
                        <div className="right">
                            <div className="pass">
                                <a href="!#"><span>샛별 · 택배</span>배송안내</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </header>

    );
};

