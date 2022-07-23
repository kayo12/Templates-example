import Mes from "./Mes";
import useCalendar from "../hooks/useCalendar";
import Moment, { weekdays } from "moment";
import { useState } from "react";
import { type } from "os";


const [year, setYear] = useState(2022) 


export default function Calendar(props) {
  return (
      <div className="calendar">
        <div className="inputYear">
              <label htmlFor="year">ano</label>
              <input type="number" id="year" className="year" onChange={(e) => setYear(Number(e.target.value))}/>
        </div>
        <Mes ano={year} />
      </div>
  );
}
