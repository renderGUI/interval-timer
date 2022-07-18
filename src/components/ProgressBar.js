import classes from "./ProgressBar.module.scss";
import { useTimer } from "../contexts/timer-context";

const ProgressBar = (props) => {
  const { sets } = useTimer();

  return (
    <div className={classes.container}>
      <div
        className={classes.bar}
        style={{ backgroundColor: props.isWorking ? "#ed8b8b" : "#8eb2e9" }}
      >
        <div
          className={classes.fill}
          style={{ width: `${props.currentPercentage}%` }}
        ></div>
      </div>
      <p className={classes.setText}>
        SET {props.currentSet} OF {sets}
      </p>
    </div>
  );
};

export default ProgressBar;
