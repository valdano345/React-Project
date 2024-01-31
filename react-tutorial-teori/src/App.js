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

    const [nama, setNama] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault(); //sebelum logic atau initiate di onSubmit harus e.preventDefault agar tidak tereload page nya
        console.log(nama);

    }
    const handleChange = (e) =>{
        setNama(e.target.value)
        // console.log(nama);
    }

    return(
        <div>
            {/* <button onClick={decrementCounter}>
                -
            </button>
            <div>{counter}</div>
            <button onClick={incrementCounter}>+</button>
            <div className={`${counter % 2 === 0 ? 'red' : 'blue'} `}>{counter > 10 || <div>Perfect</div>}
            </div> */}


            <form onSubmit={handleSubmit} action="">
                <label htmlFor="">Nama</label>
                <input type="text" onChange={handleChange} value={nama} />
            </form>
        </div>
    )
}

export default App