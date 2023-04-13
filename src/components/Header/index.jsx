import * as React from 'react'
import logo from '../../assets/logo.jpg'
import "./styleHeader.css"
import instagramLogo from "../../assets/instagram.svg"
import facebookLogo from "../../assets/facebook.svg"
import youtubeLogo from "../../assets/youtube.svg"
import burgerIcon from "../../assets/burgerIcon.svg"

const Header =  () => {
    return(
        <div className='header-top' >
            <div className='social-media'>
                <img src={instagramLogo} className='logo-social-media' alt="" srcset="" />
                <img src={facebookLogo} className='logo-social-media' alt="" srcset="" />
                <img src={youtubeLogo} className='logo-social-media' alt="" srcset="" />
            </div>
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
            </div>

        </div>
    )
}
export default Header