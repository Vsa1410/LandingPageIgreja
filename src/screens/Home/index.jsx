import * as React from 'react'
import banner1 from '../../assets/BannerMilagresDeJesus.jpg'
import './home.css'
import img from "../../assets/img1.png"
import {Divider} from "@mui/material"
import Calendar from '../../components/Calendar'
import Carousel from '../../components/Carousel'
import logoBig from '../../assets/logoGrande.png'
import Banner from '../../components/Banner'
import MessageOfDay from '../../components/MessageOfDay'
import Services from '../../components/Services'

const Home = ()=>{
    return(
        <div className='body'>
            
            <Banner/>
            
            <MessageOfDay/>

            <Services/>

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