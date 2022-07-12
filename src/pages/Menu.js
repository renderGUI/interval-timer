import classes from "./Menu.module.scss";
import { useNavigate } from "react-router-dom";

const Menu = () => {
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
          3:00
        </button>
        <button className={classes.goButton}>GO</button>
        <button onClick={restDurationHandler} className={classes.optionsButton}>
          0:30
        </button>
      </div>
      <div className={classes.subcontainer}>
        <button onClick={setsAmountHandler} className={classes.optionsButton}>
          x5
        </button>
      </div>
    </div>
  );
};

export default Menu;
