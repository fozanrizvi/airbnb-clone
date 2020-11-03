import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";

function Header() {
  return (
    <div className="header">
      <img
        className="header_icon"
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
        alt=""
      />

      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
