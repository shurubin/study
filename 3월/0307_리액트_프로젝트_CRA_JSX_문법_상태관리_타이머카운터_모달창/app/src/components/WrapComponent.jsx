import React, {useEffect, useState} from 'react';
import SignUpComponent from './wrap/SignUpComponent';

export default function WrapComponent(){

    // const [] = React.useState();
    const [state, setState] = useState({
        seconds: 59,
        minutes: 2,
        setId: 0,
        timerMsg: ''
    });

    const timerCounter=()=>{
        let seconds= 59;
        let minutes= 2;
        let setId= 0;
        let timerMsg = '';

        clearInterval(state.setId);

        setId = setInterval(()=>{
            seconds--;
            if(seconds<0){
                seconds=59;
                minutes--;
                if(minutes<0){
                    clearInterval(setId);
                    seconds=0;
                    minutes=0;
                    // 3분 시간 초과되었음을 알림
                    timerMsg = '유효시간이 만료되었습니다. 다시 시도해주세요.'; //모달창 메시지 전달 내용
                }
            }

            setState({
                ...state,
                setId: setId,
                seconds: seconds,
                minutes: minutes,
                timerMsg: timerMsg
            })
            console.log(setId);
            console.log(state.setId);

        }, 1000);
    }

    const timerClear=()=>{
        clearInterval(state.setId);
    }

    // 지금 카운트 멈춤 실행되고있음
    /* 
    const isTimerFn=()=>{
        setState({
            ...state,
            isTimer: true
        })
    }
    
    useEffect(()=>{
        timerCounter();
    },[]); 
    
    **isTimerFn signupComponent에 내려보내고 modal에도 내려보내기 (함수이름변경)
    timerCounter는 지우기  signupComponent에서도
    */



    return (
        <div id='wrap'>            
            <SignUpComponent timerClear={timerClear} timerCounter={timerCounter} setId={state.setId} seconds={state.seconds} minutes={state.minutes} timerMsg={state.timerMsg}/>
        </div>
    );
};

