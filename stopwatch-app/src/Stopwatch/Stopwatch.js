import React, { useState, useEffect } from "react";
import styles from './Stopwatch.module.scss'

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  const formatTime = (time) => {
    const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
    const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
    const milliseconds = ("0" + ((time / 10) % 100)).slice(-2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };


  return (
    <div className={styles.stopwatch}>
        <h1>Stopwatch App</h1>
      <div className={styles.numbers}>
        <span>{formatTime(time)}</span>
      </div>
      <div className={styles.timer}>
        <button className={styles.button} onClick={() => setRunning(true)}><span>Start</span></button>
        <button className={styles.button} onClick={() => setRunning(false)}><span>Stop</span></button>
        <button className={styles.button} onClick={() => setTime(0)}><span>Reset</span></button>       
      </div>
    </div>
  );
};

export default Stopwatch;
