import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ModalComponent from './wrap/ModalComponent';
import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import IntroMainComponent from './wrap/IntroMainComponent'
import Sub1Component from './wrap/Sub1Component';
import Sub2Component from './wrap/Sub2Component';
import Sub3Component from './wrap/Sub3Component';
import Sub4Component from './wrap/Sub4Component';
import SignUpComponent from './wrap/SignUpComponent';

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


    /////제니모달////////////////////////
    const [jennyModal, setJennyModal] = React.useState({
        key: 'jenny_modal',
        isjennyModal: true
    });

    const JennyModalClose=(value, expires)=>{
        setJennyModal({
            ...jennyModal,
            isjennyModal: false
        });
        setCookieMethod(value, expires);
    }

    const setCookieMethod=(value, expires)=>{
        let toDay = new Date();
        toDay.setDate( toDay.getDate() + expires);
        document.cookie = `${jennyModal.key}=${value}; path=/; expires=${toDay.toUTCString()};`;
    }

    const getCookieMethod=()=>{
        console.log(document.cookie);
        if(document.cookie==='') return;

        const result = document.cookie.split(';');
        let cookie = [];
        result.map((item, idx)=>{
            cookie[idx] = {
                key: item.split('=')[0].trim(),
                value: item.split('=')[1].trim()
            }
        });

        cookie.map((item)=>{
            let isjennyModal = null;

            if(item.key===jennyModal.key && item.value === 'yes'){
                setJennyModal({
                    ...jennyModal,
                    isjennyModal: false
                })                
            }
        })
    

        

        // try{

        // }
        // catch(e){
        //     console.log('쿠키없음', e)
        // }

    }

    React.useEffect(()=>{
        getCookieMethod();
    },[jennyModal.isjennyModal])


    return (
        <div id='wrap'>
                <ModalComponent/>  
                {
                    <TopModalComponent JennyModalClose={JennyModalClose}/>
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
                            <Route path='/회원가입' element={<SignUpComponent mapAddressFn={mapAddressFn} timer={state} timerCounterfn={timerCounterfn} />} />                            
                              
                        </Route>
                    </Routes>
                </BrowserRouter>
                <FooterComponent/> 

          
        </div>
    );
};