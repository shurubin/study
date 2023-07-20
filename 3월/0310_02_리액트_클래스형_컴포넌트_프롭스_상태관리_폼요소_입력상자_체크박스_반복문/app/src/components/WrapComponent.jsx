import React, { Component } from 'react';
import '../scss/style.scss';


class WrapComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            아이디:'',
            비밀번호:'',
            비밀번호확인:'',
            이름:'',
            이메일:'',
            휴대폰:'',

            가입정보: [],

            //체크박스 반복사용할 기초 데이터 배열
            과일: ['딸기','사과','포도','수박','자몽'],
            
            //체크박스 사용 저장 배열
            좋아하는과일: [] // 체크된 과일 저장하는 배열
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
        });
    }

    onChangeUserPwOk=(e)=>{
        this.setState({
            비밀번호확인: e.target.value
        });
    }

    onChangeUserName=(e)=>{
        this.setState({
            이름: e.target.value
        });
    }

    onChangeUserEmail=(e)=>{
        this.setState({
            이메일: e.target.value
        });
    }

    onChangeUserHp=(e)=>{
        this.setState({
            휴대폰: e.target.value
        });
    }


    // CHECKBOX EVENT   /////////////////////////////////////////////////////////////////////
    // 1. 체크박스 온체인지 이벤트
    // 2. 상태관리 변수(속성) checked1 => VALUE 저장 TRUE OR FALSE
    // 3. 조건문 
    // 4. 5개의 과일중 체크된 항목들 저장할 배열 선언 사용
    onChangeCheckEvent=(e)=>{
        console.log( e.target.checked ); // 체크드 선택이되면 true 선택을 해제하면 false 로 결과 출력
        console.log( e.target.value );   // 무슨 과일을 체크(선택) 했니?
        
        if( e.target.checked === true ){
            this.setState({
                좋아하는과일: [...this.state.좋아하는과일, e.target.value ]
            })    
        }
        else{  // false  딸기를 제외한 배열 재구성하는 필터 메서드
            this.setState({
                좋아하는과일: this.state.좋아하는과일.filter((item)=>item!==e.target.value)
            })  
        }



    }


    // 저장하기 클릭 이벤트
    onClickSave=(e)=>{
        e.preventDefault();
        this.setState({
            가입정보: [                
                ...this.state.가입정보,  //새로운 데이터는 현재 데이터 아래에 추가
                {
                    아이디: this.state.아이디,
                    비밀번호: this.state.비밀번호,
                    비밀번호확인: this.state.비밀번호확인,
                    이름: this.state.이름,
                    이메일: this.state.이메일,
                    휴대폰: this.state.휴대폰,
                    좋아하는과일: this.state.좋아하는과일,
                    가입일자: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`  // 날짜 객체
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
                                                onChange={this.onChangeUserId}  /* 키조작으로 상태관리변수 저장 */
                                                value={this.state.아이디}  /* 상태관리변수 내용이 변경되면 입력상자도 변경된다. */
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
                                            <label htmlFor="userPwOk">비밀번호확인<i>*</i></label>
                                            <input 
                                                type="text" 
                                                name='user_id_ok' 
                                                id='userPwOk' 
                                                placeholder='비밀번호를 한번 더 입력해주세요'
                                                onChange={this.onChangeUserPwOk}
                                                value={this.state.비밀번호확인}
                                            />
                                            <button>중복확인</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userName">이름<i>*</i></label>
                                            <input 
                                                type="text" 
                                                name='user_name' 
                                                id='userName' 
                                                placeholder='이름를 입력해주세요'
                                                onChange={this.onChangeUserName}
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
                                                placeholder='예: marketkurly@kurly.com'
                                                onChange={this.onChangeUserEmail}
                                                value={this.state.이메일}
                                            />
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
                                                onChange={this.onChangeUserHp}
                                                value={this.state.휴대폰}
                                            />
                                            <button>중복확인</button>
                                        </div>
                                    </li>
                                    <li className='fruit'>
                                        { //JSX 스크립트는 semi colone주의
                                            this.state.과일.map((item, idx)=>{
                                                return(
                                                    //탬플릿 리터럴은 제일 먼저 양쪽에 수염괄호(중괄호)하고 빽틱으로 감싼다!!!!
                                                    //중괄호 안에 또 중괄호는 중괄호 앞에 달러 사인을 표기한다. 그럼 변수로 인식된다
                                                    //체크박스 이벤트 함수는 1개로 모두 처리한다.
                                                    <label key={idx+1} htmlFor={`chk1${idx+1}`}>
                                                        <input onChange={this.onChangeCheckEvent} type="checkbox" name={`chk1${idx+1}`} id={`chk1${idx+1}`} value={item} checked={this.state.좋아하는과일.includes(item)} />{item}
                                                    </label>
                                                )
                                            })
                                        }
                                        
                                        
                                    </li>
                                </ul>  
                                <div className="btn-box">
                                    <button  onClick={this.onClickSave}>저장</button>
                                </div>                              
                            </form>
                        </div>
                </div>   
            </div>
        );
    }
}

export default WrapComponent;