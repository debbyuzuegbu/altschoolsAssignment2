import React from "react";

export const ErrorBoundary = ({ err }) => {
  return (
    <div style={{ background: "red", width: "300px", display: "flex" }}>
      {err}
    </div>
  );
};
