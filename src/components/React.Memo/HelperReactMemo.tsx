import React, {useMemo, useState} from "react";


export const Users = React.memo((props: { users: Array<string> }) => {
    console.log("Users")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
})


export const HelperReactMemo = () => {
    console.log("Helper")
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(["Dima", "Valera", "Artem"])

    const usersArray = useMemo(() => {
        const newArray = users.filter(u => u.toLocaleLowerCase().indexOf("a") > -1);
        return newArray
    }, [users])

    const addUsers = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()];
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUsers()}>add user</button>
        {counter}
        <Users users={usersArray}/>
    </>
};
