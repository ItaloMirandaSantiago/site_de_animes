import React from "react";

export default function Informations(props) {
    const items = props.items

    function verification(item) {
        item['verification'] = true

        props.description_item(item)
    }
  console.log(items.length)
    return(
        <div className="informations">
            <h2>Animes salvos...</h2>

                <div>
                    {items > 0 && (

                        <ul className="animes-list">
                            {items.map((item)=>(
                                <li key={item.id} className={item.id}>
                                    <button onClick={()=>verification(item)}>
        
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

        </div>
    )
}

