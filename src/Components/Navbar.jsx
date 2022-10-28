import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        background: "gray",
        padding: "1rem 0",
        margin: "0 auto",
      }}
    >
      <ul
        style={{
          width: "70%",
          display: "flex",
          margin: "0 auto",

          flexWrap: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          listStyle: "none",
        }}
      >
        {[
          { name: "Home", link: "/" },
          { name: "User", link: "user" },
          { name: "Profile", link: "profile" },
        ].map(({ name, link }) => (
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "1rem",
            }}
            to={`${link}`}
            key={name}
          >
            {name}
          </Link>
        ))}
      </ul>
    </div>
  );
};
