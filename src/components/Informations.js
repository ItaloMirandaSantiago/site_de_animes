import React, { useEffect, useState } from "react";
import InforDescription from "./inforDescription";

export default function Informations(props) {
    const [array, setArray] = useState([])
    const img_fechar = 'https://cdn-icons-png.flaticon.com/512/106/106830.png'
    const [Description, setDescription] = useState({})

    useEffect(()=>{
        let local_items = JSON.parse(localStorage.getItem('items_save'))
        if (local_items !== null) {
            setArray(local_items)
        }
    }, [])

    function verification(item) {
        item['verification'] = true
        props.description_item(item)
        setDescription(item)
    }

    function excluir(item) {
        if (item !== null) {
            
            for (let i = 0; i < array.length; i++) {
                if (item.id === array[i].id) {
                    let new_array = array
                    new_array[i].verification = false
                    new_array.splice(i,1)
                    setArray(()=>new_array)
                    localStorage.setItem('items_save', JSON.stringify(new_array))
                }
                let list = document.getElementsByClassName(item.id)[0]
                list.classList.add('excluir')
            }
        }
    }
    useEffect(()=>{
        console.log(array)
    }, [array])

    return(
        <div className="informations">
            
            <div>

            {array.length > 0 && array != null && !Description.verification && (
                <div>
                        <h2 className="h2_margin">Animes salvos...</h2>
                        <ul className="animes-list">
                            {array.map((item)=>(
                                item.id && (
                                <li key={item.id} className={item.id}>
                                    {console.log(item)}
                                    <div className="fundo">
                                        <div className="container_img">
                                            <button onClick={()=>verification(item)}>
                                                <img src={item.attributes.posterImage.tiny} 
                                                alt={item.attributes.canonicalTitle} 
                                                />
                                            </button>
                                            <div>
                                                <button onClick={()=>excluir(item)}>
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
                </div>
                )}
                {Description.verification && (
                    <InforDescription Description={Description} setDescription={(e)=>setDescription(e)}/>
                )}
            

            </div>
        </div>
    )
}

