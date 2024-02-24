import React, {useEffect, memo} from 'react'

const List = ({handler}) => {
    const items = ['ikan', 'ayam', 'sapi', 'kambing', 'om alek'];
    useEffect(() => {
        console.log('child comoponent redred');
    }, [handler]);


    return (
        <>
            {items.map((item, index) => {
                return(
                    <div key={index} onClick={handler}>{item}</div>
                )
            })}
        </>
    )
}

export default memo(List)