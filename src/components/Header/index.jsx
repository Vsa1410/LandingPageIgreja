import * as React from 'react'
import logo from '../../assets/logo.jpg'
import "./styleHeader.css"
import instagramLogo from "../../assets/instagram.svg"
import facebookLogo from "../../assets/facebook.svg"
import youtubeLogo from "../../assets/youtube.svg"
import burgerIcon from "../../assets/burgerIcon.svg"

const Header =  () => {
    return(
        <div className='container'>

        
        <div className='header-top' >
            <div className='social-media'>
            <a href='https://www.facebook.com/assembleiacentraljf'>
                    <img  src="https://img.icons8.com/sf-black-filled/27/ffffff/facebook.png"/>
                </a>

                <a href='https://www.youtube.com/@assembleiadedeuscentraljf'>
                    <img src="https://img.icons8.com/material-rounded/27/ffffff/youtube-play.png"/>
                </a>

                <a href='https://www.instagram.com/ieadcjf/'>
                    <img src="https://img.icons8.com/material/27/ffffff/instagram-new--v1.png"/>
                </a>
                
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
    </div>
    )
}
export default Header