import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <div className="square" onClick={onClick}>
      {value ?? ""}
    </div>
  );
};

export default Square;
