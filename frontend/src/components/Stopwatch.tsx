import React, { useState, useEffect } from 'react';

const Stopwatch: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startStop = () => {
    setIsRunning((prevState) => !prevState);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time: number): string => {
    const milliseconds: number = Math.floor(time % 1000);
    const seconds: number = Math.floor((time / 1000) % 60);
    const minutes: number = Math.floor((time / (1000 * 60)) % 60);
    const formattedMilliseconds: string = milliseconds < 100 ? '0' + milliseconds : milliseconds.toString();
    const formattedSeconds: string = seconds < 10 ? '0' + seconds : seconds.toString();
    const formattedMinutes: string = minutes < 10 ? '0' + minutes : minutes.toString();
    return `${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{formatTime(time)}</p>
      <button onClick={startStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
