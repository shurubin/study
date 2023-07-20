import React from 'react';

export default function Main1Component(){
    return (
        <div class="container">
        <div class="gap">
            <div class="content">
                <div class="info-box">
                    <p>개인(직장가입자)이 아닌 사업장업무를 위한 회원가입입니다.</p>
                    <p>사업장관리번호 및 단위 사업장 기호가 다른 경우에는 각각 회원가입을 하셔야 합니다</p>
                    <p>예) 건설현장 사업장마다 사업장관리번호가 각각 적용되오니 회원가입도 각각 하셔야 해당 업무를 이용하실 수 있습니다.</p>
                </div>
                <p><img src="./img/ico-compulsory.png" alt=""/> 표는 필수 입력 사항이며, [동일아이디검색] 및 [가입여부확인] 버튼을 반드시 눌러주세요.</p>
                <hr/>
                <form name="form" method="post" action="./kukmin_signup_action.jsp">

                    <ul>
                        <li>
                            <div class="left"><span>사업장관리번호</span><img src="./img/ico-compulsory.png" alt=""/></div>
                            <div class="right"><input name="magage_no" id="magageNo" placeholder="" type="text"/></div>
                        </li>
                        <li>
                            <div class="left"><span>사업장기호</span><img src="./img/ico-compulsory.png" alt=""/></div>
                            <div class="right"><input name="symbol" id="symbol" placeholder="" type="text"/></div>
                        </li>
                        <li>
                            <div class="left"><span>단위사업장기호</span><img src="./img/ico-compulsory.png" alt=""/></div>
                            <div class="right"><input name="dan_symbol" id="danSymbol" placeholder="" type="text"/></div>
                        </li>
                        <li>
                            <div class="left"><span>아이디</span><img src="./img/ico-compulsory.png" alt=""/></div>
                            <div class="right"><input name="id" id="id" placeholder="" type="text"/></div>
                        </li>
                        <li>
                            <div class="left"><span>비밀번호</span><img src="./img/ico-compulsory.png" alt=""/></div>
                            <div class="right"><input name="pw" id="pw" placeholder="" type="text"/></div>
                        </li>
                        <li>
                            <div class="left"><span>비밀번호확인</span><img src="./img/ico-compulsory.png" alt=""/></div>
                            <div class="right"><input name="pw_ok" id="pwOk" placeholder="" type="text"/></div>
                        </li>
                        <li>
                            <div class="left"><span>비밀번호 분실 시 확인 질문</span><img src="./img/ico-compulsory.png" alt=""/></div>
                            <div class="right">
                                <select name="pw_question" id="pwQuestion">
                                    <option selected="">질문을 선택하세요</option>
                                    <option value="나의 아버지 성함은?">나의 아버지 성함은?</option>
                                    <option value="나의 그리운 고향은?">나의 그리운 고향은?</option>
                                    <option value="나의 첫째아이 이름은?">나의 첫째아이 이름은?</option>
                                    <option value="나의 초등학교 이름은?">나의 초등학교 이름은?</option>
                                    <option value="나의 보물 제1호는?">나의 보물 제1호는?</option>
                                    <option value="기억에 남는 추억의 장소는?">기억에 남는 추억의 장소는?</option>
                                    <option value="나의 인생 좌우명은?">나의 인생 좌우명은?</option>
                                    <option value="내가 좋아하는 캐릭터는?">내가 좋아하는 캐릭터는?</option>
                                    <option value="추억하고 싶은 날짜가 있다면?">추억하고 싶은 날짜가 있다면?</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <div class="left"><span>비밀번호 분실 시 확인 답변</span><img src="./img/ico-compulsory.png" alt=""/></div>
                            <div class="right"><input name="pw_question_ok" id="pwQuestionOk" placeholder="" type="text"/></div>
                        </li>
                        <li>
                            <div class="left"><span>전화번호</span><img src="./img/ico-compulsory.png" alt=""/></div>
                            <div class="right"><input name="hp" id="hp" placeholder="" type="text"/></div>
                        </li>
                        <li>
                            <div class="left"><span>업무담당자명</span><img src="./img/ico-compulsory.png" alt=""/></div>
                            <div class="right"><input name="charge_name" id="chargeName" placeholder="" type="text"/></div>
                        </li>
                        <li>
                            <div class="left"><span>이메일</span><img src="./img/ico-compulsory.png" alt=""/></div>
                            <div class="right">
                                <input name="email_id" id="email" type="text"/>
                                <span>@</span>
                                <input name="email_site" id="email" type="text"/>
                                <select name="email" id="email">
                                    <option value="직접입력">직접입력</option>
                                    <option value="네이버">네이버</option>
                                    <option value="네이트">네이트</option>
                                    <option value="다음(한메일)">다음(한메일)</option>
                                    <option value="야후">야후</option>
                                    <option value="핫메일(MSN)">핫메일(MSN)</option>
                                    <option value="Gmail">Gmail</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <div class="left"><span>소식지 수신여부</span><img src="./img/ico-compulsory.png" alt=""/></div>
                            <div class="right">
                                <input name="sosik" id="sosik" type="radio" value="받음"/> 받음
                                <input name="sosik" id="sosik" type="radio" value="안받음"/> 안받음 (공단의 다양한 소식을 무료로 만나보세요)
                            </div>
                        </li>
                    </ul>
                    <div class="button-box">
                        <button type="submit">확인</button>
                        <button>취소</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
    );
};