import React, {FC} from 'react';
import "./Styles.css";

type ClockPropsType = {
    date: Date
}

export const AnalogClock: FC<ClockPropsType> = ({date}) => {

    let hours = date.getHours(),
        minute = date.getMinutes(),
        seconds = date.getSeconds();

    const secondsStyle = {
        transform: `rotate(${seconds * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${minute * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${hours * 30}deg)`
    };

    return (
        <div className="clock">
            <div className="hour_hand" style={hoursStyle}/>
            <div className="min_hand" style={minutesStyle} />
            <div className="sec_hand" style={secondsStyle} />
            <span className="twelve">12</span>
            <span className="one">1</span>
            <span className="two">2</span>
            <span className="three">3</span>
            <span className="four">4</span>
            <span className="five">5</span>
            <span className="six">6</span>
            <span className="seven">7</span>
            <span className="eight">8</span>
            <span className="nine">9</span>
            <span className="ten">10</span>
            <span className="eleven">11</span>
        </div>

        // first variant analog clock
        /*<div className={"clock"}>
            <div className={"analog-clock"}>
                <div className={"dial seconds"} style={secondsStyle} />
                <div className={"dial minutes"} style={minutesStyle} />
                <div className={"dial hours"} style={hoursStyle} />
            </div>
        </div>*/
    );
};
