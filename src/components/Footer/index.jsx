import * as React from 'react'
import './footer.css'
import logo from '../../assets/Logonobg.png'

const Footer = () =>{
    return(
        <div className='footer'>
            
            <img className='footer-logo' src={logo}alt="" srcset="" />
            
            <h3 className='footer-text'>Avenida dos Andradas, 1227</h3>
            <h3 className='footer-text'>Juiz de Fora - MG</h3>

            <h2>Venha nos fazer uma visita!</h2>

            <div className='footer-social-media'>
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
        </div>
    )
}
export default Footer