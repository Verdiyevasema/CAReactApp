import React from "react";
import "./index.scss";
const PrimaryButton = (props) => {

  const handleClick = () => {
    console.log("!");
  };
  return (
    <button
      onClick={() => handleClick()}
      className={
        props.bg === "red" ? "primary-btn bg-red" : "primary-btn"
      }
    >
      {props.btnTextContent}
    </button>
  );
};

export default PrimaryButton;
