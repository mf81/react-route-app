import React from "react";

const ValuesOfXY = props => {
  return (
    <div>
      <h1>XY values</h1>
      <p>X: {props.valueOfX}</p>
      <p>Y: {props.valueOfY}</p>
    </div>
  );
};

export default ValuesOfXY;
