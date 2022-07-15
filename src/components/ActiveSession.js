import classes from "./ActiveSession.module.scss";
import { useTimer } from "../contexts/timer-context";
import { useEffect, useState } from "react";
import PlayPauseControls from "./PlayPauseControls";

const ActiveSession = () => {
  const { isPaused, workTime, restTime } = useTimer();

  const [activeWorkTime, setActiveWorkTime] = useState(workTime);
  const [activeRestTime, setActiveRestTime] = useState(restTime);
  const [isWorking, setIsWorking] = useState(true);

  useEffect(() => {
    let timer;
    if (!isPaused && isWorking) {
      timer = setInterval(() => {
        setActiveWorkTime((prevState) => prevState - 1);
        console.log("working...");
      }, 1000);
    } else if (!isPaused && !isWorking) {
      timer = setInterval(() => {
        setActiveRestTime((prevState) => prevState - 1);
        console.log("resting...");
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isPaused, isWorking]);

  useEffect(() => {
    if (activeWorkTime === 0) {
      console.log("work time ended!");
      setIsWorking(false);
      setActiveWorkTime(workTime);
    } else if (activeRestTime === 0) {
      console.log("rest time ended!");
      setIsWorking(true);
      setActiveRestTime(restTime);
    }
  }, [activeWorkTime, activeRestTime]);

  return (
    <div
      className={classes.container}
      style={{ backgroundColor: isWorking ? "#dd7777" : "#77a0dd" }}
    >
      <p className={classes.statusMessage}>
        {isWorking ? "WORK." : "REST.  GET READY IN..."}
      </p>
      <p className={classes.remainingTime}>
        {isWorking ? activeWorkTime : activeRestTime}
      </p>
      <PlayPauseControls />
    </div>
  );
};

export default ActiveSession;
