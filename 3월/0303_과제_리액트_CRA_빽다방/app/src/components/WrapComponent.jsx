import React from 'react';
import HeaderComponent from './wrap/HeaderComponent.jsx';
import MainComponent from './wrap/MainComponent.jsx';
import FooterComponent from './wrap/FooterComponent.jsx';
import GotopComponent from './wrap/GotopComponent.jsx';
import NewopenComponent from './wrap/NewopenComponent.jsx';

function WrapComponent(){
    return (
        <div id="wrap">
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
            <GotopComponent/>
            <NewopenComponent/>
           
        </div>
    );
};

export default WrapComponent;