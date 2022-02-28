import React, {useCallback, useMemo, useState} from "react";


export const Users = React.memo((props: { users: Array<string> }) => {
    console.log("Users")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
})


export const LikeUseCallBack = () => {
    console.log("Helper")
    const [counter, setCounter] = useState<number>(0)
    const [books, setBooks] = useState<Array<string>>(["CSS", "HTML", "TypeScript"])

    const memoaziedAddBooks = useMemo(() => {
        return () => {
            const newUsers = [...books, 'React' + new Date().getTime()];
            setBooks(newUsers)
        }
    }, [books]);

    const memoaziedAddBooks2 = useCallback(() => {
        const newUsers = [...books, 'React' + new Date().getTime()];
        setBooks(newUsers)
    }, [books]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}

        <Books books={books} addBooks={memoaziedAddBooks2}/>
    </>
};


export const Books = React.memo((props: { books: Array<string> , addBooks: () => void}) => {
    console.log("BOOOOOOKS")
    return <div>
        <button onClick={props.addBooks}>add book</button>
        {props.books.map((u, i) => <div key={i}>{u}</div>)}
    </div>
})