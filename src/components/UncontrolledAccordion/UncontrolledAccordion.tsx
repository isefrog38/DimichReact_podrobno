import React, {useReducer} from 'react';
import {ACCORDION, reducer} from "../reducer";

type AccordionPropsType = {
    titleValue: string,
    // collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    let [state , dispatch] = useReducer(reducer, {collapsed: true});

    return (
        <>
            <AccordionTitle title={props.titleValue} setNewState={() => { dispatch({type: ACCORDION}) }}/>
            {!state.collapsed && <AccordionBody/>}
        </>
    );
}

type AccordionTitlePropsType = {
    /*title: string
    on: boolean
    setNewState: (on: boolean) => void*/

    //Альтернативные пропсы
    title: string
    setNewState: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {props.setNewState()}}>
        {/*<h3 onClick={() => {props.setNewState(props.on)}}>*/}
        ---{props.title}---
    </h3>)
}

function AccordionBody() {
    return (
        <ul>
            <li>--1--</li>
            <li>--2--</li>
            <li>--3--</li>
        </ul>
    )
}


