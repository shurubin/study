import React from 'react';
import $ from 'jquery';
import './scss/section7.scss';
import Section7SlideComponent from './Section7SlideComponent';
import axios from 'axios';

export default function Section7Component(){

    // 1. state 상태관리 변수 지정
    // 2. AXIOS 외부데이터 상품 가져오기 그리고 상태관리 배열 변수, 상품개수 n에 데이터 저장하기
    // 3. React.useEffect() 상품개수 등록되면 즉시 슬라이드 전체너비 설정하기
    // 4. 상태변수 데이터를 자식컴포넌트에게 내려준다
    // 5. 자식컴포넌트는 비구조화로 받아서 탬플릿 요소에 반복처리 바인딩한다.


    // 1.
    const [state, setState] =React.useState({
        상품: [],
        n: 0

    });

    // 2.
    React.useEffect(()=>{

        axios({
            url:'./data/intro_page/section7.json',
            method:'GET'
        })
        .then((res)=>{
            console.log(res);
            if(res.status===200){
                setState({
                    ...state,
                    상품: res.data.상품,
                    n:   res.data.상품.length
                })
            }
        })
        .catch((err)=>{
            console.log(`AXIOS 실패 ${err}`);
        });

    },[]);



    React.useEffect(()=>{


        const slideContainer = $('#section7 .slide-container');
        const $slideWrap = $('#section7 .slide-wrap');
        const $slide = $('#section7 .slide-wrap .slide');
        const $leftArrowBtn = $('#section7 .left-arrow-btn');
        const $rightArrowBtn = $('#section7 .right-arrow-btn');
        let cnt = 0;
        let n = state.n / 4;  //(20/4)


        $slideWrap.css({ width: `${25 * state.n}%`  })


        //1. 메인슬라이드 함수
        function mainSlide(){
            console.log(cnt);
            $slideWrap.stop().animate({left: `${-100*cnt}%`});

            if(cnt>=4){
                $('#section7 .right-arrow-btn').stop().fadeOut(500);
            }
            else{
                $('#section7 .right-arrow-btn').stop().fadeIn(500);
            }

            if(cnt<=0){
                $('#section7 .left-arrow-btn').stop().fadeOut(500);
            }
            else{
                $('#section7 .left-arrow-btn').stop().fadeIn(500);
            }
        }


        //2. 다음 카운트함수
        function nextCount(){
            cnt++;
            if(cnt>=4){cnt=4}
            mainSlide();
        }

        function prevCount(){
            cnt--;
            if(cnt<=0){cnt=0}
            mainSlide();
        }

        //3. 다음 화살버튼 클릭이벤트
        $leftArrowBtn.on({
            click(e){        
                e.preventDefault();
                prevCount();
            }
        });

        $rightArrowBtn.on({
            click(e){                
                e.preventDefault();
               nextCount(); 
            }
        });


    })



    return (
        <section id="section7">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>이 상품 어때요?</h2>
                    </div>
                    <div className="content">

                        <Section7SlideComponent 상품={state.상품} />



                    </div>
                </div>
            </div>
            <a href="!#" className='left-arrow-btn'><img src="./images/intro/icon_left_arrow.svg" alt="" /></a>
            <a href="!#" className='right-arrow-btn'><img src="./images/intro/icon_left_arrow.svg" alt="" /></a>
        </section>
    );
};
