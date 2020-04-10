import React from "react";
import PropTypes from "prop-types";

export const TimerFace = (props) => {
  const { timerType, clock } = props;
  return (
    <div className="timer-face">
      <div id="timer-label">{timerType}</div>
      <div id="countdown">{clock}</div>
    </div>
  );
};

export default TimerFace;

TimerFace.propTypes = {
  timerType: PropTypes.string.isRequired,
  clock: PropTypes.func.isRequired,
};
