import React, { useEffect, useState } from "react";
import InforDescription from "./inforDescription";
//aba de inicio aqui é onde os animes salvos aparecem 
export default function Informations(props) {
    const {items, set_items} = props
    const [Description, setDescription] = useState([])
    const [verificar, setVerificar] = useState(true)

    useEffect(()=>{
        let local_items = JSON.parse(localStorage.getItem('items_save'))
        if (local_items !== null) {
            set_items(local_items)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(()=>{
        if (items.length > 0) {
 //           console.log('funcionando')
            setVerificar(false)
        }else{
            setVerificar(true)
        }
    }, [items])

    function verification(item) {
        item['verification'] = true
        props.description_item(item)
        setDescription(item)
    }

    function excluir(item) {
            for (let i = 0; i < items.length; i++) {
                if (item.id === items[i].id) {
                    let new_array = items
                    new_array[i].verification = false
                    new_array.splice(i,1)
                    set_items(new_array)
                    localStorage.setItem('items_save', JSON.stringify(new_array))
                }

                if (items.length > 0) {
                    console.log('funcionando')
                    setVerificar(false)
                }else{
                    setVerificar(true)
                }
            }
    }


    return(
        <div className="informations">
            
            <div>

            { items != null && !Description.verification && (
                <div>
                        <h2 className="h2_margin">Animes salvos...</h2>
                        <ul className="animes-list">
                            {items.map((item)=>(
                                item.id && (
                                    <li key={item.id} className={item.id}>
                                    <button className="img_comprimida" onClick={()=>verification(item)}>
                                        <img src={item.attributes.posterImage.tiny} 
                                        alt={item.attributes.canonicalTitle}
                                        />
                                        <p>{item.attributes.canonicalTitle}</p>
                                        {console.log(item)}
                                        </button>
                                    </li>
                                )
                            ))}
                        </ul>
                        { verificar && (
                            <div className="saves">
                                Seus animes salvos aparecerão aqui quando salvá-los
                            </div>
                        )}
                </div>
                )}
                {Description.verification && (
                    <InforDescription set_items={set_items}  items={items} Description={Description} setDescription={(e)=>setDescription(e)} excluir={(i)=>excluir(i)} name={"Excluir"}/>
                )}
            

            </div>
        </div>
    )
}




