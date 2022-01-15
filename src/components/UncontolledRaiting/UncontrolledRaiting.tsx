import React, {useState} from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function UncontrolledRaiting({value}: RatingPropsType) {

    let [none , setNumber] = useState( 0)

    return (
        <div>
            <Star selected={value > none}/> <button onClick={() => {setNumber(1)}}>1</button>
            <Star selected={value > none}/> <button onClick={() => {setNumber(2)}}>2</button>
            <Star selected={value > none}/> <button onClick={() => {setNumber(3)}}>3</button>
            <Star selected={value > none}/> <button onClick={() => {setNumber(4)}}>4</button>
            <Star selected={value > none}/> <button onClick={() => {setNumber(5)}}>5</button>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    if (props.selected) {
        return <span><b>star</b>  </span>
    }
    return <span>star  </span>
}

export default UncontrolledRaiting;