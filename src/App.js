import "./App.css";
import { increment, decrement, addValue, asyncAddValue } from "./actions/index";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const App = () => {
  const [incrementAmount, setIncrementAmount] = useState("2");
  const myState = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const incrementValue = Number(incrementAmount);

  return (
    <div className="container">
      <div>
        <h1>Counter Application</h1>
        <div className="section-1">
          <button onClick={() => dispatch(decrement)}>-</button>
          <h1>{myState}</h1>
          <button onClick={() => dispatch(increment)}>+</button>
        </div>

        <div className="section-2">
          <input
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <div>
            <button onClick={() => dispatch(addValue(incrementValue))}>
              Add Value
            </button>

            <button onClick={() => dispatch(asyncAddValue(incrementValue))}>
              Add Asynchronously
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
