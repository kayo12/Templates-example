import Mes  from './Mes'
import { useState, useEffect, Children } from 'react';
import useCalendar from '../hooks/useCalendar'
import Moment from 'moment'

export default function Calendar(props) {

    const date = new Date( new Date().getFullYear(),1,0 );

    console.log(Moment().format())

  function Week(month: number){
      let list = new Array()
      let i = 0;
      while(i <= date.getDate()){
          list.push(new Array())

      }
      useEffect(() =>{
          console.table(list)
      })
    
     return (
          <h3></h3>   
     )
  }

  return ( 
   <div className="calendar">
    <Mes mes={date.getMonth()}/>
        {/* {Week(1)} */}
    </div>
  );
}
