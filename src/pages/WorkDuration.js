import Slider from "../components/Slider";
import classes from "./Settings.module.scss";
import { useTimer } from "../contexts/timer-context";

const WorkDuration = () => {
  const { workTime, setWorkTime, convertedWorkTime } = useTimer();

  const changeHandler = (e) => {
    setWorkTime(e.target.value);
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Work</h2>
      <p className={classes.subheading}>(The length of each set)</p>
      <div className={classes.subcontainer}>
        <p className={classes.time}>{convertedWorkTime}</p>
        <Slider
          min={5}
          max={720}
          step={5}
          defaultValue={workTime}
          changeHandler={changeHandler}
        />
      </div>
    </div>
  );
};

export default WorkDuration;
