import React from 'react';
import $ from 'jquery';

export default function ModalComponent({JennyModalClose}){

    const onClickSevenClose = (e)=>{
        e.preventDefault();
        JennyModalClose('yes', 7);
    }

    const onClickClose = (e)=>{
        e.preventDefault();
        JennyModalClose('yes', 0);
    }


    return (
        <div id='modal'>
            <div className="container">
                <div className="gap">
                    <div className="modal-box">
                        <div className="img"><img src="./images/modal/intro_modal_image.jpg" alt="" /></div>
                        <div className="button-box">
                            <button onClick={onClickSevenClose} className='seven-close'>다시 안 보기</button>
                            <button onClick={onClickClose} className='close'>닫기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

