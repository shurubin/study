import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';


export default function WrapComponent(props){

    const [state, setState]= React.useState(props);
    React.useEffect(()=>{
        // console.log(state.과일);
        // console.log(state.자동차);
        // console.log(state.성적);
    });

    return (
        <div id='wrap'>           
            <HeaderComponent/>
            <MainComponent 성적={state.성적}/>
            <FooterComponent/>
        </div>

    );
};

WrapComponent.defaultProps = {
    과일:['딸기', '복숭아', '바나나', '샤인머스캣', '수박' ],
    자동차:['현대', '기아', 'BMW', '벤츠', '볼보', '아우디'],
    성적:[
        {번호:1,이름: '하나',국어: 100, 영어: 50, 수학: 75},
        {번호:2,이름: '두리',국어: 90, 영어: 100, 수학: 92},
        {번호:3,이름: '석삼이',국어: 45, 영어: 33, 수학: 25},
        {번호:4,이름: '넉사리',국어: 70, 영어: 72, 수학: 66},
        {번호:5,이름: '다리',국어: 88, 영어: 91, 수학: 50}
    ],
    
    스타벅스:[

    ]

};
