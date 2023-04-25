import * as React from 'react';
import bannerImage from '../../assets/img6.jpg'
import bannerLogo from '../../assets/Logonobg.png'
import './banner.css'

const Banner  = () => {
    return(
        <div className='banner-container'>
            <div className='banner-content'>
                <h1 className='banner-title'> Vivendo o propósito de Deus</h1>
                <img src={bannerLogo} className='banner-logo'alt="" srcset="" />
            </div>
            <img src={bannerImage} className='main-image' alt="" srcset="" />


        </div>
    )
}
export default Banner