import React from 'react';
import '../scss/intro.scss';

export default function IntroComponent(){



    return (
        <div id='intro'>
            <section id="section1">
                <div className="container">
                    <div className="gap">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide 1">
                                        <img src="./img/intro/section1-1.jpg" alt="" />
                                        <div className="text">
                                            <h2>2023 NEW ARRIVALS</h2>
                                            <h2>자신 있게 소개합니다</h2>
                                            <h4>상반기 신상 특가 ~50% OFF</h4>
                                            <h6>2023.06.12 10:00 am  - 06.23 10:00 am</h6>
                                            <button>자세히 보기<span>{'>'}</span></button>
                                        </div>                                        
                                    </li>
                                    <li className="slide 2"><img src="./img/intro/section1-2.jpg" alt="" />
                                        <div className="text">
                                            <h2>댕냥이와 늘 함께해요!</h2>
                                            <h2>한정판 댕냥이 에디션 50%</h2>
                                            <h4>휴가철 유기 · 유실동물 예방 캠페인</h4>
                                            <h6>2023.06.02 10:00 am - 07.03 10:00 am</h6>
                                        </div> 
                                    </li>
                                    <li className="slide 3"><img src="./img/intro/section1-3.jpg" alt="" />
                                        <div className="text">
                                            <h2>월간 혜택 6월호</h2>
                                            <h2>Special Benefit</h2>
                                            <h4>쉿, 오직 공식몰에서만 드려요!</h4>
                                            <h6>2023.06.01 10:00 am - 06.30 23:59 pm</h6>
                                        </div> 
                                    </li>
                                    <li className="slide 4"><img src="./img/intro/section1-4.jpg" alt="" />
                                        <div className="text">
                                            <h2>피부톤을 살리는</h2>
                                            <h2>2주 토닝 광채 에센스</h2>
                                            <h4>갈락토미 나이아신 에센스</h4>
                                            <h6>Galactomy Niacin Essence</h6>
                                        </div> 
                                    </li>
                                    <li className="slide 5"><img src="./img/intro/section1-5.jpg" alt="" />
                                        <div className="text">
                                            <h2>지금 쓰기 딱 좋은</h2>
                                            <h2>수분 톤업 비건 선크림</h2>
                                            <h4>파데프리 선크림 모이스처</h4>
                                            <h6>Foundation-Free Sun Cream Moisture</h6>
                                        </div> 
                                    </li>
                                    <li className="slide 6"><img src="./img/intro/section1-6.jpg" alt="" />
                                        <div className="text">
                                            <h2>예민한 피부를 위한</h2>
                                            <h2>도톰 촉촉 진정 패드</h2>
                                            <h4>히더 카밍 에센스 패드</h4>
                                            <h6>Heather Calming Essence Pad</h6>
                                        </div> 
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                        <img src="./img/intro/24e988db483c91c1395840fba8e21280_58877.jpg" alt="" />
                    </div>
                </div>
            </section>
            <section id="section2">
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <div className="all-view">
                                <button>
                                    전체보기
                                    <img src="./img/intro/arr_right.png" alt="" />
                                </button>
                            </div>
                            <div className="menu-list">
                                <h3>best sellers :</h3>
                                <div className="menus">
                                    <a href="!#">전체</a>
                                    <a href="!#">클렌징</a>
                                    <a href="!#">스킨 토너 미스트</a>
                                    <a href="!#">앰플 에센스 오일</a>
                                    <a href="!#">로션 크림 아이크림</a>
                                    <a href="!#">마스크 팩</a>
                                    <a href="!#">헤어 바디</a>
                                </div>
                            </div>
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
                                        <li className="slide 1">
                                            <a href="!#" className='item-img'>
                                                <img src="./img/intro/section2-1.png" alt="" />                                                
                                            </a>
                                            <a href="!#" className='item-txt'>
                                                <h4>[대용량] 퓨어 클렌징 오일 400ml</h4>
                                                <div className="price-list">
                                                    <span className='price'>49,000원 </span>
                                                    <div className="sale">
                                                        <span className='sale-price'>22,670원</span>
                                                        <span className='sale-per'>54%</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide 2">
                                            <a href="!#" className='item-img'>
                                                <img src="./img/intro/section2-2.png" alt="" />
                                            </a>
                                            <a href="!#" className='item-txt'>
                                                <h4>갈락토미 나이아신 에센스 50ml+12ml</h4>
                                                <div className="price-list">
                                                    <span className='price'>29,000원</span>
                                                    <div className="sale">
                                                        <span className='sale-price'>17,400원</span>
                                                        <span className='sale-per'>40%</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide 3">
                                            <a href="!#" className='item-img'>
                                                <img src="./img/intro/section2-3.png" alt="" />
                                            </a>
                                            <a href="!#" className='item-txt'>
                                                <h4>비피다 바이옴 콤플렉스 앰플 50ml</h4>
                                                <div className="price-list">
                                                    <span className='price'>35,000원</span>
                                                    <div className="sale">
                                                        <span className='sale-price'>21,000원</span>
                                                        <span className='sale-per'>40%</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide 4">
                                            <a href="!#" className='item-img'>
                                                <img src="./img/intro/section2-4.png" alt="" />

                                            </a>
                                            <a href="!#" className='item-txt'>
                                                <h4>[기획세트] 퓨어&딥 클렌징 폼 100mlX3</h4>
                                                <div className="price-list">
                                                    <span className='price'>42,000원</span>
                                                    <div className="sale">
                                                        <span className='sale-price'>15,600원</span>
                                                        <span className='sale-per'>63%</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide 5">
                                            <a href="!#" className='item-img'>
                                                <img src="./img/intro/section2-5.png" alt="" />

                                            </a>
                                            <a href="!#" className='item-txt'>
                                                <h4>비피다 바이옴 아쿠아 베리어 크림 80ml</h4>
                                                <div className="price-list">
                                                    <div className="sale">
                                                        <span className='sale-price'>24,500원</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pagenation">
                                <span className='pagenation-bar'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section3">
            </section>
            <section id="section4"></section>
            <section id="section5"></section>
            <section id="section6"></section>
            <section id="section7"></section>
            <section id="section8"></section>

        </div>
    );
};

