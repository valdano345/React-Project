import React, {useState} from 'react'

const UseState = () => {
    function initialState () {
        return 0
    }
    const [count, setCount] = useState(initialState);
    const handleDecrement =  () => {
        setCount(count => count - 1);
    }
    const handleIncrement = () => {
        setCount(count => count + 1);
    }


    return (
        <div className="container">
            <div className="hooks">UseState</div>
            <div className="content">
                <button onClick={handleDecrement}>Decrement</button>
                <div>{count}</div>
                <button onClick={handleIncrement}>Increment</button>
            </div>
        </div>
    )
}

export default UseState