import React from "react";
import logo from "./images/mestologo.svg";

function Header() {
  return (
    <header className="page__header header">
      <img src={logo} alt="Логотип" className="header__logo" />
    </header>
  );
}

export default Header;