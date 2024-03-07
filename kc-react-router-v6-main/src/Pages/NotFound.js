import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();


    return (
    <>
        <div>Not Found 404</div>
        <button onClick={()=> navigate('/')}>Back to Home</button>
    </>
    )
}

export default NotFound