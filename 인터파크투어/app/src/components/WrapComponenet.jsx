import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import Main1Component from './wrap/Main1Component';
import Main2Component from './wrap/Main2Component';
import Main3Component from './wrap/Main3Component';
import Main4Component from './wrap/Main4Component';
import Main5Component from './wrap/Main5Component';
import Main6Component from './wrap/Main6Component';
import Main7Component from './wrap/Main7Component';
import Main8Component from './wrap/Main8Component';
import FooterComponent from './wrap/FooterComponent';

export default function WrapComponenet(){
    return (
        <div id='wrap'>
            <HeaderComponent/>
            <Main1Component/>
            <Main2Component/>
            <Main3Component/>
            <Main4Component/>
            <Main5Component/>
            <Main6Component/>
            <Main7Component/>
            <Main8Component/>
            <FooterComponent/>
        </div>
    );
};



