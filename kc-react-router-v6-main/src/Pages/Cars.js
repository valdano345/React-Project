import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Cars = () => {
    const {text} = useOutletContext();
    return (
        <>
            <div>Cars</div>
            <div>{text}</div>
        </>
    )
}

export default Cars