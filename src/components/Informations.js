import React from "react";

export default function Informations(props) {
 //   const items = props.items
    const img_fechar = 'https://cdn-icons-png.flaticon.com/512/106/106830.png'
    function verification(item) {
        item['verification'] = true
        props.description_item(item)
    }

  const array = JSON.parse(localStorage.getItem('items_save'))
  if (array) {
        console.log(array)
 //array.map(i=>(console.log(i.id), console.log(i.attributes.posterImage.small), console.log(i.attributes.canonicalTitle)))
  }

    function excluir(item) {
    }

    return(
        <div className="informations">
            <h2>Animes salvos...</h2>

            <div>
                {array && (
                        <ul className="animes-list">
                            {array.map((item)=>(
                                <li key={item.id} className={item.id}>
                                    <div className="fundo">
                                        <div className="container_img">
                                            <button onClick={()=>verification(item)}>
                                                <img src={item.attributes.posterImage.small} 
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
                            ))}
                        </ul>
                    )}
            </div>

        </div>
    )
}

