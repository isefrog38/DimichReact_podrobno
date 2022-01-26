import React from 'react';

export type AccordionPropsType = {
    titleValue: string
    setCollapsed: (collapsed: boolean) => void
    /**
     * Commentarij { / / * * enter}
     */
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    return (
    <>
        <AccordionTitle title={props.titleValue} setCollapsed={() => props.setCollapsed(!props.collapsed)} />
        {!props.collapsed && <AccordionBody/>}
    </>
    );
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={ props.setCollapsed }>
        ---{props.title}---
    </h3>)
}

function AccordionBody() {
    return (
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, nulla.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quam.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, tenetur?</li>
        </ul>
    )
}