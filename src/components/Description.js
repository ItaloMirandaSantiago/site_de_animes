import  React from 'react'

export default function Description(props) {
    return (
        <div>
            <h2>{props.description_obj.attributes.canonicalTitle}</h2>

            {console.log(props.description_obj)}

            <img src={props.description_obj.attributes.posterImage.small} alt='imagem do anime'/>

            <p>Descrição: {props.description_obj.attributes.description}</p>

        </div>
    )
}