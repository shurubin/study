import React from 'react';
import Section5SlideComponent from './Section5SlideComponent';
import axios from 'axios';
import $ from 'jquery';
import './scss/section5.scss';

export default function Section5Component(){

    const [state, setState] = React.useState({
        페스타특가: [],
        n:0
    });

    const getDataApi=()=>{
        axios({
            url:'./data/intro_page/section5.json',
            method:'GET'
        }).
        then((res)=>{
            console.log(res);
            console.log(res.dadta);
            if(res.status===200){
                setState({
                    ...state,
                    페스타특가: res.data.페스타특가,
                    n: res.data.페스타특가.length
                })
            }
        }).
        catch((err)=>{
            console.log(`AXIOS 실패 ${err}`);
        });
    }


    React.useEffect(()=>{
        getDataApi();
    },[]);


    // 슬라이드 전체 너비
    React.useEffect(()=>{
        const $slideWrap    = $('.section5 .right');
        $slideWrap.css({width:`${(25 * state.n)-5}%`});
    },[state.n]);


    return (
        <section id="section5">
            <div className="container">
                <div className="gap">
                    <div className="title"></div>
                    <div className="content">
                        <div className="left">
                            <ul>
                                <li>
                                    <h2>뷰티컬리페스타 특가🎉</h2>
                                </li>
                                <li>
                                    <h3>매일 쏟아지는 특가 찬스!</h3>
                                </li>
              
                                <li>
                                    <p>망설이면 늦어요!</p>
                                </li>
                            </ul>
                        </div>

                        <Section5SlideComponent 페스타특가={state.페스타특가} />

                    </div>
                </div>
            </div>
        </section>
    );
};
