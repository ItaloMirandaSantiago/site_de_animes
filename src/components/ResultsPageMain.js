import React, { useEffect, useState } from "react";
import InforDescription from "./inforDescription";
import Carousel from "./Carousel";
//aba de inicio sobre melhores animes

export default function BestAnimes(props) {
    const {items, set_items} = props

    const [animes, setAnimes] = useState([])
    const [Description, SetDescription] = useState([])

    function verification(item) {
        item['verification'] = true
        SetDescription(item)
    }
    useEffect(()=>{
            fetch(props.API)
            .then((res)=>res.json())
            .then((res)=>{
                setAnimes(res)
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className="informations">
            <div className="ocupar">
            <h2>{props.name}</h2>
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
  