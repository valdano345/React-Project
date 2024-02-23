import React, {useReducer} from 'react';


function reducer(state, action){
    switch(action.type){
        case ACTION.INCREMENT:
            return {count: state.count + action.paylaod};
        case ACTION.DECREMENT:
            return {count: state.count - 1};
    }
}
const ACTION = {
    INCREMENT : 'increment',
    DECREMENT : 'decrement',
}
    
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    const handleIncrement = () => {
        dispatch({type: ACTION.INCREMENT, paylaod: 20})
    };
    const handleDecrement = () => {
        dispatch({type: ACTION.DECREMENT})
    }
    return (
        <div className="container">
            <div className="hooks">useReducer</div>
            <div className="content">
                <button onClick={handleDecrement}>Decrement</button>
                <div>{state.count}</div>
                <button onClick={handleIncrement}>Increment</button>
            </div>
        </div>
    )
}

export default UseReducer