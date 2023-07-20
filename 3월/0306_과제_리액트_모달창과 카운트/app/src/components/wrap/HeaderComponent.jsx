import React from 'react';

export default function HeaderComponent({시간, cnt, onClickCount, modalOpenFn }){

    const onClickButton=(e)=>{
        e.preventDefault();
        onClickCount();

    }

    const style={
        button: {
            height: '50px',
            background: '#000',
            color: '#eee',
            cursor: 'pointer',
            border: 0,
            padding: '0 30px',
            fontSize: '20px',
            fontWeight: '700'
        },

        imgbutton: {
            height: '50px',
            background: '#555',
            color: '#eee',
            cursor: 'pointer',
            border: 0,
            padding: '0 30px',
            fontSize: '20px',
            fontWeight: '700'         
        }
    }

    const onClickModalOpen=(e)=>{
        e.preventDefault();
        modalOpenFn();
    }

    return (
        <header id="header">
            <button style={style.imgbutton} onClick={onClickModalOpen}>이미지 출력</button>
            <h1>{시간}</h1>
            <h1>{cnt}</h1>
            <button style={style.button} onClick={onClickButton}>카운트</button>
        </header>
      );
};

