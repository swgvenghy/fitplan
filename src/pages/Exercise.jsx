import { useState } from "react";
import ExerciseBody from "../components/Exercise/ExerciseBody";
import ExerciseHeader from "../components/Exercise/ExerciseHeader";

const Exercise = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [todayScore, setTodayScore] = useState(0);

  return(
    <div className="mx-5">
      <ExerciseHeader setSelectedValue={setSelectedValue} todayScore={todayScore}/>
      <ExerciseBody selectedValue={selectedValue} setTodayScore={setTodayScore}/>
      
    </div>
  )
}

export default Exercise;