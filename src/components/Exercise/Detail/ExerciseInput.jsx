const ExerciseInput = (props) => {
  const name = props.name
  return(
    <input placeholder={name} onChange={(e) => {props.setting(e.target.value)}}></input>
  )
}
export default ExerciseInput