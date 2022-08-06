import Mes from "./Mes";
import { useEffect, useState, useSyncExternalStore} from "react";

export default function Calendar(props) {
  const [year, setYear] = useState('')
 
  function OnChangeYear(){
      let ye = (document.getElementById("year") as HTMLInputElement).value;
        console.log(ye)
       setYear(ye)
  }

  return (
      <div className="calendar">
        <div className="inputYear">
              <label htmlFor="year">ano</label>
              <input type="text" id="year" className="year"  />
            <button onClick={() => {OnChangeYear}}>Buscar</button>
        </div>
        <h1>{year}</h1>
        <Mes ano={Number(year)}/>
      </div>
  );
}
