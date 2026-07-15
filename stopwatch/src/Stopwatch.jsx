import React, { useEffect, useRef, useState } from 'react'

const Stopwatch = () => {
const[isRunning,setIsRunning]=useState(false);
const[elapsedtime,setElapsedtime]=useState(0);//total number of milliseconds
const intervalIdRef=useRef(null);//stores the id of active set interval
const startTimeRef=useRef(0);// remember exact moment you clicked the start button

function start()
{
    if(!isRunning) //if stopwatch is not currently running
 setIsRunning(true);

 startTimeRef.current=Date.now()-elapsedtime;
 console.log(startTimeRef.current);

 intervalIdRef.current=setInterval(()=>{
    setElapsedtime(Date.now()-startTimeRef.current);
 },10);
 }

function stop()
{

    setIsRunning(0);
    clearInterval(intervalIdRef.current);
}
function reset()
{
    clearInterval(intervalIdRef.current);
   setElapsedtime(0);//elapsed time 0 reset everything
   setIsRunning(false);
   startTimeRef.current=0;
}
function formatTime()
{
    let hours=Math.floor(elapsedtime/3600000);
    let minutes=Math.floor((elapsedtime/60000)%60);
    let seconds=Math.floor((elapsedtime/1000)%60);
    let milliseconds=Math.floor((elapsedtime%1000)/10)

     hours=String(hours).padStart(2,'0');
 minutes=String(minutes).padStart(2,'0');
 seconds=String(seconds).padStart(2,'0');

    return `${hours}:${minutes}:${seconds}`;
}
  return (
    <>
      <div className='stopwatch'>
        <div className='display'>{formatTime()}</div>
        <div className='controls'>
 <button onClick={start} className='start-button'>
        START
    </button>
    <button onClick={stop} className='stop-button'>
        STOP
    </button>
    <button onClick={reset} className='reset-button'>
        RESET
    </button>
        </div>
      </div>
    </>
  )
}

export default Stopwatch
