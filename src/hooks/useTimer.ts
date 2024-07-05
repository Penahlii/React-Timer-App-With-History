import { useState, useEffect, useRef, useMemo } from "react";

const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [history, setHistory] = useState<number[]>([]);
  const timerRef = useRef<number | null>(null);

  const totalTime = useMemo(
    () => history.reduce((acc, curr) => acc + curr, 0),
    [history]
  );

  useEffect(() => {
    if (isRunning) {
      timerRef.current = window.setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && timerRef.current !== null) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current !== null) clearInterval(timerRef.current);
    };
  }, [isRunning]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
    setHistory([]);
  };

  const stop = () => {
    setIsRunning(false);
    setHistory([...history, time]);
    setTime(0);
  };

  return { time, isRunning, history, totalTime, startStop, reset, stop };
};

export default useTimer;
