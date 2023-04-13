import * as React from 'react'
import banner1 from '../../assets/BannerMilagresDeJesus.jpg'
import './home.css'
import img from "../../assets/img1.png"

const Home = ()=>{
    return(
        <div className='body'>
            <div className='section'>

                <div className='banner'>
                    <img src={banner1} className='banner-image'/>
                    <h2 className='subtitle'>Série de estudos de Abril: Milagres de Jesus</h2>
                </div>
                <div className='section1'>
                    <div className='calendar'>
                        <h3>Próximos eventos</h3>
                        <div className='calendar-events'>
                            <p className='event-title'>Culto da Família</p>
                            <p className='event-date'>16/04/2023 18:30</p>
                        </div>
                        <div className='calendar-events'>
                            <p className='event-title'>Culto da Família</p>
                            <p className='event-date'>16/04/2023 18:30</p>
                        </div>
                        <div className='calendar-events'>
                            <p className='event-title'>Culto da Família</p>
                            <p className='event-date'>16/04/2023 18:30</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section2'>

                <div className='news'>
                    <h2>Novidades</h2>
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