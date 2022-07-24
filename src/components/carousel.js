import React, { useEffect, useState } from "react";

export default function Carousel(props) {

    const [MoverCarousel, SetMoverCarousel] = useState(2)

useEffect(()=>{
    console.log(MoverCarousel)

    if (MoverCarousel >= -62 && MoverCarousel <= 0) {
       // document.querySelector(".container").style.transform =`translateX(${MoverCarousel}%)`   
    }else if (MoverCarousel <= -62) {
      //  SetMoverCarousel(-62)
    //    document.querySelector(".container").style.transform =`translateX(-56%)`   
    }else if (MoverCarousel >= 0){
  //      SetMoverCarousel(0)
    }
}, [MoverCarousel])

    return(
        <div className="carousel">
            <button className="button_esquerda" onClick={()=>SetMoverCarousel((e)=>e+10)}><img alt="seta esquerda" width="50px" src="https://cdn-icons-png.flaticon.com/128/271/271220.png" /></button>
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
            <button className="button_direita" onClick={()=>SetMoverCarousel((e)=>e-10)}><img alt="seta direita" width="50px" src="https://cdn-icons-png.flaticon.com/128/271/271228.png" /></button>
        </div>
    )
}