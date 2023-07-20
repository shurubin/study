import React from 'react';
import DaumPostcode from 'react-daum-postcode';  //패키지 카카오(다음) 주소검색
import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import SignUpComponent from './wrap/SignUpComponent';
import FooterComponent from './wrap/FooterComponent';


export default function WrapComponent() {

    const [state, setState] = React.useState({
        minutes: 2,
        seconds: 59,
        setId: 0,
        msg:'',
        isEnd: false,
        // 헤더 프롭스로 전달하기
        mapText: '08793 서울 관악구 낙성대역3길 3  (봉천동)',
        isMap: false,
        addr: '',

        주소1: '',
        주소2: '',
        isAddress: false  // 주소검색 API모달창 show&hide
    });

    // 주소검색 API 모달창 열기 함수
    // 하위컴포넌트인 회원가입폼에 전달해서 주소검색 버튼 클릭 시 열린다.
    const addressOpenPostcode=()=>{
        setState({
            ...state,
            isAddress: true
        })
    }


    const timerCounterfn=()=>{       

        let setId = 0;
        let minutes = 2;
        let seconds = 59;
        let msg = '';
        let isEnd = false;

        setId = setInterval(function(){

            seconds--;
            if(seconds<0){
                seconds=59;
                minutes--;
                if(minutes<0){
                    clearInterval(setId);
                    seconds=0;
                    minutes=0;
                    msg = '유효시간이 경과 되었습니다.'; // 모달창 메시지
                    isEnd=true;  //모달창 true
                }
            }

            setState({
               ...state,
               seconds: seconds,
               minutes: minutes,
               msg: msg,
               setId: setId,   // 환경변수 메모리의 실행중인 타이머의 할당 메모리 사용번호 인덱스를 clearInterval(2)
               isEnd: isEnd
            })

        }, 1000);
    }

    const mapAddressFn=(a,b)=>{
        setState({
            ...state,
            isMap: false,
            mapText: a,
            isMap: b
        })
    }

    // 카카오 주소검색 API
    const onCompletePostcode=(data)=>{
        setState({
            ...state,
            주소1: data.address
        })
    }

    // 주소2 입력상자
    const onChangeAddress2=(e)=>{
        setState({
            ...state,
            주소2: e.target.value
        })
    }

    // 저장 버튼 클릭이벤트 : 주소검색 모달창 닫기
    const onClickAddressSave=(e)=>{
        e.preventDefault();
        
    }

    const postcodeComponent = {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
        width: '100%',
        minHeight: '100%',
        display: 'none'
    }

 

    return (
        <div id='wrap'>
            <TopModalComponent/>
            <HeaderComponent mapText={state.mapText} isMap={state.isMap}/>
            <SignUpComponent 주소1={state.주소1} 주소2={state.주소2} addressOpenPostcode={addressOpenPostcode} addr={state.addr} mapAddressFn={mapAddressFn} timer={state} timerCounterfn={timerCounterfn} />
            <FooterComponent/> 
            
            {
                state.isAddress && (
                    <div id="daumPostcode">
                        <div className="wrap">
                            <div className="container">
                                {/* 모달 사용자 입력상자 폼박스 */}
                                <div className="content">
                                    <ul>
                                        <li>
                                            <h1><strong>샛별배송</strong><span>지역입니다.</span></h1>
                                            <h2>매일 새벽, 문 앞까지 신선함을 전해드려요.</h2>
                                        </li>
                                        <li>
                                            <div className="input-box box1">
                                                <input type="text" name='modal_addr1' id='modalAddr1' placeholder='주소1' value={state.주소1} />
                                                <button><img src="./images/sign_up/search.svg" alt="" />재검색</button>
                                            </div>
                                        </li>
                                        <li>
                                        <div className="input-box box2">
                                                <input 
                                                type="text" 
                                                name='modal_addr2' 
                                                id='modalAddr2' 
                                                placeholder='주소2'
                                                onChange={onChangeAddress2}
                                                value={state.주소2}
                                            />                                        
                                            </div>
                                        </li>
                                        <li>
                                            <p>
                                                ※ 저장된 배송지는 최대 7일 간 임시 저장 후 자동 삭제됩니다.
                                                <br />
                                                로그인 할 경우, 회원님의 배송지 목록에 추가됩니다.
                                            </p>
                                        </li>
                                        <li>
                                            <button>저장</button>
                                        </li>
                                        <li>
                                            <h3>
                                                <img src="./images/popup/notice_14_14_f03f40.svg" alt="" />샛별배송 지역 중 배송불가 장소 안내
                                            </h3>
                                        </li>
                                        <li>
                                            <div className="sub-list">
                                                <h4>관공서 / 학교 / 병원 / 시장 / 공단지역 / 산간지역 / 백화점 등</h4>
                                                <a href="!#">
                                                    <span>자세히보기</span>
                                                    <img src="./images/popup/ico_arrow_down_11x10.svg" alt="" />
                                                </a>
                                            </div>
                                        </li>
                                        <div className="sub">
                                            <ul>
                                                <li>가락동농수산물도매시장</li>
                                                <li>가락동농수산물시장</li>
                                                <li>가천대학교</li>
                                                <li>고려대학교안암캠퍼스</li>
                                                <li>고매동 일부(일부지역만 배송가능)</li>
                                                <li>국립중앙박물관</li>
                                                <li>국민대학교</li>
                                                <li>덕성여자대학교</li>
                                                <li>덕양구 신원동 일부(일부지역만 배송가능)</li>
                                                <li>도내동 일부(원흥지구만 배송가능)</li>
                                                <li>동덕여자대학교</li>
                                                <li>반월특수지구</li>
                                                <li>서경대학교</li>
                                                <li>서울사이버대학교</li>
                                                <li>서울시립대학교</li>
                                                <li>서울여자대학교</li>
                                                <li>성균관대학교</li>
                                                <li>성신여자대학교</li>
                                                <li>세종대학교</li>
                                                <li>연세대학교</li>
                                                <li>이화여자대학교</li>
                                                <li>한국외국어대학교</li>
                                                <li>홍익대학교</li>
                                            </ul>
                                        </div>
                                    </ul>                            
                                </div>
                                {/* 주소검색 API */}
                                <DaumPostcode           
                                    style={postcodeComponent}    
                                    id="postcodeComponent"                     
                                    onComplete={onCompletePostcode}
                                /> 
                            </div>
                        </div>
                    </div>
                )
            }
                
              
        </div>
    );
};