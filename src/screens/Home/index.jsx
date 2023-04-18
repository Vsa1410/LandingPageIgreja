import * as React from 'react'
import banner1 from '../../assets/BannerMilagresDeJesus.jpg'
import './home.css'
import img from "../../assets/img1.png"
import {Divider} from "@mui/material"
import Calendar from '../../components/Calendar'
import Carousel from '../../components/Carousel'

const Home = ()=>{
    return(
        <div className='body'>
            <div className='section'>

                <div className='banner'>
                    <h2 className='banner-text'>Venha conhecer o extraordinário de Deus</h2>
                    <Carousel/>
                </div>
                
            </div>
                <Calendar/>
            <div className='section2'>

                <h2 className='subtitle'>Novidades</h2>
                <div className='news'>
                    <div className='news-items'>
                        <img className='img' src={img}/>
                        <h4>Assista agora o nosso musical de Páscoa</h4>
                    </div>
                    <div className='news-items'>
                        <img className='img' src={img}/>
                        <h4 className='news-subtitle'>Assista agora o nosso musical de Páscoa</h4>
                    </div>
                    <div className='news-items'>
                        <img className='img' src={img}/>
                        <h4>Assista agora o nosso musical de Páscoa</h4>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Home