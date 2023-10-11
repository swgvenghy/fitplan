import { useState } from "react"
import RenderHeader from "../components/Calender/RenderHeader";
import RenderDays from "../components/Calender/RenderDays";
import { addMonths, subMonths } from "date-fns";
import RenderCells from "../components/Calender/RenderCells";

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

  let exerciseData = localStorage.getItem('exercise')
  exerciseData = JSON.parse(exerciseData)

  return(
    <div className="flex w-full h-full flex-col items-center justify-center">
      <RenderHeader currentMonth={currentMonth} prevMonth = {prevMonth} nextMonth = {nextMonth}/>
      <RenderDays/>
      <RenderCells exerciseData={exerciseData} currentMonth={currentMonth} selectedDate={selectedDate} onDateClick={onDateClick}/>
    </div>
  )
}

export default Calender;