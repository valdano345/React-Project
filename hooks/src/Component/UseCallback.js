import React, {useCallback, useEffect, useMemo, useState} from 'react'
import List from './List';

const UseCallback = () => {
    const [state, setState] = useState(false);
    const [dep, setDep] = useState(false);
    console.log('Parent Component redered');

    const handler = useCallback(
        (event) => {
            console.log('You Clicked', event.currentTarget);
        },
        [dep]
    );
    const statehanddler = () => {
        setState(!state);
    };
    return (
        <>
            <button onClick={statehanddler}>Change state of parent component</button>
            <List handler={handler} />
            <button onClick={() => setDep(!dep)}>Ganti Depedency</button>
        </>
    )
}

export default UseCallback