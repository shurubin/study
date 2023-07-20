function WrapComponent(){
    return(
        <div id="wrap">
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
            <GotopComponent/>
            <NewopenComponent/>
        </div>
    )
}

function HeaderComponent(){
    return(
        <header id="header">
            <div className="container">
                <div className="gap">
                    <div className="logo">
                        <a href="#"><img src="./img/logo.png" alt=""/></a>
                    </div>
                    <div className="prmenu">
                        <div className="headerpr">
                            <div className="sns">
                                <ul>
                                    <li></li>
                                    <li className="the"><a href="#">더본코리아</a>&nbsp;&nbsp;&nbsp;&nbsp;|</li>
                                    <li className="face"><a href="#"><img src="./img/facebook-ico.png" alt=""/></a></li>
                                    <li className="instar"><a href="#"><img src="./img/insta-ico.png" alt=""/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="headermenu">
                            <div className="menulist">
                                <ul>
                                    <li><a href="#">빽다방</a></li>
                                    <li><a href="#">메뉴</a></li>
                                    <li><a href="#">소식</a></li>
                                    <li><a href="#">커뮤니티</a></li>
                                    <li><a href="#">매장안내</a></li>
                                    <li><a href="#">창업안내</a></li>
                                    <li><a href="#">고객의 소리</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
            
        </header>
    )
}

