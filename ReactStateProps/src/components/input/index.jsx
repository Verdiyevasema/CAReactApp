import React, { useState } from "react";

const InputByValue = ({count, setCount})=> {
    const [InputValue, setInputValue] = useState(0);
  return (
    <div>
      <input type="number"
      value={InputValue} 
      onChange = {(e) =>setInputValue(e.target.valueAsNumber)}/>
      <button onClick={() => setCount(count + +InputValue)}>Inc By Value</button>
    </div>
  );
}

export default InputByValue;
