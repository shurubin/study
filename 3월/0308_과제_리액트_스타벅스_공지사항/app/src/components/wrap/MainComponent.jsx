import React from 'react';
import '../../scss/main.scss';

export default function MainComponent({공지}){
    return (
        <main id="main">
            <section id="section1">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h1>공지사항</h1>
                            <h5>WHAT'S NEW  공지사항</h5>
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
                                        공지.map((item,idx)=>{
                                            return(
                                                <tr>
                                                    <td className='ct'>{item.No}</td>
                                                    <td>{item.제목}</td>
                                                    <td className='ct'>{item.날짜}</td>
                                                    <td className='ct'>{item.조회수}</td>
                                                </tr>
                                            )
                                        }) 
                                    }
                                </tbody>
                           </table>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

