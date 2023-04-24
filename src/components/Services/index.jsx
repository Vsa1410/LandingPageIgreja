import React from "react";
import './services.css'

const Services = () =>{
    return(
        <div className="services-container">
            <div className="services-title">
                <h2>Participe conosco dos nossos cultos</h2>
                <span className="services-divider-sub"></span>

            </div>
            <div className="services-dates">
                <div className="services-item">
                    <h3>
                        Domingo
                    </h3>
                    <h3>18:30</h3>
                </div>
                
                <span className="services-divider"></span>
               
                <div className="services-item">
                    <h3>
                        Quarta
                    </h3>
                    <h3>19:30</h3>
                </div>

                <span className="services-divider"></span>
                
                <div className="services-item">
                    <h3>
                        Sexta
                    </h3>
                    <h3>19:30</h3>
                </div>
            </div>

        </div>
    )
}
export default Services