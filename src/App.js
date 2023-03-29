import { increment, decrement, addvalue } from "./actions/index";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const App = () => {
  const [incrementAmount, setIncrementAmount] = useState("2");
  const myState = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const incrementValue = Number(incrementAmount);

  return (
    <div>
      <h1>Counter Application</h1>
      <div>
        <button onClick={() => dispatch(decrement)}>-</button>
        <h1>{myState}</h1>
        <button onClick={() => dispatch(increment)}>+</button>
      </div>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />

        <button onClick={() => dispatch(addvalue(incrementValue))}>
          Add Value
        </button>
      </div>
      <div>
        <h3>Adding Asynchronously</h3>
        <input />
      </div>
    </div>
  );
};

export default App;
