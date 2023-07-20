import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import IntroMainComponent from './wrap/IntroMainComponent';
import Sub1Component from './wrap/Sub1Component';
import Sub2Component from './wrap/Sub2Component';
import Sub3Component from './wrap/Sub3Component';
import Sub4Component from './wrap/Sub4Component';
import SignUpComponent from './wrap/SignUpComponent';
import ConfirmModal from './wrap/ConfirmModal';
import GoTopComponent from './wrap/GoTopComponent';
import QuickMenuComponent from './wrap/QuickMenuComponent';

import FooterComponent from './wrap/FooterComponent';


export default function WrapComponent() {

    const [product, setProduct] = React.useState({
        key: 'su_kurly_view_product',
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
            localStorage.setItem(key, JSON.stringify(arr));

            setProduct({
                ...product,
                sign: true,
                getViewProduct: arr
            });  

        }
        else{
            arr = [value]
            localStorage.setItem(key, JSON.stringify(arr));

            setProduct({
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

    ////////////////////////////////////////////////////////
    //모달 상태관리

    const [modal, setModal] = React.useState({
        confirmMsg: '자식창에서 모달창으로 보낸 타이틀 메시지내용.',
        isConfirmModal: false // true 모달열기  false 모달닫기
    });

    //1. 모달창 닫기 이벤트 => 모달창에 있는 버튼클릭이벤트 메소드 만들기
    const confirmModalClose=()=>{
        setModal({
            ...modal,
            isConfirmModal: false
        })
    }

    //2. 모달창 열기 이벤트 => 모든 자식컴포넌트에서 모달열기와 메시지 전달
    const confirmModalOpen=(msg)=>{
        setModal({
            ...modal,
            confirmMsg: msg,
            isConfirmModal: true
            
        })
    }


    //////////////////////////////
    //1. 탑모달 상태관리

    const [topModal, setTopModal] = React.useState({
        key: 'SB_kurly_topmodal',
        isTopMoal: true
    });


    //2. 탑 모달 닫기함수 => 쿠키설정
    const topModalClose=(value, expires)=>{
        setTopModal({
            ...topModal,
            isTopModal: false
        });
        setCookieMethod(value, expires);
    }



    //3. 쿠키 설정(저장)하기 : 탑모달 닫기 클릭하면 쿠키 설정 저장
    const setCookieMethod=(value, expires)=>{
        let toDay = new Date();
        toDay.setDate( toDay.getDate() + expires); // "+ 설정"  "- 삭제"
        document.cookie = `${topModal.key}=${value}; path=/; expires=${toDay.toUTCString()};`;
    
        // document.cookie = `'키'=키값;패스=/;만료일=날짜셋팅.toUTCString();`
        // document.cookie = `'set_self'='set_self_yes';path=/;expires=날짜셋팅.toUTCString();`
    
    }





    //4. (언제)쿠키 가져오기 : 설정된 쿠키가 없으면 탑모달은 열린다. 있다면(찾았다면) 닫는다.
    const getCookieMethod=()=>{
        // console.log(document.cookie);
        if(document.cookie==='') return; // 예외처리 if문 또는 try catch문

        try{
            const result = document.cookie.split(';');
            let cookie = [];
            result.map((item,idx)=>{
                cookie[idx] = {
                    key: item.split('=')[0].trim(),      // sb_kurly
                    value: item.split('=')[1].trim()     // yes
                }
            });

            // 찾기(Found) key: ''
            // 모달닫기 했던 쿠키가 존재하면
            // 모달닫기를 수행 : 새로고침하면 또 설정 계속 설정
            cookie.map((item)=>{
                let isTopMoal = null;
    
                if(item.key===topModal.key && item.value ==='yes'){
                // if(item.key.incluedes(topModal.key)===true && item.value.incluedes('yes')===true){
                    setTopModal({
                        ...topModal,
                        isTopMoal: false
                    })
                    return;
                }
    
            })
        }
        catch(e){
            console.log('쿠키없음' , e)
        }


        
    }

    // 5
    React.useEffect(()=>{
        getCookieMethod();

        console.log(`process.env.PUBLIC_URL  ${process.env.PUBLIC_URL}`);

    },[topModal.isTopModal]);


    return (
        <div id='wrap'>
                {
                    topModal.isTopMoal && <TopModalComponent topModalClose={topModalClose}/>
                }
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path='/' element={<HeaderComponent mapText={state.mapText} isMap={state.isMap} />}>
                            <Route index element={<IntroMainComponent setViewProduct={setViewProduct}/>} />                            
                            <Route path='/main' element={<IntroMainComponent setViewProduct={setViewProduct} />} />                            
                            <Route path='/sub1' element={<Sub1Component/>} />                            
                            <Route path='/sub2' element={<Sub2Component/> } />                            
                            <Route path='/sub3' element={<Sub3Component/>} />                            
                            <Route path='/sub4' element={<Sub4Component/>} />                            
                            <Route path='/signup' element={<SignUpComponent mapAddressFn={mapAddressFn} timer={state} timerCounterfn={timerCounterfn} confirmModalOpen={confirmModalOpen}/>} />                            
                            
                              
                        </Route>
                    </Routes>
                </BrowserRouter>

                <FooterComponent/> 
                {
                    modal.isConfirmModal && <ConfirmModal confirmMsg={modal.confirmMsg} confirmModalClose={confirmModalClose} />           
                }

                <GoTopComponent />
                <QuickMenuComponent product={product} />
        </div>
    );
};