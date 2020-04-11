import React, { useState } from "react";
import "./App.css";
import LengthControl from "./LengthControl";
import TimerFace from "./TimerFace";
import TimerControl from "./TimerControl";

export const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerRunning, setRunning] = useState(false);
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
    if (timerRunning === false && timerType !== breakSession) {
      if (sign === "-" && currentLength > 1) {
        setFunction(currentLength - 1);
      } else if (sign === "+" && currentLength < 60) {
        setFunction(currentLength + 1);
      }
    } else if (timerRunning === false && timerType === breakSession) {
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

  const handlePlayPause = () => {
    setRunning(!timerRunning);
  };

  const handleReset = () => {
    setBreakLength(5);
    setSessionLength(25);
    setRunning(false);
    setTimerType("session");
    setTimerTime(1500);
  };

  const startTimer = () => {
    const start = new Date().getTime();
    let elapsed = "0.0";

    window.setInterval(() => {
      const time = new Date().getTime() - start;
      elapsed = Math.floor(time / 100) / 10;
      if (Math.round(elapsed) === elapsed) {
        elapsed += ".0";
      }
      document.title = elapsed;
    }, 100);
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
        <TimerControl
          handlePlayPause={handlePlayPause}
          handleReset={handleReset}
        />
      </div>
      <footer className="App-footer">
        <p>Helen Maher 2020</p>
      </footer>
    </div>
  );
};

export default App;
