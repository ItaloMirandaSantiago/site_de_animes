import React, { useEffect, useState } from "react";
import InforDescription from "./inforDescription";
//aba de inicio sobre melhores animes

export default function BestAnimes() {
    const [animes, setAnimes] = useState([])
    const [Description, SetDescription] = useState([])

    function verification(item) {
        item['verification'] = true
        SetDescription(item)
    }
    useEffect(()=>{
            fetch('https://kitsu.io/api/edge/anime?page[limit]=15')
            .then((res)=>res.json())
            .then((res)=>{
                setAnimes(res)
            })
    }, [])

    return(
        <div className="informations">
            <div className="ocupar">
            <h2>Animes mais vistos</h2>
        {!animes.data && (
            <div className='loading_img'>
                <img src='http://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan/loading.gif/@@images/image.gif' alt='carregando...'></img>
            </div>  
        )}

            {animes.data && !Description.verification &&(
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
            
                {Description.verification && (
                    <InforDescription Description={Description} setDescription={(e)=>SetDescription(e)}/>
                )}
            </div>
        </div>
    )
}
  