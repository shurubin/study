
// 2. 리액트 컴포넌트 생성(클래스 객체) 명명(네이밍)규칙 파스칼 케이스 기법
function WrapComponent(props){

    // 상태관리 훅(Hook) React.useState() 사용하면 프롭스 변경 사용 가능 (세터)
    // const [state, setState] = React.useState(props);

    // console.log (state.이름);
    // console.log (state.구분);
    // console.log (state.성별);
    // console.log (state.취미);
    // setState({
    //     ...state,
    //     이름: '안중근'
    // })



    return(
        <div id="wrap" >
            <SkipComponent 성별={props.성별}/>
            <HeaderComponent 성별={props.성별} 취미={props.취미}/>
            <MainComponent props={props}/>
            <FooterComponent 구분={props.구분}/>
            <GotopComponent/>
            <h1>이름 : {props.이름}</h1>
            <h1>구분 : {props.구분}</h1>
        </div>
    )
}
// 랩퍼컴포넌트 프롭스(객체 속성 변수) 설정하기
// 프롭스(변수인데 객체를 사용하기 때문에 속성(프로퍼티스 properties)는 
// 부모컴포넌트(상위컴포넌트 조상)부터
// 자식컴포넌트(하위컴포넌트 자손)에게 전달목적으로 생성 사용된다.
// 프롭스는 변경할 수 없다.
// WrapComponent.기본프롭스 = {}
WrapComponent.defaultProps = {
    이름: '유관순',
    구분: '독립운동가',
    성별: '여성',
    취미: '독서'
}



    // 4. 스킵컴포넌트 생성
    function SkipComponent({성별}){
        return(
            <ul id="skip">
                <h1>SkipComponent 컴포넌트입니다.</h1>
                <h2>SkipComponent 프롭스 성별입니다.{성별}</h2>
            </ul>
        )

    }


    // 5. 헤더컴포넌트 생성
    function HeaderComponent({성별, 취미}){
        return(
            <header id="header">
                <h1>HeaderComponent 컴포넌트입니다.</h1>
                <h2>성별 프롭스입니다.{성별}</h2>
                <h2>취미 프롭스입니다.{취미}</h2>
            </header>
        )

    }

    // 6. 메인컴포넌트 생성
    function MainComponent({props}){
        const{이름, 구분, 성별, 취미} = props;
        console.log(props);
        
        // const props = {
        //     props: {
        //         이름:'',
        //         구분:'',
        //         성별:'',
        //         취미:'',
        //     }
        // }


        return(
            <main id="main">
                <h1>메인 컴포넌트 프롭스 속성 이름 {props.이름}</h1>
                <h1>메인 컴포넌트 프롭스 속성 이름 {props.구분}</h1>
                <h1>메인 컴포넌트 프롭스 속성 이름 {props.성별}</h1>
                <h1>메인 컴포넌트 프롭스 속성 이름 {props.취미}</h1>
                <br />
                <hr />
                <br />
                <h1>메인 컴포넌트 프롭스 속성 이름 {이름}</h1>
                <h1>메인 컴포넌트 프롭스 속성 이름 {구분}</h1>
                <h1>메인 컴포넌트 프롭스 속성 이름 {성별}</h1>
                <h1>메인 컴포넌트 프롭스 속성 이름 {취미}</h1>
                <Section1Component/>
                <Section2Component/>
                <Section3Component/>
            </main>
        )
    }
        // 6-1 섹션1 컴포넌트
        function Section1Component(){
            return(
                <section id="section1">
                    <h1>section1Component 컴포넌트</h1>
                    <Article1Component/>
                    <Article2Component/>
                </section>
            )
        }
        function Article1Component(){
            return(
                <article id="article1">
                    <h1>Article1Component</h1>
                </article>
            )
        }
        function Article2Component(){
            return(
                <article id="article1">
                    <h1>Article2Component</h1>
                </article>
            )
        }

        // 6-2 섹션2 컴포넌트
        function Section2Component(){
            return(
                <section id="section2">
                    <h1>section2Component 컴포넌트</h1>
                </section>
            )
        }
        // 6-3 섹션3 컴포넌트
        function Section3Component(){
            return(
                <section id="section3">
                    <h1>section3Component 컴포넌트</h1>
                </section>
            )
        }

    // 7. 푸터 컴포넌트 생성
    function FooterComponent(props){
        return(
            <footer id="footer">
                <h1>FooterComponent 컴포넌트</h1>
                <h2>푸터컴포넌트 프롭스 {props.구분}</h2>
            </footer>
        )
    }

    // 8. 고탑 컴포넌트생성
    function GotopComponent(){
        return(
            <div id="goTop">
                <h1>GotopComponent 컴포넌트</h1>
            </div>
        )
    }
    


// 1. 리액트 돔(ReactDOM)이 리액트 & html DOM 컨테이너(id : root) 연결
ReactDOM.render(
    // 3. 리액트 컴포넌트와 돔 컨테이너 연결 => 컴포넌트이름 복사해서 가상태그를 만든다.
    <WrapComponent/>,
    document.getElementById('root')
);
