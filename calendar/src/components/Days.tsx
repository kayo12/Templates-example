import Moment from "moment";
import { useState, useEffect } from "react";

export default function Days(props) {
  const [month, setMonth] = useState([]);
  const [date, setDate] = useState(
    Moment().locale("pt").month(props.m).year(props.y)
  );

  

  useEffect(() => {
    
    let firstDay = date.clone().startOf("month").startOf("week");
    let endDay = date.clone().endOf("month").endOf("week");
    let Day = firstDay.clone().subtract(1, "day");
    console.log(`Primeiro dia do mes ${firstDay}`);
    console.log(`ultimo dia do mes ${endDay}`);

    let arrayUpdate = [];

    while (Day.isBefore(endDay, "day")) {
      arrayUpdate.push(
        Array(7)
          .fill(0)
          .map(() => Day.add(1, "day").clone())
      );
    }

    setMonth(arrayUpdate);
    setDate(date.year(props.y))
    console.log(month);
  }, [date,props.y]);

  return (
    <div>
      {month.map((week) => (
        <div key={week} className="week">
          {week.map((d) => (
            <span className="day" key={d._d.getTime() + props.month}>
              {d.format("DD").toString()}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
