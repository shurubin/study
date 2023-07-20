import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';

export default function WrapComponent(){
    return (
        <div className='wrap'>

            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
        </div>
    );
};

