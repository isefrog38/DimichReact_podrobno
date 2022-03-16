import React, {useEffect, useState} from 'react';
import "./Styles.css";

export const Clock = React.memo((props: any) => {

        let [date, setDate] = useState<Date>(new Date());

        let hours = date.getHours(),
            minute = date.getMinutes(),
            seconds = date.getSeconds();

        useEffect(() => {

            const intervalId = setInterval(() => {
                setDate(new Date())
            }, 1000)

            return () => {
                clearInterval(intervalId)
            }
        },[])


        return (
            <div className={"MainDiv"}>
                <div>
                    <div>
                        {/*<h1>{`${new Date().toLocaleDateString()}`}</h1>*/}
                        <h1 style={{marginLeft: "7px"}}>
                            {`
                              ${hours < 10 ? "0" + hours : hours}
                            : ${minute < 10 ? "0" + minute : minute}
                            : ${seconds < 10 ? "0" + seconds : seconds}
                            `}
                        </h1>
                    </div>
                </div>
            </div>
        );

    })
;
