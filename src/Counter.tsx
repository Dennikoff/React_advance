import { useState } from "react";
import classes from "./Counter.module.scss";

console.dir(classes);

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className={classes.green}>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((val) => val + 1)}>increment</button>
    </div>
  );
};
