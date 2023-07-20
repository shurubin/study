import React from 'react';
import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import SignUpComponent from './wrap/SignUpComponent';
import FooterComponent from './wrap/FooterComponent';

export default function WrapComponent() {

    const [state, setState] = React.useState({
        minutes: 2,
        seconds: 59,
        setId: 0,
        msg:''
    });

    React.useEffect(()=>{
        let setId = 0;
        let minutes= 2;
        let seconds= 59;
        let msg = '';

        setId = setInterval(function(){
            seconds--;
            if(seconds<0){
                seconds=59;
                minutes--;
                if(minutes<0){
                    clearInterval(setId);
                    seconds=0;
                    minutes=0;
                    msg='유효시간이 경과되었습니다.';
                }
            }
            
            setState({
                ...state,
                seconds:seconds,
                minutes:minutes,
                msg:msg,
                setId:setId  //환경변수 메모리의 실행중인 타이머의 할당 메모리 사용번호 인덱스를 clearInterval
            })

        },1000);
    },[]);

    return (
        <div id='wrap'>
                <TopModalComponent/>
                <HeaderComponent/>
                <SignUpComponent timer={state}/>
                <FooterComponent/>                
        </div>
    );
};