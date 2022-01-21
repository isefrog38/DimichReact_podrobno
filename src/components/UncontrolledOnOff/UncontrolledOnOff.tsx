import React, {useState} from 'react';

type UncontrolledOnOffType = {
    setOn: (on: boolean) => void
}

const UncontrolledOnOff = (props: UncontrolledOnOffType) => {

    let [on, setOn] = useState(false);

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline",
        padding: "2px",
        backgroundColor: on ? "green" : "white",
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red",
    }

    const onClicked = () => {
        setOn(true)
        props.setOn(true)
    }

    const offClicked = () => {
        setOn(false)
        props.setOn(false)
    }

    return (
        <div>
            <div style={onStyle}
                 onClick={ onClicked }>
                On
            </div>
            <div style={offStyle}
                 onClick={ offClicked }>
                Off
            </div>
            <div style={indicatorStyle}/>
        </div>
    );
}

export default UncontrolledOnOff;