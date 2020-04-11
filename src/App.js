import React, { useState } from "react";
import "./App.css";
import LengthControl from "./LengthControl";
import TimerFace from "./TimerFace";
import TimerControl from "./TimerControl";

export const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerState, setTimerState] = useState("stopped");
  const [timerType, setTimerType] = useState("session");
  const [timerTime, setTimerTime] = useState(1500);

  const breakLengthControl = (e) =>
    lengthControl("break", e.currentTarget.value, breakLength, setBreakLength);

  const sessionLengthControl = (e) =>
    lengthControl(
      "session",
      e.currentTarget.value,
      sessionLength,
      setSessionLength
    );

  const lengthControl = (breakSession, sign, currentLength, setFunction) => {
    if (timerState === "stopped" && timerType !== breakSession) {
      if (sign === "-" && currentLength > 1) {
        setFunction(currentLength - 1);
      } else if (sign === "+" && currentLength < 60) {
        setFunction(currentLength + 1);
      }
    } else if (timerState === "stopped" && timerType === breakSession) {
      if (sign === "-" && currentLength > 1) {
        setFunction(currentLength - 1);
        setTimerTime(timerTime - 60);
      } else if (sign === "+" && currentLength < 60) {
        setFunction(currentLength + 1);
        setTimerTime(timerTime + 60);
      }
    } else {
      return;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Pomodoro Clock</p>
      </header>
      <div className="clock-wrapper">
        <LengthControl
          labelID="session-label"
          label="Session Length"
          decrementID="session-decrement"
          incrementID="session-increment"
          lengthID="session-length"
          length={sessionLength}
          handleClick={sessionLengthControl}
        />
        <LengthControl
          labelID="break-length"
          label="Break Length"
          decrementID="break-decrement"
          incrementID="break-increment"
          lengthID="break-length"
          length={breakLength}
          handleClick={breakLengthControl}
        />
        <TimerFace timerType={timerType} clock="--" />
        <TimerControl handlePlayPause="--" handleReset="--" />
      </div>
      <footer className="App-footer">
        <p>Helen Maher 2020</p>
      </footer>
    </div>
  );
};

export default App;
