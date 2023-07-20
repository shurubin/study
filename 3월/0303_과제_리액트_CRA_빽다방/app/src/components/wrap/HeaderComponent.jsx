import React from 'react';

function HeaderComponent(){
    return (
        <header id="header">
            <div className="container">
                <div className="gap">
                    <div className="logo">
                        <a href="#!"><img src="./img/logo.png" alt=""/></a>
                    </div>
                    <div className="prmenu">
                        <div className="headerpr">
                            <div className="sns">
                                <ul>
                                    <li></li>
                                    <li className="the"><a href="#!">더본코리아</a>&nbsp;&nbsp;&nbsp;&nbsp;|</li>
                                    <li className="face"><a href="#!"><img src="./img/facebook-ico.png" alt=""/></a></li>
                                    <li className="instar"><a href="#!"><img src="./img/insta-ico.png" alt=""/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="headermenu">
                            <div className="menulist">
                                <ul>
                                    <li><a href="#!">빽다방</a></li>
                                    <li><a href="#!">메뉴</a></li>
                                    <li><a href="#!">소식</a></li>
                                    <li><a href="#!">커뮤니티</a></li>
                                    <li><a href="#!">매장안내</a></li>
                                    <li><a href="#!">창업안내</a></li>
                                    <li><a href="#!">고객의 소리</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
            
        </header>
    );
};

export default HeaderComponent;