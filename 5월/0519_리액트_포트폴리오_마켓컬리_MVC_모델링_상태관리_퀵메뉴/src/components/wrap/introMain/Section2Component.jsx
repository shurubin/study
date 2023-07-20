import React from 'react';
import './scss/section_link_image.scss';
import axios from 'axios';

export default function Section2Component(){

    const [state, setState] = React.useState({
        이미지: ''
    });

    const getDataApi=()=>{
        axios({
            url:'./data/intro_page/section_link_image.json',
            method:'GET'
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            if(res.status===200){
                setState({
                    이미지: res.data.섹션2이미지
                });
            }

        })
        .catch((err)=>{
            console.log(`AXIOS실패 ${err}`);
        });
    }

    React.useEffect(()=>{
        getDataApi();
    },[state.이미지]);

    return (
        <section id="section2" className='section-link-image'>
            <div className="container">
                <div className="gap">
                    <div className="title hide"><h2>섹션 탑배너</h2></div>
                    <div className="content">
                        <a href="!#">
                            <img src={`./images/intro/${state.이미지}`} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

