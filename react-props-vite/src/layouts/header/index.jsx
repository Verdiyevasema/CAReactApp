import React from "react";
import PrimaryButton from "../../components/button";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <h2 className="headerText">This is Header</h2>
          <PrimaryButton btnTextContent={"Header Btn"} bg={"orange"} />
        </div>

      </div>
    </header>
  );
};

export default Header;
