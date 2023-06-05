import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button>Increment</button>
        <button>Increase by 5</button>
        <button>Decrement</button>
      </div>
      <button>Toggle Counter</button>
    </main>
  );
};

export default Counter;
