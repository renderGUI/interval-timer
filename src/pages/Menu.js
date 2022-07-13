import classes from "./Menu.module.scss";
import { useNavigate } from "react-router-dom";
import { useTimer } from "../contexts/timer-context";

const Menu = () => {
  console.log("Menu component re-rendered.");
  const { workTime, restTime, sets } = useTimer();
  const navigate = useNavigate();

  const workDurationHandler = () => {
    navigate("/work-duration");
  };

  const restDurationHandler = () => {
    navigate("/rest-duration");
  };

  const setsAmountHandler = () => {
    navigate("/sets-amount");
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.totalTime}>17:00</h2>
      <div className={classes.subcontainer}>
        <button onClick={workDurationHandler} className={classes.optionsButton}>
          {workTime}
        </button>
        <button className={classes.goButton}>GO</button>
        <button onClick={restDurationHandler} className={classes.optionsButton}>
          {restTime}
        </button>
      </div>
      <div className={classes.subcontainer}>
        <button onClick={setsAmountHandler} className={classes.optionsButton}>
          x{sets}
        </button>
      </div>
    </div>
  );
};

export default Menu;
