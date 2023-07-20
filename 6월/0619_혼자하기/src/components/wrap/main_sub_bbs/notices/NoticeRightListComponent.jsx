import React from 'react';
import { Link } from 'react-router-dom';

export default function NoticeRightListComponent({notice}){

    const [list, setList] = React.useState(6);  //한 화면에 보여질 목록개수
    const [pageNumber, setPageNumber] = React.useState(1);  // 페이지 번호
    const [groupPage, setGroupPage] = React.useState(10);    // 페이지번호 그룹(묶음) 
    const [cnt, setCnt] = React.useState(1);    // 페이지번호 그룹 카운트

    const [startNum, setStartNum] = React.useState((cnt-1) * groupPage); // 그룹 시작 번호
    const [endNum, setEndNum] = React.useState(startNum + groupPage); // 그룹 끝 번호


    // 페이지번호 클릭 이벤트
    const onClickPageNum=(e, num)=>{
        e.preventDefault();
        setPageNumber(num);
    }

    // 그룹페이지 이전클릭 카운트
    const onClickPrevGroup=(e)=>{
        e.preventDefault();
        setCnt(cnt-1);
    }

    // 그룹페이지 다음클릭 카운트
    const onClickNextGroup=(e)=>{
        e.preventDefault();
        setCnt(cnt+1);
    }


    // 그룹 시작번호 설정 => cnt 또는 groupPage 값 변경이 있거나 설정되었다면 시작번호 설정실행
    React.useEffect(()=>{
        setStartNum((cnt-1) * groupPage);
    },[cnt, groupPage])


    // 그룹 끝번호 설정
    React.useEffect(()=>{        
        setEndNum(startNum + groupPage);
    },[startNum, groupPage])

    // 그룹 시작페이지 설정 => 그룹페이지 이동 시 그룹의 첫페이지 설정
    React.useEffect(()=>{
        setPageNumber(startNum+1);
    },[endNum, startNum])

    return (
        <div id='noticeRight'>
            <div className="container">
                <div className="title">
                    <h3>공지사항<span>컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.</span></h3>
                </div>
                <div className="content">
                    <dl>
                        <dt>
                            <span>번호</span>
                            <span>제목</span>
                            <span>작성일</span>
                            <span>조회수</span>
                        </dt>
                        {
                            notice.map((item, idx)=>{
                                if(Math.ceil((idx+1)/list) === pageNumber ){    // 클릭버튼 번호 전달
                                    return(                                    
                                        <dd key={item.NO}> 
                                            <Link to={`/view_page?listNum= + ${item.No}`}>
                                                <span>{item.NO}</span>
                                                <span>{item.제목}</span>
                                                <span>{item.날짜}</span>
                                                <span>{item.조회수}</span>
                                            </Link>
                                        </dd>                                    
                                    )
                                }
                            })

                        }
                    </dl>

                    <div className="page-button-box">
                        {cnt > 1 && <a className='prev-btn' href='!#' onClick={onClickPrevGroup}>&lt;</a>}
                        {   

                            (()=>{
                                
                                
                                let arr = []; // 페이지번호와 a태그 모두 저장된 배열변수
                                for(let i=startNum; i<endNum; i++){
                                    // 100

                                    if(i<Math.ceil(notice.length/list)){
                                        arr = [...arr, <a className={pageNumber===(i+1)?'on':''} href='!#' onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a>]
                                        // arr.push( <a href='!#' onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a>)                                        
                                    }
   
                                }
                                return arr                                


                            })()
                            
                        }

                        {cnt < Math.ceil(notice.length /list/groupPage) && <a className='next-btn' href='!#' onClick={onClickNextGroup}>&gt;</a>}
                    </div>

                </div>
            </div>
        </div>
    );
};