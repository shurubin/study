import React from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import NoticeLeftNavComponent from './notices/NoticeLeftNavComponent';
import NoticeRightListComponent from './notices/NoticeRightListComponent';
import './notice_scss/notice.scss';
import axios from 'axios';

export default function NoticeComponent(){

    // 관리자 로그인하면 글쓰기 가능
    const {isAdmin} = React.useContext(GlobalContext);

    const [notice, setNotice] = React.useState([]);

    const onClickWrite=(e)=>{
        e.preventDefault();
        window.location.pathname= '/notice_write';
    }

    // 공지사항 JSON 파일 로딩
    React.useEffect(()=>{
        axios({
            url: './data/notice_page/board.json',
            method: 'GET'

        })
        .then((res)=>{
            if(res.status===200){
                console.log(res.data.notice);
                setNotice(res.data.notice);
            }
        })
        .catch((err)=>{
            console.log(err);
        });
    },[])

    return (
        <div id='notice'>
            <div id="container">

                <NoticeLeftNavComponent/>
                <NoticeRightListComponent notice={notice}/>
                {
                    isAdmin&&(
                    <div className="button-box">
                        <button onClick={onClickWrite}>글쓰기</button>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

