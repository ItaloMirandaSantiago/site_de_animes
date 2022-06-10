import React, { useEffect, useState } from "react";

export default function BestAnimes() {
    const [animes, setAnimes] = useState([])
    const [Verification_, SetVerification_] = useState(false)

    function verification(item) {
        item['verification'] = true
        SetVerification_(true)
    }

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
            {animes.data && !Verification_ && (
                <ul className='animes-list'>

                    {animes.data.map((item)=>(
                            <li key={item.id} className={item.id}>
                                <button className="img_comprimida" onClick={()=>verification(item)}>
                                    <img src={item.attributes.posterImage.tiny} 
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
  //              <InforDescription Description={Description} setDescription={()=>SetVerification_(true)}/>