import React from 'react';
import { addDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek, isSameMonth, isSameDay } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const RenderCells = ({ currentMonth, selectedDate }) => {
  const nevigate = useNavigate();
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const formattedDate = format(day, 'd');
      const isCurrentMonth = isSameMonth(day, monthStart);
      const isSameSelectedDate = isSameDay(day, selectedDate);

      days.push(
        <div
          className={` max-sm:w-48 w-64 h-16 border border-black border-opacity-10 text-center  max-sm:text-lg text-xl  cursor-pointer ${!isCurrentMonth ? 'text-gray-400' : isSameSelectedDate ? ' text-blue-400' : ''}`}
          onClick={() => nevigate('/today_detail')}
        >
          {formattedDate}
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="flex" key={day}>
        {days}
      </div>
    );
    days = [];
  }

  return (
    <div className=' w-3/4 h-3/4 justify-center items-center'>
      {rows}
    </div>
  );
};

export default RenderCells;
