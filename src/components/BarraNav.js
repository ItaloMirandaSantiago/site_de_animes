import React from "react";

export default function BarraNav() {

    const NavList = document.querySelector(".mobile-menu")
    const ul = document.querySelector('.nav-list')
    const NavLinks = document.querySelectorAll('.nav-list li')


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
                <li> <a href="/">teste</a></li>
                <li> <a href="/">teste</a></li>
                <li> <a href="/">teste</a></li>
                <li> <a href="/">teste</a></li>
                <li> <a href="/">teste</a></li>
            </ul>

            <main></main>
        </div>
    )
}