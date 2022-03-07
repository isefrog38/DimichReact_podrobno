import React, {useState} from 'react';

function generateData() {
    console.log("generateData")
    return 1
}

export const UseState = () => {

    let [counter, setCounter] = useState<number>(generateData)

    return (
        <>
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            {counter}
        </>
    );
};
