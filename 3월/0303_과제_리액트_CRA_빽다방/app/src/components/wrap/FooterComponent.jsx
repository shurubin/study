import React from 'react';

function FooterComponent(){
    return (
        <footer id="footer">       
            <div className="container">
                <div className="gap">
                    <div className="companyinfo">
                        <a href="#!"><img src="./img/flogo.png" alt=""/></a>
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
    );
};

export default FooterComponent;