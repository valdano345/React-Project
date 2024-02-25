import React, {useState} from 'react'

const UseDebugValue = () => {
    const [term, setTerm] = useState(null);
    const [videos, search] useVideos('murrotal');

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(term);
        search(term);
        console.log(videos)
    };


    return (
        <div className="container">
            <form className="content" onSubmit={onSubmit}>
                <input type="text" onChange={(e) => setTerm(e.target.value)} id="simple-search" placeholder="Telusuri" required />
                <input type="submit" value="Cari" />
            </form>
        </div>
        <div>
            {videos.map((video) => {
                return (
                    <div className="content">
                        
                    </div>
                )
            })}
        </div>
    )
}

export default UseDebugValue