import { useRef, useState } from 'react';


function Counter() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

    const Inc = () => {
      countRef.current = countRef.current + 1;
      setCount(countRef.current);
    }
    const Dec = () => {
      countRef.current = countRef.current - 1;
      setCount(countRef.current);
    }
  return (
    <div className="App">
      <h1> Counter App</h1>
      <h2>
        {count}
      </h2>
      <button onClick={Dec}>-</button>
      <button onClick={Inc}>+</button>
    </div>
  );
}

export default Counter;