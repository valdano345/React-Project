import React from "react";

const Me = (props) => {
    return (
        <div>
            <ul>
                <li>Nama saya adalah {props.nama}</li>
                <li>Hobi saya bermain {props.hobi}</li>
            </ul>
        </div>
    )
}

export default Me;