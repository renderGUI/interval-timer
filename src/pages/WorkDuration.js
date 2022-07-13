import Slider from "../components/Slider";
import classes from "./WorkDuration.module.scss";
import { useTimer } from "../contexts/timer-context";

const WorkDuration = () => {
  const { workTime, setWorkTime } = useTimer();

  const changeHandler = (e) => {
    console.log(e.target.value);
    setWorkTime(e.target.value);
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Work</h2>
      <p className={classes.subheading}>(The length of each set)</p>
      <div className={classes.subcontainer}>
        <p className={classes.time}>{workTime}</p>
        <Slider
          min={5}
          max={720}
          step={5}
          defaultValue={30}
          changeHandler={changeHandler}
        />
      </div>
    </div>
  );
};

export default WorkDuration;
