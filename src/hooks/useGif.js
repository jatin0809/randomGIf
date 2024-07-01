
import { useState,useEffect } from "react";
import axios from "axios";

const API_KEY = 'ag19EREjtZSwE9LIevAwFJ8x9HEIplkl';



const useGif = (tag) =>{


    const [gif, setGIf] = useState('');
    const [loading, setLoading] = useState('false'); 

    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    

    async function fetchData(tag) {
            setLoading(true);
            const {data} = await axios.get(tag ? tagMemeUrl : randomMemeUrl);
            const imageSoucre = data.data.images.downsized_large.url;
            setGIf(imageSoucre);
            setLoading(false);
    }

    useEffect( ()=>{
        fetchData('car');
    },[])


    return{gif,loading,fetchData}
}

export default useGif;