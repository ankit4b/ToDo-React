import { useReducer, useState } from "react";

export default function Counter() {
  const reduce = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + action.payload;
      case "decrement":
        return state - action.payload;
    }
  };

  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reduce, 0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr />
      <h1>Reducer example ---</h1>
      <hr />
      <h1>Reducer Counter : {state}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
    </>
  );
}
