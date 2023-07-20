import React from 'react';

function Section5Component(){
    return (
        <div id="section5">
            <div className="container">
                <div className="gap">
                    <ul>
                        <li className="store">
                            <div className="text-box">
                                <h2>store</h2>
                                <h3>원하시는 지역의 매장을 검색해보세요!</h3>
                            </div>
                            <form name="search" id="search" method="post" action="">
                                <span className="sesp">
                                    <input type="text" name="region" id="region" placeholder="Find a store in your area!"/>
                                    <a href="!#">.</a>
                                </span>
                            </form>
                        </li>
                        <li className="fran">
                            <div className="text-box">
                                <h2>franchise</h2>
                                <h3>빽다방 창업안내를 도와드리겠습니다.</h3>
                                <span className="plus-btn"><a href="!#">.</a></span>
                                <div className="img"></div>
                            </div>
                        </li>
                    </ul>
                    <div className="tasty">
                        <div className="text-box">
                            <h2>tasty<br/>ice cream /<br/>dessert</h2>
                            <h5>.</h5>
                            <h3>달콤한 아이스크림부터<br/>든든한 브레드까지!</h3>
                            <span className="plus-btn"><a href="!#">.</a></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Section5Component;