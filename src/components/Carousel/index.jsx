import React from "react";
import styles from "styled-components"
import banner1 from "../../assets/img6.jpg"
import banner2 from "../../assets/img7.jpg"
import { useState } from "react";


const Carousel = () =>{

    const pages = [
        {
            img: banner1,
            
        },
        {
            img: banner2,
            
        }
    ]
    const[currentPage, setCurrentPage] = useState(pages[0].img)

        

    return(
        <Container>
            <InfoArea>
                <Image src={currentPage}>

                </Image>

            </InfoArea>

        </Container>
    )
}
const Container = styles.div`
    max-width:100%
    
    
    `
const InfoArea = styles.div`

`
const Image= styles.img`
    width: 100%;
    transition:opacity 4s 
`
export default Carousel