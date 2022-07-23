import Mes from "./Mes";
import useCalendar from "../hooks/useCalendar";
import Moment, { weekdays } from "moment";

export default function Calendar(props) {
  return (
      <div >
        <div className="inputYear">
              <input type="text" className="year" />
        </div>
        <Mes/>
      </div>
  );
}
