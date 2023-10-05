import format from "date-fns/format";
import {GrPrevious, GrNext} from 'react-icons/gr'
import { useNavigate } from "react-router-dom";

const RenderHeader = ({currentMonth, prevMonth, nextMonth}) => {
  const nevigate = useNavigate();
  return(
    <div className="flex flex-row w-3/4 justify-between my-4">
      <div className="flex flex-col items-start">
        <span className=" text-lg max-md:text-base">
          {format(currentMonth, 'yyyy')}년  
          <span className=" font-semibold
          ">    {format(currentMonth, 'M')}월  </span>
        </span>
      </div>
      <div className=" text-lg items-start cursor-pointer max-md:text-base" onClick={() => nevigate('/')}>
        이번 달의 운동일지 
      </div>
      <div className="flex flex-row items-center">
        <GrPrevious className=" cursor-pointer " onClick={prevMonth}/>
        <div className=" w-5 max-md:w-2"></div>
        <GrNext className="cursor-pointer" onClick={nextMonth}/>
      </div>
    </div>
  )
}

export default RenderHeader;

