import Days from "./Days";

interface MesAno {
  mes?: number | string ;
  ano?: number;
  horario?: number;
}
export default function Mes(props?: MesAno) {
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="container">
        {month.map((current) => (
          <div className="Months">
            
              <span className="currentMonth" key={current}>
                {current}
              </span>
              <Days key={current} m={current}/>
          </div>
        ))}
    </div>
  );
}
