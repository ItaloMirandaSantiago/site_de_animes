import React from "react";

export default function BarraNav() {

    function Move_menu(){
        let NavList = document.querySelector(".mobile-menu")
        let ul = document.querySelector('.nav-list')
        let NavLinks = document.querySelectorAll('.nav-list li')



        if (ul.classList == "nav-list active") {
            ul.classList.remove("active")
        }else{
            ul.classList.add("active")
            ul.classList.forEach((res => {}))
        }
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