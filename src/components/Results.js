import React from 'react'

//resposta da api 

export default  function Description(props) {
    const info = props.info

    function verification(item) {
        item['verification'] = true

        props.description_item(item)
    }

    return(
        <div>
            {info.data && (
                <ul className='animes-list'>
                    {info.data.map((item)=>(

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
    )
}

