import React, { Component } from 'react';
import female from '../img/wedding-img5.jpg';
import male from '../img/wedding-img6.jpg';
import '../scss/wrap.scss';

class WrapComponent extends React.Component {

    // 생성자 컨스트럭터
    constructor(props){
        super(props);  // super를 사용하여 => this 사용가능
        this.state = {
            title: '클래스형 컴포넌트 타이틀',
            cnt: 0,
            과일: this.props.과일,
            회원: {
                아이디: '',
                비밀번호: '',
                이름: '',
                이메일: ''
            },

            isGender: true,
            할일: '',  //입력상자 온체인지 이벤트
            todoList: [] //버튼클릭해서 할일 내용 누적 저장
            
        }
    }


    // TO DO LIST
    // 할일 입력상자 온체인지 이벤트 : 할일 입력
    onChangeTodoWrite=(e)=>{
        this.setState({
            할일: e.target.value
        })

    }

    // 1. 버튼 클릭 이벤트 : 배열에 데이터 추가 ...전개연산자 이용 추가한다
    // * 배열에 저장목록은 새로고침하면 브라우저가 새로 렌더링되면서 모두 초기화
    onClickTodoListAdd=(e)=>{
        e.preventDefault();

        this.setState({
            todoList: [
                ...this.state.todoList,
                {
                    할일: this.state.할일   //입력상자에서 입력된 state.할일
                }
            ],
            할일: ''
        })



    }

    // 스토레이지 저장
    // 1. 추가된 배열의 목록을 브라우저 저장에서 저장한다. (영구 저장된다)
    // 2. 스토레이지: localStorage [세터,게터]
    onClickTodoListAddStorage=(e)=>{
        e.preventDefault();
        const key='TODO';
        // 로컬스토레이지 저장하기 : 문자열로 저장된다. 객체 저장 Object 문자열로 변환하고 저장한다.
        // localStorage.setItem(키 key, 값 value)
       
        // 문제점 : 새로 고치고 배열이 비어있는 상태 또는 입력된 1개의 데이터인 경우
        // 스토레이지에 저장하면 스토레이지데이터가 업데이트 되면서 모두 삭제되고 빈데이터 또는
        // 최근 입력된 1개 이상의 데이터만 저장된다(덮어쓰기)

        //스토레이지 이전에 있는 데이터를 그대로 보관하고 배열에 있는 데이터는 추가로 저장한다.
        //그러려면 스토레이지 데이터를 가져오기 하고 추가된 배열데이터를 병합한다. 전개연산자를 이용

        // 1. 로컬스토레이지 데이터 가져오기(게터)
        const getData = localStorage.getItem(key);
        //예외처리 빈값 null 널을 오류가 아니다.
        //그러나 잠정적으로 이후에 오류가 발생할 수 있는 이유가 된다.


        let todo = [];
        if(getData!==null){   //만약 가져올 데이터가 있다면 파싱처리(객체변환)
           
            todo = JSON.parse(getData); //JSON.stringify() => JSON.parse 객체로 다시 변환
        }


        


        // 2. 로켈스토레이지 데이터 추가(병합) 저장하기(세터)
        todo = [...todo, 
            {할일:this.state.할일}
        ];

        console.log(key, todo);

        localStorage.setItem(key, JSON.stringify(todo));
        this.setState({할일: ''});

        

    }






    // 회원정보
    onClickMember=(e)=>{
        e.preventDefault();
        this.setState({
            회원: {
                ...this.state.회원,
                아이디: 'member123',
                비밀번호: 'password',
                이름: '비비',
                이메일: 'member123@naver.com'
            }
        },
        
        
        )
    }

    // 1씩 증가 클릭 이벤트 함수 : 상태 변경 세터함수 이용
    // 전개연산자 사용 안해도 됨
    onClickAdd=(e)=>{
        e.preventDefault();
        this.setState({
            cnt:  this.state.cnt + 1
        })
    }

    // 1씩 감소 클릭 이벤트 함수 : 상태 변경 세터함수 이용
    onClickSub=(e)=>{
        e.preventDefault();
        this.setState({
            cnt: this.state.cnt - 1
        })
    }

