import React from 'react';
import './scss/cart.scss';
import './scss/comfirm_modal2.scss';
// 사용자 컨텍스트
import { GlobalContext } from '../../context/GlobalContext';

export default function CartComponent({confirmModalOpen}) {

    // 유즈 컨텍스트
    const {CARTPRODUCTKEY, VIEWPRODUCTKEY, openPopupDaumPostApi, addr} = React.useContext(GlobalContext);

    const [isDelete, setIsDelete] = React.useState(false);
    const [delcode, setDelcode] = React.useState('');
    const [isConfirm, setIsConfirm] = React.useState(false);
    const [isLogin, setLogin] = React.useState(false); // 로그인상태 true, 로그인 안한 상태 false
    const [cart, setCart] = React.useState([]); 
    const [arr1, setArr1] = React.useState([]); 
    const [arr2, setArr2] = React.useState([]); 
    const [arr3, setArr3] = React.useState([]); 

    // 모두선택 부울 변수
    const [isCheckAll, setIsCheckAll] = React.useState(false);  // 
    const [isSelectDel, setIsSelectDel] = React.useState(false);    // 선택삭제 불 변수

    // 모두선택 배열 => 장바구니에 들어온 모든 리스트 목록 저장
    const [checkAll, setCheckAll] = React.useState([]);
    const [check, setCheck] = React.useState([]);

    // 장바구니 목록 리스트 슬라이드 아코디언 효과
    const ddRef = React.useRef([]);
    const [listH, setListH] = React.useState([0,0,0]);
    const [isUp, setIsUp] = React.useState([true, true, true]);

    React.useEffect(()=>{
        setIsCheckAll(true);
        setCheck(checkAll); // 제품코드 모두 저장
    },[checkAll]);

    const onClickSlideUpDonw=(e, n)=>{
        e.preventDefault();

        if(isUp[n]===true){
            ddRef.current[n].style.height = '60px';
            isUp[n]=false;
        }
        else{
            ddRef.current[n].style.height = 'auto';
            isUp[n]=true;
        }
        setIsUp([...isUp]);

    }



    // 체크박스 이벤트 구현



    // 선택삭제
    const onClickSelectDelete=(e)=>{
        e.preventDefault();
        setIsConfirm(true);
    }


    // 체크 all
    const onClickCheckAll=(e)=>{
        e.preventDefault();

        if(isCheckAll===false){ //모두 체크 선택
            setIsCheckAll(true);
            setCheck(checkAll);
        }
        else{
            setIsCheckAll(false);
            setCheck([]);
        }
    }

    // 개별 체크
    const onChangeCheck=(e)=>{      
        let imsi = [];

        if(e.target.checked===true){           
            setCheck([...check, e.target.value]);
        }
        else{   // 선택취소 삭제
            imsi =check.filter((item)=>item!==e.target.value); // 제품코드 값만 들어있다. 
            setCheck(imsi);
        }


      
    }

    React.useEffect(()=>{
        // 전체 선택 체크
        if(check.length===cart.length){
            setIsCheckAll(true);
        }
        else{
            setIsCheckAll(false);
        }

        // 선택 삭제 버튼 true, false
        if(check.length > 0){
            setIsSelectDel(true);
        }
        else{
            setIsSelectDel(false);
        }

    },[cart.length, check]);

        // 장바구니의 오측 금액 표기 집계(피벗테이블) 상태변수
        const [state, setState] = React.useState({
            총상품금액: 0,        // 누계금액
            상품할인금액: 0,    // 누계금액
            배송비: 0,          // 결정금액
            결제예정금액: 0     // 결정금액
        });

    const {총상품금액, 상품할인금액, 배송비, 결제예정금액} = state;

    // 수량 감소 카운트 => 1행 데이터 레코드
    const onClickSUB=(e, record)=>{
        e.preventDefault();
        console.log(record);
        // 수량감소 : 결과를 리턴받는다
        // 현재 각 행마다 구분하는 제품코드(Primary key)
        // 비교문 다음 해당하지 않는 데이터는 그대로의 값으로 리턴한다 false
        // 해당하는 제품은 수량수정, 금액수정
        // 배열[
        //    {제품코드:PRODUCT0001...수량:10, 총},
        //    {제품코드:PRODUCT0002...수량:3, 총}
        // ]
        const result = cart.map((item)=>{
            return(
                item.제품코드===record.제품코드 ? ({...item, 수량: (item.수량 >=2 ? item.수량-1 : 1), 총상품금액: Math.round((item.수량 >=2 ? item.수량-1 : 1)*(item.정가*(1-item.할인율))) }) : ({...item})
            )
        });

        // 리턴받는 결과 데이터를 cart 배열에 저장한다.
        setCart(result);
        // 리턴받는 결과 데이터를 로컬스토레이지에 저장한다.
        localStorage.setItem('CARTPRODUCTKEY', JSON.stringify(result));

    }

    // 개수 증가 함수
    const onClickADD=(e, record)=>{
        e.preventDefault();
        console.log(record);
        const result = cart.map((item)=>{
            return(
                item.제품코드===record.제품코드 ? ({...item, 수량: (item.수량+1), 총상품금액: Math.round((item.수량+1)*(item.정가*(1-item.할인율))) }) : ({...item})
            )
        });

        // 리턴받는 결과 데이터를 cart 배열에 저장한다.
        setCart(result);
        // 리턴받는 결과 데이터를 로컬스토레이지에 저장한다.
        localStorage.setItem('CARTPRODUCTKEY', JSON.stringify(result));

    }

    // 장바구니 제품삭제
    const onClickDel=(e, record)=>{
        e.preventDefault();

        setIsDelete(true);        
        setDelcode(record.제품코드);    //삭제 상태관리변수
    }

    React.useEffect(()=>{
        isDelete && setIsConfirm(true); //모달창 취소 & 확인버튼
    },[delcode, isDelete]);    // 삭제 상태관리변수가 변경되면 모달창을 띄운다



    // 삭제 모달창 취소&확인 버튼 클릭이벤트 구현
    const onClickConfirmModalClose=(e, value)=>{
        e.preventDefault();
        let result='';

        if(value==='확인'){
                                    //check['a',' c']   cart['a', 'b', 'c', 'd', 'e']
            if(isSelectDel===true){ // 선택삭제 : 선택삭제목록을 제외한 내용 재편집
                result = cart.filter((item)=> !check.includes(item.제품코드))
            }
            else{   // 목록 개별삭제
                result = cart.filter((item)=>item.제품코드!==delcode);
            }
            
            setCart( result );
    
            localStorage.setItem('CARTPRODUCTKEY', JSON.stringify(result));
            // 초기 init
            initFnMethod();
        }
        setDelcode(''); // 제품코드 상태변수 삭제
        setIsConfirm(false);    // 초기화
        setIsDelete(false);     // 초기화
        // 선택삭제 후 배열 비운다
        setCheck([]);

    }


    //1. 냉장
    const res1 = cart.map((item, idx)=>{

        if(item.보관방법==='냉장'){
            return(
                <dd key={idx}>
                    <ul>
                        <li>
                            <input onChange={onChangeCheck} checked={check.includes(item.제품코드)===true? true: false} type="checkbox" name='chk' id='chk1' value={item.제품코드} />  
                        </li>
                        <li>
                            <span className='cart-small-bgimg  blind' style={{backgroundImage: `url(${item.이미지})`}}>Cart Small Image</span>
                        </li>
                        <li>
                            <a href="!#">{item.제품명}</a>
                        </li>
                        <li>
                            <div>
                                <button onClick={(e)=>onClickSUB(e, item)} className={`sub-bgimg-btn blind${item.수량===1?' on':''}`}>빼기</button>
                                <strong>{item.수량}</strong>
                                <button onClick={(e)=>onClickADD(e, item)} className='add-bgimg-btn blind'>더하기</button>
                            </div>
                        </li>
                        <li>
                            <span>{item.총상품금액}원</span>    
                        </li>
                        <li>
                            <a onClick={(e)=>onClickDel(e,item)} href="!#" className='del-bgimg-btn blind'>삭제버튼</a>
                        </li>
                    </ul>
                </dd>
            )
        }
        
    })

    //2. 냉동
    const res2 = cart.map((item, idx)=>{
        if(item.보관방법==='냉동'){
            return(
                <dd key={idx} >
                    <ul>
                        <li>
                            <input onChange={onChangeCheck} checked={check.includes(item.제품코드)} type="checkbox" name='chk' id='chk1' value={item.제품코드} />  
                        </li>
                        <li>
                            <span className='cart-small-bgimg  blind' style={{backgroundImage: `url(${item.이미지})`}}>Cart Small Image</span>
                        </li>
                        <li>
                            <a href="!#">{item.제품명}</a>
                        </li>
                        <li>
                            <div>
                                <button onClick={(e)=>onClickSUB(e, item)} className={`sub-bgimg-btn blind${item.수량===1?' on':''}`}>빼기</button>
                                <strong>{item.수량}</strong>
                                <button onClick={(e)=>onClickADD(e, item)} className='add-bgimg-btn blind'>더하기</button>
                            </div>
                        </li>
                        <li>
                            <span>{item.총상품금액}원</span>    
                        </li>
                        <li>
                            <a onClick={(e)=>onClickDel(e,item)} href="!#" className='del-bgimg-btn blind'>삭제버튼</a>
                        </li>
                    </ul>
                </dd>
            )
        }
    })

    //3. 상온
    const res3 = cart.map((item, idx)=>{
        if(item.보관방법==='상온'){
            return(
                <dd key={idx} >
                    <ul>
                        <li>
                            <input onChange={onChangeCheck} checked={check.includes(item.제품코드)} type="checkbox" name='chk' id='chk1' value={item.제품코드} />  
                        </li>
                        <li>
                            <span className='cart-small-bgimg  blind' style={{backgroundImage: `url(${item.이미지})` }}></span>
                        </li>
                        <li>
                            <a href="!#">{item.제품명}</a>
                        </li>
                        <li>
                            <div>
                                <button onClick={(e)=>onClickSUB(e, item)} className={`sub-bgimg-btn blind${item.수량===1?' on':''}`}>빼기</button>
                                <strong>{item.수량}</strong>
                                <button onClick={(e)=>onClickADD(e, item)} className='add-bgimg-btn blind'>더하기</button>
                            </div>
                        </li>
                        <li>
                            <span>{item.총상품금액}원</span>    
                        </li>
                        <li>
                            <a onClick={(e)=>onClickDel(e,item)} href="!#" className='del-bgimg-btn blind'>삭제버튼</a>
                        </li>
                    </ul>
                </dd>
            )
        }
    })



    // 장바구니(CART) 가져오기

    const initFnMethod=()=>{
        if( localStorage.getItem('CARTPRODUCTKEY')!==null ){
            let result = JSON.parse(localStorage.getItem('CARTPRODUCTKEY'));

            // 정렬 : 보관방법 오름차순 ASC
            result.sort((a,b)=>{
                if( a.보관방법 > b.보관방법 ) return  1;
                if( a.보관방법 < b.보관방법 ) return -1;
                if(a.보관방법 === b.보관방법) return  0;
            });

            setCart(result);

            let arr1 = [];
            let arr2 = [];
            let arr3 = [];

            // console.log(result);
            // 임시 배열에 저장
            let imsi = [];
            result.map((item, idx)=>{
                imsi = [...imsi, item.제품코드];
                if(item.보관방법 === '냉장'){
                    arr1 = [...arr1, item];
                }
                else if(item.보관방법 === '냉동'){
                    arr2 = [...arr2, item];
                }
                else if(item.보관방법 === '상온'){
                    arr3 = [...arr3, item];
                }
                
            });

            // 장바구니에 있는 모든 리스트 목록저장 
            // 임시배열변수에 저장된 배열값을 모두 checkAll[] 저장한다.
            setCheckAll(imsi);

            // console.log(arr1);
            // console.log(arr2);
            // console.log(arr3);

            setArr1(arr1);
            setArr2(arr2);
            setArr3(arr3);

        }
        
    }

    React.useEffect(()=>{
        initFnMethod();
    },[]);

    
    // 카트가 들어오면 계산
    React.useEffect(()=>{
        let 총상품금액 = 0;
        let 상품할인금액 = 0;
        let 배송비 = 0;
        let 결제예정금액 = 0;

        cart.map((item, idx)=>{
            if(item.수량!==undefined && item.총상품금액!==undefined){
                총상품금액 += Number(item.총상품금액);
                상품할인금액 += Math.round(Number(item.정가)*Number(item.할인율));
                배송비 = ((총상품금액-상품할인금액) < 40000 ? 3000 : 0);
                결제예정금액 = (총상품금액-상품할인금액)+배송비;

            }
        });

        setState({
            총상품금액: 총상품금액,
            상품할인금액: 상품할인금액,
            배송비: 배송비,
            결제예정금액: 결제예정금액
        })

    },[cart]);






    return (

        <>
            <div id='cart'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h1>장바구니</h1>
                        </div>
                        <div className="content">
                            <div className="left">
                                <ul>
                                    <li>    {/* 위쪽 전체선택 삭제 */}
                                        <span>
                                            <button onClick={onClickCheckAll} checked={check.length===cart.length?true:false} className={`select-all-btn${isCheckAll? ' on':''}`}>
                                                전체선택
                                                <strong>
                                                    (
                                                        <em className='select-count'>{3}</em> 
                                                        <i>/</i> 
                                                        <em className='cart-tot'>{5}</em>
                                                    )
                                                </strong>
                                            </button>
                                            <i>|</i>
                                            <button onClick={onClickSelectDelete} disabled={!isSelectDel} className={`delete-btn${isSelectDel?' on':''}`}>
                                                선택삭제
                                            </button>
                                        </span>

                                    </li>
                                    <li>    {/* 중간 전체선택 삭제 */}

                                        {
                                            cart.length===0 ? 
                                            (<p className='empty-box'>장바구니에 담긴 상품이 없습니다.</p>)
                                            :
                                            (
                                                <>
                                                    {/* 장바구니 상품 목록 시작 */}

                                                    {
                                                        arr1.length >=1 && (
                                                            <div className='acodian' ref={(el)=>(ddRef.current[0]=el)}>
                                                                <dl>
                                                                    <dt>
                                                                        <div><img src="./images/cart/icon_01.svg" alt="" /><h3>냉장 상품</h3></div>
                                                                        <div><button onClick={(e)=>onClickSlideUpDonw(e,0)}><img className={isUp[0]? '':'on'} src="./images/cart/icon_arrow_up.svg" alt="" /></button></div>
                                                                    </dt>
                                                                    {res1}
                                                                </dl>

                                                            </div>
                                                        )
                                                    }

                                                    {
                                                        arr2.length >=1 && (
                                                           
                                                            <div className='acodian' ref={(el)=>(ddRef.current[1]=el)}>
                                                                <dl>
                                                                    <dt>
                                                                        <div><img src="./images/cart/icon_02.svg" alt="" /><h3>냉동 상품</h3></div>
                                                                        <div><button onClick={(e)=>onClickSlideUpDonw(e,1)}><img className={isUp[1]? '':'on'} src="./images/cart/icon_arrow_up.svg" alt="" /></button></div>
                                                                    </dt>
                                                                    {res2}
                                                                </dl>
                                                            </div>
                                                            
                                                        )
                                                    }

                                                    {
                                                        arr3.length >=1 &&(
                                                            <div className='acodian' ref={(el)=>(ddRef.current[2]=el)}>
                                                                <dl>
                                                                    <dt>
                                                                        <div><img src="./images/cart/icon_03.svg" alt="" /><h3>상온 상품</h3></div>
                                                                        <div><button onClick={(e)=>onClickSlideUpDonw(e,2)}><img className={isUp[2]? '':'on'} src="./images/cart/icon_arrow_up.svg" alt="" /></button></div>
                                                                    </dt>
                                                                    {res3}
                                                                </dl>
                                                            </div>
                                                          
                                                        )
                                                    }

                                                 
                                                    {/* 상품 목록 반복문 끝 */}
                                                </>  
                                                
                                            )
                                        } 

                                    </li>
                                    <li>    {/* 아래쪽 전체 선택 삭제 */}
                                        <span>
                                        <button onClick={onClickCheckAll} className={`select-all-btn${isCheckAll? ' on':''}`}> {/* select-btn */}
                                                전체선택
                                                <strong>
                                                    <em className='select-count'>3</em>  
                                                    <em className='cart-tot'>5</em>
                                                </strong>
                                            </button>
                                                <i>|</i>
                                            <button onClick={onClickSelectDelete} disabled={!isSelectDel} className={`delete-btn${isSelectDel?' on':''}`}>
                                                선택삭제
                                            </button>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="right">
                                <ul>
                                    <li>
                                        <h3>
                                            <img src="./images/cart/icon_94.svg" alt="" />
                                            배송지
                                        </h3>
                                        <p>
                                            {
                                                addr.isAddr===true ?
                                                (
                                                    `${addr.주소1} ${addr.주소2}`

                                                )
                                                :
                                                (
                                                    <>
                                                        <em>배송지를 등록</em> 하고<br/>
                                                        구매 가능한 상품을 확인하세요!
                                                    </>
                                                )
                                            }
                                        </p>
                                        <button onClick={openPopupDaumPostApi}>
                                            
                                            {
                                                addr.isAddr===true ?
                                                (
                                                    '배송지변경'
                                                )
                                                :
                                                (
                                                    <><img src="./images/cart/icon_zoom.svg" alt="" />주소 검색</>                                                    
                                                )
                                                
                                            }
                                            
                                        </button>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="row1">
                                                <p><strong>상품금액</strong><strong>{Number(총상품금액).toLocaleString('ko-KR')}원</strong></p>
                                                <p>
                                                    <strong>상품할인금액</strong><strong>{isLogin===true?(Number(상품할인금액)>0? `-${Number(상품할인금액).toLocaleString('ko-KR')}`: 0) : 0 }원</strong>
                                                    {isLogin === true? '': <span>로그인 후 할인 금액 적용</span>}
                                                </p>
                                                <p><strong>배송비</strong><strong>{배송비 > 0 ? `+${(배송비).toLocaleString('ko-KR')}` : 0}원</strong></p>       
                                                {Number(총상품금액) < 40000 && <p>{(40000-(Number(총상품금액)-Number(상품할인금액))).toLocaleString('ko-Kr')}원 추가주문 시, <em>무료배송</em></p>}                                     
                                            </div>
                                            <div className="row2">
                                                <p><strong>결제예정금액</strong><strong>{(결제예정금액).toLocaleString('ko-KR')}원</strong></p>
                                                <p><strong><em>적립</em>로그인 후 회원 등급에 따라 적립</strong></p>
                                            </div>
                                        </div>                                        
                                    </li>
                                    <li>
                                        <button>배송지를 입력해주세요</button>    
                                        <p>
                                            [주문완료] 상태일 경우에만 주문 취소 가능합니다.<br/> 
                                            [마이컬리 &gt; 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                isConfirm && (
                <div id="confirmModal2">
                    <div className="wrap2">
                        <div className="container">
                            <div className="content">
                                <div className="title-box">
                                    <h1>삭제하시겠습니까?</h1>
                                </div>
                                <div className="button-box">
                                    <button onClick={(e)=>onClickConfirmModalClose(e, "취소")}>취소</button>
                                    <button onClick={(e)=>onClickConfirmModalClose(e, "확인")}>확인</button>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                )
            }
        </>

    );
};