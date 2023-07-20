import React, { Component } from 'react';
import '../scss/style.scss';

class WrapComponent extends Component {

    //상태관리 걸기 > props onchange 걸기 (this) > 이벤트 걸기 수빈

    constructor(props){
        super(props);
        this.state = {
            아이디 : '',
            비밀번호 : '',
            비밀번호확인 : '',
            이름 : '',
            이메일 : '',
            휴대폰 : '',
            

            가입정보 : [],
            checked1: false,
            checked2: false,
            checked3: false,
            checked4: false,
            checked5: false,
            좋아하는과일: [] //체크된 과일 저장하는 배열
        }
    }
    

    onChangeUserId=(e)=>{
        this.setState({
            아이디: e.target.value
        })
    
    }

    onChangeUserPw=(e)=>{
        this.setState({
            비밀번호: e.target.value
        })
    }

    onChangePwOk=(e)=>{
        this.setState({
            비밀번호확인: e.target.value
        })
    }

    onChangeName=(e)=>{
        this.setState({
            이름: e.target.value
        })
    }

    onChangeEmail=(e)=>{
        this.setState({
            이메일: e.target.value
        })
    }

    onChangeHp=(e)=>{
        this.setState({
            휴대폰: e.target.value
        });
    }

        // checkbox event
    // 1. 체크박스 온체인지 이벤트
    // 2. 상태관리 변수(속성) checked1 > value 저장 true or false
    // 3. 조건문
    // 4. 5개의 과일 중 체크된 항목들 저장할 배열 선언 사용
    onChangeCheckEvent1=(e)=>{
        console.log(e.target.checked); //checked 선택이되면 true 선택을 해제하면 false로 결과 출력
        console.log(e.target.value); //무슨 과일을 체크 선택했니?

        if(e.target.checked === true){
            this.setState({
                checked1:true,
                좋아하는과일:[...this.state.좋아하는과일, e.target.value]
            })
        }
        else{
            this.setState({
                checked1:false,
                좋아하는과일: this.state.좋아하는과일.filter((item)=>item)
            })
            
        }

        
    }


    onClickSave=(e)=>{
        e.preventDefault(); //없으면 폼전송이 이루어짐
        this.setState/* 세터함수 */({
            가입정보: [
                ...this.state.가입정보,  //새로운 데이터는 현재 데이터 아래에 추가
                {
                    아이디 : this.state.아이디,
                    비밀번호 : this.state.비밀번호,
                    비밀번호확인 : this.state.비밀번호확인,
                    이름 : this.state.이름,
                    이메일 : this.state.이메일,
                    휴대폰 : this.state.휴대폰,
                    좋아하는과일: this.state.좋아하는과일,
                    가입일자 : `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}` //날짜 객체
                }
        ]
        });
        alert('저장되었습니다.');
    }



    render() {
        return (
            <div id='wrap'>
                <div className="container">
                    <div className="title">
                        <h1>회원가입</h1>
                        <h3><i>*</i>필수입력사항</h3>
                    </div>
                    <div className="content">
                        <form name='member_form' id='memberForm' method='post' action="./member_form.php">
                            <ul>
                                <li>
                                    <div>
                                        <label htmlFor="userId">아이디<i>*</i></label>
                                        <input 
                                            type="text" 
                                            name='user_id' 
                                            id='userId' 
                                            placeholder='아이디를 입력해주세요'
                                            onChange={this.onChangeUserId}  //키보드로 상태관리 변수(스테이트에) 저장
                                            value={this.state.아이디}  // 상태관리변수 내용이 변경되면 입력상자도 변경된다.
                                        />
                                        <button>중복확인</button>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <label htmlFor="userPw">비밀번호<i>*</i></label>
                                        <input 
                                            type="text"
                                            name='user_pw' 
                                            id='userPw' 
                                            placeholder='비밀번호를 입력해주세요' 
                                            onChange={this.onChangeUserPw}
                                            value={this.state.비밀번호}
                                        />                                       
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <label htmlFor="userPwOk">비밀번호 확인<i>*</i></label>
                                        <input 
                                        type="text" 
                                        name='user_pw_ok' 
                                        id='userPwOk' 
                                        placeholder='비밀번호를 한번 더 입력해주세요' 
                                        onChange={this.onChangePwOk}
                                        value={this.state.비밀번호확인}
                                        />                                       
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <label htmlFor="userName">이름<i>*</i></label>
                                        <input 
                                            type="text" 
                                            name='user_name' 
                                            id='userName' 
                                            placeholder='이름을 입력해주세요' 
                                            onChange={this.onChangeName}
                                            value={this.state.이름}
                                        />                                     
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <label htmlFor="userEmail">이메일<i>*</i></label>
                                        <input 
                                            type="text" 
                                            name='user_email' 
                                            id='userEmail' 
                                            placeholder='예:subini@naver.com' 
                                            onChange={this.onChangeEmail}
                                            value={this.state.이메일}
                                        />
                                        <button>중복확인</button>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <label htmlFor="userHp">휴대폰<i>*</i></label>
                                        <input 
                                            type="text" 
                                            name='user_hp' 
                                            id='userHp' 
                                            placeholder='숫자만 입력해주세요'
                                            onChange={this.onChangeHp}
                                            value={this.state.휴대폰} 
                                        />
                                        <button>인증번호 확인</button>
                                    </div>
                                </li>
                                <li className='fruit'>
                                    <label htmlFor="chk1"><input onChange={this.onChangeCheckEvent1} type="checkbox" name='chk1' id='chk1' value='딸기' checked={this.state.checked1}/>딸기</label>
                                    <label htmlFor="chk2"><input onChange={this.onChangeCheckEvent2} type="checkbox" name='chk2' id='chk2' value='복숭아' checked={this.state.checked2}/>복숭아</label>
                                    <label htmlFor="chk3"><input onChange={this.onChangeCheckEvent3} type="checkbox" name='chk3' id='chk3' value='수박' checked={this.state.checked3}/>수박</label>
                                    <label htmlFor="chk4"><input onChange={this.onChangeCheckEvent4} type="checkbox" name='chk4' id='chk4' value='메론' checked={this.state.checked4}/>메론</label>
                                    <label htmlFor="chk5"><input onChange={this.onChangeCheckEvent5} type="checkbox" name='chk5' id='chk5' value='포도' checked={this.state.checked5}/>포도</label>
                                </li>
                            </ul>
                            <div className="btn-box">
                                <button onClick={this.onClickSave}>저장</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default WrapComponent;