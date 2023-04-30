import React from "react";
import './live.css'

const Live = () =>{
    return(
        <div className="live-container">

            <h1 className="live-title">Culto Ao vivo</h1>

            <iframe width="90%" height="90%" src="https://www.youtube.com/embed/35224Z0GA-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>    
    )
}
export default Live