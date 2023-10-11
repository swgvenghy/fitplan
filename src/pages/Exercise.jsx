import { useEffect, useState } from "react";
import ExerciseBody from "../components/Exercise/ExerciseBody";
import ExerciseHeader from "../components/Exercise/ExerciseHeader";
import { useNavigate } from "react-router-dom";

const Exercise = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [todayScore, setTodayScore] = useState(0);
  const [buttonCount, setButtonCount] = useState(0);
  const [exerciseOneList, setExerciseOneList] = useState([]);
  const [listExercise, setListExercise] = useState([]);
  const today = new Date();
  const navigate = useNavigate();
  
  useEffect(() => {
    let copy = [...listExercise]
    copy.push(exerciseOneList)
    setListExercise(copy)
    console.log(listExercise)
  },[exerciseOneList])

  const localData = {
    'day':today,
    'list':listExercise,
    'score':todayScore
  }
  
  return(
    <div className="mx-5">
      <ExerciseHeader setSelectedValue={setSelectedValue} todayScore={todayScore} setButtonCount={setButtonCount} buttonCount={buttonCount}/>
      {Array(buttonCount).fill(
        <ExerciseBody exerciseOneList={exerciseOneList}
          setExerciseOneList={setExerciseOneList} selectedValue={selectedValue} 
          setTodayScore={setTodayScore} todayScore={todayScore}  setButtonCount={setButtonCount}
          buttonCount={buttonCount}/>
      )}
      {buttonCount !== 0 ? 
      <button
      onClick={() => {
        localStorage.setItem('exercise',JSON.stringify(localData));
        alert('오늘 운동 끝 고생하셨습니당!')
        navigate('/')
      }}
      className="w-full flex justify-center items-center font-bold">오늘 운동 끝!</button> :
      ''}
    </div>
  )
}

export default Exercise;