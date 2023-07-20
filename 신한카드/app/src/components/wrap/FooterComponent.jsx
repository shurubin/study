import React from 'react';

export default function FooterComponent(){
    return (
        <footer id="footer">
            <hr />
            <div className="container">
                <div className="gap">
                    <div className="footer1">
                        <ul>
                            <li>고객센터 1544-7000 (해외 82-2-3420-7000)</li>
                            <li>카드분실신고 1544-7200</li>
                            <li>카드신청 1661-8599</li>
                            <li>금융신청 1588-0303</li>
                            <li>할부금융 1544-7100</li>
                        </ul>
                    </div>
                    <div className="footer2">
                        <ul>
                            <li><a href="!#">회사소개</a></li>
                            <li><a href="!#">지배구조</a></li>
                            <li><a href="!#">투자정보</a></li>
                            <li><a href="!#">이용약관</a></li>
                            <li><a href="!#">고객권리 안내문</a></li>
                            <li><a href="!#" className='bold' >개인정보처리방침</a></li>
                            <li><a href="!#" className='bold' >위치기반서비스 이용약관</a></li>
                            <li><a href="!#">유료상품 이용현황</a></li>
                            <li><a href="!#">금융소비자보호포털</a></li>
                            <li><a href="!#" className='bold' >전자민원접수</a></li>
                            <li><a href="!#">상품공시실</a></li>
                            <li><a href="!#">내부자제보</a></li>
                        </ul>
                    </div>
                    <div className="footer3">
                        <div className="footersns">
                            <a href="!#"><img src="./images/sns01.png" alt="" /></a>
                            <a href="!#"><img src="./images/sns02.png" alt="" /></a>
                            <a href="!#"><img src="./images/sns03.png" alt="" /></a>
                            <a href="!#"><img src="./images/sns04.png" alt="" /></a>
                            <a href="!#"><img src="./images/sns05.png" alt="" /></a>
                            <a href="!#"><img src="./images/sns06.png" alt="" /></a>
                        </div>
                        <div className="choicebox">
                            <div className="member-box">
                                <select name="memeber" id="member" >                                    
                                    <option value="" selected disabled>전용회원</option>
                                    <option value="복지카드 회원">복지카드 회원</option>
                                    <option value="웰프로카드 회원">웰프로카드 회원</option>
                                    <option value="신한금융그룹 패밀리">신한금융그룹 패밀리</option>
                                    <option value="LG/LX/GS/LS/LIG">LG/LX/GS/LS/LIG</option>
                                    <option value="패밀리">패밀리</option>
                                </select>
                            </div>
                            <div className="group-box">
                                <select name="group" id="group">                                    
                                    <option value="" selected disabled>신한금융그룹</option>
                                    <option value="신한금융지주회사">신한금융지주회사</option>
                                    <option value="신한은행">신한은행</option>
                                    <option value="신한투자증권">신한투자증권</option>
                                    <option value="신한라이프">신한라이프</option>
                                    <option value="신한캐피탈">신한캐피탈</option>
                                    <option value="신한자산운용">신한자산운용</option>
                                    <option value="제주은행">제주은행</option>
                                    <option value="신한저축은행">신한저축은행</option>
                                    <option value="신한자산신탁">신한자산신탁</option>
                                    <option value="신한DS">신한DS</option>
                                    <option value="신한펀드파트너스">신한펀드파트너스</option>
                                    <option value="신한신용정보">신한신용정보</option>
                                    <option value="신한리츠운용">신한리츠운용</option>
                                    <option value="신한">신한 AI</option>
                                    <option value="신한벤처투자">신한벤처투자</option>
                                    <option value="신한EZ손해보험">신한EZ손해보험</option>
                                </select>
                            </div>

                        </div>
                        
                    </div>
                    <div className="footer4">
                        <p><a href="!#"><img src="./images/harr1.png" alt="" /></a></p>
                    </div>
                    <div className="footer5">
                        <p>서울특별시 중구 을지로 100 (을지로2가, 파인에비뉴 A동)</p>
                        <p>대표이사 문동권 사업자등록번호 202-81-48079</p>                        
                        <p>copyright © 2020 SHINHANCARD CO.,LTD. ALL RIGHTS RESERVED</p>
                        <p className='award'>
                            <a href="!#"><img src="./images/smark01.png" alt="" /></a>
                            <a href="!#"><img src="./images/smark02.png" alt="" /></a>
                            <a href="!#"><img src="./images/smark03.png" alt="" /></a>
                            <a href="!#"><img src="./images/smark04.png" alt="" /></a>
                            <a href="!#"><img src="./images/smark05.png" alt="" /></a>
                            <a href="!#"><img src="./images/smark06.png" alt="" /></a>
                        </p>
                        <p className='award'>
                            <a href="!#"><img src="./images/smark08.png" alt="" /></a>
                            <a href="!#"><img src="./images/smark07.png" alt="" /></a>
                            <a href="!#"><img src="./images/smark09.png" alt="" /></a>
                        </p>
                        
                    </div>

                </div>
            </div>
        </footer>
    );
};

