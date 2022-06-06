import React from "react";

export default function Informations(props) {
 //   const items = props.items

    function verification(item) {
        item['verification'] = true
        props.description_item(item)
    }

  const array = JSON.parse(localStorage.getItem('items_save'))
  if (array) {
        console.log(array)

 //     array.map(i=>(console.log(i.id), console.log(i.attributes.posterImage.small), console.log(i.attributes.canonicalTitle)))
  }

    return(
        <div className="informations">
            <h2>Animes salvos...</h2>

            <div>
                {array && (
                        <ul className="animes-list">
                            {array.map((item)=>(
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

