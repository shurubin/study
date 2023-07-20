import React from 'react';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
//고정페이지
import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent   from './wrap/HeaderComponent';
import MainIntroComponent from './wrap/MainIntroComponent';
//서브페이지
import Sub1Component from './wrap/main_sub/Sub1Component';
import Sub2Component from './wrap/main_sub/Sub2Component';
import Sub3Component from './wrap/main_sub/Sub3Component';
import Sub4Component from './wrap/main_sub/Sub4Component';
import SignUpComponent from './wrap/main_sub/SignUpComponent';
// => 최근본상품 상세페이지
import ProductComponent from './wrap/ProductComponent';
// => 장바구니(Cart)
import CartComponent from './wrap/CartComponent';

//고정페이지
import ConfirmModal from './wrap/ConfirmModal';
import GoTopComponent from './wrap/GoTopComponent';
import QuickMenuComponent from './wrap/QuickMenuComponent';
import FooterComponent from './wrap/FooterComponent';





export default function WrapComponent() {
    
    // 장바구니 수량 카운트 상태변수
    const [cartCount, setCartCount] = React.useState(0);


    // 장바구니 수량 카운트 상태 변수를 전달하는 함수
    const cartCountNumber=(num)=>{
        setCartCount(num);
    }


    // 네비게이션
    const [isIntro, setIsIntro] = React.useState(true);

    // 헤더영역에서 라우터 링크이용 값을 변경한다.
    const setIsIntroFn=(z)=>{
        setIsIntro(z);
    }
    
    const [product, setPoduct] = React.useState({
        key: 'MJ_KURLY_VIEW_PRODUCT',
        sign: false,
        getViewProduct : []
    });

    // 비구조화 === 구조분할할당
    const {getViewProduct, key, sign} = product;


    // 상품 클릭 이벤트 매개변수 들어옴
    const setViewProduct=(value)=>{
        let arr = [];

        if(localStorage.getItem(key)!==null){
            arr = JSON.parse(localStorage.getItem(key));
            arr = [value, ...arr]
            localStorage.setItem(key, JSON.stringify(arr) );  
            setPoduct({
                ...product,
                sign: !sign,
                getViewProduct: arr
            });  
        }
        else {
            arr = [value]
            localStorage.setItem(key, JSON.stringify(arr) );
            setPoduct({
                ...product,
                sign: !sign,
                getViewProduct: arr
            });
        }        
    }
   

    const [state, setState] = React.useState({
        minutes: 2,
        seconds: 59,
        setId: 0,
        msg:'',
        isEnd: false,
        // 헤더 프롭스로 전달하기
        mapText: '',
        isMap: true
    });

    const timerCounterfn=()=>{       

        let setId = 0;
        let minutes = 2;
        let seconds = 59;
        let msg = '';
        let isEnd = false;

        setId = setInterval(function(){

            seconds--;
            if(seconds<0){
                seconds=59;
                minutes--;
                if(minutes<0){
                    clearInterval(setId);
                    seconds=0;
                    minutes=0;
                    msg = '유효시간이 경과 되었습니다.'; // 모달창 메시지
                    isEnd=true;  //모달창 true
                }
            }

            setState({
               ...state,
               seconds: seconds,
               minutes: minutes,
               msg: msg,
               setId: setId,   // 환경변수 메모리의 실행중인 타이머의 할당 메모리 사용번호 인덱스를 clearInterval(2)
               isEnd: isEnd
            })

        }, 1000);
    }

    const mapAddressFn=(a,b)=>{
        setState({
            ...state,
            mapText: a,
            isMap: b
        })
    }


    //////////////////////////////////////////////////
    // 모달 상태관리
    //////////////////////////////////////////////////
    const [modal, setModal]  =  React.useState({
        confirmMsg: '모달창에 자식창에서 보내온 타이틀 메시지내용입니다.',
        isConfirmModal: false // true 모달열기  false 모달닫기    
    });
    
    //1. 모달창 닫기 이벤트 => 모달창에 있는 버튼 클릭 이벤트 메서드(함수) 만들기
    const confirmModalClose=()=>{
        setModal({
            ...modal,
            isConfirmModal: false
        });
    }

    //2. 모달창 열기 이벤트 => 모든 자식컴폰넌트에서 모달 열기와 메시지 전달하기 메서드 만들기
    const confirmModalOpen=(msg)=>{
        setModal({
            ...modal,
            confirmMsg: msg,
            isConfirmModal: true
        });
    }


    //////////////////////////////////////////////////
    //1. 탑 모달 상태관리
    //////////////////////////////////////////////////
    const [topModal, setTopModal] = React.useState({
        key: 'MJ_KURLY_TOPMODAL',
        isTopModal: true
    })

    //2. 탑 모달 닫기 함수 => 쿠키설정
    const topModalClose=(value, expires)=>{
        setTopModal({
            ...topModal,
            isTopModal: false  //모달 닫기
        });
        setCookieMethod(value, expires);
    }


    //3. 쿠키 설정(저장)하기 : 탑모달을 닫기 클릭하면  쿠키 설정 저장
    const setCookieMethod=(value, expires)=>{
        let toDay = new Date();
        toDay.setDate( toDay.getDate() + expires ); // 3일간 열리지 않음
        document.cookie = `${topModal.key}=${value}; path=/; expires=${toDay.toUTCString()};`;       
    }

    //4. (언제)쿠키 가져오기 : 설정된 쿠키가 없으면 탑모달은 열린다. 있다면(찾았다면 Found) 닫는다.
    const getCookieMethod=()=>{
        if(document.cookie==='') return;  // 예외처리 

        try{
            const result = document.cookie.split(';');  //  ['SAD=FASD', ' SADFASD=FAS', ' SDFASDFASD=3', ' SDFAS=3']

            let cookie = [];
            result.map((item,idx)=>{
                cookie[idx] = {
                    key: item.split('=')[0].trim(),  // MJ_KURLY_TOPMODAL
                    value: item.split('=')[1].trim() // yes
                }
            });
    
            // 찾기(Found)  key: 'MJ_KURLY_TOPMODAL'
            // 모달닫기 했던 쿠키가 존재하면 
            // 모달닫기를 수행 : 새로고침 하면 또 설정 .... 설정
            cookie.map((item)=>{  
                // if(item.key===topModal.key && item.value==='yes' ){
                if(item.key.includes(topModal.key)===true && item.value.includes('yes')===true ){
                    setTopModal({
                        ...topModal,
                        isTopModal: false
                    }) 
                    // eslint-disable-next-line array-callback-return
                    return;               
                }
            })
        }
        catch(e) {
            console.log('쿠키없어요! ', e);
        }
        

    }

    // 5 
    React.useEffect(()=>{
        getCookieMethod();
    },[topModal.isTopModal]);



    return (
        <div id='wrap'>
                {
                    topModal.isTopModal && <TopModalComponent topModalClose={topModalClose}/>
                }    
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path='/' element={<HeaderComponent setIsIntroFn={setIsIntroFn} mapText={state.mapText} isMap={state.isMap} cartCount={cartCount} />}>
                            <Route index element={<MainIntroComponent setViewProduct={setViewProduct} />} />
                            <Route path='/main'    element={<MainIntroComponent setViewProduct={setViewProduct} />} />
                            <Route path='/sub1'    element={<Sub1Component setViewProduct={setViewProduct} />} />
                            <Route path='/sub2'    element={<Sub2Component setViewProduct={setViewProduct} />} />
                            <Route path='/sub3'    element={<Sub3Component setViewProduct={setViewProduct} />} />
                            <Route path='/sub4'    element={<Sub4Component setViewProduct={setViewProduct} />} />
                            <Route path='/signup'  element={<SignUpComponent mapAddressFn={mapAddressFn} timer={state} timerCounterfn={timerCounterfn}  confirmModalOpen={confirmModalOpen} />} />                                                        
                            <Route path='/product' element={<ProductComponent cartCountNumber={cartCountNumber} />} />
                            <Route path='/cart'    element={<CartComponent />} />
                        </Route>
                    </Routes>
                </BrowserRouter>

                <FooterComponent/> 

                {
                    modal.isConfirmModal && <ConfirmModal confirmMsg={modal.confirmMsg} confirmModalClose={confirmModalClose} />
                }

                <GoTopComponent />
                <QuickMenuComponent  product={product} isIntro={isIntro} />

        </div>
    );
};