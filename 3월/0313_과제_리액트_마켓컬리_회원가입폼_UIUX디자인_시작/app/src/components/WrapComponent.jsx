import React from 'react';
import TopComponent from './wrap/TopComponent';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';

export default function WrapComponent(){
    return (
        <div id='wrap'>
            
            <TopComponent/>
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
        </div>
    );
};

 