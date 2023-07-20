import React from 'react';
import $ from 'jquery';
import './scss/section1.scss';
import Section1SlideComponent from './Section1SlideComponent';
import axios from 'axios';

export default function Section1Component(){

    const[state, setState] = React.useState({
        슬라이드:[],
        n: 0
    });


        // 슬라이드 데이터 가져오기
        React.useEffect(()=>{
            // axios API
            axios({
                url:'./data/section1.json',
                method:'GET'
            })
            .then((res)=>{
                console.log(res.data);
                if(res.status===200){
                    setState({
                        ...state,
                        슬라이드: res.data.slide,
                        n : res.data.slide.length-2
                    })
                }


            })
            .catch((err)=>{
                console.log(`AXIOS 실패 ${err}`);
            });
        },[]);  // 빈배열 : 로딩 시 화면이 그려지고 난 후 1회 실행

    React.useEffect(()=>{

        const $slideContainer   = $('#section1 .slide-container');
        const $slideWrap        = $('#section1 .slide-wrap');
        const $slide            = $('#section1 .slide');
        const $slidea            = $('#section1 .slide a');
        const $leftArrowBtn     = $('#section1 .left-arrow-btn');
        const $rightArrowBtn    = $('#section1 .right-arrow-btn');
        const $currentNumber    = $('#section1 .current-number');
        const $totalNumber   = $('#section1 .total-number');
        

        let cnt     = 0;
        let setId   = 0;
        
        // 상태관리 n 변수값이 변경되면 너비가 변경된다
        $slideWrap.css({width: `${100 * (state.n+2)}%`});   //

        //1. 메인슬라이드 함수
        function mainSlide(){
            // console.log(cnt);
            $slideWrap.stop().animate({left: `${-100*cnt}%`},600, function(){
                if(cnt>=state.n){cnt=0;}
                if(cnt< 0){cnt=state.n-1;}  // 0부터 시작하기 때문에 -1해줌
                $slideWrap.stop().animate({left: `${-100*cnt}%`},0);
                
            });
            slidePageEvent();
        }

        //2-1. 다음카운트 함수
        function nextCount(){
            cnt++;
            mainSlide();
        }
        //2-2. 다음카운트 함수
        function prevCount(){
            cnt--;
            mainSlide();
        }


        //3. 자동타이머 함수
        function autoTimer(){
            clearInterval(setId);
            setId = setInterval(nextCount, 3000);
            // 타이머 setId 변수 모든 값들은 브라우저 저장소에서 관리한다.
   
        }
        autoTimer();

        // 4.슬라이드 컨테이너 박스에 마우스 오버 시 슬라이드 일시정지
        $slideContainer.on({
            mouseenter(){
                clearInterval(setId);
                $leftArrowBtn.stop().fadeIn(1000);
                $rightArrowBtn.stop().fadeIn(1000);
            },
            mouseleave(){                
                $leftArrowBtn.stop().fadeOut(1000);
                $rightArrowBtn.stop().fadeOut(1000);
                autoTimer();
            }
        });


        // 5. 슬라이드 페이지 번호
        function slidePageEvent(){
            $currentNumber.html( cnt+1>=state.n+1? 1:(cnt+1===0? state.n : cnt+1));            
            $totalNumber.html( state.n );
        }

        // 6-1. 다음 화살버튼 클릭이벤트
        $rightArrowBtn.on({
            click(e){
                e.preventDefault();
                nextCount();
            }
        })


        // 6-2. 이전 화살버튼 클릭이벤트
        $leftArrowBtn.on({            
            click(e){
                e.preventDefault();
                prevCount();
            }
        })


        //7
        $slidea.on({
            click(e){
                e.preventDefault();
            }
        })

    },[state.n]);



    return (
        <section id="section1">
            <div className="container">
                <div className="gap">
                    <div className="title hide">
                        <h2>마켓컬리 메인 슬라이드</h2>
                    </div>
                    <div className="content">
                        <Section1SlideComponent 슬라이드 = {state.슬라이드} n = {state.n} />                        
                    </div>
                </div>
            </div>

        </section>
    );
};

