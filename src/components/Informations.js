import React, { useEffect, useState } from "react";
import InforDescription from "./inforDescription";

export default function Informations(props) {
    const array = JSON.parse(localStorage.getItem('items_save'))
    const img_fechar = 'https://cdn-icons-png.flaticon.com/512/106/106830.png'
    const [Description, setDescription] = useState({})
    function verification(item) {
        item['verification'] = true
        props.description_item(item)
        setDescription(item)
    }

    useEffect(()=>{
        console.log(Description)
    }, [Description])

    function excluir(item) {

        for (let i = 0; i < array.length; i++) {
            if (item.id === array[i].id) {
                array[i].verification = false
                array.splice(i,1)
                localStorage.setItem('items_save', JSON.stringify(array))
            }
            let list = document.getElementsByClassName(item.id)[0]
            list.classList.add('excluir')
            console.log(list)
        }
    }
    console.log(array)

    return(
        <div className="informations">
            <h2>Animes salvos...</h2>

            <div>
                {array && !Description.verification && (
                        <ul className="animes-list">
                            {array.map((item)=>(
                                item.id && (
                                <li key={item.id} className={item.id}>
                                    <div className="fundo">
                                        <div className="container_img">
                                            <button onClick={()=>verification(item)}>
                                                <img src={item.attributes.posterImage.small} 
                                                alt={item.attributes.canonicalTitle} 
                                                />
                                            </button>
                                            <div>
                                                <button onClick={(event)=>excluir(event, item)}>
                                                    <img src={img_fechar} className='img' width='25px' alt='excluir anime dos favoritos'></img>
                                                </button>
                                            </div>
                                        </div>
                                        <p>{item.attributes.canonicalTitle}</p>
                                    </div>
                                </li>
                                )
                            ))}
                        </ul>
                )}
                {Description.verification && (
                    <InforDescription Description={Description} />
                )}
            </div>
        </div>
    )
}

