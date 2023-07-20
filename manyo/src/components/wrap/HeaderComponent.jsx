import React from 'react';
import './scss/header.scss';

export default function HeaderComponent(){
    return (
        <header id='header'>
            <div className="container">
                <div className="gap">
                    <div className="header-one">
                        <a href="!#">로그인</a>
                        <span>|</span>
                        <a href="!#">주문배송</a>
                        <span>|</span>
                        <a href="!#">멤버십</a>
                        <span>|</span>
                        <a href="!#">고객센터</a>
                    </div>
                    <div className="header-two">
                        <div className="logo">
                            <img src="./img/header/logo.svg" alt="" />
                        </div>
                    </div>
                    <div className="header-three">
                        <div className="left">
                            <div className="bar">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="header-menu">
                                <a href="!#">전체</a>
                                <a href="!#">이벤트</a>
                                <a href="!#">베스트</a>
                                <a href="!#">특가</a>
                                <a href="!#">브랜드</a>
                            </div>
                        </div>
                        <div className="right">
                            <div className="search">
                                <input type="text" placeholder='NEW 히더 진정 라인' />
                                <a href="!#"><img src="./img/header/search.svg" alt="" /></a>
                            </div>
                            <span className='cart'>
                                <a href="!#">
                                    <img src="./img/header/cart.svg" alt="" />
                                </a>
                            </span>
                            <span className='join'>
                                <a href="!#">
                                    <img src="./img/header/join.svg" alt="" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};


