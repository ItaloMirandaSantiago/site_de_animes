import React, { useEffect, useState } from "react";

export default function BestAnimes() {
    const [animes, setAnimes] = useState([])

    useEffect(()=>{
            fetch('https://kitsu.io/api/edge/anime?page[limit]=5')
            .then((res)=>res.json())
            .then((res)=>{
                setAnimes(res)
            })
    }, [])

    return(
        <div className="informations">
            <h2>Animes mais vistos</h2>
            {animes.data && (
                <ul className='animes-list'>

                    {animes.data.map((item)=>(
                            <li key={item.id} className={item.id}>
                                <button onClick={()=>console.log(item)}>
                                    <img src={item.attributes.posterImage.small} 
                                    alt={item.attributes.canonicalTitle}
                                    />
                                    <p>{item.attributes.canonicalTitle}</p>

                                </button>
                            </li>
                    ))}
                </ul>
            )}
        </div>
    )
}