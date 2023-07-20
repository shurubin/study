import React from 'react';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
//고정페이지
import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent   from './wrap/HeaderComponent';
import MainIntroComponent from './wrap/MainIntroComponent';

//페이지404
import NotView404PageComponent from './wrap/NotView404PageComponent';

//서브페이지
import Sub1Component from './wrap/main_sub/Sub1Component';
import Sub2Component from './wrap/main_sub/Sub2Component';
import Sub3Component from './wrap/main_sub/Sub3Component';
import Sub4Component from './wrap/main_sub/Sub4Component';
import SignUpComponent from './wrap/main_sub/SignUpComponent';
import SignInComponent from './wrap/main_sub/SignInComponent';
import SignInIdSearchComponent from './wrap/main_sub/SignInIdSearchComponent';
import SignInPwResetComponent from './wrap/main_sub/SignInPwResetComponent';
import SignInPwSearchComponent from './wrap/main_sub/SignInPwSearchComponent';

// => 최근본상품 상세페이지
import ProductComponent from './wrap/ProductComponent';
// => 장바구니(Cart)
import CartComponent from './wrap/CartComponent';

//고정페이지
import ConfirmModal from './wrap/ConfirmModal';
import GoTopComponent from './wrap/GoTopComponent';
import QuickMenuComponent from './wrap/QuickMenuComponent';
import FooterComponent from './wrap/FooterComponent';

// 컨텍스트 사용
import { AddressApiContext } from '../context/AddressApiContext';
import { ConfirmContext } from '../context/ConfirmContext';
import { CartContext } from '../context/CartContext';
import { GlobalContext } from '../context/GlobalContext';






export default function WrapComponent() {
    
    const [ADMINKEY] = React.useState({
        CARTPRODUCTKEY: 'MJ_KURLY_CART_PRODUCT',
        VIEWPRODUCTKEY: 'MJ_KURLY_VIEW_PRODUCT',
        TOPMODALKEY: 'MJ_KURLY_TOPMODAL',
        ADDRESSKEY: 'MJADDRESS'
    });

    const {CARTPRODUCTKEY, VIEWPRODUCTKEY, TOPMODALKEY, ADDRESSKEY} = ADMINKEY;

    // 마켓컬리 주소 통합 상태관리
    const [addr, setAddr] = React.useState({
        주소1:'',
        주소2:'',
        isAddr: false
    });

    // 새로고침 시 자동실행
    const addressAuto= async ()=>{
        if(sessionStorage.getItem(ADDRESSKEY)!==null){
            const 주소1 = JSON.parse(sessionStorage.getItem(ADDRESSKEY)).주소1;
            const 주소2 = JSON.parse(sessionStorage.getItem(ADDRESSKEY)).주소2;
            setAddr({
                주소1: 주소1,
                주소2: 주소2,
                isAddr: true
            })
        }
        return '';  // 주소검색 메세지 나가시겠습니까 안 보이게
    }

    React.useEffect(()=>{
        addressAuto();
    },[])

    // 헤더영역 배송지 등록, 장바구니 배송지 등록, 회원가입폼 주소등록
    const openPopupDaumPostApi=async()=>{
        const popupFile = '/public/popup.html';
        const popupName = '_popupAddressApi';
        const popupWidth = 530;
        const popupHeight = 570;
        const popupTop = (window.innerHeight-popupHeight)/2;
        const popupLeft = (window.innerWidth-popupWidth)/2;
        
        // 자식 팝업창
        const childWindow = window.open(popupFile, popupName, `width=${popupWidth}, height=${popupHeight}, top=${popupTop}, left=${popupLeft}`);
        // 자식창이 닫히면
        // 상태관리한다.
        // 1. 세션 스토레이지 저장소에서 데이터 가져온다
        // 2. 최상위 컴포넌트의 상태관리 변수 addr.주소1, addr.주소2, addr.isAddr 값 변경한다.
        // 3. 자동으로 각 헤더영역 배송지 등록, 장바구니 배송지 등록, 회원가입폼 주소등록에 전달된다.

        // 자식창이 닫히면
        childWindow.window.onbeforeunload = async () => {
            addressAuto();
        }
    }




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
        key: 'VIEWPRODUCTKEY',
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

    const {confirmMsg} = modal;
    
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
        key: 'TOPMODALKEY',
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
                    key: item.split('=')[0].trim(),  // KURLY_TOPMODAL
                    value: item.split('=')[1].trim() // yes
                }
            });
    
            // 찾기(Found)  key: 'KURLY_TOPMODAL'
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
            <GlobalContext.Provider value={{CARTPRODUCTKEY, VIEWPRODUCTKEY, TOPMODALKEY, ADDRESSKEY}}>
            <ConfirmContext.Provider value={{confirmMsg, confirmModalOpen, confirmModalClose}}>
            <CartContext.Provider value={{cartCount, cartCountNumber}}>
            <AddressApiContext.Provider value={{openPopupDaumPostApi, addr}}>
                {
                    topModal.isTopModal && <TopModalComponent topModalClose={topModalClose }/>
                }    
                
                
                

                    <BrowserRouter basename={process.env.PUBLIC_URL}>
                        <Routes>
                            <Route path='/' element={<HeaderComponent setIsIntroFn={setIsIntroFn} />}>                            
                                <Route index element={<MainIntroComponent setViewProduct={setViewProduct} />} />
                                <Route path='/main'    element={<MainIntroComponent setViewProduct={setViewProduct} />} />
                                <Route path='/sub1'    element={<Sub1Component setViewProduct={setViewProduct} />} />
                                <Route path='/sub2'    element={<Sub2Component setViewProduct={setViewProduct} />} />
                                <Route path='/sub3'    element={<Sub3Component setViewProduct={setViewProduct} />} />
                                <Route path='/sub4'    element={<Sub4Component setViewProduct={setViewProduct} />} />
                                <Route path='signin'   element={<SignInComponent/>}/>
                                <Route path='/idSearch'   element={<SignInIdSearchComponent/>}/>
                                <Route path='/pwSearch'   element={<SignInPwSearchComponent/>}/>
                                <Route path='/PwReset'   element={<SignInPwResetComponent/>}/>
                                <Route path='/signup'  element={<SignUpComponent mapAddressFn={mapAddressFn} timer={state} timerCounterfn={timerCounterfn} />} />                                                        
                                <Route path='/product' element={<ProductComponent />} />
                                <Route path='/cart'    element={<CartComponent confirmModalOpen={confirmModalOpen} />} />
                                <Route path='/*'    element={<NotView404PageComponent/>} />
                                
                            </Route>
                        </Routes>
                    </BrowserRouter>

                

                <FooterComponent/> 

                {
                    modal.isConfirmModal && <ConfirmModal />
                }

                
                <GoTopComponent />
                <QuickMenuComponent  product={product} isIntro={isIntro} />
                
            </AddressApiContext.Provider>
            </CartContext.Provider>
            </ConfirmContext.Provider>
            </GlobalContext.Provider>

        </div>
    );
};