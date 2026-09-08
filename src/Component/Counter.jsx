
import { useEffect, useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log(count);
    }, []);


    return (
        <div>
            <h1>Counter App</h1>
            <h3>Count:{count}</h3>
            <button onClick={() => setCount(count + 1)} style={{ background: "lightgreen" }}>Incriment</button>
            <button onClick={() => setCount(count > 0 ? count - 1 : 0)} style={{ background: "lightgreen" }}>Decriment</button>



        </div>
    );
};
export default Counter;