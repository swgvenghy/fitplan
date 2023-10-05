const RenderDays = () => {
  const day = ['일', '월', '화', '수', '목', '금', '토'];
  const days = [];

  for(let i = 0; i<7; i++) {
    if (i === 0) {
      days.push(
        <div className=" w-52 font-bold text-center text-red-600 ">{day[i]}</div>
      )
    }
    else if (i === 6) {
      days.push(
        <div className=" w-52 font-bold text-center text-blue-600 ">{day[i]}</div>
      )
    }
    else{
      days.push(
        <div className=" w-52 font-bold text-center ">{day[i]}</div>
      )
    }
  }

  return(
    <div className="flex flex-row w-3/4 h-3/4">{days}</div>
  )
}

export default RenderDays;