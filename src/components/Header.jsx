import React from "react";
import thunder from "../images/thunder.ico";
import "../scss/header.scss";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <a href="#">
        <img src={thunder} alt="logo" className="header__logo" />
      </a>
      <Navbar />
    </header>
  );
}

export default Header;

