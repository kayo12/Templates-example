import Mes from "./Mes";
import { useState, useEffect, Children } from "react";
import useCalendar from "../hooks/useCalendar";
import Moment, { weekdays } from "moment";

export default function Calendar(props) {
  const [month, setMonth] = useState([]);

  const date = Moment([2022, 0]);
  // Pegando a data do ano
  // console.log(date.startOf("month").startOf("week").format("D"));
  // console.log(date.endOf("month").endOf("week").format("D"));


  useEffect(() => {

    let firsDay = date.clone().startOf("month").startOf("week");
    let endDay = date.clone().endOf("month").endOf("week");

    console.log(`Primeiro dia do mes ${firsDay}`);
    console.log(`ultimo dia do mes ${endDay}`);
    while (firsDay.isBefore(endDay.endOf("month"))) {
      month.push(
        Array(7)
          .fill(0)
          .map(() => firsDay.add(1, "day").clone())
      );
    }
  },[]);

  return (
    <div className="calendar">
      <Mes mes={date.month()} />
      {month.map((week) => (
        <div className="week" key={week}>
            {week.map((e)=>(
              <span className="days">{e.format("DD")} </span>
              
            ))}
        </div>
      ))}
    
    </div>
  );
}
