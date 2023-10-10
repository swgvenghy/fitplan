import { useEffect, useState } from "react";
import exType from '../../assets/ExerciseType.json'
import ExerciseCells from "./Detail/ExerciseList";
import ExerciseInput from "./Detail/ExerciseInput";

const ExerciseBody = (props) => {
  const exerciseType = exType[props.selectedValue]
  const [exerciseList, setExerciseList] = useState('');
  const [volume, setVolume] = useState('');
  const [count,setCount] = useState('');
  const [setScore, setSetScore] = useState('');
  return(
    <>
      <div className="flex flex-row w-full">
        <div className="flex flex-col w-1/3 border items-center">
          <ExerciseCells exerciseType={exerciseType} setExerciseList={setExerciseList} exerciseList={exerciseList}/>
        </div>
        <div className="flex flex-col border items-center w-1/5">
          <ExerciseInput name='Volume' setting={setVolume}/>
        </div>
        <div className="flex flex-col border items-center w-1/5">
          <ExerciseInput name='Count' setting={setCount}/>
        </div>
        <div className="flex flex-col border items-center w-1/5">
          <ExerciseInput name='Set' setting={setSetScore}/>
        </div>
        <div className="flex flex-col border items-center w-1/5">
          <button onClick={() => {
            props.setExerciseOneList([exerciseList.toString(), volume,count, setScore])
            let temporary = volume*setScore*count
            props.setTodayScore(props.todayScore + temporary)
            props.setButtonCount(props.buttonCount+1)
            }}>입력하기</button>
        </div>
      </div>

    </>
  )
}

export default ExerciseBody;