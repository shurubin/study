import React from 'react';
import img16 from '../../images/photography-img16.jpg';

export default function HeaderComponent({이름, cnt, onClickCount, modalOpenFn }) {

    const onClickCountFn=(e)=>{
        e.preventDefault();
        // 자식컴포넌트의 버튼 클릭으로 상위컴포넌트 함수를 호출하여 카운트 실행
        onClickCount();
    }


    const style={
        header: {
            zIndex: 1,
            position: 'relative',
            padding: '130px 0',
            lineHeight: '300%',
            background: "#e0e0ff",            
        },
        h1: {
            fontSize: '60px',
            color: '#000'
        },
        h2: {
            fontSize: '30px',
            color: '#444'
        },
        button: {
            height: '50px',
            background: '#000',
            color: '#fff',
            cursor: 'pointer',
            border: 0,
            padding: '0 30px',
            fontSize: '20px'

        }
    }

    // 버튼 클릭 이벤트 모달창(상위컴폰넌트) 열기 
    const onClickModalOpen=(e)=>{
        e.preventDefault();
        modalOpenFn();
    }

    return (
        <header id='header' style={style.header}>
            <button onClick={onClickModalOpen} style={style.button}>모달창 열기</button>
            <hr style={{border:0, height:'3px', width: '100%', background: '#c00', margin: '50px 0' }} />
            <h1 style={style.h1}>헤더컴포넌트</h1>    
            <h2 style={style.h2}>{이름}</h2>
            <h1 style={style.h1}>{cnt}</h1>
            <button  style={style.button} onClick={onClickCountFn}>자식컴포넌트 카운트</button>
            <div className="img-box">
                <img src={img16} alt="" />
            </div>
        </header>
    );
};

