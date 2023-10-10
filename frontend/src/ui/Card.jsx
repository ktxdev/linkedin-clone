import React from "react";

function Card({ children, className }) {
  return (
    <div className={`bg-white shadow rounded-md ${className}`}>{children}</div>
  );
}

export default Card;
