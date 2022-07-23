import React, { useEffect, useState } from "react";
import InforDescription from "./inforDescription";
import Carousel from "./carousel";
//aba de inicio sobre melhores animes

export default function BestAnimes(props) {
    const {items, set_items} = props

    const [animes, setAnimes] = useState([])
    const [Description, SetDescription] = useState([])

    function verification(item) {
        item['verification'] = true
        SetDescription(item)
        //ser         props.setDescription(true)
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
                <ul>
                    <Carousel animes={animes} verification={(i)=>{verification(i)}}/>
                </ul>
            )}
            
                {Description.verification && (
                    <InforDescription set_items={set_items}  items={items} Description={Description} setDescription={(e)=>SetDescription(e)} name={"Voltar"}/>
                )}
            </div>
        </div>
    )
}
  