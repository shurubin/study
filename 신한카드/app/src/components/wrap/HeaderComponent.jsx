import React from 'react';

export default function HeaderComponent(){
    return (
        <header id="header">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <ul>
                            <li className='header-1'>
                                <div className="h1-left">
                                    <a href="!#">개인</a>
                                    <span>|</span>
                                    <a href="!#">법인</a>
                                    <span>|</span>
                                    <a href="!#">가맹점</a>
                                    <a href="!#">마이카</a>  
                                    <a href="!#"><img src="./images/harr1.png" alt="" /></a>                                  
                                </div>

                                <div className="h1-right">
                                    <a href="!#">로그인</a>
                                    <span>|</span>
                                    <a href="!#">회원가입</a>
                                    <span>|</span>
                                    <a href="!#">아이디찾기</a>
                                    <span>|</span>
                                    <a href="!#">상품공시실</a>
                                    <span>|</span>
                                    <a href="!#">금융소비자보호포털</a>
                                </div>
                            </li>
                            <li className='header-2'>
                                <div className="h2logo">
                                    <a href="!#"><img src="./images/shinhanlogopc.png" alt="홈" /></a>
                                </div>

                                <div className="h2menu">
                                    <h3>마이</h3>
                                    <h3>혜택</h3>
                                    <h3>금융</h3>
                                    <h3>카드</h3>
                                    <h3>서비스</h3>
                                    <h3>디지털</h3>
                                    <h3>Tops Club</h3>
                                    <h3>고객센터</h3>
                                </div>

                                <div className="h2bar">
                                    <a href="!#"><img src="./images/headernavbar.png" alt="전체메뉴" /></a>                                    
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

 