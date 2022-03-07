import React, {useEffect, useState} from 'react';
import "./Styles.css";

export const Clock = React.memo((props: any) => {

        let [timer, setTimer] = useState<number>(0);
        let [date, setDate] = useState<Date>(new Date());

        let hours = date.getHours(),
            minute = date.getMinutes(),
            seconds = date.getSeconds();

        useEffect(() => {
            const goTime: number = window.setInterval(() => {
                setDate(new Date())
            }, 1000)
            setTimer(goTime)
        }, )


        return (
            <div className={"MainDiv"}>
                <div>
                    <div>
                        <h1>{`${new Date().toLocaleDateString()}`}</h1>
                        <h1 style={{marginLeft: "7px"}}>{`
                      ${hours < 9 ? "0" + hours : hours}
                    : ${minute < 9 ? "0" + minute : minute}
                    : ${seconds < 9 ? "0" + seconds : seconds}
                    `}</h1>
                    </div>
                </div>
            </div>
        );

    })
;
