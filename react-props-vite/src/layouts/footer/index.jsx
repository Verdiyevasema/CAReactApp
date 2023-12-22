import React from "react";
import PrimaryButton from "../../components/button";
import "./index.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <h2 className="footerText"> This is Footer</h2>
          <PrimaryButton btnTextContent={"Footer Btn"} bg={"orange"} />
        </div>
        <PrimaryButton />
      </div>
    </footer>
  );
};

export default Footer;
