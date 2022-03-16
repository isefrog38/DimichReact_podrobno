import React, {useState} from 'react';
import './App.css';
import {Select} from "./components/Select/Select";
import {Accordion} from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Raiting/Raiting";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontolledRaiting/UncontrolledRaiting";
import {OnOff} from "./components/OnOff/OnOff";
import {Example1} from "./components/React.Memo/ReactMemo";
import {NewMemo} from "./components/React.Memo/NewMemo";
import {LikeUseCallBack} from "./components/React.Memo/UseCallback";
import {Clock} from "./components/CLOCK/Clock";



type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (<h1>{props.title}</h1>);
}

export function App() {

    let [ratingState , setRatingState] = useState<RatingValueType>(2);
    let [on, setOn] = useState<boolean>(false);
    let [value, setValue] = useState<number>(3);
    let [collapsed, setCollapsed] = useState<boolean>(false);
    let array = [{value: 1, title: "Olya"},{value: 2, title: "Pasha"},
        {value: 3, title: "Dimych"}, {value: 4, title: "Oleg"}, {value: 5, title: "Mary"}];

    const onClickCollapsed = () => {
        setCollapsed(!collapsed)
    }
    const onChange = (value: any) => {
        setValue(value)
    }

    return (
        <div className={'app'}>
            <PageTitle title={'Page'}/>
            <Clock />
            <LikeUseCallBack/>
            <NewMemo/>
            <hr/>
            <Example1 />
            <hr/>
            <Select items={array} onClick={onClickCollapsed} value={value} collapsed={collapsed} onChange={onChange}/>
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
            <Accordion titleValue={"Menu"} collapsed={collapsed} setCollapsed={ setCollapsed } items={array} onClick={setOn}/>
            <Accordion titleValue={"Users"} collapsed={collapsed} setCollapsed={ setCollapsed } items={array} onClick={setOn}/>
            <hr/>
        </div>
    )
}