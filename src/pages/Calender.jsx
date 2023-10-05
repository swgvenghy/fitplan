import { useState } from "react"
import RenderHeader from "../components/RenderHeader";
import RenderDays from "../components/RenderDays";
import { addMonths, subMonths } from "date-fns";
import RenderCells from "../components/RenderCells";

const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  }
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  }
  const onDateClick = (day) => {
    setSelectedDate(day);
  }

  return(
    <div className="flex w-full h-full flex-col items-center justify-center">
      <RenderHeader currentMonth={currentMonth} prevMonth = {prevMonth} nextMonth = {nextMonth}/>
      <RenderDays/>
      <RenderCells currentMonth={currentMonth} selectedDate={selectedDate} onDateClick={onDateClick}/>
    </div>
  )
}

export default Calender;