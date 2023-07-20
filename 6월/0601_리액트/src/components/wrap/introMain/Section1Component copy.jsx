import React from 'react';
import $ from 'jquery';
import './scss/section1.scss';
import Section1SlideComponent from './Section1SlideComponent';
import axios from 'axios';

export default function Section1Component () {

    const [state, setState] = React.useState({
        슬라이드: [],
        n: 0
    });

 

        // 슬라이드 데이터 가져오기
        React.useEffect(()=>{

            axios({
                url: './data/intro_page/section1.json',
                method: 'GET'
            })
            .then((res)=>{
               

                if(res.status===200){
                    setState({
                        ...state,
                        슬라이드: res.data.slide,
                        n : res.data.slide.length-2
                    })
                }
                
            })
            .catch((err)=>{
                console.log( `AXIOS 실패! ${err}` );
            });

        },[]);  // 빈배열 : 로딩시 화면이 그려지고(마운트) 난 뒤 1회실행


        // 섹션1 컴포넌트 메인 슬라이드
        // React.useEffect(()=>{

        //     const $slideContainer   = $('#section1 .slide-container');
        //     const $slideWrap        = $('#section1 .slide-wrap');
        //     const $slide            = $('#section1 .slide');
        //     const $slidea           = $('#section1 .slide a');
        //     const $leftArrorwBtn    = $('#section1 .left-arrorw-btn');
        //     const $rightArrorwBtn   = $('#section1 .right-arrorw-btn');
        //     const $currentNumber    = $('#section1 .current-number');
        //     const $totalNumber      = $('#section1 .total-number');
    
        //     let   cnt   = 0;
        //     let   setId = 0;
            
        //     // 상태관리 n 변수값이 변경되면 너기가 변경된다.
        //     $slideWrap.css({width: `${100 * (state.n+2)}%` }); //   
    
        //     //1. 메인슬라이드함수
        //     function mainSlide(){
        //         // console.log( cnt );
        //         $slideWrap.stop().animate({left: `${-100*cnt}%`}, 600, function(){
        //             if(cnt>=state.n){cnt=0}
        //             if(cnt< 0){cnt=state.n-1}  // 23-1 (0~22)
        //             $slideWrap.stop().animate({left: `${-100*cnt}%`}, 0);
        //         });
        //         slidePageEvent();            
        //     }
    
    
        //     //2-1. 다음카운트함수
        //     function nextCount(){
        //         cnt++;
        //         mainSlide();
        //     }
    
        //     //2-2. 이전카운트함수
        //     function prevCount(){
        //         cnt--;
        //         mainSlide();
        //     }
    
    
        //     //3. 자동타이머함수
        //     function autoTimer(){
        //         clearInterval(setId);
        //         setId = setInterval(nextCount, 3000);
        //     }
        //     autoTimer();
    
    
        //     // 4. 슬라드 콘테이너 박스에 마우스 오버시 슬라이드 일시정지
        //     $slideContainer.on({
        //         mouseenter(){
        //             clearInterval(setId);
        //             $leftArrorwBtn.stop().fadeIn(1000);
        //             $rightArrorwBtn.stop().fadeIn(1000);
        //         },
        //         mouseleave(){                
        //             $leftArrorwBtn.stop().fadeOut(1000);
        //             $rightArrorwBtn.stop().fadeOut(1000);
        //             autoTimer();
        //         }
        //     });
    
    
        //     // 5. 슬라이드 페이지 번호
        //     function slidePageEvent(){
        //         $currentNumber.html( cnt+1===(state.n+1) ? 1 : (cnt+1===0 ? state.n : cnt+1) );
        //         $totalNumber.html( state.n );
        //     }
    
        //     // 6-1. 다음화살버튼클릭이벤트
        //     $rightArrorwBtn.on({
        //         click(e){
        //             e.preventDefault();
        //             nextCount();    
        //         }
        //     })
    
        //     // 6-2. 이전화살버튼클릭이벤트
        //     $leftArrorwBtn.on({
        //         click(e){
        //             e.preventDefault();
        //             prevCount();    
        //         }
        //     })
        
        //     // 디버깅
        //     $slidea.on({
        //         click(e){
        //             e.preventDefault();
        //         }
        //     })     
    
        // },[state.n]);

    return (
        <section id="section1">
            <div className="container">
                <div className="gap">
                    <div className="title  hide">
                        <h2>마켓컬리 메인 슬라이드 문종 슬라이드</h2>
                    </div>
                    <div className="content">

                        <Section1SlideComponent 슬라이드 ={state.슬라이드}  n = {state.n} />

                    </div>
                </div>
            </div>
        </section>
    );
};