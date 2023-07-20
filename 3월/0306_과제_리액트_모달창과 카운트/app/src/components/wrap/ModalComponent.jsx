import React from 'react';
import flower from '../../image/flower-4865379_1280.png'
import '../../scss/style_modal.scss';


export default function ModalComponent({modalCloseFn}){

    const onClickModalClose=(e)=>{
        e.preventDefault(); 
               
        modalCloseFn();
    }

    return (
        <div id="modal">
            <div className="wrap">
                <div className="container">
                    <div className="img-box">
                        <img src={flower} alt="" />
                    </div>
                    <button onClick={onClickModalClose}>닫기</button>
                </div>
            </div>
        </div>
    );
};

