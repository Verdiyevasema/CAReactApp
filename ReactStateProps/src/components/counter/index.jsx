
import Increment from "./Increment";
import Decrement from "./Decrement";
import InputByValue from "../input";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Increment count={count} setCount={setCount} />
      <h1>{count}</h1>
      <Decrement count={count} setCount={setCount} />
      <InputByValue count={count} setCount={setCount} />
    </>
  );
};

export default Counter;
