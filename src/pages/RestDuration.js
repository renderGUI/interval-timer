import Slider from "../components/Slider";
import classes from "./Settings.module.scss";
import { useTimer } from "../contexts/timer-context";

const RestDuration = () => {
  const { restTime, setRestTime, convertedRestTime } = useTimer();

  const changeHandler = (e) => {
    setRestTime(e.target.value);
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Rest</h2>
      <p className={classes.subheading}>(The length of rest between each set)</p>
      <div className={classes.subcontainer}>
        <p className={classes.time}>{convertedRestTime}</p>
        <Slider
          min={5}
          max={720}
          step={5}
          defaultValue={restTime}
          changeHandler={changeHandler}
        />
      </div>
    </div>
  );
};

export default RestDuration;