    // 파라미터 변수 사용하기
    onClickParamAdd=(e, z)=>{
        e.preventDefault();
        alert(z);
        this.setState({
            cnt: this.state.cnt + 1
        })
    }
    onClickparamSub=(e, z)=>{
        const {cnt} = this.state;
        e.preventDefault();
        alert(z);
        this.setState({
            cnt: cnt - 1
        })
    }





    render() {
        console.log(`this.props ${this.props.과일}`);
        //이벤트 함수

        // 1씩 증가 클릭 이벤트 함수 : 상태 변경 세터함수 이용
        // const onClickAdd=(e)=>{
        //     e.preventDefault();
        //     this.setState({
        //         cnt:  this.state.cnt + 1
        //     })
        // }

        // 1씩 감소 클릭 이벤트 함수 : 상태 변경 세터함수 이용
        // const onClickSub=(e)=>{
        //     e.preventDefault();
        //     this.setState({
        //         cnt: this.state.cnt - 1
        //     })
        // }

        return (
            <div id='wrap' style={{textAlign:'center', lineHeight:'200%'}}>
                <h1>{this.state.title}</h1>
                <h2>{this.props.과일}</h2>
                <h1>{this.state.cnt}</h1>

                <hr />
                

                <h1><em>{this.state.회원.아이디}</em></h1>
                <h1><em>{this.state.회원.비밀번호}</em></h1>
                <h1><em>{this.state.회원.이름}</em></h1>
                <h1><em>{this.state.회원.이메일}</em></h1>


                <hr />
                <br /><br /><br />

                {/* 컨스트럭터 함수클릭이벤트 : 반드시 this사용 이벤트 */}
                <button onClick={this.onClickAdd}>증가</button>
                <button onClick={this.onClickSub}>감소</button>

                <button onClick={this.onClickMember}>회원정보</button>

                <hr />
                <br /><br /><br />
                {/* 클릭 이벤트와 매개변수 전달 구현 */}
                <button onClick={(e)=>this.onClickParamAdd(e,'1씩증가')}>클릭이벤트 매개변수 전달 구현 1씩 증가버튼</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={(e)=>this.onClickparamSub(e,'1씩감소')}>클릭이벤트 매개변수 전달 구현 1씩 감소버튼</button>

                <hr />
                <br /><br /><br />
                {/* 클릭 이벤트를 직접 구현 상태변수 변경*/}
                <button onClick={()=>this.setState({cnt: this.state.cnt+1})} >1씩 증가버튼</button>
                <button onClick={()=>this.setState({cnt: this.state.cnt-1})}>1씩 감소버튼</button>

                {/* 랜더함수 */}
                {/* <button onClick={onClickAdd}>증가</button>
                <button onClick={onClickSub}>감소</button> */}
                <div style={{width:'300px', margin:'50px auto'}}>
                    {
                        this.state.isGender===true ? <img src={female} alt="여성이미지" style={{width:'100%'}}/> : <img src={male} alt="남성이미지" style={{width:'100%'}}/>
                    }
                                     
                </div>

                <div>
                    <hr />
                    <button onClick={()=>this.setState({isGender: !this.state.isGender})}>여성|남성</button>
                </div>

                <hr />
                <div id="todo">
                    <div className="container">
                        <div className="title">
                            <h1>TO DO</h1>
                        </div>
                        <form name='todo' id='todo' method='post' action="./todo.php">
                            <ul className='input-box'>
                                <li>
                                    <input 
                                        type="text" 
                                        name='todo_w' 
                                        id='todoW' 
                                        placeholder='할일을 입력하세요' 
                                        onChange={this.onChangeTodoWrite}
                                        value={this.state.할일} //입력 시 검색창에 입력 저장 후 처음 입력상태됨
                                    />
                                </li>
                            </ul>
                        </form>
                        <div className="btn-box">
                            <button onClick={this.onClickTodoListAdd}>배열저장</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={this.onClickTodoListAddStorage}>로컬스토레이지저장</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default WrapComponent;

WrapComponent.defaultProps = {
    과일 : ['복숭아','딸기','귤','바나나','메론 ']
}