import * as React from 'react'
import logo from '../../assets/Logo.jpg'
import "./styleHeader.css"
import instagramLogo from "../../assets/instagram.svg"
import facebookLogo from "../../assets/facebook.svg"
import youtubeLogo from "../../assets/youtube.svg"
import burgerIcon from "../../assets/burgerIcon.svg"
import IconButton from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom'
import BurgerMenu from '../Burger'


const Header =  () => {

    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    
                    <img className='logo' src={logo} onClick={()=> navigate('/')} alt='Assembleia Central Juiz de Fora'/>
                    <nav className='menu'>
                        <div ><Link className='item' to={'/'}> Início</Link></div>
                        <div ><Link className='item' to={'/'}> Sobre nós</Link></div>
                        <div ><Link className='item' to={'/live'}> Ao Vivo</Link></div>
                        <div ><Link to={'/'} className='item'>Cultos</Link></div>
                        <div ><Link to={'/'} className='item'>Ministérios</Link></div>
                        <div ><Link to={'/'} className='item'>Contato</Link></div>

                    </nav>
                    <BurgerMenu/>
                    
                </div>

            </div>
    </div>
    )
}
export default Header