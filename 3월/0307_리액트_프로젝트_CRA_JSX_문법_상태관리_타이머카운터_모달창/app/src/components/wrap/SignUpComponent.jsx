import React, {useEffect, useState} from 'react';
import ModalComponent from './sign_up/ModalComponent';
import '../../scss/signup.scss';

export default function SignUpComponent({setId, seconds, minutes, timerMsg, timerCounter, timerClear}){

    const[state, setState] = useState({
        isModal: false, //Boolean
        modalMsg: '',   //String
        hpOkNumber: 0,   // Number
        아이디:'',
        비밀번호: '',
        이름: '',
        휴대폰번호:'',
        휴대폰인증번호: '',
        isUserHp: true,
        isUserHpOk: true,
        isTimer: false

    });
        // 1. 아이디 입력상자 : 온 체인지 이벤트 (키보드로 입력값을 받는 이벤트)
        const onChangeUserId=(e)=>{
            setState({
                ...state,
                아이디: e.target.value
            })
        }
        // 2. 비밀번호 입력상자
        const onChangeUserPw=(e)=>{
            setState({
                ...state,
                비밀번호: e.target.value
            })
        }
        // 3. 이름 입력상자
        const onChageUserName=(e)=>{
            setState({
                ...state,
                이름: e.target.value
            })
        }
        // 4. 휴대폰 번호
        const onChangeUserHp=(e)=>{
            let isUserHp=true;

            if (e.target.value.length > 1){
                isUserHp=false;
            }
            else {
                isUserHp=true;
            }
            setState({
                ...state,
                휴대폰번호: e.target.value,
                isUserHp: isUserHp
            })
        }
        // 5. 휴대폰 인증번호
        const onChangeUserHpOk=(e)=>{
            let isUserHpOk=true;

            if(e.target.value.length >= 1){
                isUserHpOk=false;
            }
            else{
                isUserHpOk=true;
            }

            setState({
                ...state,
                휴대폰인증번호: e.target.value,
                isUserHpOk: isUserHpOk
            })
        }

        // 6. 인증번호 받기
        // 모달창 열기 함수
        const onClickHpOkNumber=(e)=>{
        e.preventDefault();       
        let hpOkNumber = 0;
        
        // 6자리의 랜덤(Random)한 번호를 만들자
        hpOkNumber = Math.floor(Math.random()*900000+100000);

        setState({
            ...state,
            isModal: true,
            modalMsg: `휴대폰 인증번호가 전송되었습니다. ${hpOkNumber}`,
            hpOkNumber: hpOkNumber,
            isTimer: true //모달창 닫기할 때 true면 타이머 동작 시작
        })
        
    }

    // 모달창 닫기 함수 => 모달창에서 확인버튼 클릭하면 호출되어서 실행이벤트
    const modalClose=()=>{
        setState({
            ...state,
            isModal: false
        })
    }
    
    // 인증번호 비교
    const onClickOkIf=(e)=>{
        e.preventDefault();
        let modalMsg = '';
        // 상태관리 인증번호와 휴대폰 인증번호 입력상자에 입력된 인증번호를 비교
        if(state.hpOkNumber === Number(state.휴대폰인증번호)){
            modalMsg='인증이 확인되었습니다.';
            //타이머 정지(멈추기)
            timerClear(); //상위 컴포넌트에서 타이머중지 함수 호출 실행
            
        }
        else{
            modalMsg='인증번호를 다시 확인하세요.';
        }

        setState({
            ...state,
            isModal: true,
            modalMsg: modalMsg 
        })


    }
    return (
        <div id='signup' >
            <div className="title">
                <h1>회원가입폼</h1>
            </div>
            <div className="content">
                <form name='sign_up' id='signUp' method='post' action="./sign_up.php">
                    <ul>
                        <li>
                            <div>
                                <input onChange={onChangeUserId} type="text" name='user_id' id='userId' placeholder='ID를 입력하세요' />
                            </div>
                        </li>
                        <li>
                            <div>
                                <input onChange={onChangeUserPw} type="password" name='user_pw' id='userPw' placeholder='비밀번호를 입력하세요' />
                            </div>
                        </li>
                        <li>
                            <div>
                                <input onChange={onChageUserName} type="text" name='user_name' id='userName' placeholder='이름을 입력하세요' />
                            </div>
                        </li>
                        <li>
                            <div>
                                <input onChange={onChangeUserHp} type="text" name='user_hp' id='userHp' placeholder='휴대폰 번호 입력하세요' />
                                <button onClick={onClickHpOkNumber} 
                                type='button' 
                                disabled={state.isUserHp}   /* 버튼이 isUserHp false면 사용가능 */
                                className={state.isUserHp===false?'on':''}
                                >인증번호 받기</button>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input onChange={onChangeUserHpOk} type="text" name='user_hpok' id='userHpok' placeholder='휴대폰 인증번호 입력하세요' />
                                <button 
                                onClick={onClickOkIf} 
                                type='button' 
                                disabled={state.isUserHpOk}
                                className={state.isUserHpOk===false?'on':''}
                                >인증번호 확인</button>
                                <span>{minutes<10? `0${minutes}`:minutes}:{seconds<10? `0${seconds}`:seconds}</span>
                                
                            </div>

                        </li>
                    </ul>
                </form>
            </div>
            {
                state.isModal && <ModalComponent isTimer={state.isTimer} timerCounter={timerCounter} modalClose={modalClose} modalMsg={state.modalMsg}/>
            }
        </div>
    );
};

