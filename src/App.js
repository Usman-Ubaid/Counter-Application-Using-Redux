import { increment, decrement } from "./actions/index";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const myState = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter Application</h1>
      <div>
        <button onClick={() => dispatch(decrement)}>-</button>
        <h1>{myState}</h1>
        <button onClick={() => dispatch(increment)}>+</button>
      </div>
      <div>
        <h3>Add Value</h3>
        <input />
      </div>
      <div>
        <h3>Adding Asynchronously</h3>
        <input />
      </div>
    </div>
  );
};

export default App;
