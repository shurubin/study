import React from 'react';
import HeaderComponent from './wrap/HeaderComponent.jsx';
import ModalComponent from './wrap/ModalComponent.jsx';
import '../scss/style.scss';

export default function WrapComponent({wrapProps, cnt}){

    const [state, setState] = React.useState(wrapProps);

    const onClickDateUpdate=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            날짜: '2023년 4월 29일'            
        });
    }
    const onClickTimeUpdate=(e)=>{
        e.preventDefault();
        setState({
            ...state,            
            시간: '12:30 PM'
        });
    }

    const onClickCount=()=>{        
        setState({
            ...state,
            cnt: state.cnt+1
        })
    }
 

    const modalCloseFn=()=>{
        setState({
            ...state,
            isModal: false
        })
    }
    const modalOpenFn=()=>{
        setState({
            ...state,
            isModal: true
        })
    }


    return (
        <div id="wrap">
            <h1 style={Wrapstyle}>초대장</h1>
            <h1 onClick={onClickDateUpdate}>{state.날짜}</h1>
            <h1 onClick={onClickTimeUpdate}>{state.시간}</h1>

            <HeaderComponent 시간={state.시간} cnt={cnt} onClickCount={onClickCount} modalOpenFn={modalOpenFn}/>
            {
                state.isModal && <ModalComponent modalCloseFn={modalCloseFn}/>
            }
        </div>
    );
};

WrapComponent.defaultProps = {
    wrapProps : {
        날짜: '2023년 03월 06일',
        시간: '05:30 PM',
        장소: '신촌역 6번출구',
        문구: '초대합니다!',
        isModal: true
    }
}


// 여기서도 스타일 설정 가능
const Wrapstyle = {
    fontSize: '50px',
    color: '#375',
    fontWeight: '700',
    marginBottom: '40px'
}