import React from 'react';
import { useEffect } from 'react';
import '../../scss/main.scss'

export default function MainComponent({성적}){ //기말고사 데이터

    const grade = 성적.map((item,idx)=>{
        return(
            <tr key={item.번호}>
                <td>{item.번호}</td>
                <td>{item.이름}</td>
                <td>{item.국어}</td>
                <td>{item.수학}</td>
                <td>{item.영어}</td>
                <td>{item.국어+item.수학+item.영어}</td>
                <td>{Math.round((item.국어+item.수학+item.영어)/3)}</td>
                
            </tr>
        )
    })




    // React.useEffect(()=>{
    //     // for(let i=0; i<성적.length; i++){            
    //     //     console.log(`${성적[i].번호} ${성적[i].이름} ${성적[i].국어},${성적[i].수학},${성적[i].영어} 총점:${성적[i].국어+성적[i].수학+성적[i].영어}`);
    //     // }

    //     성적.map((item, idx)=>{
    //         // console.log(item.번호, item.이름, item.국어, item.수학, item.영어, item.국어+item.수학+item.영어);
    //     })
    // })

    return (
        <main id="main">
          <section id="section1">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>중간고사 성적표</h2>
                    </div>
                    <div className="content">
                        <table>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>이름</th>
                                    <th>국어</th>
                                    <th>수학</th>
                                    <th>영어</th>
                                    <th>총점</th>
                                    <th>평균</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    성적.map((item,idx)=>{
                                        return(
                                            <tr key={item.번호}>
                                                <td>{item.번호}</td>
                                                <td>{item.이름}</td>
                                                <td>{item.국어}</td>
                                                <td>{item.수학}</td>
                                                <td>{item.영어}</td>
                                                <td>{item.국어+item.수학+item.영어}</td>
                                                <td>{Math.round((item.국어+item.수학+item.영어)/3)}</td>
                                                
                                            </tr>
                                        )
                                    })
                                }


                                {/* <tr>
                                    <td>1</td>
                                    <td>하나</td>
                                    <td>100</td>
                                    <td>80</td>
                                    <td>75</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>두리</td>
                                    <td>88</td>
                                    <td>78</td>
                                    <td>66</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>석삼이</td>
                                    <td>33</td>
                                    <td>44</td>
                                    <td>55</td>
                                </tr> */}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </section>
          <section id="section2">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>기말고사 성적표</h2>
                    </div>
                    <div className="content">
                        <table>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>이름</th>
                                    <th>국어</th>
                                    <th>수학</th>
                                    <th>영어</th>
                                    <th>총점</th>
                                    <th>평균</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    grade
                                }




                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </section>
          <section id="section3">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>스타벅스 공지사항</h2>
                    </div>
                    <div className="content">
                        <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>제목</th>
                                    <th>날짜</th>
                                    <th>조회수</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    성적.map((item,idx)=>{
                                        return(
                                            <tr key={item.번호}>
                                                <td>{item.번호}</td>
                                                <td>{item.이름}</td>
                                                <td>{item.국어}</td>
                                                <td>{item.수학}</td>
                                                <td>{item.영어}</td>
                                                <td>{item.국어+item.수학+item.영어}</td>
                                                <td>{Math.round((item.국어+item.수학+item.영어)/3)}</td>
                                                
                                            </tr>
                                        )
                                    })
                                }


                                {/* <tr>
                                    <td>1</td>
                                    <td>하나</td>
                                    <td>100</td>
                                    <td>80</td>
                                    <td>75</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>두리</td>
                                    <td>88</td>
                                    <td>78</td>
                                    <td>66</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>석삼이</td>
                                    <td>33</td>
                                    <td>44</td>
                                    <td>55</td>
                                </tr> */}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </section>
        </main>
    );
};
