import React, {useState,useEffect} from 'react'
import Todos from './Todos';

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [])
    const handleIncrement =  () => {
        setCount((previousState) => previousState + 1);
    }
    const handleDecrement = () => {
        setCount2((previousState) => previousState - 1);
    }


    return (
        <div className="container">
            <div className="hooks">UseState</div>
            <div className="content">
                <button onClick={handleDecrement}>Decrement</button>
                <div>{count}</div>
                <div>{count2}</div>
                <button onClick={handleIncrement}>Increment</button>
            </div>
            <div>
                {todos.map(todo => {
                    return <Todos todo = {todo} />
                })}
            </div>
        </div>
    )
}

export default UseEffect