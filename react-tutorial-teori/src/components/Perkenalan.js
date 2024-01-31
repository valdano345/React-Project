import React from "react";

const Me = (props) => {
    const handleClick = (nama) => {
        alert(`Klik ${nama}`)
    }
    
    return (
        <div>
            <ul>
                <li>Nama saya adalah {props.nama}</li>
                <li>Hobi saya bermain {props.hobi}</li>
                <button onClick={() => handleClick(props.nama)}>Klick Me!</button>
            </ul>
        </div>
    )
}

export default Me;