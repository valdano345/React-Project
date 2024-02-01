import {React, useState} from "react";
import Me from './components/Perkenalan'
import './App.css'
import CreateFrom from "./components/CreateFrom";

const App = () => {
    const [nama, setNama] = useState('');

    const onCreate = (data) => {
        console.log("Ini console dari parent compononet", data)
        setNama(data.nama)
    }

    return(
        <>
            {nama}
            <CreateFrom onCreate={onCreate} />
        </>
    )
}

export default App