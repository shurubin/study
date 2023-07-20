import React from 'react';
import goTop from './img/go_top/go_top.png';
import './scss/go_top.scss';
import $ from 'jquery';

export default function GoTopComponent(){

    React.useEffect(()=>{
        let sec3Top = $('#section3').offset().top;
        let goTop = $('#goTop');
        let gotopBtn = $('.gotop-btn');

        // console.log($("#section"));

        // 스크롤이벤트
        $(window).scroll(function(){
            if($(window).scrollTop() >= sec3Top){
                goTop.stop().css({bottom: '25px'});
            }
            else{
                goTop.stop().css({bottom: '-50px'});
            }
        })
        goTop.stop().animate({bottom: 50},2000);

        gotopBtn.on({
            click(){
                $('html,  body').animate({scrollTop: 0}, 600);
            }
        });

        


    },[]);



    return (
        <div id='goTop'>
            <a href="!#" className='gotop-btn'>
                <img src={goTop} alt="" />
            </a>
        </div>
    );
};

