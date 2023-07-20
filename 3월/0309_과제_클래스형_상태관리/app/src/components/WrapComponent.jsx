import React, { Component } from 'react';
import '../scss/style.scss';

class WrapComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            할일: '',
            마켓: []
        }
    }

    onChangeInput=(e)=>{
        e.preventDefault();
        this.setState({
            할일 : e.target.value
        })
        
    }


    onChangeMar=(e)=>{
        e.preventDefault();
        this.setState({
            마켓 : e.target.value
        })
    }




    render() {
        return (
            <div>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h1>퀵메이크</h1>
                        </div>
                        <div className="content">
                            <form name='Ftodo' id='Ftodo' method='post' action="./todo.php">
                                <ul>
                                    <li>
                                        <input 
                                        type="text" 
                                        name='Itodo' 
                                        id='Itodo' 
                                        placeholder='입력하세요' 
                                        onChange={this.onChangeInput}
                                        value={this.state.마켓} />
                                    </li>
                                </ul>
                            </form>
                            <button>버튼1</button>
                        </div>
                        <div className="content2">
                            <form name='회원' id='회원' method='post' action="">
                                <ul>
                                    <li><input type="text" name='회원1' id='회원이' onChange={this.onChangeMar} placeholder='아이디' /> <button>확인</button></li>
                                    <li><input type="text" name='회원2' id='회원이' onChange={this.onChangeMar} placeholder='비밀번호' /><button>확인</button></li>
                                    <li><input type="text" name='회원3' id='회원이' onChange={this.onChangeMar} placeholder='비밀번호확인' /><button>확인</button></li>
                                    <li><input type="text" name='회원4' id='회원이' onChange={this.onChangeMar} placeholder='이름' /><button>확인</button></li>
                                    <li><input type="text" name='회원5' id='회원이' onChange={this.onChangeMar} placeholder='이메일' /><button>확인</button></li>
                                    <li><input type="text" name='회원6' id='회원이' onChange={this.onChangeMar} placeholder='휴대폰' /><button>확인</button></li>
                                    <li><input type="text" name='회원7' id='회원이' onChange={this.onChangeMar} placeholder='주소' /><button>확인</button></li>
                                    <li><input type="text" name='회원8' id='회원이' onChange={this.onChangeMar} placeholder='생년월일' /><button>확인</button></li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WrapComponent;