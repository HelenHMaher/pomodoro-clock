import React from "react";
import PropTypes from "prop-types";

export const TimerFace = (props) => {
  const { timerType, clock } = props;

  const toClock = () => {
    let minutes = Math.floor(clock / 60);
    let seconds = clock - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return minutes + ":" + seconds;
  };
  return (
    <div className="timer-face">
      <div id="timer-label">{timerType}</div>
      <div id="time-left">{toClock()}</div>
    </div>
  );
};

export default TimerFace;

TimerFace.propTypes = {
  timerType: PropTypes.string.isRequired,
  clock: PropTypes.number.isRequired,
};
