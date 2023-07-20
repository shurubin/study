import React from 'react';
import axios from 'axios';


export default function SignUpComponent(props) {

    const [state, setState] = React.useState(props.회원가입);

    // 1. 아이디 입력상자 onChange 이벤트
    const onChangeUserId=(e)=>{
        // 입력제한 조건 => 정규표현식 만들기        
        //1. 특수문자 입력제한 => \- \] \\ 이스케이프 문자 처리
        //2. 6~17자 이하
        //3. 한글 사용 안됨
        //4. 영문필수, 숫자선택 => 2가지 이상 조합
        //5. 공백사용 금지

        const {value} = e.target;  //비구조화 === 구조분할할당
        const regExp1 = /[  `~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?  ]/g; //특수문자
        const regExp2 = /^.{6,16}$/g; //6자 이상 16자 이하
        const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;  //한글
        const regExp4 = /[A-Za-z]+[0-9]*/g;  //영문필수 한자이상+, 숫자선택 0자이상*
        const regExp5 = /\s/g;  //공백

        let 아이디 = '';
        let isIdError = false;
        let errorMsg = '';

        // 1) 문자열.replace(정규식, ''); //특수문자를 공백으로 치환
        아이디 = e.target.value.replace(regExp1,'');
        // console.log( regExp1.test(e.target.value) ); //특수문자면 true, 아니면 false

        // 2) 정규식.test(문자열) {6,16} 범위이면 true 아니면 false
        // 3) 정규식.test(문자열) 한글 사용하면 true 아니면 false
        // 4) 영문필수 한자이상+, 숫자선택 0자이상*
        // 5) 공백사용 금지
        if(regExp2.test(value)===false || regExp3.test(value)===true || regExp4.test(value)===false || regExp5.test(value)===true){
            isIdError = true;
            errorMsg = '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합';
        }
        else{
            isIdError = false;
            errorMsg = '';
        }
        
        setState({
            ...state,
            아이디: 아이디,
            isIdError: isIdError,
            errorMsg: errorMsg
        })
    }

    // 2. 아이디 중복확인 onClick 이벤트
    const onClickUserIdOk=(e)=>{
        e.preventDefault();
        const value = state.아이디;  // 상태관리 값 변수에 대입
        const regExp1 = /[  `~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?  ]/g; //특수문자
        const regExp2 = /^.{6,16}$/g; //6자 이상 16자 이하
        const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;  //한글
        const regExp4 = /[A-Za-z]+[0-9]*/g;  //영문필수 한자이상+, 숫자선택 0자이상*
        const regExp5 = /\s/g;  //공백

        if(regExp2.test(value)===false || regExp3.test(value)===true || regExp4.test(value)===false || regExp5.test(value)===true){
            
            alert( '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합');
        }
        else{
            // 아이디 중복검사 실시
            // 가져오는 방법은 REST API 사용 AJAX 또는
            // AXIOS JSON 데이터처리에 가장 좋은 패키지
            // 서버에서 DB(데이터베이스)에 저장된 아이디데이터를 가져온다
            // 서버사이드 스크립트언어가 MYSQL SQL 명령문을 이용 가져온다.
            // 그리고 비교한다. 입력된 아이디랑
            // axios({}).then(()=>{}).catch(()=>{});
            // 정보요청 Request
            axios({
                url:'http://susubini03.dothome.co.kr/signup_db/select.php',
                method: 'GET'
            })
            .then((res)=>{
                
                // 맵함수이용 화살표함수 중괄호빼고 사용하면
                // 비교결과 true, false 배열로 곧바로 리턴값

                const result = res.data.map((item)=> item.아이디===state.아이디);
                console.log(result);
                // result[false, false, false,.....true있으면 사용불가능]
                if( result.includes(true)){
                    alert('사용 불가능한 아이디입니다.');
                }   
                else {
                    alert('사용 가능한 아이디입니다.');
                }             
                
            })
            // .then((res)=>{
            //     console.log(res);
                
            // })
            .catch((err)=>{
                console.log(`AXIOUS 실패!${err} `);
            });
            
        }


    }



    // 성별 라디오버튼 이벤트
    const onChangeGender=(e)=>{
        setState({
            ...state,
            성별: e.target.value
        })
    }

    return (
        <main id='signUp'>
            <section id="section1">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>회원가입</h2>
                            <p><span><i>*</i>필수입력사항</span></p>
                        </div>
                        <div className="content">
                            <form name='sign_up_form' id='signUpForm' method='post' action="./sign_up.php">
                                <ul>
                                    <li>
                                        <div>
                                            <label htmlFor="userId">아이디<i>*</i></label>
                                            <div className="center-box">
                                                <input 
                                                    type="text" 
                                                    minLength={6} 
                                                    maxLength={17} 
                                                    name='user_id' 
                                                    id='userId' 
                                                    placeholder='아이디를 입력해주세요'
                                                    onChange={onChangeUserId}
                                                    value={state.아이디}
                                                />
                                                    

                                            </div>
                                            <button 
                                            type='button'
                                            onClick={onClickUserIdOk}
                                            >중복확인</button>
                                            <p className={`errorMsg${state.isIdError?' on':''}`}>{state.errorMsg}</p>  
                                        </div>  
                                                                             
                                                                           
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userPw1">비밀번호<i>*</i></label>
                                            <div className="center-box">
                                                <input type="password" maxLength={17} name='user_pw1' id='userPw1' placeholder='비밀번호를 입력해주세요' />
                                            </div>
                                            
                                        </div>                                       
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userPw2">비밀번호확인<i>*</i></label>
                                            <div className="center-box">
                                                <input type="password" maxLength={17} name='user_pw2' id='userPw2' placeholder='비밀번호를 한번 더 입력해주세요' />
                                            </div>                                            
                                        </div>                                       
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userName">이름<i>*</i></label>
                                            <div className="center-box">
                                                <input type="text" name='user_name' id='userName' placeholder='이름을 입력해주세요' />
                                            </div>                                           
                                        </div>                                       
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userEmail">이메일<i>*</i></label>
                                            <div className="center-box">
                                                <input type="email" name='user_email' id='userEmail' placeholder='이메일을 입력해주세요' />
                                            </div>
                                            <button type='button'>중복확인</button>
                                        </div>                                       
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userHp">휴대폰<i>*</i></label>
                                            <div className="center-box">
                                                <input type="text" maxLength={11} name='user_hp' id='userHp' placeholder='숫자만 입력해주세요' />
                                            </div>
                                            <button type='button'>인증번호 받기</button>
                                        </div>                                       
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userAddress1">주소<i>*</i></label>
                                            <div className="center-box">

                                                {/* 주소검색 완료 후 주소 입력된 입력상자 */}
                                                {state.isAddress1 && <button>주소검색</button>}

                                                {   //주소검색 완료 후 주소 입력된 입력상자
                                                    state.isAddress2 && (
                                                        <>
                                                            <input type="text" name='user_address1' id='userAddress1' placeholder='검색 주소1' />
                                                            <input type="text" name='user_address2' id='userAddress2' placeholder='나머지 주소2' />
                                                        </>
                                                    )

                                                }
                                                {
                                                    state.isAddress2 && (
                                                        <h5>샛별배송</h5>
                                                    )
                                                }
                                                <h6>배송지에 따라 상품 정보가 달라질 수 있습니다.</h6>                                              
                                            </div>
                                            {
                                                state.isAddress2 && (
                                                    <button type='button'>재검색</button>
                                                )
                                            }
                                            
                                        </div>                                       
                                    </li>
                                    <li>
                                        <div>
                                            <label>성별</label>
                                            <div className="center-box gender">
                                                {/* <label htmlFor="userMale"><input onChange={onChangeGender} type="radio" name='user_gender' id='userMale' value={'남자'} checked={state.성별.includes('남자')===true?true:false} />남자</label> */}
                                                <label><input onChange={onChangeGender} type="radio" name='user_gender' id='userMale' value={'남자'} checked={state.성별.includes('남자')} />남자</label>
                                                <label><input onChange={onChangeGender} type="radio" name='user_gender' id='userFemale' value={'여자'} checked={state.성별.includes('여자')} />여자</label>
                                                <label><input onChange={onChangeGender} type="radio" name='user_gender' id='userNone' value={'선택안함'} checked={state.성별.includes('선택안함')} />선택안함</label>
                                            </div>                                            
                                        </div>                                       
                                    </li>
                                    <li>
                                        <div>
                                            <label>생년월일</label>
                                            <div className="center-box gender birth">
                                                <div className="birth-box">
                                                    <ul>
                                                        <li><input type="text" maxLength={4} name='user_birth_year' id='userBirthYear' placeholder='YYYY' /></li>
                                                        <li><i>/</i></li>
                                                        <li><input type="text" maxLength={2} name='user_birth_month' id='userBirthMonth' placeholder='MM' /></li>
                                                        <li><i>/</i></li>
                                                        <li><input type="text" maxLength={2} name='user_birth_date' id='userBirthDate' placeholder='DD'/></li>
                                                    </ul>
                                                </div>
                                            </div>                                            
                                        </div>                                       
                                    </li>
                                    <li>
                                        <div>
                                            <label>추가입력 사항</label>
                                            <div className="center-box chooga" >                                                
                                                <label><input type="radio" name='user_chooga' id='userChooga1' value={'친구초대 추천인 아이디'} />친구초대 추천인 아이디</label>
                                                <label><input type="radio" name='user_chooga' id='userChooga2' value={'참여 이벤트명'} />참여 이벤트명</label>

                                                {
                                                    state.isChooga1 && (
                                                        <>
                                                            <input type="text" name='user_chooga_id' id='userChoogaId' placeholder='추천인 아이디를 입력해 주세요' />
                                                            <h6>가입 후 7일 내 첫 주문 배송완료 시, 친구초대 이벤트 적립금이 지급됩니다.</h6>
                                                        </>
                                                    )
                                                }

                                                {   
                                                    state.isChooga2 && (
                                                        <>
                                                            <input type="text" name='user_chooga_event' id='userChoogaEvent' placeholder='참여 이벤트명을 입력해 주세요' />
                                                            <h6>
                                                                추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다. <br />
                                                                가입 이후는 수정이 불가능 합니다. <br />
                                                                대소문자 및 띄어쓰기에 유의해주세요.
                                                            </h6>

                                                        </>
                                                    )
                                                }

                                            </div>       
                                            
                                            {
                                                state.isChooga2 &&(
                                            
                                                    <button>아이디 확인</button>
                                                )
                                            } 
                                        </div>                                       
                                    </li>
                                    <li className='hr'>
                                        <hr />
                                    </li>
                                    <li className='service-box'>
                                        <div>
                                            <label>이용약관동의<i>*</i></label>
                                            <div className="center-box service">
                                                <ul>
                                                    <li>
                                                        <label><input type="checkbox" name='user_service_all' id='userServiceAll' value={'전체 동의합니다.'} />전체 동의합니다.</label>
                                                        <h5>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</h5>
                                                    </li>
                                                    <li>
                                                        <label><input type="checkbox" name='user_service_1' id='userService1' value={'이용약관 동의(필수)'} />이용약관 동의</label><span>필수</span>                                                        
                                                    </li>
                                                    <li>
                                                        <label><input type="checkbox" name='user_service_2' id='userService2' value={'개인정보 수집∙이용 동의(필수)'} />개인정보 수집∙이용 동의</label><span>필수</span>                                                        
                                                    </li>
                                                    <li>
                                                        <label><input type="checkbox" name='user_service_3' id='userService3' value={'개인정보 수집∙이용 동의(선택)'} />개인정보 수집∙이용 동의</label><span>선택</span>                                                        
                                                    </li>
                                                    <li>
                                                        <label><input type="checkbox" name='user_service_4' id='userService4' value={'무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)'} />무료배송, 할인쿠폰 등 혜택/정보 수신 동의</label><span>선택</span>                                                       
                                                    </li>
                                                    <li className='service56'>
                                                        <label><input type="checkbox" name='user_service_5' id='userService5' value={'SMS'} />SMS</label>                                                       
                                                        <label><input type="checkbox" name='user_service_6' id='userService6' value={'이메일'} />이메일</label>
                                                        <h6>&ensp;동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</h6>                                                        
                                                    </li>
                                                    <li>
                                                        <label><input type="checkbox" name='user_service_7' id='userService7' value={'본인은 만 14세 이상입니다.(필수)'} />본인은 만 14세 이상입니다.</label><span>필수</span>                                                   
                                                    </li>
                                                    <li>
                                                        <button type='submit'>가입하기</button>
                                                    </li>
                                                </ul>
                                                

                                            </div>                                            
                                        </div>                                       
                                    </li>
                                    {/* <li>
                                        <div>
                                            <label htmlFor="">아이디<i>*</i></label>
                                            <div className="center-box">
                                                <input type="text" name='user_id' id='userId' placeholder='아이디를 입력해주세요' />
                                            </div>
                                            <button>중복확인</button>
                                        </div>                                       
                                    </li> */}
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

SignUpComponent.defaultProps = {
    회원가입: {

        // 1. 아이디
        아이디: '',         //String(VARCHAR) 입력상자 아이디 저장 
        isIdError: false,   //입력상자 아이디 유효성 검사 오류 여부
        errorMsg: '',


        // 주소
        isAddress1: true, //Boolean
        isAddress2: false, //Boolean

        성별: '선택안함', //string

        // 추가입력사항
        isChooga1: false,
        isChooga2: false,
        
        비밀번호: '', //string
        비밀번호확인: '', //string
        이름: '', //string
        이메일: '', //string
        휴대폰: '', //string

        주소1: '', //string
        주소2: '', //string
                
        생년:'',
        생월:'',
        생일:'',

        추가입력사항:'',
    }
}
