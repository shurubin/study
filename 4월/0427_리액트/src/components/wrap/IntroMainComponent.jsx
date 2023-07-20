import React from 'react';
import $ from 'jquery';

export default function IntroMainComponent(){

    




    // 판매가격, 정가 콤마형식 함수


    // 섹션1 컴포넌트 메인 슬라이드
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
        let n       = $slide.length-2;
        let setId   = 0;
        

        //1. 메인슬라이드 함수
        function mainSlide(){
            console.log(cnt);
            $slideWrap.stop().animate({left: `${-100*cnt}%`},600, function(){
                if(cnt>=n){cnt=0;}
                if(cnt< 0){cnt=n-1;}  // 0부터 시작하기 때문에 -1해줌
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

        // 슬라이드 컨테이너 박스에 마우스 오버 시 슬라이드 일시정지
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
            $currentNumber.html( cnt+1>=n+1? 1:(cnt+1===0? n : cnt+1));            
            $totalNumber.html( n );
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

    },[]);


    return (
        <main id='main' className='sub-page intro'>

            <section id="section1">
                <div className="container">
                    <div className="gap">
                        <div className="title hide">
                            <h2>마켓컬리 메인 슬라이드</h2>
                        </div>
                        <div className="content">
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
                                        <li className="slide slide22"><a href="!#"><img src="./images/intro/intro_main_slide23.jpg" alt="" /></a></li>
                                        <li className="slide slide0"><a href="!#"><img src="./images/intro/intro_main_slide01.jpg" alt="" /></a></li>
                                        <li className="slide slide1"><a href="!#"><img src="./images/intro/intro_main_slide02.jpg" alt="" /></a></li>
                                        <li className="slide slide2"><a href="!#"><img src="./images/intro/intro_main_slide03.jpg" alt="" /></a></li>
                                        <li className="slide slide3"><a href="!#"><img src="./images/intro/intro_main_slide04.jpg" alt="" /></a></li>
                                        <li className="slide slide4"><a href="!#"><img src="./images/intro/intro_main_slide05.jpg" alt="" /></a></li>
                                        <li className="slide slide5"><a href="!#"><img src="./images/intro/intro_main_slide06.jpg" alt="" /></a></li>
                                        <li className="slide slide6"><a href="!#"><img src="./images/intro/intro_main_slide07.jpg" alt="" /></a></li>
                                        <li className="slide slide7"><a href="!#"><img src="./images/intro/intro_main_slide08.jpg" alt="" /></a></li>
                                        <li className="slide slide8"><a href="!#"><img src="./images/intro/intro_main_slide09.jpg" alt="" /></a></li>
                                        <li className="slide slide9"><a href="!#"><img src="./images/intro/intro_main_slide10.jpg" alt="" /></a></li>
                                        <li className="slide slide10"><a href="!#"><img src="./images/intro/intro_main_slide11.jpg" alt="" /></a></li>
                                        <li className="slide slide11"><a href="!#"><img src="./images/intro/intro_main_slide12.jpg" alt="" /></a></li>
                                        <li className="slide slide12"><a href="!#"><img src="./images/intro/intro_main_slide13.jpg" alt="" /></a></li>
                                        <li className="slide slide13"><a href="!#"><img src="./images/intro/intro_main_slide14.jpg" alt="" /></a></li>
                                        <li className="slide slide14"><a href="!#"><img src="./images/intro/intro_main_slide15.jpg" alt="" /></a></li>
                                        <li className="slide slide15"><a href="!#"><img src="./images/intro/intro_main_slide16.jpg" alt="" /></a></li>
                                        <li className="slide slide16"><a href="!#"><img src="./images/intro/intro_main_slide17.jpg" alt="" /></a></li>
                                        <li className="slide slide17"><a href="!#"><img src="./images/intro/intro_main_slide18.jpg" alt="" /></a></li>
                                        <li className="slide slide18"><a href="!#"><img src="./images/intro/intro_main_slide19.jpg" alt="" /></a></li>
                                        <li className="slide slide19"><a href="!#"><img src="./images/intro/intro_main_slide20.jpg" alt="" /></a></li>
                                        <li className="slide slide20"><a href="!#"><img src="./images/intro/intro_main_slide21.jpg" alt="" /></a></li>
                                        <li className="slide slide21"><a href="!#"><img src="./images/intro/intro_main_slide22.jpg" alt="" /></a></li>
                                        <li className="slide slide22"><a href="!#"><img src="./images/intro/intro_main_slide23.jpg" alt="" /></a></li>
                                        <li className="slide slide0"><a href="!#"><img src="./images/intro/intro_main_slide01.jpg" alt="" /></a></li>
                                        
                                    </ul>
                                </div>
                                <a href="!#" className='left-arrow-btn'><img src="./images/intro/icon_right_arrow.svg" alt="" /></a>
                                <a href="!#" className='right-arrow-btn'><img src="./images/intro/icon_right_arrow.svg" alt="" /></a>

                                <span className='page-count-box'>
                                    <em className='current-number'>1</em>
                                    <i>/</i>
                                    <em className='total-number'>23{/* state관리 */}</em>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
  
            </section>
            <section id="sectionTopBanner">
                <div className="container">
                    <div className="gap">
                        <div className="title hide"><h2>섹션 탑배너</h2></div>
                        <div className="content">
                            <a href="!#">
                                <img src="./images/intro/section_top.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section2">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>이 상품 어때요?</h2>
                        </div>
                        <div className="content">
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
                                        <li className="slide slide12">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[백채김치찌개]</strong> <em>{"통돼지 김치찌개 700g"}</em></li>
                                                            <li>{"큼직한 건더기를 아낌없이 넣은 찌개"}</li>
                                                            <li><span className='rate-price'>{6}</span><span className='panme-price'>{"7,490"}</span></li>
                                                            <li><s>{"7,990"}</s></li> {/* { item.할인율 === 0? '':<s>{item.정가}</s>} */}
                                                            <li>{"kurly only"}</li>
                                                        </ul>
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide13">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide14">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide15">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide16">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide17">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide18">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide19">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide0">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/1506dfbb-70c4-4e07-babd-2f49ba318068.jpg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[백채김치찌개]</strong> <em>{"통돼지 김치찌개 700g"}</em></li>
                                                            <li>{"큼직한 건더기를 아낌없이 넣은 찌개"}</li>
                                                            <li><span className='rate-price'>{6}%</span><span className='panme-price'>{"7,490"}</span></li>
                                                            <li><s>{"7,990"}</s></li> {/* { item.할인율 === 0? '':<s>{item.정가}</s>} */}
                                                            <li>{"kurly only"}</li>
                                                        </ul>                                                        
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide1">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/1b141312-abb4-4de9-bcf5-8e7eec556b34.jpg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[백채김치찌개]</strong> <em>{"통돼지 김치찌개 700g"}</em></li>
                                                            <li>{"큼직한 건더기를 아낌없이 넣은 찌개"}</li>
                                                            <li><span className='rate-price'>{6}%</span><span className='panme-price'>{"7,490"}</span></li>
                                                            <li><s>{"7,990"}</s></li> {/* { item.할인율 === 0? '':<s>{item.정가}</s>} */}
                                                            <li>{"kurly only"}</li>
                                                        </ul>    
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide2">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/2c776916-1d14-43ad-abc4-a26a9bdbd8fe.jpg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[백채김치찌개]</strong> <em>{"통돼지 김치찌개 700g"}</em></li>
                                                            <li>{"큼직한 건더기를 아낌없이 넣은 찌개"}</li>
                                                            <li><span className='rate-price'>{6}%</span><span className='panme-price'>{"7,490"}</span></li>
                                                            <li><s>{"7,990"}</s></li> {/* { item.할인율 === 0? '':<s>{item.정가}</s>} */}
                                                            <li>{"kurly only"}</li>
                                                        </ul>    
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide3">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[백채김치찌개]</strong> <em>{"통돼지 김치찌개 700g"}</em></li>
                                                            <li>{"큼직한 건더기를 아낌없이 넣은 찌개"}</li>
                                                            <li><span className='rate-price'>{6}%</span><span className='panme-price'>{"7,490"}</span></li>
                                                            <li><s>{"7,990"}</s></li> {/* { item.할인율 === 0? '':<s>{item.정가}</s>} */}
                                                            <li>{"kurly only"}</li>
                                                        </ul>    
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide4">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide5">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide6">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide7">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide8">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide9">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide10">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide11">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide12">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide13">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide14">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide15">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide16">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide17">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide18">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide19">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide0">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/1506dfbb-70c4-4e07-babd-2f49ba318068.jpg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide1">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/1b141312-abb4-4de9-bcf5-8e7eec556b34.jpg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide2">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/2c776916-1d14-43ad-abc4-a26a9bdbd8fe.jpg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide3">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide4">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide5">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide6">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide7">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src={'./images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg'} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li><strong>[풀무원]</strong> <em>돈코츠라멘</em></li>
                                                            <li>5,140</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="!#" className='left-arrow-btn'><img src="./images/intro/icon_left_arrow.svg" alt="" /></a>
                <a href="!#" className='right-arrow-btn'><img src="./images/intro/icon_left_arrow.svg" alt="" /></a>
            </section>
            <section id="section3">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section4">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section5">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section6">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section7">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section8">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section9">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section10">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
        </main> 
    );
};

