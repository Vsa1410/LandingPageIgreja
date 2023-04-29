import React from "react";
import './Message.css'

const MessageOfDay = () =>{
    return(
        <div className="message-container">
            <div className="message-first-section" >
                <p className="message-text">Reflexão</p>
                <div className="message-subtitle">
                    <h3 className="message-text">Palavra de</h3>
                    <h1 className="message-h1">Deus</h1>
                </div>

                
            </div>
            <div className="message-second-section">
                <img  className="message-logo" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/ffffff/external-Quotation-chat-tanah-basah-glyph-tanah-basah.png"/>
                <h3 className="message-verse">Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas serão acrescentadas a vocês.
 Mateus 6:33</h3>
            </div>
        </div>
    )
}
export default MessageOfDay