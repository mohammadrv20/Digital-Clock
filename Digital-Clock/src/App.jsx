import { useEffect, useState } from 'react'
import './App.css'

export default function App(){

  const [time , setTime] = useState(new Date())
  console.log(time.getHours())

  useEffect(() =>{
    const intervalId = setInterval(() =>{setTime(new Date())} , 1000)

    return () =>{
      clearInterval(intervalId)
    }
  } , [])

  function formatTime(){
    let hour = String(time.getHours()).padStart(2 , "0")
    const minutes = String(time.getMinutes()).padStart(2 , "0")
    const seconds = String(time.getSeconds()).padStart(2 , "0")
    const meridiem = hour >= 12 ? "PM" : "AM"

    hour = hour % 12 || 12 ;
    return `${hour}:${minutes}:${seconds}  ${meridiem}`
  }

  return(
    <>
    <div
     className='bg-[url("/public/image.jpg")]
      h-screen bg-cover
      flex
      justify-center
      items-center'
    >
      <h1
       className='
     text-white 
       text-7xl 
       text-center 
       shadow-2xs 
       backdrop-blur-xs 
       p-3
       font-mono '
       >{formatTime()}</h1>
    </div>
    </>
  )
}