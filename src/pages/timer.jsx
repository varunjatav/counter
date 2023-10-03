import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const timerRef = useRef(null);


  useEffect(() => {
    timerRef.current =  setInterval(() => {
      setSecond((preSecond) => {
        console.log(preSecond);
        if(preSecond === 59){
          setMinutes((preMinutes)=> {
            // console.log(preMinutes);
            if(preMinutes === 59){
              setHours((preHours) => preHours + 1);
              return 0;
            }else{
              return preMinutes+ 1;
            }
          });
          return 0;
        }
        else{
         return preSecond+1;
        }
      })
    }, 1000)

    return () => clearInterval(timerRef.current)
  },[])
  const Restart = () => {
    setHours(0);
    setMinutes(0);
    setSecond(0);
  }
  
  const stop = () => {
    
    clearInterval(timerRef.current);
   }

   
  
  return (
    <div>
        <h1>Timer App</h1>
        <h1>{hours < 10 ? "0"+hours : hours}:{minutes < 10 ? "0"+minutes : minutes}:{second < 10 ? "0"+ second : second}</h1>
        <button onClick={Restart}>Restart</button>
        <button onClick={stop}>Stop</button>
    </div>
  )
}

export default Timer