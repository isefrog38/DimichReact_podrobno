import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string,
    // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {

    let [on , setNewState] = useState(true);

    return (
        <>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={ () => { setNewState(!on) } }>
                {` ${ on ? "Down" : "Up" } `}
            </button>
            {!on && <AccordionBody/>}
        </>
    );
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (<h3>{props.title}</h3>)
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default UncontrolledAccordion;