import React, {useState, useEffect, useDebugValue} from 'react'
import youtube from './api/youtube';



const UseVideo = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);
    useDebugValue(defaultSearchTerm);
    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm])

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
            }
        });
        setVideos(response.data.items);
    }
    return [videos, search]
}

export default UseVideo