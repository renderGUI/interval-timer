import classes from "./PlayPauseControls.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useTimer } from "../contexts/timer-context";

const PlayPauseControls = (props) => {
  const { setActiveSession } = useTimer();

  const pauseResumeHandler = () => {
    props.setIsPaused(!props.isPaused);
  };

  const quitHandler = () => {
    setActiveSession(false);
    props.setIsPaused(false);
  };

  return (
    <div className={classes.controls}>
      <button
        onClick={pauseResumeHandler}
        className={classes.pauseResumeButton}
        style={{ color: props.isWorking ? "#dd7777" : "#77a0dd" }}
      >
        <FontAwesomeIcon icon={props.isPaused ? faPlay : faPause} />
      </button>
      {props.isPaused && (
        <button onClick={quitHandler} className={classes.quitButton}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      )}
    </div>
  );
};

export default PlayPauseControls;
