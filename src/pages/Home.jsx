import React from "react"
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  return(
    <>
      <div className=" w-screen h-screen bg-stone-800">
        <div className=" h-screen flex justify-center items-center">
          <button className=' bg-green-500 max-md:mr-4 mr-10 w-1/4 h-1/4 text-white font-semibold text-xl'
          onClick={() => {navigate('/exercise')}}>오늘의 운동</button>
          <button className=' bg-green-500 max-md:ml-4 ml-10 w-1/4 h-1/4 font-semibold text-white text-xl'
          onClick={() => {navigate('/calender')}}>내 운동기록 확인하기</button>
        </div>
      </div>
    </>
  )
}

export default Home;