import React from 'react';
import $ from 'jQuery';
import axios from 'axios';

export default function Main1Component({회원가입}){

    // const [state, setState] = React.useState(회원가입);

    // const onChangeId=(e)=>{
    //     const value= e.target.value;
        
    //     setState({
    //         ...state,
    //         아이디:value       
    //     })
   
    // }

    // const onChangePw=(e)=>{
    //     const value= e.target.value;

    //     setState({
    //         ...state,
    //         비밀번호: value
    //     })
    // }

    // const onChangeName=(e)=>{
    //     const value= e.target.value;

    //     setState({
    //         ...state,
    //         이름: value
    //     })
    // }

    // const onChangeYear=(e)=>{
    //     const value= e.target.value;

    //     setState({
    //         ...state,
    //         생년: value
    //     })
    // }

    // const onChangeMonth=(e)=>{
    //     const value= e.target.value;

    //     setState({
    //         ...state,
    //         생월: value
    //     })
    // }

    // const onChangeDay=(e)=>{
    //     const value= e.target.value;

    //     setState({
    //         ...state,
    //         생일: value
    //     })
    // }

    // const onChangeGender=(e)=>{
    //     const value= e.target.value;

    //     setState({
    //         ...state,
    //         성별: value
    //     })
    // }

    // const onChangeEmail=(e)=>{
    //     const value= e.target.value;

    //     setState({
    //         ...state,
    //         이메일: value
    //     })
    // }

    // const onChangeWorld=(e)=>{
    //     const value= e.target.value;

    //     setState({
    //         ...state,
    //         국번: value
    //     })
    // }

    // const onChangeHp=(e)=>{
    //     const value= e.target.value;

    //     setState({
    //         ...state,
    //         연락처: value
    //     })
    // }

    // const onSubmitSignup=(e)=>{
    //     e.preventDefault();

    //     const formData = {
    //         "id":       state.아이디,
    //         "pw":       state.비밀번호,
    //         "name":     state.이름,
    //         "year":     state.생년,
    //         "month":    state.생월,
    //         "day":      state.생일,
    //         "gender":   state.성별,
    //         "email":    state.이메일,
    //         "world":    state.국번,
    //         "hp":       state.연락처
    //     }

        // $.ajax({
        //     url:'http://192.168.40.126:8080/jsp/0512_과제_네이버_건강_마켓컬리/NAVER/naver_signup_action_parameter.jsp',
        //     // url:'http://192.168.40.126:8080/jsp/0512_과제_네이버_건강_마켓컬리/NAVER/naver_signup_action_useBean.jsp',
        //     // url:'http://192.168.40.126:8080/jsp/0512_과제_네이버_건강_마켓컬리/NAVER/naver_signup_action.jsp',
        //     type:'POST',
        //     data:formData,
        //     success(res){
        //         console.log('AJAX 성공');
        //         console.log(res);
        //     },
        //     error(err){
        //         console.log('에러');
        //     }
        // })


        // let newFormData = new FormData();
        // newFormData.append('id',     state.아이디);
        // newFormData.append('pw',     state.비밀번호);
        // newFormData.append('name',   state.이름);
        // newFormData.append('year',   state.생년);
        // newFormData.append('month',  state.생월);
        // newFormData.append('day',    state.생일);
        // newFormData.append('gender', state.성별);
        // newFormData.append('email',  state.이메일);
        // newFormData.append('world',  state.국번);
        // newFormData.append('hp',     state.연락처);

    // }   


    return (
        <div className="container">
            <div className="gap">
                <div class="title"><h1>NAVER</h1></div>
                <div class="content">
                    <form /* onSubmit={onSubmitSignup} */ name="NA" id="NA" method="post" action="./naver_signup_action.jsp">
                        <p>아이디</p>
                        <input /* onChange={onChangeId} */ name="id" id="id" type="text" placeholder="@naver.com" /* value={state.아이디} */ />
                        <p>비밀번호</p>
                        <input /* onChange={onChangePw} */ name="pw" type="text" placeholder="" /* value={state.비밀번호} */ />
                        <p>비밀번호 재확인</p>
                        <input name="pw_ok" type="text" placeholder=""/>
                        <p>이름</p>
                        <input /* onChange={onChangeName} */ name="name" type="text" placeholder="" /* value={state.이름} */ />
                        <p>생년월일</p>
                        <div class="birth_box">
                            <input /* onChange={onChangeYear} */ name="year" id="birth" type="text" placeholder="년(4자)" /* value={state.생년} */ />
                            <select /* onChange={onChangeMonth} */ name="month" id="birth" /* value={state.생월} */ >
                                <option value="selected">월</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <input /* onChange={onChangeDay} */ name="day" id="birth" type="text" placeholder="일" /* value={state.생일} */ />
                        </div>
                        <p>성별</p>
                        <select /* onChange={onChangeGender} */ name="gender" id="gender" /* value={state.성별} */ >
                            <option selected>성별</option>
                            <option value="남자">남자</option>
                            <option value="여자">여자</option>
                            <option value="선택 안함">선택 안함</option>
                        </select>
                        <p>본인 확인 이메일<span>(선택)</span></p>
                        <input /* onChange={onChangeEmail} */ name="email" id="hp" type="text" placeholder="선택입력" /* value={state.아이디} *//>
                        <p>휴대전화</p>
                        <select /* onChange={onChangeWorld} */ name="world" id="hp" /* value={state.국번} */ >
                            <option value="가나 +233">가나 +233</option>
                            <option value="가봉 +241">가봉 +241</option>
                            <option value="가이아나 +592">가이아나 +592</option>
                            <option value="감비아 +220">감비아 +220</option>
                            <option value="과테말라 +502">과테말라 +502</option>
                            <option value="그리스 +30">그리스 +30</option>
                            <option value="대한민국 +82" selected>대한민국 +82</option>
                            <option value="나우루 +674">나우루 +674</option>
                            <option value="나이지리아 +234">나이지리아 +234</option>
                            <option value="네팔 +977">네팔 +977</option>
                            <option value="노르웨이 +47">노르웨이 +47</option>
                        </select>    
                        <div class="injung-box" id="hp">
                            <input /* onChange={onChangeHp} */ class="injung_num" name="hp" type="text" placeholder="전화번호 입력" /* value={state.연락처} */ />
                            <button class="injung_btn">인증번호 받기</button>
                        </div>                        
                        <input type="text" placeholder="인증번호 입력하세요"/>  
                        
                        
                        <button class="sub-btn" type="submit">가입하기</button>
                    </form>
                </div>
         
            </div>
            
        </div>
    );
};

// Main1Component.defaultProps = {
//     회원가입:{
//         아이디:'',
//         비밀번호:'',
//         이름:'',
//         생년:'',
//         생월:'',
//         생일:'',
//         성별:'',
//         이메일:'',
//         국번:'',
//         연락처:''
//     }
// }