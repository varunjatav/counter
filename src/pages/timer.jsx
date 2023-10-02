import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [timer, setTimer] = useState(0);

  
  const start = () => {
      setTimer((pre) => pre + 1)
  }
  useEffect(() => {
    setInterval( start, 1000)
  },[timer])
  
  return (
    <div>
        <h1>Timer App</h1>
        <h1>{timer}</h1>
        <button onClick={start}>Start</button>
    </div>
  )
}

export default Timer