import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
import "./Counter.css";
//import styles from './Counter.module.css'

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counterlayout">
      <div>
        <button
          className="counterbutton"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>

        <div className="counterfigure">{count}</div>
        <button
          className="counterbutton"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
}
