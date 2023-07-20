import React from 'react';
import '../../../scss/modal.scss';

export default function ModalComponent({modalClose, modalMsg, timerCounter, isTimer}){

    const onClickModalClose=(e)=>{
        e.preventDefault();
        modalClose(); //상위 컴포넌트의 모달 닫기 함수 호출 실행
                   
        isTimer && timerCounter(); //타이머 실행 함수 호출(조상컴포넌트의 함수 호출 실행)
        
    }
    return (
        <div id='modal'>
            <div className="wrap">
                <div className="container">
                    <div className="content">
                        <div className="msg-box">
                            <p>{modalMsg}</p>                            
                        </div>
                        <div className="btn-box">
                            <button onClick={onClickModalClose}>확인</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

