import {useEffect, useState} from 'react'

export default function useCalendar(){
    
    const [days,setDays] = useState([])

    function getDaysAndMonth(month){

       var daysMonth = new Date(new Date().getFullYear(), month, 0);

        return {
                days: daysMonth.getDate(),
                firstDayMonth: daysMonth.getDay()  
        }
    }
    
    return (
        days
    )


}