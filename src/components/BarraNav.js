import React, { } from "react";

export default function BarraNav(props) {


    const NavList = document.querySelector(".mobile-menu")
    const ul = document.querySelector('.nav-list')
    const NavLinks = document.querySelectorAll('.nav-list li')
    const api = "https://kitsu.io/api/edge/anime?filter[categories]"

    function selection(event) {
        console.log(event)
        fetch(`${api}=${event}`)
        .then((res)=>res.json())
        .then(res=> { props.setInfo(res)  
        })
        props.SetBarrNavVerification(true) 
    }

    function Move_menu(){

        if (`${ul.classList}` === "nav-list active") {
            NavList.classList.remove("ok")
            ul.classList.remove("active")
        }else{
            NavList.classList.add("ok")
            ul.classList.add("active")
        }

        NavLinks.forEach(((item, index) => {
            item.style.animation ? (item.style.animation = "")
            : 
            (item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        }))
    }


    return(
        <div>
            
            <div onClick={Move_menu} className="mobile-menu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className="nav-list">
            <a className="logo" href="/">Categorias</a>
                <li> <button className="button_bar" onClick={()=>selection("adventure")}>Aventura</button></li>
                <li> <button className="button_bar" onClick={()=>selection("comedy")}>Comédia</button></li>
                <li> <button className="button_bar" onClick={()=>selection("romance")}>Romance</button></li>
                <li> <button className="button_bar" onClick={()=>selection("Thriller")}>Suspense</button></li>
                <li> <button className="button_bar" onClick={()=>selection("fantasy")}>Fantasia</button></li>
                <li> <button className="button_bar" onClick={()=>selection("Isekai")}>Isekai</button></li>
            </ul>

            <main></main>
        </div>
    )
}