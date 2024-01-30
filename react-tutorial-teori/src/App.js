import React from "react";
import Me from './components/Perkenalan'

const App = () => {
    const datas = [{nama : "ranggo", hobi: "Catur"}, {nama:"Adi", hobi: "buku",},{nama: "Sutisno", hobi:"Melukis"}];

    

    return (
        <div>
           {datas.map((data, index) => {
                return <Me key={index} nama={data.nama} hobi={data.hobi} />
           })}
        </div>
    )
}

export default App