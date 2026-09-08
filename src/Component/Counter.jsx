import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
        console.log(count);
  }, [count]);

  return (
    <div>
      <h1>Counter App</h1>
      <h3>count: {count}</h3>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default Counter;