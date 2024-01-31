import {React, useState} from "react";
import Me from './components/Perkenalan'
import './App.css'


const App = () => {
    const [counter, setCounter] = useState(0);

    const decrementCounter = () => {
        setCounter(counter - 1);
    }
    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    return(
        <div>
            <button onClick={decrementCounter}>
                -
            </button>
            <div>{counter}</div>
            <button onClick={incrementCounter}>+</button>
            <div className={`${counter % 2 === 0 ? 'red' : 'blue'} `}>{counter % 2 === 0 ? "genap" : "ganjil"}</div>
        </div>
    )
}

export default App