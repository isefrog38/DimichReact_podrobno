import React, {useState, useEffect} from 'react';


export const UseEffect = () => {
    console.log("Main Component")
    let [counter, setCounter] = useState<number>(1)
    let [fake, setFake] = useState<number>(1)

    useEffect(() => {
        setTimeout(() => {
            return counter + 1
        }, 1000)
    })

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setCounter(counter + 1)}>counter</button>
            <button onClick={() => setFake( fake + 1)}>fake</button>
            {counter}
        </>
    );
};