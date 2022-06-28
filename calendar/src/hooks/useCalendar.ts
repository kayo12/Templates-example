import {useEffect, useState} from 'react'

export default function useCalendar(){
    
    const [days,setDays] = useState([])
    const date = new Date();

    function getDays(){
        let dayWeek = new Date();
        let week = [6];

       for(let i = 0; i <= 6; i++ ){ 
        
        if(dayWeek.getDay() >= i){
            week
        }
    
        }
                   

    }


}