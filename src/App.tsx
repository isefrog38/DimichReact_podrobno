import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Raiting/Raiting";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontolledRaiting/UncontrolledRaiting";
import {OnOff} from "./components/OnOff/OnOff";


function App() {

    let [ratingState , setRatingState] = useState<RatingValueType>(2);
    let [on, setOn] = useState<boolean>(false);
    let [collapsed, setCollapsed] = useState<boolean>(true);

    return (
        <div className={'app'}>
            <PageTitle title={'Buttons'}/>
            <hr/>
            <Rating value={ratingState} onClickStar={setRatingState}/>
            <hr/>
            <UncontrolledOnOff setOn={setOn}/>
            <UncontrolledOnOff setOn={setOn}/>
            <hr/>
            <OnOff onClickButton={setOn} on={on}/>
            <OnOff onClickButton={setOn} on={on}/>
            <hr/>
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            <hr/>
            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />
            <hr/>
            <Accordion titleValue={"Menu"} collapsed={collapsed} setCollapsed={ setCollapsed } />
            <Accordion titleValue={"Users"} collapsed={collapsed} setCollapsed={ setCollapsed } />
            <hr/>
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (<h1>{props.title}</h1>);
}


export default App;