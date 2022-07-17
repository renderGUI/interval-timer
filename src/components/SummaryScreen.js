import classes from "./SummaryScreen.module.scss";
import { useTimer } from "../contexts/timer-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

const SummaryScreen = () => {
  const { convertedTotalTime, setActiveSession } = useTimer();

  const clickHandler = () => {
    setActiveSession(false);
  };

  return (
    <div className={classes.container}>
      <p className={classes.heading}>WORKOUT COMPLETE!</p>
      <p className={classes.totalTime}>
        <FontAwesomeIcon icon={faStopwatch} /> {convertedTotalTime}
      </p>
      <button onClick={clickHandler} className={classes.endSessionButton}>
        DONE
      </button>
    </div>
  );
};

export default SummaryScreen;
