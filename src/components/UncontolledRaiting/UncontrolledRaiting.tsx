import React, {useState} from "react";
import {RatingValueType} from "../Raiting/Raiting";

type RatingPropsType = {
    defaultValue?: RatingValueType
}

export const UncontrolledRating = (props:RatingPropsType) => {

    let [starState , setStarState] = useState<RatingValueType>( props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={starState >= 1} setStarState={ () => { setStarState(1) } } />
            <Star selected={starState >= 2} setStarState={ () => { setStarState(2) } } />
            <Star selected={starState >= 3} setStarState={ () => { setStarState(3) } } />
            <Star selected={starState >= 4} setStarState={ () => { setStarState(4) } } />
            <Star selected={starState >= 5} setStarState={ () => { setStarState(5) } } />
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    setStarState: () => void
}


function Star (props: StarPropsType) {
    return (
    <span onClick={ () => props.setStarState()}>
        {props.selected ? <b>star </b> : "star " }
    </span>
    );
}
