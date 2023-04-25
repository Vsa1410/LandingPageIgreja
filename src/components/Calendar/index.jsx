import * as React from 'react'
import {Divider} from "@mui/material"
import './calendar.css'


const Calendar = () =>{
    return(
        

        <div className='calendar'>
            <div className='calendar-title'>
                <span className="calendar-divider-sub"></span>
                <h2>Próximos eventos</h2>

            </div>
            
            <div className='calendar-events-all-items'>

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
    
    )
}
export default Calendar