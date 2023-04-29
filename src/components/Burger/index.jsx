import React from "react";
import './burger.css'
import { Link } from "react-router-dom";

const BurgerMenu = () =>{
    function openNav() {
        document.getElementById('navMenu').style.width = '100%'
    }
    function closeNav(){
        document.getElementById('navMenu').style.width = '0%'
    }
    return(
        <div className="burger-container">
            <button className="nav-button" onClick={openNav}>
                <span class="material-symbols-outlined">
                    menu
                </span>

            </button>
            <div id="navMenu" className="overlay">
                <a href="javascript:void(0)" className="close-button" onClick={closeNav}> 
                    <span class="material-symbols-outlined">
                        close
                    </span> 
                </a>

                <div className="overlay-content">
                    <Link onClick={closeNav} className="item" to={'/'}>Início</Link>
                    <Link onClick={closeNav} className="item" to={'/'}>Sobre nós</Link>
                    <Link onClick={closeNav} className="item" to={'/live'}>Ao Vivo</Link>
                    <Link onClick={closeNav} className="item" to={'/'}>Ministérios</Link>
                    <Link onClick={closeNav} className="item" to={'/'}>Contato</Link>
                    <Link onClick={closeNav} className="item" to={'/'}>Pedidos de oração</Link>

                </div>
            </div>


        </div>
    )
}
export default BurgerMenu