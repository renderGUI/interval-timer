import classes from "./PlayPauseControls.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useTimer } from "../contexts/timer-context";

const PlayPauseControls = (props) => {
  const { isPaused, setIsPaused, setActiveSession } = useTimer();

  const pauseResumeHandler = () => {
    setIsPaused(!isPaused);
  };

  const quitHandler = () => {
    setActiveSession(false);
    setIsPaused(false);
  };

  return (
    <div className={classes.controls}>
      <button
        onClick={pauseResumeHandler}
        className={classes.pauseResumeButton}
        style={{ color: props.isWorking ? "#dd7777" : "#77a0dd" }}
      >
        <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />
      </button>
      {isPaused && (
        <button onClick={quitHandler} className={classes.quitButton}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      )}
    </div>
  );
};

export default PlayPauseControls;
