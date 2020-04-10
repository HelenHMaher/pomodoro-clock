import React from "react";
import "./App.css";
import LengthControl from "./LengthControl";
import TimerFace from "./TimerFace";
import TimerControl from "./TimerControl";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Pomodoro Clock</p>
      </header>
      <div className="clock-wrapper">
        <LengthControl
          labelID="session-label"
          label="Break Length"
          decrementID="session-decrement"
          incrementID="session-increment"
          lengthID="session-length"
          length="--"
          handleClick="--"
        />
        <LengthControl
          labelID="break-length"
          label="Session Length"
          decrementID="break-decrement"
          incrementID="break-increment"
          lengthID="session-length"
          length="--"
          handleClick="--"
        />
        <TimerFace timerType="--" clock="--" />
        <TimerControl handlePlayPause="--" handleReset="--" />
      </div>
      <footer className="App-footer">
        <p>Helen Maher 2020</p>
      </footer>
    </div>
  );
};

export default App;
