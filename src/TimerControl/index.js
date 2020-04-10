import React from "react";
import PropTypes from "prop-types";

export const TimerControl = (props) => {
  const { handlePlayPause, handleReset } = props;
  return (
    <div className="timer-control">
      <div id="start_stop" onClick={handlePlayPause}>
        Play/Pause
      </div>
      <div id="reset" onClick={handleReset}>
        Reset
      </div>
    </div>
  );
};

export default TimerControl;

TimerControl.propTypes = {
  handlePlayPause: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};
