import React, { useState } from "react";
import Spinner from './Spinner';
import useGif from "../hooks/useGif";

const Tag = ()=>{




    const [tag, setTag] = useState('Car');
    const {gif,loading,fetchData} = useGif(tag);


    return(
        <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="text-2xl uppercase underline font-bold mt-[15px]">RANDOM {tag} GIF</h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} width="450px" alt="loading...."/>)
            }

            <input className="w-10/12 bg-white text-lg py-2 rounded-lg mb-[3px] text-center"
               onChange={(e)=>setTag(e.target.value)}
               value={tag}
            />
            
            <button className="w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]"
             onClick={()=> fetchData(tag)}>
                Generate
            </button>
        </div>
    )
}

export default Tag;