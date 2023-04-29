import React from "react";
import './dateCard.css'

function DateCard(props){
    return(
        <div className="dateCard-container">
            <div className="datecard-date">
                <h3 className="date-number">{props.day}</h3>
                <p className="date-month">{props.month}</p>
                <p className="date-hour">{props.hour}</p>
            </div>
            <span className="date-divider"> </span>
            <p className="date-title">{props.title}</p>
        </div>
    )
}
export default DateCard