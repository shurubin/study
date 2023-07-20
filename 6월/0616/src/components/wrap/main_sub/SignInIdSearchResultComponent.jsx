import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/signin_id_result.scss';

export default function SignInIdSearchResultComponent(){

    const [userId, setUserId] = React.useState('susususu');
    const [gaib, setGaib] = React.useState('2021.03.07');

    const onClickPwSearch=(e)=>{
        e.preventDefault();
        window.location.pathname='/pwSearch'
    }

    const onClickLogin=(e)=>{
        e.preventDefault();
        window.location.pathname='/signin'
    }

    return (
        <main id='SignInIdResult'>
            <section id="section1">
                <div className="container">
                    <div className="title">
                        <h2>고객님의 컬리계정을 찾았습니다.</h2>
                        <p>아이디 확인 후 로그인해주세요.</p>
                    </div>
                    <div className="content">
                        <form action="">
                            <ul>
                                <li>
                                    <span><img src="./images/sign_in/icon_id_search_result.svg" alt="" /></span>
                                    <span>
                                        <strong>{userId}</strong>
                                        <em>가입일 {gaib}</em>
                                    </span>
                                </li>
                                <li></li>
                                <li><button onClick={onClickPwSearch}>비밀번호 찾기</button></li>
                                <li><button onClick={onClickLogin}>로그인</button></li>

                            </ul>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

