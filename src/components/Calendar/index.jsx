import * as React from 'react'
import {Divider} from "@mui/material"
import './calendar.css'


const Calendar = () =>{
    return(
        <div className='section1'>
                    <div className='calendar'>
                        <h3>Próximos eventos</h3>
                        
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
                </div>
    )
}
export default Calendar