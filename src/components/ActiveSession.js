import classes from "./ActiveSession.module.scss";
import { useTimer } from "../contexts/timer-context";
import { useEffect, useState } from "react";
import PlayPauseControls from "./PlayPauseControls";
import SummaryScreen from "./SummaryScreen";
import ProgressBar from "./ProgressBar";

const ActiveSession = () => {
  const { workTime, restTime, sets, convertToTime } = useTimer();

  const [activeWorkTime, setActiveWorkTime] = useState(workTime);
  const [activeRestTime, setActiveRestTime] = useState(restTime);
  const [setsRemaining, setSetsRemaining] = useState(sets);
  const [currentSet, setCurrentSet] = useState(1);
  const [isWorking, setIsWorking] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const convertedActiveWorkTime = convertToTime(activeWorkTime);
  const convertedActiveRestTime = convertToTime(activeRestTime);

  const percentageOfEachSet = 100 / sets;
  const [currentPercentage, setCurrentPercentage] =
    useState(percentageOfEachSet);

  useEffect(() => {
    let timer;
    if (!isPaused && setsRemaining > 0 && isWorking) {
      timer = setInterval(() => {
        setActiveWorkTime((prevState) => prevState - 1);
      }, 1000);
    } else if (!isPaused && setsRemaining > 0 && !isWorking) {
      timer = setInterval(() => {
        setActiveRestTime((prevState) => prevState - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isPaused, isWorking, setsRemaining]);

  useEffect(() => {
    if (activeWorkTime === 0) {
      setSetsRemaining((prevState) => prevState - 1);
      setIsWorking(false);
      setActiveWorkTime(workTime);
    } else if (activeRestTime === 0) {
      setCurrentSet((prevState) => prevState + 1);
      setCurrentPercentage((prevState) => prevState + percentageOfEachSet);
      setIsWorking(true);
      setActiveRestTime(restTime);
    }
  }, [activeWorkTime, activeRestTime]);

  return (
    <>
      {setsRemaining > 0 && (
        <div
          className={classes.container}
          style={{ backgroundColor: isWorking ? "#dd7777" : "#77a0dd" }}
        >
          <p className={classes.statusMessage}>
            {isWorking ? "WORK." : "REST.  GET READY IN..."}
          </p>
          <p className={classes.remainingTime}>
            {isWorking ? convertedActiveWorkTime : convertedActiveRestTime}
          </p>
          <ProgressBar
            currentSet={currentSet}
            isWorking={isWorking}
            currentPercentage={currentPercentage}
          />
          <PlayPauseControls
            isWorking={isWorking}
            setIsPaused={setIsPaused}
            isPaused={isPaused}
          />
        </div>
      )}
      {setsRemaining === 0 && <SummaryScreen />}
    </>
  );
};

export default ActiveSession;
