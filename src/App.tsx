import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Raiting/Raiting";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRaiting from "./components/UncontolledRaiting/UncontrolledRaiting";

function App() {
    return (
        <>
            <OnOff />
            <OnOff />
            <OnOff />

            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            <UncontrolledRaiting value={2} />
            <UncontrolledRaiting value={3} />
            <UncontrolledRaiting value={5} />
            {/*<PageTitle title={"This is APP component"}/>
            <PageTitle title={"This is dubl 2"}/>
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
        </>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (<h1>{props.title}</h1>);
}


export default App;