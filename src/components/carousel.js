import React, { } from "react";

export default function Modal(props) {

    let moverCarousel = 0

    function avancarCarousel(somarOuDiminuir) {
        if (somarOuDiminuir) {
            moverCarousel= moverCarousel + 200
            document.querySelector('.container').style.transform = `translateX(${-moverCarousel + "px"})`
        }else{
            moverCarousel = moverCarousel - 200
            document.querySelector('.container').style.transform = `translateX(${-moverCarousel + "px"})`
        }
    }

    return(
        <div>
            <div className="container">
                {props.animes.data.map((item)=>(
                    <li key={item.id} className={item.id}>
                        <button className="img_comprimida" onClick={()=>props.verification(item)}>
                            <img src={item.attributes.posterImage.tiny} 
                            alt={item.attributes.canonicalTitle}
                            />
                            <p>{item.attributes.canonicalTitle}</p>
                        </button>
                    </li>
                    ))}
            </div>
                            <button onClick={()=>{avancarCarousel(false)}}>voltar</button>
                            <button onClick={()=>{avancarCarousel(true)}}>avançar</button>
        </div>
    )
}