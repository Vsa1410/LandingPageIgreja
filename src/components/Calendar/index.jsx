import * as React from 'react'
import {Divider} from "@mui/material"
import './calendar.css'
import DateCard from '../DateCard'


const Calendar = () =>{
    return(
        

        <div className='calendar'>
            <div className='calendar-title'>
                <span className="calendar-divider-sub"></span>
                <h2>Próximos eventos</h2>

            </div>

            
            <div className='calendar-events-all-items'>
                <DateCard
                    day={18}
                    month={"Mai"}
                    hour={'18h30'}
                    title={'Retiro'}
                    />
                <DateCard
                    day={18}
                    month={"jun"}
                    hour={'18h30'}
                    title={'Jantar dos namorados'}
                />
                <DateCard
                    day={19}
                    month={"jun"}
                    hour={'18h30'}
                    title={'Culto da família'}
                />

                
            </div>
        </div>
    
    )
}
export default Calendar