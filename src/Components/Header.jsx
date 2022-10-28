import { NavLink } from "react-router-dom";

import "./Header.css";


const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
        <li >
            <NavLink
              className="Nav1"
              to="aboutUs"
            >
            MailsToYou
            </NavLink>
          </li>
          <li >
            <NavLink
              className="Nav2"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li >
            <NavLink
              className="Nav3"
              to="user"
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
