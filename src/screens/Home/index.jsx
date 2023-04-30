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
import News from '../../components/News'
import SundaySchool from '../../components/SundaySchool'

const Home = ()=>{
    return(
        <div className='body'>
            
            <Banner/>
            
            <MessageOfDay/>

            <Services/>

            <SundaySchool/>

            <Calendar/>

            <News/>
           

        </div>
    )
}
export default Home