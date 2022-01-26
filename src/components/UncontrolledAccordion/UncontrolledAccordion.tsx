import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string,
    // collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")

    let [on , setNewState] = useState(true);

    return (
        <>
             {/*альтернативный вариант*/}
            <AccordionTitle title={props.titleValue} setNewState={ () => {setNewState(!on)} } />
            {/*<AccordionTitle title={props.titleValue} setNewState={setNewState} on={!on} />*/}
            {!on && <AccordionBody/>}
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