function MainComponent(){
    return(
        <main id="main">
            <Section1Component/>
            <Section2Component/>
            <Section3Component/>
            <Section4Component/>
            <Section5Component/>
            <Section6Component/>
        </main>

    )
}
function Section1Component(){
    return(
        <div id="section1">
            <div className="container">
                <div className="slide-container">
                    <div className="slide-view">
                        <ul className="slide-wrap">
                            <li className="slide slide4"></li>
                            <li className="slide slide1"></li>
                            <li className="slide slide2"></li>
                            <li className="slide slide3"></li>
                            <li className="slide slide4"></li>
                            <li className="slide slide1"></li>
                        </ul>


                    </div>

                </div>
                
                <div className="pagenation">
                    <span>
                        <a href="#" className="page btn1 on"></a>
                        <a href="#" className="page btn2"></a>
                        <a href="#" className="page btn3"></a>
                        <a href="#" className="page btn4"></a>
                    </span>

                </div>
            </div>
        </div>
    )
}
function Section2Component(){
    return(
        <div id="section2">
            <div className="container">
                <div className="gap">
                    <h4>The Finest Quality Coffee Plants</h4>
                    <h2>PAIK'S COFFEE STORY</h2>
                    <h3>균형잡힌 바디감으로 긴 여운을 남기는 빽다방 커피를 만나보세요.</h3>
                    <span className="plus-btn"><a href="#"></a></span>
                </div>
            </div>
        </div>
    )
}
function Section3Component(){
    return(
        <div id="section3">
            <div className="text-box">
                <h2>fresh<br/>coffee</h2>
                <h5></h5>
                <h3>신선한 뉴크롭 원두를 사용하여<br/>추출한 커피메뉴!</h3>
                <span className="plus-btn"><a href="#"></a></span>
            </div>


        </div>
    )
}
function Section4Component(){
    return(
        <div id="section4">
            <div className="container">
                <div className="gap">
                    <div className="various">
                        <div className="text-box">
                            <h2>various<br/>beverage</h2>
                            <h5></h5>
                            <h3>에이드, 티, 주스 등 취향대로<br/>골라 먹는 즐거움!</h3>
                            <span className="plus-btn"><a href="#"></a></span>
                        </div>
                    </div>
                    <div className="sweet">
                        <div className="text-box">
                            <h2>sweet<br/>paik's ccino</h2>
                            <h5></h5>
                            <h3>달콤 시원한 빽다방<br/>시그니처 메뉴!</h3>
                            <span className="plus-btn"><a href="#"></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Section5Component(){
    return(
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
                                    <a href="#"></a>
                                </span>
                            </form>
                        </li>
                        <li className="fran">
                            <div className="text-box">
                                <h2>franchise</h2>
                                <h3>빽다방 창업안내를 도와드리겠습니다.</h3>
                                <span className="plus-btn"><a href="#"></a></span>
                                <div className="img"></div>
                            </div>
                        </li>
                    </ul>
                    <div className="tasty">
                        <div className="text-box">
                            <h2>tasty<br/>ice cream /<br/>dessert</h2>
                            <h5></h5>
                            <h3>달콤한 아이스크림부터<br/>든든한 브레드까지!</h3>
                            <span className="plus-btn"><a href="#"></a></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
function Section6Component(){
    return(
        <div id="section6">
            <div className="text-box">
                <div className="text-box-gap">
                    <h3>PAIK’S COFFEE SNS</h3>
                    <h4>#빽다방&nbsp;&nbsp;#빽다방신메뉴&nbsp;&nbsp;#빽다방이벤트</h4>
                    <span><h5></h5></span>
                    <div className="sixsns">
                        <i><img src="./img/facebook-ico.png" alt=""/></i>
                        <i><img src="./img/insta-ico.png" alt=""/></i>
                    </div>
                </div>
            </div>            
        </div>
    )
}

function FooterComponent(){
    return(
        <footer id="footer">       
            <div className="container">
                <div className="gap">
                    <div className="companyinfo">
                        <a href="#"><img src="./img/flogo.png" alt=""/></a>
                        <div className="footer-text">
                            <p>(주)더본코리아&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;사업자등록번호 211-86-00870&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;대표이사 백종원</p>
                            <p>주소: 서울시 강남구 봉은사로 1길 39 유성빌딩 5~6층&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;팩스: 02-511-3864</p>
                            <p>본사 대표전화: 02-549-3864&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;가맹상담전화: 02-3447-0410&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;고객센터: 1544-2360</p>
                        </div>

                        <h5>COPYRIGHT&copy; 2018 THEBORN KOREA INC. ALL RIGHTS RESERVED</h5>
                        <div className="gamang"> 
                            <div className="col-gap">
                                <form name="family" id="family" method="post" action="">
                                    <ul>
                                        <li>
                                            <select name="패밀리사이트 바로가기" id="familyop">
                                                <option value="" selected>패밀리사이트 바로가기</option>
                                                <optgroup label="식당">                                                
                                                    <option value="새마을식당">새마을식당</option>
                                                    <option value="한신포차">한신포차</option>
                                                    <option value="역전우동">역전우동</option>
                                                    <option value="백스비어">백스비어</option>
                                                    <option value="롤링파스타">롤링파스타</option>
                                                    <option value="인생설렁탕">인생설렁탕</option>
                                                    <option value="미정국수">미정국수</option>
                                                    <option value="리춘식당">리춘식당</option>
                                                    <option value="원조쌈밥집">원조쌈밥집</option>
                                                    <option value="돌배기집">돌배기집</option>
                                                    <option value="백철판">백철판</option>                                                
                                                </optgroup>

                                                <optgroup label="식당 외">
                                                    <option value="더본코리아">더본코리아</option>
                                                    <option value="창업센터">창업센터</option>
                                                    <option value="호텔더본">호텔더본</option>
                                                </optgroup>
                                            </select>
                                        </li>    
                                    </ul>
                                </form>  
                            </div>               
                        
                        </div> 
                    </div>
                </div>
            </div>
        </footer>
    )
}

function GotopComponent(){
    return(
        <div id="gotop">
            <a href="#wrap"></a>
        </div>
    )
}

function NewopenComponent(){
    return(
        <div className="newopen">
            <a href="https://start.theborn.co.kr/briefing.php" className="up"></a>
            <a href="https://start.theborn.co.kr/inquiry.php" className="down"></a>
        </div>
    )
}




ReactDOM.render(
    <WrapComponent/>,
    document.getElementById('root')
)