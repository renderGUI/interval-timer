import classes from "./Menu.module.scss";
import { useNavigate } from "react-router-dom";
import { useTimer } from "../contexts/timer-context";
import { useEffect, useState } from "react";
import ActiveSession from "../components/ActiveSession";

const Menu = () => {
  // console.log("Menu component re-rendered.");
  const {
    workTime,
    restTime,
    sets,
    calculateTotalSeconds,
    convertedWorkTime,
    convertedRestTime,
    convertedTotalTime,
  } = useTimer();

  const [timerStarted, setTimerStarted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    calculateTotalSeconds(workTime, restTime, sets);
  }, [workTime, restTime, sets]);

  const workDurationHandler = () => {
    navigate("/work-duration");
  };

  const restDurationHandler = () => {
    navigate("/rest-duration");
  };

  const setsAmountHandler = () => {
    navigate("/sets-amount");
  };

  const startHandler = () => {
    setTimerStarted(true);
  };

  return (
    <>
      {!timerStarted && (
        <div className={classes.container}>
          <h2 className={classes.totalTime}>{convertedTotalTime}</h2>
          <div className={classes.subcontainer}>
            <button
              onClick={workDurationHandler}
              className={classes.optionsButton}
            >
              {convertedWorkTime}
            </button>
            <button onClick={startHandler} className={classes.goButton}>
              GO
            </button>
            <button
              onClick={restDurationHandler}
              className={classes.optionsButton}
            >
              {convertedRestTime}
            </button>
          </div>
          <div className={classes.subcontainer}>
            <button
              onClick={setsAmountHandler}
              className={classes.optionsButton}
            >
              x{sets}
            </button>
          </div>
        </div>
      )}
      {timerStarted && <ActiveSession />}
    </>
  );
};

export default Menu;
