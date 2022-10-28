import React from "react";
import { Link } from "react-router-dom";

const UsersDetails = ({ data, isLoading }) => {
  if (isLoading) {
    return <h1>Loading..</h1>;
  }
  
  return (
    <div
      style={{
        display: "flex",
        margin: "0 auto",
        justifyContent: "center",
        gap: "1rem",
        width: "100%",
        maxWidth: "900px",
        flexWrap: "wrap",
      }}
    >
      {data.map((user) => (
        <Link
          to="profile"
          style={{
            textDecoration: "none",
            fontFamily: 'Poppins',
            color: "#dafff6",
            background: "#006b6c",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
            borderRadius: "10px",
            position: "relative",
            marginTop: "10px"
          }}
          key={user.email}
        >
          <Link to={`profile/${user.login.uuid}`}>
          <div style={{}}>
            <span>
              <img
                src={user.picture.medium}
                style={{ minWidth: "200px", borderRadius: "5px" }}
                alt=""
              />
            </span>
          </div>
          </Link>
          <div style={{boxSizing:"border-box", padding:"0.1em"}}>
          <div style={{}}>Name: {user.name.first} {user.name.last}</div>
          <div style={{}}>Email: {user.email} </div>
          <div style={{}}>Phone: {user.phone} </div>
          </div>
          
        </Link>
      ))}
    </div>
  );
};
export default UsersDetails;
