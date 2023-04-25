import React from "react";
import './news.css'

const News = () =>{
    return(
        <div className="news-container">
            <div className="news-title">
                <h2>Novidades</h2>
                <span className="news-divider"></span>
            </div>
            <div className="news-items">
                <div className="news-item">
                    <div className="news-image">
                        <img src="" alt="" />
                    </div>
                    <div className="news-text">
                        O amor de Deus por nós
                    </div>
                </div>

                <div className="news-item">
                    <div className="news-image">
                        <img src="" alt="" />
                    </div>
                    <div className="news-text">
                        O amor de Deus por nós
                    </div>
                </div>

                <div className="news-item">
                    <div className="news-image">
                        <img src="" alt="" />
                    </div>
                    <div className="news-text">
                        O amor de Deus por nós
                    </div>
                </div>
            </div>

            
        </div>
    )
}
export default News