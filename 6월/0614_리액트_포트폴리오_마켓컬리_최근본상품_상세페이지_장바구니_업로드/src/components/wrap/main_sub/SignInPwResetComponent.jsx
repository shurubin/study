import React from 'react';
import {Link} from 'react-router-dom';

export default function SignInPwResetComponent(){
    return (
        <main id='SignInPwReset'>
            <section id="section1">
                <div className="container">
                    <div className="title">
                        <h2>비밀번호 재설정</h2>
                    </div>
                    <div className="content">
                        <form action="">
                            <ul>
                                <li><input type="text" name='user_id' id='userId' value={''} /></li>
                                <li><input type="password" name='user_pw' id='userPw' value={''} /></li>
                                <li>
                                    <span>
                                        <Link to="/id_search">아이디 찾기</Link>
                                        <i>|</i>
                                        <Link to="/id_search">비밀번호 찾기</Link>
                                    </span>
                                </li>
                                <li><button>로그인</button></li>
                                <li><Link to="signup">회원가입</Link></li>
                            </ul>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

