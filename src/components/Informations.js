import React, { useEffect, useState } from "react";
import InforDescription from "./inforDescription";
//aba de inicio aqui é onde os animes salvos aparecem 
export default function Informations(props) {
    const [Array, setArray] = useState([])
    const [Description, setDescription] = useState([])
    const [verificar, setVerificar] = useState(true)

    useEffect(()=>{
        let local_items = JSON.parse(localStorage.getItem('items_save'))
        if (local_items !== null) {
            setArray(local_items)
        }
    }, [])

    useEffect(()=>{
        if (Array.length > 0) {
 //           console.log('funcionando')
            setVerificar(false)
        }else{
            setVerificar(true)
        }
    }, [Array])

    function verification(item) {
        item['verification'] = true
        props.description_item(item)
        setDescription(item)
    }

    function excluir(item) {
            for (let i = 0; i < Array.length; i++) {
                if (item.id === Array[i].id) {
                    let new_array = Array
                    new_array[i].verification = false
                    new_array.splice(i,1)
                    setArray(new_array)
                    localStorage.setItem('items_save', JSON.stringify(new_array))
                }

                if (Array.length > 0) {
                    console.log('funcionando')
                    setVerificar(false)
                }else{
                    setVerificar(true)
                }
                
                let list = document.getElementsByClassName(item.id)[0]
                list.classList.add('excluir')
            }
    }


    return(
        <div className="informations">
            
            <div>

            { Array != null && !Description.verification && (
                <div>
                        <h2 className="h2_margin">Animes salvos...</h2>
                        <ul className="animes-list">
                            {Array.map((item)=>(
                                item.id && (
                                    <li key={item.id} className={item.id}>
                                    <button className="img_comprimida" onClick={()=>verification(item)}>
                                        <img src={item.attributes.posterImage.tiny} 
                                        alt={item.attributes.canonicalTitle}
                                        />
                                        <p>{item.attributes.canonicalTitle}</p>
    
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
                    <InforDescription Description={Description} setDescription={(e)=>setDescription(e)} excluir={(i)=>excluir(i)} name={"Excluir"}/>
                )}
            

            </div>
        </div>
    )
}




