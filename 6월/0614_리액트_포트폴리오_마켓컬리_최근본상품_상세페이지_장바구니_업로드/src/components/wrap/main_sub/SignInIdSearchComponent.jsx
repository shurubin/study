import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/signin_id_search.scss';

export default function SignInIdSearchComponent(){

    const [isTab, setIsTab] = React.useState(false);
    const [isBtn, setIsBtn] = React.useState(false);
    const [userName, setUserName] = React.useState('');
    const [userHp, setUserHp] = React.useState('');

    const onChangeName=(e)=>{
        setUserName = e.target.value;
    }

    const onChangeHp=(e)=>{
        setUserHp = e.target.value;
    }



    return (
        <main id='SignInIdSearch'>
            <section id="section1">
                <div className="container">
                    <div className="title">
                        <h2>아이디 찾기</h2>
                    </div>
                    <div className="content">
                        <form action="">
                            <ul>
                                <li>
                                    <button className={isTab?'on':''}>휴대폰 인증</button>
                                    <button className={isTab?'on':''}>이메일 인증</button>
                                </li>
                                <li><label htmlFor="userName"></label></li>
                                <li>
                                    <input 
                                    onChange={onChangeName}
                                    type="text" 
                                    name='user_name' 
                                    id='userName' 
                                    value={userName} 
                                    placeholder='이름을 입력하세요' />
                                </li>
                                <li><label htmlFor="userHp"></label></li>
                                <li>
                                    <input 
                                    onChange={onChangeHp}
                                    type="text" 
                                    name='user_hp' 
                                    id='userHp' 
                                    value={userHp} 
                                    placeholder='휴대폰 번호를 입력하세요' />
                                </li>
                                <li></li>
                                <li><button className={isBtn?'on':''}>인증번호 받기</button></li>
                            </ul>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

