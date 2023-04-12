import * as React from 'react'
import banner1 from '../../assets/BannerMilagresDeJesus.jpg'
import './home.css'

const Home = ()=>{
    return(
        <div className='body'>
            <div className='banner'>
                <img src={banner1} className='banner-image'/>
                <h2>Série de estudos de Abril: Milagres de Jesus</h2>
            </div>
            <div className='section1'>
                <div>
                    <h3>Faça aqui seu pedido de oração</h3>
                </div>
            </div>

        </div>
    )
}
export default Home