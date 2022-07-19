import classes from "./Menu.module.scss";
import { useNavigate } from "react-router-dom";
import { useTimer } from "../contexts/timer-context";
import { useEffect } from "react";
import ActiveSession from "../components/ActiveSession";

const Menu = () => {
  const {
    workTime,
    restTime,
    sets,
    calculateTotalSeconds,
    convertedWorkTime,
    convertedRestTime,
    convertedTotalTime,
    activeSession,
    setActiveSession,
  } = useTimer();

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
    setActiveSession(true);
  };

  return (
    <>
      {!activeSession && (
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
      {activeSession && <ActiveSession />}
    </>
  );
};

export default Menu;
