import React, {useState, useEffect} from 'react';


export const UseEffect = () => {
    console.log("Main Component")
    let [counter, setCounter] = useState<number>(1)
    let [fake, setFake] = useState<number>(1)

    useEffect(() => {
        console.log(" UseEffect Every render")
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log(" UseEffect only first render (componentDidMount)")
        document.title = counter.toString();
    },[])

    useEffect(() => {
        console.log(" UseEffect first render and every counter change")
        document.title = counter.toString();
    }, [counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setCounter(counter + 1)}>counter</button>
            <button onClick={() => setFake( fake + 1)}>fake</button>
            {counter}
        </>
    );
};