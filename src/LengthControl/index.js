import React from "react";
import propTypes from "prop-types";

export const LengthControl = (props) => {
  const {
    labelID,
    label,
    decrementID,
    incrementID,
    lengthID,
    length,
    handleClick,
  } = props;
  return (
    <div className="length-control">
      <div id={labelID}>{label}</div>
      <div id={incrementID} onClick={handleClick}>
        +
      </div>
      <div id={lengthID}>{length}</div>
      <div id={decrementID} onClick={handleClick}>
        -
      </div>
    </div>
  );
};

export default LengthControl;

LengthControl.propTypes = {
  labelID: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  decrementID: propTypes.string.isRequired,
  incrementID: propTypes.string.isRequired,
  lengthID: propTypes.string.isRequired,
  length: propTypes.number.isRequired,
  handleClick: propTypes.func.isRequired,
};
