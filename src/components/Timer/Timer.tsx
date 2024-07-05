import React, { useRef } from "react";
import {
  TimerContainer,
  TimerDisplay,
  Button,
  HistoryContainer,
  HistoryItem,
} from "./Timer.styles";
import useTimer from "../../hooks/useTimer";

const Timer: React.FC = () => {
  const { time, isRunning, history, totalTime, startStop, reset, stop } =
    useTimer();
  const startStopButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleStartStop = () => {
    startStop();
    if (startStopButtonRef.current) startStopButtonRef.current.focus();
  };

  return (
    <TimerContainer>
      <TimerDisplay>{time}s</TimerDisplay>
      <Button ref={startStopButtonRef} onClick={handleStartStop}>
        {isRunning ? "Stop" : "Start"}
      </Button>
      <Button onClick={stop} disabled={!isRunning}>
        Stop and Record
      </Button>
      <Button onClick={reset}>Reset</Button>
      <HistoryContainer>
        <h3>History</h3>
        {history.map((entry, index) => (
          <HistoryItem key={index}>{entry}s</HistoryItem>
        ))}
      </HistoryContainer>
      <div>Total Time: {totalTime}s</div>
    </TimerContainer>
  );
};

export default Timer;
