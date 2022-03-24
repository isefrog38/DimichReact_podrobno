import React, {FC} from 'react';
import "./Styles.css";

type ClockPropsType = {
    date: Date
}

export const DigitalClock: FC<ClockPropsType> = ({date}) => {

    let hours = date.getHours(),
        minute = date.getMinutes(),
        seconds = date.getSeconds();

    return (
        <div>
            <div className={"MainDiv"}>
                {/*<h1>{`${date.toLocaleDateString()}`}</h1>*/}
                <h1 style={{marginLeft: "7px"}}>{`
                      ${hours < 10 ? "0" + hours : hours}
                    : ${minute < 10 ? "0" + minute : minute}
                    : ${seconds < 10 ? "0" + seconds : seconds}
                    `}</h1>
            </div>
        </div>
    );
};