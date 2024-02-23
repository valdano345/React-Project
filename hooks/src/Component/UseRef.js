import React, {useState, useRef} from 'react'

const UseRef = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0)

    const handleIncrement = () => {
        // setCount((count) => count + 1);
        countRef.current ++;

        console.log("state : ", count)
        console.log("useRef : ", countRef.current);
    }
    const handleDecrement = () => {
        setCount((count) => count - 1);
    }
    return (
        <div>
            <div className="container">
                <div className="hooks">useRef</div>
                <div className="content">
                <button onClick={handleDecrement}>Decrement</button>
                <div>{countRef.current}</div>
                <button onClick={handleIncrement}>Increment</button>
                </div>
            </div>
        </div>
    )
}

export default UseRef
