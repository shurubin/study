import React from 'react';
import FooterComponent from './wrap/FooterComponent';
import HeaderComponent from './wrap/HeaderComponent';
import SignUpComponent from './wrap/SignUpComponent';
import TopModalComponent from './wrap/TopModalComponent';
import Sub1PageComponent from './wrap/Sub1PageComponent';
import Sub2PageComponent from './wrap/Sub2PageComponent';


import {BrowserRouter, Routes, Route} from 'react-router-dom';


export default function WrapComponent(){
    return (
        <div id='wrap'>   
            <BrowserRouter>
               
                <TopModalComponent/>   {/* 고정페이지 */}

                <Routes>
                    <Route path='/' element={<HeaderComponent/>} >  {/* 네비게이션 메인버튼 클릭 페이지 이동 고정페이지 */}
                        <Route index element={<SignUpComponent/>}/> {/* 회원가입페이지 */}    
                         <Route path='/회원가입' element={<SignUpComponent/>} />              
                         <Route path='/로그인' element={<Sub1PageComponent/>}/>                        
                         <Route path='/고객센터' element={<Sub2PageComponent/>}/>                        
                    </Route>
                </Routes>

                
                <FooterComponent/>  {/* 고정페이지 */}
            </BrowserRouter>
        </div>
    );
};

