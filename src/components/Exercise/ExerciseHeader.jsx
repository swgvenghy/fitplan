import { useState } from "react";
import ExerciseSelect from "./ExerciseSelect";

const ExerciseHeader = (props) => {
  const now = new Date();
  const formattedDate = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;
  
  return(
    <div className="">
      <div className="flex items-center justify-center mt-3 text-xl font-bold">오늘의 운동</div>
      <div className=" flex flex-row justify-between mt-2">
        <div className="">
          {formattedDate}
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <ExerciseSelect setSelectedValue={props.setSelectedValue}/>
          </div>
          <button className=' font-bold text-xl text-green-500' onClick={() =>{props.setButtonCount(props.buttonCount+1)}}>시작하기</button>
        </div>
        <div>
          오늘의 총 불륨 : {props.todayScore}
        </div>
      </div>

    </div>
  )
}

export default ExerciseHeader;