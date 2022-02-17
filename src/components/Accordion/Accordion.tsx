import React from 'react';

export type ItemType ={
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
    items: Array<ItemType>
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {

    return (
    <>
        <AccordionTitle title={props.titleValue} setCollapsed={() => props.setCollapsed(!props.collapsed)} />
        {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
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

export type AccordionBodyType = {
    onClick: (value: any) => void
    items: Array<ItemType>
}

function AccordionBody (props: AccordionBodyType) {
    return (
        <ul>
            {props.items.map((i , index)=>
                <li onClick={ () => { props.onClick(i.value) } }
                    key={index}>
                    {i.title}
                </li>) }
        </ul>
    )
}