import React from 'react';
import '../scss/signin_pw_search.scss';
import { ConfirmContext } from '../../../context/ConfirmContext';

export default function SignInPwSearchComponent(){

    const {confirmModalOpen, isConfirmModal} = React.useContext(ConfirmContext);

    // 타이머 상태관리 변수
    const [minutes, setMinutes] = React.useState(3);
    const [seconds, setSeconds] = React.useState(0);    


    const [isTab, setIsTab] = React.useState(true);
    const [isBtn, setIsBtn] = React.useState(false);
    const [isBtn2, setIsBtn2] = React.useState(false);

    // 휴대폰 인증
    const [userId, setuserId] = React.useState('');
    const [userId2, setuserId2] = React.useState('');

    // 이메일 인증
    const [userHp, setUserHp] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');

    // 인증키
    const [userHpAuth, setUserHpAuth] = React.useState('');
    const [isAuth, setIsAuth] = React.useState(false);
    
    // useRef 휴대폰
    const userIdRef = React.useRef();
    const userHpRef = React.useRef();

    // useRef 이메일
    const userId2Ref = React.useRef();    
    const userEmailRef = React.useRef();


    ///////////////////////////////////////////////

    // 타이머 동작 3분카운트
    React.useEffect(()=>{
        let setId = 0;
        let startTime = 0;
        let nowTime = 0;
        let endTime = 0;
        let now = new Date();

        const timerCount=()=>{
            startTime = new Date(now);  // 클릭시점 스타트
            nowTime = new Date();

            startTime.setMinutes(startTime.getMinutes()+3);
            endTime = startTime - nowTime;  // 1/1000초 단위로 변환 .getTime()

            if(nowTime >= startTime ){ // 시작시간보다 현재 시간이 크거나 같다면 종료시간
                clearInterval(setId);
                setMinutes(0);
                setSeconds(0);
            }
            else{
                setMinutes(Math.floor(endTime/(60 * 1000) %60));
                setSeconds(Math.floor(endTime/(1000) %60));
            }
        }

        // 인증번호 발송하고
        // 모달창을 닫으면 타이머 동작
        if(isAuth===true && isConfirmModal === false){ // 모달창 닫기 후에 타이머 동작
            setId = setInterval(timerCount, 1000);
        }

    },[isAuth, isConfirmModal]);




    // 아이디 입력상자
    const onChangeId=(e)=>{
        setuserId(e.target.value);

    }

    // 휴대폰 입력상자
    const onChangeHp=(e)=>{
        setUserHp(e.target.value);
    }

    const onChangeId2=(e)=>{
        setuserId2(e.target.value);
    }

    // 이메일 입력상자
    const onChangeEmail=(e)=>{
        setUserEmail(e.target.value);
    }

    // 인증번호 입력상자
    const onChangeHpAuth=(e)=>{
        setUserHpAuth(e.target.value);
    }

    // 탭메뉴 버튼 클릭
    const onClickTabBtn=(e, value)=>{
        e.preventDefault();
        setuserId('');
        setuserId2('');
        setUserHp('');
        setUserEmail('');

        if(value === '휴대폰'){
            setIsTab(true);
        }
        else{
            setIsTab(false);
        }
    }

    React.useEffect(()=>{

        (userId !== '' && userHp !== '') ? setIsBtn(true): setIsBtn(false);    
        
        (userId2 !== '' && userEmail !== '') ? setIsBtn2(true): setIsBtn2(false);

    },[userId, userHp, userId2, userEmail])


    // 휴대폰 인증번호 받기 버튼 클릭이벤트
    // 이메일 인증번호 받기 버튼 클릭이벤트
    const onClickHpAuth=(e)=>{
        e.preventDefault();
        setIsAuth(true);
        // 인증번호 발송 7자리
        let authNum = Math.floor(Math.random()*(900000+1000000));
        setUserHpAuth(authNum);
        confirmModalOpen(`인증번호가 발송되었습니다.\n3분안에 인증번호를 입력해주세요. ${authNum}`)
        
    }

    // text 삭제 버튼 클릭 이벤트
    const onClickIconDel=(e, value)=>{
        e.preventDefault();
        switch(value){
            
            case 'userId':
                setuserId('');       
                userIdRef.current.focus();
                return;

            case 'userId2':
                setuserId2('');
                userId2Ref.current.focus();
                return;

            case 'userHp':
                setUserHp('');
                userHpRef.current.focus();
                return;

            case 'userEmail':
                setUserEmail('');
                userEmailRef.current.focus();           
                return ;
            
            default:
                return;

        }

    }

    // 인증키 확인버튼  클릭이벤트
    const onClickHpAuthOk=(e)=>{
        e.preventDefault();
        // 인증확인됐다고하고
        // 비밀번호 재설정 페이지로 이동

        window.location.pathname = '/idSearchResult'
    }



    return (
        <main id='SignInIdSearch'>
            <section id="section1">
                <div className="container">
                    <div className="title">
                        <h2>아이디 찾기</h2>
                    </div>
                    <div className="content">
                        <form >
                            <ul>
                                <li>
                                    <button onClick={(e)=>onClickTabBtn(e, '휴대폰')} className={isTab?'on':''}>휴대폰 인증</button>
                                    <button onClick={(e)=>onClickTabBtn(e, '이메일')} className={isTab?'':'on'}>이메일 인증</button>
                                </li>
                               
                                    {
                                        isTab ?
                                        (
                                            <>
                                                <li><label htmlFor="userId">아이디</label></li>
                                                <li>
                                                    <input 
                                                        ref={userIdRef}
                                                        onChange={onChangeId}
                                                        type="text" 
                                                        name='user_name' 
                                                        id='userId' 
                                                        value={userId} 
                                                        placeholder='아이디을 입력해주세요' 
                                                    />
                                                    {userId !=='' && <a onClick={(e)=>onClickIconDel(e, 'userId')} href="!#"><img src="./images/sign_in/icon_del.svg" alt="" /></a>}
                                                </li>
                                                <li><label htmlFor="userHp">휴대폰</label></li>
                                                <li>
                                                    <input 
                                                    ref={userHpRef}
                                                    onChange={onChangeHp}
                                                    type="text" 
                                                    name='user_hp' 
                                                    id='userHp' 
                                                    value={userHp} 
                                                    placeholder='휴대폰 번호를 입력해주세요' />
                                                    {userHp !=='' && <a onClick={(e)=>onClickIconDel(e, 'userHp')} href="!#"><img src="./images/sign_in/icon_del.svg" alt="" /></a>}
                                                </li>
                                                <li></li>

                                                {
                                                    isAuth && (<>
                                                        <li><label htmlFor="userHp">인증번호</label></li>
                                                        <li>
                                                            <input 
                                                                onChange={onChangeHpAuth}
                                                                type="text" 
                                                                name='user_hp_auth' 
                                                                id='userHpAuth' 
                                                                value={userHpAuth} 
                                                                placeholder='인증번호 7자리' 
                                                            />
                                                            <button>재발송</button>

                                                            <span>
                                                                <em>{minutes<10? `0${minutes}`:minutes}</em>
                                                                <i>:</i>
                                                                <em>{seconds<10? `0${seconds}`:seconds}</em>
                                                            </span>

                                                        </li>
                                                    </>)
                                                }

                                                {
                                                    !isAuth?

                                                    (<li><button onClick={onClickHpAuth} className={isBtn?'on':''}>인증번호 받기</button></li>)
                                                    :
                                                    (<li><button onClick={onClickHpAuthOk} className={isBtn?'on':''}>확인</button></li>)
                                                }
                                            </>
                                        )
                                        :
                                        (    
                                            <>
                                            <li><label htmlFor="userId2">아이디</label></li>
                                            <li>
                                                <input 
                                                ref={userId2Ref}
                                                onChange={onChangeId2}
                                                type="text" 
                                                name='user_name2' 
                                                id='userId2' 
                                                value={userId2} 
                                                placeholder='아이디을 입력해주세요' />
                                                {userId2 !=='' && <a onClick={(e)=>onClickIconDel(e, 'userId2')} href="!#"><img src="./images/sign_in/icon_del.svg" alt="" /></a>}
                                            </li>
                                            <li><label htmlFor="userHp">이메일</label></li>
                                            <li>
                                                <input 
                                                ref={userEmailRef}
                                                onChange={onChangeEmail}
                                                type="text" 
                                                name='user_hp' 
                                                id='userEmail' 
                                                value={userEmail} 
                                                placeholder='이메일을 입력해주세요' />
                                                {userEmail !=='' && <a onClick={(e)=>onClickIconDel(e, 'userEmail')} href="!#"><img src="./images/sign_in/icon_del.svg" alt="" /></a>}
                                            </li>
                                            <li></li>
                                            <li><button className={isBtn2?'on':''}>인증번호 받기</button></li>
                                            </>
                                        )
                                    }
                               

                            </ul>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

