import Mes from "./Mes";
import { useEffect, useState, useSyncExternalStore } from "react";

export default function Calendar(props) {
  const [year, setYear] = useState("2021");

  useEffect(() => {
    OnChangeYear();
  }, [year]);

  function OnChangeYear() {
    let ye = (document.getElementById("year") as HTMLInputElement).value;
    console.log(ye);
    return setYear(ye);
  }

  return (
    <div className="calendar">
      <div className="displayyear">
        <label htmlFor="year">Exibindo ano atual, informe um novo ano: {year}</label>
      </div>
      <div className="inputYear">
        <input type="text" id="year" className="year" />
        <button className="btnSearch"onClick={OnChangeYear}>Buscar</button>
      </div>
      <Mes ano={Number(year)} />
    </div>
  );
}
