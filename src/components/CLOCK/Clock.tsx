import React, {FC, memo, useEffect, useState} from 'react';
import {AnalogClock} from "./AnalogClock";
import {DigitalClock} from "./DigitalClock";

type MainClockPropsType = {
    changeMode: 'analog' | 'digital'
}

export const ClocksComponent: FC<MainClockPropsType> = memo(({changeMode}) => {
        let [date, setDate] = useState<Date>(new Date());

        useEffect(() => {
            const goTime = setInterval(() => {
                console.log('tick')
                setDate(new Date())
            }, 1000)

            return () => {
                clearInterval(goTime)
            }
        },[])

        return (
            <div style={{width: "100%"}}>
                { changeMode === 'analog'
                    ? <AnalogClock date={date} />
                    : <DigitalClock date={date} />
                }
            </div>
        );

    })
;
