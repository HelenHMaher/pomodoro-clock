import React, { useState, useEffect } from "react";
import "./App.css";

export const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerRunning, setRunning] = useState(false);
  const [timerType, setTimerType] = useState("session");
  const [timerTime, setTimerTime] = useState(1500);

  useEffect(() => {
    let startTimer = null;
    if (timerRunning && timerTime >= 0) {
      startTimer = setInterval(() => {
        setTimerTime((timerTime) => timerTime - 1);
      }, 1000);
    }
    if (timerTime < 0) {
      if (timerType === "session") {
        setTimerType("break");
        setTimerTime(breakLength * 60);
      } else if (timerType === "break") {
        setTimerType("session");
        setTimerTime(sessionLength * 60);
      }
    } else if (!timerRunning) {
      clearInterval(startTimer);
    }
    return () => clearInterval(startTimer);
  }, [timerRunning, timerTime, timerType, breakLength, sessionLength]);

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

  const handleReset = () => {
    setBreakLength(5);
    setSessionLength(25);
    setRunning(false);
    setTimerType("session");
    setTimerTime(1500);
  };

  const toggle = () => {
    setRunning(!timerRunning);
  };

  const toClock = () => {
    let minutes = Math.floor(timerTime / 60);
    let seconds = timerTime - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return minutes + ":" + seconds;
  };

  const LengthControl = (props) => {
    return (
      <div className="length-control">
        <div id={props.labelID}>{props.label}</div>
        <button id={props.incrementID} onClick={props.handleClick} value="+">
          +
        </button>
        <div id={props.lengthID}>{props.length}</div>
        <button id={props.decrementID} onClick={props.handleClick} value="-">
          -
        </button>
      </div>
    );
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
          labelID="break-label"
          label="Break Length"
          decrementID="break-decrement"
          incrementID="break-increment"
          lengthID="break-length"
          length={breakLength}
          handleClick={breakLengthControl}
        />
        <div className="timer-face">
          <div id="timer-label">{timerType}</div>
          <div id="time-left">{toClock()}</div>
        </div>
        <div className="timer-control">
          <button id="start_stop" onClick={toggle}>
            Play/Pause
          </button>
          <button id="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      <footer className="App-footer">
        <p>Helen Maher 2020</p>
      </footer>
    </div>
  );
};

export default App;
