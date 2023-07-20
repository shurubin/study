import React from 'react';

export default function HeaderComponent(){
    return (

        <header id="header">
            <div className="container">
                <div className="back-color">
                    <div className="gap 1">
                        <div className="header-1">
                            <div className="sign">
                                <a href="!#">로그인</a>
                                <a href="!#">회원가입</a>
                                <a href="!#">마이페이지</a>
                                <a href="!#">고객센터</a>
                                <a href="!#">여행정보</a>
                                <a href="!#">법인/단체여행</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gap 2">
                    <div className="header-2">
                        <div className="left">
                            <a href="!#" className='interpark'><img src="./img/header/interpark-tour.png" alt="" /></a>
                            <input type="text" placeholder='해외여행 1등은 크다, 삿포로 자유여행 4일 40만원대~' />                                         
                            <a href="!#" className='search'><img src="./img/header/btn_search.svg" alt="" /></a>                        
                        </div>
                        <div className="right">
                            <a href="!#" className='slide-box'><img src="./img/header/638174125964970536.png" alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="gap 3">
                    <div className="header-3">
                        <div className="list">
                            <a href="!#">항공</a>
                            <a href="!#">국내숙소</a>
                            <a href="!#">해외숙소</a>
                            <a href="!#">투어·티켓</a>
                            <a href="!#">해외패키지</a>
                            <a href="!#">국내/제주</a>
                            <a href="!#">허니문</a>
                            <a href="!#">골프</a>
                        </div>
                        <div className="sale">
                            <a href="!#">여행혜택존<img src="./img/header/banner-travel.svg" alt="" /></a>
                            <a href="!#">1등특가<img src="./img/header/banner-trophy.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>


    );
};