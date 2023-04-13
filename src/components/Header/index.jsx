import * as React from 'react'
import logo from '../../assets/logo.jpg'
import "./styleHeader.css"
import instagramLogo from "../../assets/instagram.svg"
import burgerIcon from "../../assets/burgerIcon.svg"

const Header =  () => {
    return(
        <div className='header'>
            <img className='logo' src={logo} alt='Assembleia Central Juiz de Fora'/>
            <nav className='menu'>
                <div className='item'>Início</div>
                <div className='item'>Sobre nós</div>
                <div className='item'>Ao Vivo</div>
                <div className='item'>Cultos</div>
                <div className='item'>Ministérios</div>
                <div className='item'>Contato</div>

            </nav>
            <div className='burger-menu'>
                <img src={burgerIcon}/>

            </div>
            <div className='social-media'>
                <img src={instagramLogo} alt="" srcset="" />

            </div>

        </div>
    )
}
export default Header