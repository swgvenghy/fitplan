const ExerciseSelect = (props) => {
  const mainValueItems = ['back','chest','sholder','biceps','triceps','upper','lower']
  const itemNamesList = ['등','가슴','어깨','이두','삼두','상체','하체'];

  return(
    <select className=" ml-1 border border-gray-400 w-fit" onChange={(e) => props.setSelectedValue(e.target.value)}>
      <option value={'default'}>운동 부위 선택</option>
        {mainValueItems.map((item,i) => {
          return(
            <option value={item} key={item}>{itemNamesList[i]}</option>
          )
        })}
    </select>
  )
}
export default ExerciseSelect;