import React from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="App">
        <h1>Increment And Decrement</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">
          <button onClick={() => dispatch(decNumber())}>-</button>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={myState}
          />
          <button onClick={() => dispatch(incNumber())}>+</button>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};
export default App;
