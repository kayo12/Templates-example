import { useState, useEffect} from "react";
import Moment from "moment";
export default function Days(props){
    const [month, setMonth] = useState([]);

    const date = Moment().month(props.m).year(2022);
    
    useEffect(() => {
      let firstDay = date.clone().startOf("month").startOf("week");
      let endDay = date.clone().endOf("month").endOf("week");
      let Day = firstDay.clone().subtract(1, "day");
      console.log(`Primeiro dia do mes ${firstDay}`);
      console.log(`ultimo dia do mes ${endDay}`);
      while (Day.isBefore(endDay, "day")) {
        month.push(
          Array(7)
            .fill(0)
            .map(() => Day.add(1, "day").clone())
        );
      }
      console.log(month)
    }, [month]);
  
 return(
    <div className="week">
        {month.map((week) =>
            <div key={week}>
               {week.map((d) =>      
                    <span key={d}>
                        {d.format("DD")}
                    </span>
               )}  
            </div>
        )}
    </div>
 )   

}