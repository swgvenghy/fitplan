const ExerciseCells = (props) => {
  const exerciseType = props.exerciseType
  return(
    <select className=" ml-1 border border-gray-400" onChange={(e) => {
      let temporary = [...props.exerciseList];
      temporary.push(e.target.value)
      props.setExerciseList(temporary);
    }}>
      <option value={'default'}>운동 이름</option>
        {exerciseType && exerciseType.map((item,i) => {
          return(
            <option value={item} key={item}>{exerciseType[i]}</option>
          )
        })}
    </select>
  )
}

export default ExerciseCells;