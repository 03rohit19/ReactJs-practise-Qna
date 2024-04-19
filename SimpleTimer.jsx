import { useEffect, useState } from "react";

const SimpleTimer = () => {
  const [duration, setDuration] = useState(0); // To hold user input for duration
  const [time, setTime] = useState(0); // To hold current time of the timer
  const [isRunning, setIsRunning] = useState(false); // To manage timer status

  useEffect(() => {
    let interval = null;

    if (isRunning && time < duration) {
      interval = setInterval(() => {
        setTime((time) => time + 1); // Increment time
      }, 1000);
    } else if (!isRunning || time >= duration) {
      clearInterval(interval); // Stop the timer
    }

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [isRunning, time, duration]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);

  return (
    <>
      <h1>Hello there!</h1>
      <input
        type="number"
        id="seconds-input"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
      />
      <button id="start" disabled={isRunning} onClick={startTimer}>
        Start
      </button>
      <button id="stop" disabled={!isRunning} onClick={stopTimer}>
        Stop
      </button>
      <div id="timer">{time}</div>
    </>
  );
};

export default SimpleTimer;
