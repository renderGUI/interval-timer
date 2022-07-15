import classes from "./PlayPauseControls.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faRotateLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useTimer } from "../contexts/timer-context";

const PlayPauseControls = () => {
  const { isPaused, setIsPaused } = useTimer();

  const pauseResumeHandler = () => {
    setIsPaused(!isPaused);
  };

  const quitHandler = () => {
    console.log("i quit");
  };

  const restartHandler = () => {
    console.log("i restart");
  };

  return (
    <div className={classes.controls}>
      {isPaused && (
        <button onClick={quitHandler} className={classes.quitButton}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      )}
      <button
        onClick={pauseResumeHandler}
        className={classes.pauseResumeButton}
      >
        <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />
      </button>
      {isPaused && (
        <button onClick={restartHandler} className={classes.restartButton}>
          <FontAwesomeIcon icon={faRotateLeft} />
        </button>
      )}
    </div>
  );
};

export default PlayPauseControls;
