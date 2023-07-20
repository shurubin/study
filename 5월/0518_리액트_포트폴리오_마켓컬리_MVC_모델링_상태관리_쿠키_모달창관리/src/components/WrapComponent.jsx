import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import IntroMainComponent from './wrap/IntroMainComponent'
import Sub1Component from './wrap/Sub1Component';
import Sub2Component from './wrap/Sub2Component';
import Sub3Component from './wrap/Sub3Component';
import Sub4Component from './wrap/Sub4Component';
import SignUpComponent from './wrap/SignUpComponent';
import ConfirmModal from './wrap/ConfirmModal';

import FooterComponent from './wrap/FooterComponent';

export default function WrapComponent() {

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
        isConfirmModal: true // true 모달열기  false 모달닫기
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
            isTopMoal: false
        });
        setCookieMethod(value, expires);
    }



    //3. 쿠키 설정(저장)하기 : 탑모달 닫기 클릭하면 쿠키 설정 저장
    const setCookieMethod=(value, expires)=>{
        let toDay = new Date();
        toDay.setDate( toDay.getDate() + expires); // 3일간 열리지 않음
        document.cookie = `${topModal.key}=${value}; path=/; expires=${toDay.toUTCString()};`;
    }

    //4. (언제)쿠키 가져오기 : 설정된 쿠키가 없으면 탑모달은 열린다. 있다면(찾았다면) 닫는다.
    const getCookieMethod=()=>{
        console.log(document.cookie);
        if(document.cookie==='') return; // 예외처리

        const result = document.cookie.split(';');
        let cookie = [];
        result.map((item,idx)=>{
            cookie[idx] = {
                key: item.split('=')[0].trim(),      // sb_kurly
                value: item.split('=')[1].trim()     // yes
            }
        });

        cookie.map((item)=>{
            let isTopMoal = null;

            if(item.key===topModal.key && item.value ==='yes'){
            // if(item.key.incluedes(topModal.key) && item.value.incluedes('yes')){
                setTopModal({
                    ...topModal,
                    isTopMoal: false
                })
                return;
            }

        })
        
    }

    // 5
    React.useEffect(()=>{
        getCookieMethod();
    },[topModal.isTopMoal]);


    return (
        <div id='wrap'>
                {
                    topModal.isTopMoal && <TopModalComponent topModalClose={topModalClose}/>
                }
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<HeaderComponent mapText={state.mapText} isMap={state.isMap} />}>
                            <Route index element={<IntroMainComponent/>} />                            
                            <Route path='/메인' element={<IntroMainComponent/>} />                            
                            <Route path='/신상품' element={<Sub1Component/>} />                            
                            <Route path='/베스트' element={<Sub2Component/> } />                            
                            <Route path='/알뜰상품' element={<Sub3Component/>} />                            
                            <Route path='/특가혜택' element={<Sub4Component/>} />                            
                            <Route path='/회원가입' element={<SignUpComponent mapAddressFn={mapAddressFn} timer={state} timerCounterfn={timerCounterfn} confirmModalOpen={confirmModalOpen}/>} />                            
                              
                        </Route>
                    </Routes>
                </BrowserRouter>

                <FooterComponent/> 
                {
                    modal.isConfirmModal && <ConfirmModal confirmMsg={modal.confirmMsg} confirmModalClose={confirmModalClose} />           
                }
        </div>
    );
};