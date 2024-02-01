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

    // const [nama, setNama] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault(); //sebelum logic atau initiate di onSubmit harus e.preventDefault agar tidak tereload page nya
        console.log(data);
        setData(initialState);

    }
    
    const initialState = {
        nama: "",
        hobi: "",
        agama: ""
    }
    const [data, setData] = useState(initialState);
    const {nama, hobi, agama} = data

    const handleChange = (e) =>{
        setData({...data, [e.target.name] : e.target.value})
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
                <input type="text" onChange={handleChange} value={nama} name="nama" />
                <label htmlFor="">Hobi</label>
                <input type="text" onChange={handleChange} value={hobi} name="hobi" />
                <label htmlFor="">Agama</label>
                <input type="text" onChange={handleChange} value={agama} name="agama" />
                <input type="submit" value="Kirim" />
            </form>
        </div>
    )
}

export default App